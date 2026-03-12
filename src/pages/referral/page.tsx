import { useState, useRef } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const FORMSPREE_URL = 'https://formspree.io/f/xeergyqw';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_FILES = 5;
const ALLOWED_EXT = ['.pdf', '.jpg', '.jpeg', '.png'];

export default function ReferralPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});
  const [dragActive, setDragActive] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: File[]) => {
    setUploadError(null);
    let newFiles = [...selectedFiles];
    
    for (const f of files) {
      if (newFiles.length >= MAX_FILES) {
        setUploadError(`Máximo ${MAX_FILES} archivos permitidos.`);
        break;
      }
      const ext = '.' + f.name.split('.').pop()?.toLowerCase();
      if (!ALLOWED_EXT.includes(ext)) {
        setUploadError(`"${f.name}" no es un formato permitido. Solo PDF, JPG o PNG.`);
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        setUploadError(`"${f.name}" supera el límite de 10 MB.`);
        continue;
      }
      if (newFiles.find(sf => sf.name === f.name && sf.size === f.size)) continue;
      newFiles.push(f);
    }
    setSelectedFiles(newFiles);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    if (!formRef.current) return false;
    const formData = new FormData(formRef.current);
    const requiredFields = ['clinica', 'veterinario', 'email', 'tutor', 'tutor_telefono', 'nombre_mascota', 'especie', 'raza', 'peso', 'edad', 'motivo', 'rgpd'];
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    requiredFields.forEach(field => {
      const val = formData.get(field);
      if (!val || (typeof val === 'string' && val.trim() === '')) {
        newErrors[field] = true;
        isValid = false;
      }
      if (field === 'email' && val && typeof val === 'string') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
          newErrors[field] = true;
          isValid = false;
        }
      }
    });

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = document.querySelector('.border-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(formRef.current!);
    
    // Add selected files manually if they are not in the FormData from the native input
    // In our case they are managed by state
    selectedFiles.forEach(file => {
      formData.append('archivos', file);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div className="min-h-screen bg-white font-['DM_Sans']">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#f0eff8] to-[#fce8ef] relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#f28baa]/10 blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full bg-[#c8c6e8]/20 blur-2xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-white text-[#F28BAA] text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-sm mb-6">
            Para veterinarios
          </span>
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-[#1e2d4a] mb-6 leading-tight">
            Deriva un caso de nutrición
          </h1>
          <p className="text-lg text-[#5a6474] max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Envíame los datos del paciente y te respondo en menos de 48h con una valoración nutricional personalizada.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['📋 Respuesta en 48h', '🔒 Datos protegidos', '📎 Adjunta analíticas', '🐾 Perros y gatos'].map(pill => (
              <span key={pill} className="bg-white border border-[#e8e4f0] text-[#1e2d4a] text-sm font-medium px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-[780px] mx-auto py-12 px-6 pb-24">
        {submitStatus === 'success' ? (
          <div className="bg-[#edfaf4] border-1.5 border-[#9fe0c3] rounded-2xl p-10 text-center animate-fade-in-up">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1e2d4a] mb-4">Caso recibido correctamente</h2>
            <p className="text-[#5a6474] leading-relaxed">
              He recibido los datos del paciente y te contactaré en menos de 48h.<br />
              Si tienes cualquier duda urgente, escríbeme directamente por WhatsApp.
            </p>
            <button 
              onClick={() => setSubmitStatus('idle')}
              className="mt-8 text-[#F28BAA] font-semibold hover:underline"
            >
              Enviar otro caso
            </button>
          </div>
        ) : (
          <>
            {submitStatus === 'error' && (
              <div className="bg-[#fef0f0] border-1.5 border-[#f5bcbc] rounded-2xl p-6 text-center mb-8 animate-fade-in-up">
                <div className="text-3xl mb-2">⚠️</div>
                <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1e2d4a] mb-2">Algo no ha ido bien</h2>
                <p className="text-[#5a6474] text-sm">
                  Ha habido un problema al enviar el formulario. Por favor, inténtalo de nuevo o contáctame directamente por WhatsApp.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Bloque 1: Centro remisor */}
              <div className="bg-white border-1.5 border-[#e8e4f0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#e8e4f0]">
                  <div className="w-10 h-10 bg-[#fce8ef] rounded-xl flex items-center justify-center text-xl">🏥</div>
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1e2d4a]">Centro remisor</h3>
                    <p className="text-xs text-[#5a6474]">Datos del veterinario que deriva el caso</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Nombre de la clínica</label>
                    <input 
                      type="text" 
                      name="clinica" 
                      placeholder="Clínica Veterinaria..." 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.clinica ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.clinica && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Veterinario remisor</label>
                    <input 
                      type="text" 
                      name="veterinario" 
                      placeholder="Nombre y apellidos" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.veterinario ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.veterinario && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Email de contacto</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="correo@clinica.com" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.email ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.email && <span className="text-[10px] text-red-500">Introduce un email válido</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Teléfono <span className="font-normal text-[#5a6474] ml-1">(opcional)</span></label>
                    <input 
                      type="tel" 
                      name="telefono" 
                      placeholder="600 000 000" 
                      className="w-full bg-[#f0eff8] border-1.5 border-[#e8e4f0] rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 2: Tutor */}
              <div className="bg-white border-1.5 border-[#e8e4f0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#e8e4f0]">
                  <div className="w-10 h-10 bg-[#fce8ef] rounded-xl flex items-center justify-center text-xl">👤</div>
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1e2d4a]">Datos del tutor</h3>
                    <p className="text-xs text-[#5a6474]">Propietario del paciente</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Nombre y apellidos</label>
                    <input 
                      type="text" 
                      name="tutor" 
                      placeholder="Nombre completo" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.tutor ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.tutor && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Teléfono de contacto</label>
                    <input 
                      type="tel" 
                      name="tutor_telefono" 
                      placeholder="600 000 000" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.tutor_telefono ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.tutor_telefono && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-[#1e2d4a]">Email del tutor <span className="font-normal text-[#5a6474] ml-1">(opcional)</span></label>
                    <input 
                      type="email" 
                      name="tutor_email" 
                      placeholder="tutor@email.com" 
                      className="w-full bg-[#f0eff8] border-1.5 border-[#e8e4f0] rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 3: Paciente */}
              <div className="bg-white border-1.5 border-[#e8e4f0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#e8e4f0]">
                  <div className="w-10 h-10 bg-[#fce8ef] rounded-xl flex items-center justify-center text-xl">🐾</div>
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1e2d4a]">Paciente</h3>
                    <p className="text-xs text-[#5a6474]">Datos de la mascota</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Nombre</label>
                    <input 
                      type="text" 
                      name="nombre_mascota" 
                      placeholder="Nombre de la mascota" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.nombre_mascota ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.nombre_mascota && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Especie</label>
                    <select 
                      name="especie" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none cursor-pointer transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.especie ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Perro">Perro</option>
                      <option value="Gato">Gato</option>
                    </select>
                    {formErrors.especie && <span className="text-[10px] text-red-500">Selecciona una especie</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Raza</label>
                    <input 
                      type="text" 
                      name="raza" 
                      placeholder="Raza" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.raza ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.raza && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Peso (kg)</label>
                    <input 
                      type="number" 
                      name="peso" 
                      placeholder="Ej: 8.5" 
                      step="0.1" 
                      min="0"
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.peso ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.peso && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Edad</label>
                    <input 
                      type="text" 
                      name="edad" 
                      placeholder="Ej: 3 años" 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.edad ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.edad && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Sexo <span className="font-normal text-[#5a6474] ml-1">(opcional)</span></label>
                    <select 
                      name="sexo" 
                      className="w-full bg-[#f0eff8] border-1.5 border-[#e8e4f0] rounded-xl px-4 py-3 outline-none cursor-pointer transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Macho entero">Macho entero</option>
                      <option value="Macho castrado">Macho castrado</option>
                      <option value="Hembra entera">Hembra entera</option>
                      <option value="Hembra esterilizada">Hembra esterilizada</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bloque 4: Información clínica */}
              <div className="bg-white border-1.5 border-[#e8e4f0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#e8e4f0]">
                  <div className="w-10 h-10 bg-[#fce8ef] rounded-xl flex items-center justify-center text-xl">📋</div>
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1e2d4a]">Información clínica</h3>
                    <p className="text-xs text-[#5a6474]">Motivo de derivación y contexto del caso</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Motivo de remisión</label>
                    <textarea 
                      name="motivo" 
                      rows={4}
                      placeholder="¿Cómo puede ayudar la nutrición en este caso? Describe el motivo principal de la derivación..." 
                      className={`w-full bg-[#f0eff8] border-1.5 rounded-xl px-4 py-3 outline-none resize-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10 ${formErrors.motivo ? 'border-red-500' : 'border-[#e8e4f0]'}`}
                    />
                    {formErrors.motivo && <span className="text-[10px] text-red-500">Campo obligatorio</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Pruebas realizadas <span className="font-normal text-[#5a6474] ml-1">(opcional)</span></label>
                    <textarea 
                      name="pruebas" 
                      rows={3}
                      placeholder="Analíticas, ecografías, radiografías u otras pruebas realizadas..." 
                      className="w-full bg-[#f0eff8] border-1.5 border-[#e8e4f0] rounded-xl px-4 py-3 outline-none resize-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#1e2d4a]">Tratamientos administrados <span className="font-normal text-[#5a6474] ml-1">(opcional)</span></label>
                    <textarea 
                      name="tratamientos" 
                      rows={3}
                      placeholder="Medicación actual, suplementos, dieta en curso..." 
                      className="w-full bg-[#f0eff8] border-1.5 border-[#e8e4f0] rounded-xl px-4 py-3 outline-none resize-none transition-all focus:bg-white focus:border-[#F28BAA] focus:ring-4 focus:ring-[#F28BAA]/10"
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 5: Adjuntos */}
              <div className="bg-white border-1.5 border-[#e8e4f0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#e8e4f0]">
                  <div className="w-10 h-10 bg-[#fce8ef] rounded-xl flex items-center justify-center text-xl">📎</div>
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1e2d4a]">Documentación adjunta</h3>
                    <p className="text-xs text-[#5a6474]">Analíticas, ecografías, informes — PDF o imágenes</p>
                  </div>
                </div>

                <div 
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all relative ${dragActive ? 'border-[#F28BAA] bg-[#fce8ef]' : 'border-[#c8c6e8] bg-[#f0eff8] hover:border-[#F28BAA] hover:bg-[#fce8ef]'}`}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    multiple 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden"
                    onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
                  />
                  <div className="text-3xl mb-4">📂</div>
                  <div className="text-sm font-bold text-[#1e2d4a]">Arrastra los archivos aquí o haz clic para seleccionar</div>
                  <div className="text-xs text-[#5a6474] mt-2">PDF, JPG, PNG · Máximo 10 MB por archivo · Hasta 5 archivos</div>
                </div>

                {uploadError && <div className="text-xs text-red-500 mt-2">{uploadError}</div>}
                
                {selectedFiles.length > 0 && (
                  <div className="mt-6 flex flex-col gap-2">
                    {selectedFiles.map((file, idx) => (
                      <div key={`${file.name}-${idx}`} className="flex items-center justify-between bg-white border border-[#e8e4f0] rounded-xl p-3 text-xs">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <span>{file.type === 'application/pdf' ? '📄' : '🖼️'}</span>
                          <span className="truncate">{file.name}</span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span className="text-[#5a6474] font-light">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                          <button 
                            type="button" 
                            onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                            className="text-[#5a6474] hover:text-red-500 transition-colors p-1"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <p className="text-[11px] text-[#5a6474] mt-4 leading-relaxed italic">
                  Si tienes más documentación, puedes compartirla por WeTransfer e incluir el enlace en el campo de pruebas realizadas.
                </p>
              </div>

              {/* RGPD */}
              <div className="bg-white border-1.5 border-[#e8e4f0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#e8e4f0]">
                  <div className="w-10 h-10 bg-[#fce8ef] rounded-xl flex items-center justify-center text-xl">🔒</div>
                  <div>
                    <h3 className="font-['Playfair_Display'] font-bold text-lg text-[#1e2d4a]">Protección de datos</h3>
                    <p className="text-xs text-[#5a6474]">Necesario antes de enviar</p>
                  </div>
                </div>
                
                <div className="bg-[#f0eff8] border-1.5 border-[#e8e4f0] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <input 
                      type="checkbox" 
                      name="rgpd" 
                      id="rgpd"
                      className={`w-5 h-5 rounded border-[#e8e4f0] text-[#F28BAA] focus:ring-[#F28BAA] mt-1 cursor-pointer transition-colors ${formErrors.rgpd ? 'ring-2 ring-red-500' : ''}`}
                    />
                    <label htmlFor="rgpd" className="text-sm text-[#5a6474] leading-relaxed cursor-pointer">
                      He informado al propietario de que sus datos y los de su mascota serán compartidos con Laura Quintero para recibir asesoramiento nutricional. Acepto la <a href="/politica-de-privacidad" target="_blank" className="text-[#F28BAA] font-semibold hover:underline">política de privacidad</a>.
                    </label>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#e8e4f0] text-[11px] text-[#5a6474]/70 leading-relaxed">
                    Los datos personales del tutor y del paciente se tratarán de acuerdo con el RGPD y solo se utilizarán para la valoración nutricional solicitada. No se compartirán con terceros.
                  </div>
                </div>
                {formErrors.rgpd && <span className="text-[10px] text-red-500 mt-2 block">Debes aceptar antes de enviar</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#f28baa] hover:bg-[#e0708e] disabled:bg-[#d0c8d8] text-white font-bold py-5 rounded-2xl shadow-lg shadow-[#f28baa]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 text-lg mt-8"
              >
                {isSubmitting && <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>}
                <span>{isSubmitting ? 'Enviando...' : 'Enviar caso 🐾'}</span>
              </button>

            </form>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
