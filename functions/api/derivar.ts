interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

interface Env {
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
  LAURA_EMAIL: string;
  SHEETS_WEBHOOK_URL: string;
  ALLOWED_ORIGIN: string;
  RATE_LIMIT_KV: KVNamespaceLike;
}

interface PagesFunctionContext {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}

interface DerivarPayload {
  clinica: string;
  veterinario: string;
  emailClinica: string;
  telefono?: string;
  tutor: string;
  tutorTelefono: string;
  tutorEmail?: string;
  paciente: string;
  especie: string;
  raza: string;
  peso: string;
  edad: string;
  sexo?: string;
  motivo: string;
  pruebas?: string;
  tratamientos?: string;
  adjuntos: string[];
  rgpd: boolean;
}

const REQUIRED_FIELDS: (keyof DerivarPayload)[] = [
  'clinica', 'veterinario', 'emailClinica', 'tutor', 'tutorTelefono',
  'paciente', 'especie', 'raza', 'peso', 'edad', 'motivo',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CLOUDINARY_PREFIX = 'https://res.cloudinary.com/dpe4yga4u/';
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validatePayload(body: unknown): { payload: DerivarPayload } | { error: string } {
  if (typeof body !== 'object' || body === null) return { error: 'Cuerpo de la petición inválido.' };
  const data = body as Record<string, unknown>;

  for (const field of REQUIRED_FIELDS) {
    const val = data[field];
    if (typeof val !== 'string' || val.trim() === '') return { error: `Falta el campo obligatorio "${field}".` };
  }
  if (typeof data.emailClinica === 'string' && !EMAIL_RE.test(data.emailClinica)) {
    return { error: 'El email de la clínica no es válido.' };
  }
  if (data.adjuntos !== undefined && !Array.isArray(data.adjuntos)) {
    return { error: 'El campo "adjuntos" debe ser una lista.' };
  }
  const adjuntos = Array.isArray(data.adjuntos)
    ? data.adjuntos.filter((u): u is string => typeof u === 'string' && u.startsWith(CLOUDINARY_PREFIX))
    : [];

  return {
    payload: {
      clinica: data.clinica as string,
      veterinario: data.veterinario as string,
      emailClinica: data.emailClinica as string,
      telefono: typeof data.telefono === 'string' ? data.telefono : undefined,
      tutor: data.tutor as string,
      tutorTelefono: data.tutorTelefono as string,
      tutorEmail: typeof data.tutorEmail === 'string' ? data.tutorEmail : undefined,
      paciente: data.paciente as string,
      especie: data.especie as string,
      raza: data.raza as string,
      peso: data.peso as string,
      edad: data.edad as string,
      sexo: typeof data.sexo === 'string' ? data.sexo : undefined,
      motivo: data.motivo as string,
      pruebas: typeof data.pruebas === 'string' ? data.pruebas : undefined,
      tratamientos: typeof data.tratamientos === 'string' ? data.tratamientos : undefined,
      adjuntos,
      rgpd: data.rgpd === true,
    },
  };
}

function row(label: string, value: string | undefined): string {
  if (!value) return '';
  return `<tr><td style="padding:4px 12px 4px 0;color:#3D7A5F;font-size:13px;font-weight:bold;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#1e3a5f;font-size:14px;">${escapeHtml(value)}</td></tr>`;
}

function section(title: string, rowsHtml: string): string {
  if (!rowsHtml.trim()) return '';
  return `
    <tr><td style="padding:20px 0 8px;border-bottom:2px solid #E8E4DD;font-size:15px;font-weight:bold;color:#1e3a5f;">${escapeHtml(title)}</td></tr>
    <tr><td style="padding-top:8px;"><table cellpadding="0" cellspacing="0">${rowsHtml}</table></td></tr>
  `;
}

function buildLauraEmailHtml(p: DerivarPayload, idCaso: string): string {
  const adjuntosHtml = p.adjuntos.length
    ? `<tr><td style="padding-top:8px;">${p.adjuntos
        .map((url, i) => `<div style="margin-bottom:6px;"><a href="${escapeHtml(url)}" style="color:#f2bac9;font-weight:bold;">📎 Documento ${i + 1}</a></div>`)
        .join('')}</td></tr>`
    : `<tr><td style="padding-top:8px;color:#999;font-size:13px;font-style:italic;">Sin adjuntos</td></tr>`;

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
    <table cellpadding="0" cellspacing="0" width="100%">
      <tr><td style="padding-bottom:16px;">
        <div style="font-size:12px;color:#999;">Caso #${escapeHtml(idCaso)}</div>
        <div style="font-size:20px;font-weight:bold;color:#1e3a5f;">Nueva derivación: ${escapeHtml(p.paciente)}</div>
      </td></tr>
      ${section('Centro remisor', row('Clínica', p.clinica) + row('Veterinario', p.veterinario) + row('Email', p.emailClinica) + row('Teléfono', p.telefono))}
      ${section('Tutor', row('Nombre', p.tutor) + row('Teléfono', p.tutorTelefono) + row('Email', p.tutorEmail))}
      ${section('Paciente', row('Nombre', p.paciente) + row('Especie', p.especie) + row('Raza', p.raza) + row('Peso', `${p.peso} kg`) + row('Edad', p.edad) + row('Sexo', p.sexo))}
      ${section('Información clínica', row('Motivo', p.motivo) + row('Pruebas realizadas', p.pruebas) + row('Tratamientos', p.tratamientos))}
      <tr><td style="padding:20px 0 8px;border-bottom:2px solid #E8E4DD;font-size:15px;font-weight:bold;color:#1e3a5f;">Documentación adjunta</td></tr>
      ${adjuntosHtml}
      <tr><td style="padding-top:20px;font-size:11px;color:#bbb;">${p.rgpd ? 'Consentimiento RGPD confirmado ✓' : 'Consentimiento RGPD no confirmado'}</td></tr>
    </table>
  </div>`;
}

function buildClinicaEmailHtml(p: DerivarPayload): string {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e3a5f;">
    <p>Hola,</p>
    <p>Hemos recibido correctamente la derivación de <strong>${escapeHtml(p.paciente)}</strong>. Laura revisará el caso y contactará con el tutor en menos de 48h hábiles.</p>
    <p>Gracias por confiar en el servicio de nutrición veterinaria.</p>
  </div>`;
}

async function sendEmail(env: Env, params: { from: string; to: string; replyTo: string; subject: string; html: string }): Promise<{ ok: boolean; id?: string; raw: unknown; status: number }> {
  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: params.from,
      to: params.to,
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
    }),
  });
  const raw = await res.json().catch(() => null);
  const id = raw && typeof raw === 'object' && 'id' in raw ? String((raw as { id: unknown }).id) : undefined;
  return { ok: res.ok && !!id, id, raw, status: res.status };
}

function isAllowedOrigin(origin: string | null, allowedOrigin: string): boolean {
  if (!origin) return false;
  const allowed = allowedOrigin.split(',').map((o) => o.trim()).filter(Boolean);
  return allowed.includes(origin);
}

async function checkRateLimit(env: Env, ip: string): Promise<boolean> {
  const key = `ratelimit:derivar:${ip}`;
  try {
    const current = await env.RATE_LIMIT_KV.get(key);
    const count = current ? parseInt(current, 10) : 0;
    if (count >= RATE_LIMIT_MAX_REQUESTS) return false;
    await env.RATE_LIMIT_KV.put(key, String(count + 1), { expirationTtl: RATE_LIMIT_WINDOW_SECONDS });
    return true;
  } catch (err) {
    console.error(`[derivar] ${new Date().toISOString()} RATE_LIMIT_KV no disponible, se deja pasar la petición sin aplicar el límite: ${err instanceof Error ? err.message : String(err)}`);
    return true;
  }
}

export const onRequestPost = async (context: PagesFunctionContext): Promise<Response> => {
  const { request, env, waitUntil } = context;
  const log = (msg: string) => console.log(`[derivar] ${new Date().toISOString()} ${msg}`);
  const logErr = (msg: string) => console.error(`[derivar] ${new Date().toISOString()} ${msg}`);

  const origin = request.headers.get('Origin');
  if (!isAllowedOrigin(origin, env.ALLOWED_ORIGIN)) {
    logErr(`origen rechazado: "${origin}"`);
    return json({ success: false, error: 'Origen no permitido.' }, 403);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (!(await checkRateLimit(env, ip))) {
    logErr(`rate limit excedido para IP ${ip}`);
    return json({ success: false, error: 'Demasiadas peticiones. Inténtalo de nuevo en unos minutos.' }, 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    logErr('body no es JSON válido');
    return json({ success: false, error: 'Cuerpo de la petición inválido.' }, 400);
  }

  const validated = validatePayload(body);
  if ('error' in validated) {
    logErr(`validación fallida: ${validated.error}`);
    return json({ success: false, error: validated.error }, 400);
  }
  const p = validated.payload;
  const idCaso = crypto.randomUUID();
  const dominioClinica = p.emailClinica.split('@')[1] ?? '';

  log(`[${idCaso}] nueva derivación de "${p.clinica}" (${dominioClinica}) — paciente "${p.paciente}", ${p.adjuntos.length} adjunto(s)`);

  let envioLauraOk = false;
  try {
    const result = await sendEmail(env, {
      from: env.RESEND_FROM_EMAIL,
      to: env.LAURA_EMAIL,
      replyTo: p.emailClinica,
      subject: `Nueva derivación: ${p.paciente} (${p.clinica})`,
      html: buildLauraEmailHtml(p, idCaso),
    });
    envioLauraOk = result.ok;
    if (envioLauraOk) log(`[${idCaso}] email a Laura OK (resend id=${result.id})`);
    else logErr(`[${idCaso}] email a Laura FALLÓ status=${result.status} body=${JSON.stringify(result.raw)}`);
  } catch (err) {
    logErr(`[${idCaso}] email a Laura lanzó excepción: ${err instanceof Error ? err.message : String(err)}`);
    envioLauraOk = false;
  }

  let avisoClinicaOk = false;
  if (envioLauraOk) {
    try {
      const result = await sendEmail(env, {
        from: env.RESEND_FROM_EMAIL,
        to: p.emailClinica,
        replyTo: env.LAURA_EMAIL,
        subject: `Hemos recibido la derivación de ${p.paciente}`,
        html: buildClinicaEmailHtml(p),
      });
      avisoClinicaOk = result.ok;
      if (avisoClinicaOk) log(`[${idCaso}] aviso a clínica OK (resend id=${result.id})`);
      else logErr(`[${idCaso}] aviso a clínica FALLÓ status=${result.status} body=${JSON.stringify(result.raw)}`);
    } catch (err) {
      logErr(`[${idCaso}] aviso a clínica lanzó excepción: ${err instanceof Error ? err.message : String(err)}`);
      avisoClinicaOk = false;
    }
  }

  waitUntil(
    (async () => {
      try {
        const sheetsRes = await fetch(env.SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fecha_hora: new Date().toISOString(),
            clinica: p.clinica,
            dominioClinica,
            emailClinica: p.emailClinica,
            paciente: p.paciente,
            especie: p.especie,
            motivo: p.motivo,
            numAdjuntos: p.adjuntos.length,
            envioLauraOk,
            avisoClinicaOk,
            idCaso,
          }),
        });
        if (sheetsRes.ok) log(`[${idCaso}] registro en Sheets OK`);
        else logErr(`[${idCaso}] registro en Sheets FALLÓ status=${sheetsRes.status}`);
      } catch (err) {
        logErr(`[${idCaso}] registro en Sheets lanzó excepción: ${err instanceof Error ? err.message : String(err)}`);
      }
    })(),
  );

  if (envioLauraOk) return json({ success: true, idCaso }, 200);
  return json({ success: false, error: 'No se pudo enviar el email a Laura. Inténtalo de nuevo o contacta por WhatsApp.' }, 500);
};
