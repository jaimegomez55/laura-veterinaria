import React, { useEffect } from 'react';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../components/Footer';

const AvisoLegal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: '"Pacifico", serif' }}>
            Aviso Legal
          </h1>
          <p className="text-gray-400 text-sm mb-8">Actualizado a 30 de marzo de 2026</p>

          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <p>En cumplimiento con lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se facilita a los usuarios la siguiente información de carácter general.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Datos de la titular del sitio web</h2>
              <p className="mb-3">En conformidad con el artículo 10 de la mencionada ley, se informa que el sitio web <a href="https://www.lauraquinteroveterinaria.com" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors">lauraquinteroveterinaria.com</a> es titularidad de:</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm border border-gray-100">
                <p><span className="font-semibold">Titular:</span> Laura Quintero Álvarez</p>
                <p><span className="font-semibold">NIF:</span> 34283356Q</p>
                <p><span className="font-semibold">Teléfono:</span> 634 359 766</p>
                <p><span className="font-semibold">Correo electrónico:</span> laura.quintero.vet@gmail.com</p>
                <p><span className="font-semibold">Actividad principal:</span> Servicios dietéticos de veterinaria (este servicio no incluye el diagnóstico).</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Uso del sitio web</h2>
              <p>El acceso y navegación por el portal implica la aceptación expresa de las condiciones establecidas en este aviso legal. Los usuarios se comprometen a utilizar los servicios de manera lícita, respetuosa y conforme a los principios de buena fe y normativa vigente.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Derechos de propiedad intelectual</h2>
              <p>Todos los contenidos que conforman este sitio web —incluyendo, sin limitarse a, textos, imágenes, audios, códigos y diseños— son propiedad de Laura Quintero Veterinaria o cuentan con las licencias pertinentes para su uso.</p>
              <p className="mt-3">Queda estrictamente prohibida su reproducción, transformación, distribución, comunicación pública o cualquier otra forma de explotación no autorizada con fines comerciales.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Conducta del usuario</h2>
              <p className="mb-3">Queda expresamente vetado el uso del portal para finalidades ilícitas o contrarias a la moral, a los derechos de terceros o a las leyes sobre propiedad intelectual e industrial. No se permitirá, entre otras conductas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Difusión de contenidos ofensivos, racistas, violentos, pornográficos o que inciten al odio.</li>
                <li>Propagación de virus informáticos o cualquier software malicioso.</li>
                <li>Publicidad no autorizada o engañosa.</li>
                <li>Publicación de información falsa o tendenciosa.</li>
                <li>Suplantación de identidades o datos personales ajenos.</li>
                <li>Violaciones a la normativa sobre privacidad y protección de datos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Enlaces a contenidos externos</h2>
              <p>El sitio puede contener hipervínculos a páginas de terceros. Laura Quintero Veterinaria no se responsabiliza por el contenido, exactitud o actualización de dichos sitios, sobre los cuales no ejerce ningún tipo de control.</p>
              <p className="mt-3">Si se detecta que alguno de estos enlaces conduce a contenido ilegal o inapropiado, será eliminado de forma inmediata y se informará a las autoridades competentes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Disponibilidad del servicio</h2>
              <p>El funcionamiento del sitio web está previsto para mantenerse operativo los 365 días del año, las 24 horas. No obstante, no se garantiza una disponibilidad absoluta e ininterrumpida del servicio, ya que pueden surgir interrupciones por causas técnicas, actualizaciones, mantenimiento o eventos ajenos a la voluntad de la titular.</p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvisoLegal;