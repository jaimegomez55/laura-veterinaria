import React, { useEffect } from 'react';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../components/Footer';

const PoliticaCookies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: '"Pacifico", serif' }}>
            Política de Cookies
          </h1>
          <p className="text-gray-400 text-sm mb-8">Última actualización: marzo 2026</p>

          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Información sobre Cookies</h2>
              <p>Conforme con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información (LSSI), el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), es obligado obtener el consentimiento expreso del usuario antes de instalar cookies prescindibles en su dispositivo.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Qué son las cookies?</h2>
              <p>Las cookies y otras tecnologías similares son herramientas empleadas por los servidores web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio. Mediante su uso se permite al servidor recordar datos como preferencias de visualización, nombre y contraseña, o productos de interés.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Tipos de cookies</h2>
              <p className="font-semibold mb-2">Según la finalidad</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Técnicas y funcionales:</strong> permiten la navegación y el uso de los servicios del sitio web.</li>
                <li><strong>Analíticas:</strong> permiten el seguimiento y análisis del comportamiento de los usuarios para mejorar el servicio.</li>
                <li><strong>Publicitarias:</strong> gestionan los espacios publicitarios según el contenido o la frecuencia de los anuncios.</li>
                <li><strong>De publicidad comportamental:</strong> recogen información sobre preferencias del usuario (retargeting) para personalizar la publicidad.</li>
                <li><strong>Sociales:</strong> establecidas por plataformas de redes sociales para compartir contenido.</li>
                <li><strong>De seguridad:</strong> almacenan información cifrada para proteger los datos frente a ataques maliciosos.</li>
              </ul>
              <p className="font-semibold mt-6 mb-2">Según la propiedad</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies propias:</strong> enviadas desde el dominio gestionado por el editor.</li>
                <li><strong>Cookies de terceros:</strong> enviadas desde un dominio gestionado por otra entidad.</li>
              </ul>
              <p className="font-semibold mt-6 mb-2">Según el plazo de conservación</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>De sesión:</strong> se eliminan al cerrar el navegador.</li>
                <li><strong>Persistentes:</strong> permanecen almacenadas durante un período definido (de minutos a varios años).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Cookies utilizadas en este sitio web</h2>

              <p className="font-semibold mb-3">Cookies técnicas y funcionales</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1e3a5f] text-white">
                      <th className="text-left p-3 font-semibold">Propiedad</th>
                      <th className="text-left p-3 font-semibold">Cookie</th>
                      <th className="text-left p-3 font-semibold">Plazo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ['calendly.com', '_calendly_session', '21 días'],
                      ['calendly.com', '_cfuvid', '5 días'],
                      ['calendly.com', '_dd_s', 'Sesión'],
                      ['clarity.ms', 'CLID', '12 meses'],
                      ['hsforms.com', '_cfuvid', '5 días'],
                      ['instagram.com', 'csrftoken', '1 año'],
                      ['linkedin.com', '__cf_bm', 'Sesión'],
                      ['m.stripe.com', 'm', '1 año'],
                      ['wistia.com', '__hstc', '6 meses'],
                      ['wistia.com', '_w_session', '14 días'],
                      ['wistia.com', 'hubspotutk', '6 meses'],
                    ].map(([propiedad, cookie, plazo], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 text-gray-600">{propiedad}</td>
                        <td className="p-3 font-mono text-xs text-gray-700">{cookie}</td>
                        <td className="p-3 text-gray-600">{plazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-semibold mt-8 mb-3">Cookies publicitarias</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1e3a5f] text-white">
                      <th className="text-left p-3 font-semibold">Propiedad</th>
                      <th className="text-left p-3 font-semibold">Cookie</th>
                      <th className="text-left p-3 font-semibold">Finalidad</th>
                      <th className="text-left p-3 font-semibold">Plazo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="p-3 text-gray-600">Bing / Microsoft</td>
                      <td className="p-3 font-mono text-xs text-gray-700">MUID</td>
                      <td className="p-3 text-gray-600">Identificación de navegadores para publicidad y análisis</td>
                      <td className="p-3 text-gray-600">1 año</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 text-gray-600">google.com</td>
                      <td className="p-3 font-mono text-xs text-gray-700">__Secure-3PSIDC</td>
                      <td className="p-3 text-gray-600">Entrega de anuncios relevantes y segmentación publicitaria</td>
                      <td className="p-3 text-gray-600">1 año</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 text-gray-600">LinkedIn</td>
                      <td className="p-3 font-mono text-xs text-gray-700">lidc</td>
                      <td className="p-3 text-gray-600">Seguimiento del uso de servicios integrados de LinkedIn</td>
                      <td className="p-3 text-gray-600">1 día</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Cookies de terceros</h2>
              <p className="mb-3">Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en cualquier momento sus condiciones de servicio y finalidad de las cookies.</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Bing / Microsoft:</strong> <a href="https://account.microsoft.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors">account.microsoft.com/privacy</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors">linkedin.com/legal/privacy-policy</a></li>
                <li><strong>Google:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors">policies.google.com/privacy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Cómo gestionar las cookies desde el navegador</h2>
              <p className="mb-3">Puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Ten en cuenta que bloquear todas las cookies puede afectar al funcionamiento de algunos servicios.</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Chrome:</strong> <a href="http://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors break-all">support.google.com/chrome/answer/95647</a></li>
                <li><strong>Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors break-all">support.microsoft.com/es-es/microsoft-edge</a></li>
                <li><strong>Firefox:</strong> <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors break-all">mozilla.org/es-ES/privacy/websites</a></li>
                <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors break-all">support.apple.com/es-es/guide/safari</a></li>
                <li><strong>Opera:</strong> <a href="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors break-all">help.opera.com/en/latest/security-and-privacy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Tratamiento de datos personales</h2>
              <p>QUINTERO ALVAREZ, LAURA es la Responsable del tratamiento de los datos personales obtenidos a través de las cookies. Para más información consulta nuestra Política de Privacidad.</p>
              <p className="mt-3"><strong>Contacto:</strong> laura.quintero.vet@gmail.com</p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;