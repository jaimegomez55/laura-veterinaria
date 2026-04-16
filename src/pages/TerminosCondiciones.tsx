import React, { useEffect } from 'react';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../components/Footer';

const TerminosCondiciones: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: '"Pacifico", serif' }}>
            Términos y Condiciones
          </h1>
          <p className="text-gray-400 text-sm mb-8">Actualizado a 30 de marzo de 2026</p>

          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <p>El presente documento establece las condiciones generales aplicables a las suscripciones contratadas a través del sitio web <a href="https://www.lauraquinteroveterinaria.com" className="text-[#1e3a5f] underline hover:text-[#f2bac9] transition-colors">lauraquinteroveterinaria.com</a>. Al aceptar expresamente estas condiciones, el usuario queda vinculado a ellas. Para cualquier consulta puede contactar en <strong>laura.quintero.vet@gmail.com</strong>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Datos de titularidad</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm border border-gray-100">
                <p><span className="font-semibold">Titular:</span> QUINTERO ÁLVAREZ, LAURA</p>
                <p><span className="font-semibold">NIF:</span> 34283356Q</p>
                <p><span className="font-semibold">Correo electrónico:</span> laura.quintero.vet@gmail.com</p>
                <p><span className="font-semibold">Teléfono:</span> 634 359 766</p>
                <p><span className="font-semibold">Actividad principal:</span> Servicios dietéticos de veterinaria (este servicio no incluye el diagnóstico).</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Proceso de contratación del servicio</h2>
              <p className="mb-3">Los servicios veterinarios online se contratan a distancia. El proceso se desarrolla en las siguientes fases:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li><span className="font-semibold">Solicitud del servicio:</span> el usuario cumplimenta el formulario habilitado al efecto, proporcionando los datos requeridos.</li>
                <li><span className="font-semibold">Aceptación de condiciones:</span> con carácter previo al envío, el usuario deberá aceptar expresamente las presentes condiciones.</li>
                <li><span className="font-semibold">Evaluación de la solicitud:</span> recibida la solicitud, se analizará la información para determinar la viabilidad del servicio en modalidad online.</li>
                <li><span className="font-semibold">Información previa y presupuesto:</span> antes de la prestación, se informará al usuario de las condiciones esenciales y el precio aplicable, que deberá ser aceptado expresamente.</li>
                <li><span className="font-semibold">Confirmación de la contratación:</span> se perfecciona cuando el usuario acepta las condiciones comunicadas, incluido el precio.</li>
                <li><span className="font-semibold">Pago del servicio:</span> se realizará por los medios facilitados por el prestador, con carácter previo o simultáneo a la prestación.</li>
                <li><span className="font-semibold">Prestación del servicio:</span> una vez confirmada la contratación y verificado el pago, el servicio se prestará en la forma y plazo acordados.</li>
              </ol>
              <p className="mt-4 text-sm text-gray-500">El prestador se reserva el derecho de rechazar solicitudes cuando el servicio no resulte adecuado para su prestación en modalidad online o cuando concurran causas justificadas.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Métodos de pago y precio</h2>
              <p>El pago se realizará por los medios que el prestador indique una vez confirmada la solicitud. El sitio web no permite la realización de pagos directos — se limita a gestionar la solicitud y el contacto.</p>
              <p className="mt-3">El precio de los servicios variará en función del tipo de consulta, la complejidad del caso y la información facilitada. En todo caso, el usuario será informado del precio antes del inicio del servicio, que deberá ser aceptado expresamente.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Factura</h2>
              <p>Se proporcionará al consumidor una factura electrónica por cada servicio contratado, enviada al correo electrónico indicado. El consumidor tiene derecho a solicitar la factura en formato papel sin coste adicional, contactando en <strong>laura.quintero.vet@gmail.com</strong>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Política de desistimiento</h2>
              <p>El usuario dispone de un plazo de <strong>14 días naturales</strong> desde la formalización del servicio para ejercer su derecho de desistimiento, sin necesidad de indicar motivo y sin coste adicional.</p>

              <p className="font-semibold mt-4 mb-2">Excepciones al derecho de desistimiento</p>
              <p>El derecho de desistimiento no será aplicable cuando:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>La prestación del servicio haya comenzado con el consentimiento expreso del usuario, siendo éste consciente de que perderá su derecho de desistimiento una vez iniciado.</li>
                <li>Se trate de servicios digitales prestados íntegramente de forma inmediata o cuyo acceso sea habilitado en el momento de la contratación.</li>
              </ul>

              <p className="font-semibold mt-4 mb-2">Cómo ejercer el derecho de desistimiento</p>
              <p>Para ejercerlo, notifica tu decisión de forma clara a: <strong>laura.quintero.vet@gmail.com</strong></p>

              <p className="font-semibold mt-4 mb-2">Consecuencias del desistimiento</p>
              <p>En caso de desistimiento válido, se reembolsarán todos los pagos recibidos en un plazo máximo de 14 días naturales, utilizando el mismo medio de pago empleado.</p>

              <div className="bg-gray-50 rounded-lg p-4 mt-4 border border-gray-100 text-sm">
                <p className="font-semibold mb-2">Formulario de desistimiento</p>
                <p>A la atención de QUINTERO ÁLVAREZ, LAURA — laura.quintero.vet@gmail.com</p>
                <p className="mt-2">Por la presente comunico que desisto del contrato de prestación del siguiente servicio:</p>
                <ul className="mt-2 space-y-1 text-gray-500">
                  <li>Fecha del contrato: _______________</li>
                  <li>Nombre del consumidor: _______________</li>
                  <li>Dirección: _______________</li>
                  <li>Email: _______________</li>
                  <li>Fecha: _______________</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Limitación de responsabilidad</h2>
              <p>Laura Quintero Veterinaria no será responsable de ningún daño directo, indirecto, incidental o consecuente resultante del uso o la imposibilidad de usar la plataforma, del acceso no autorizado a datos, o de cualquier otro asunto relacionado con el servicio.</p>
              <p className="mt-3">En ningún caso la responsabilidad total excederá la cantidad abonada por el usuario por acceder al servicio.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Resolución de conflictos y ley aplicable</h2>
              <p>Ante cualquier controversia, Laura Quintero Veterinaria buscará una solución amistosa mediante negociación directa. Si no se alcanza acuerdo, el consumidor podrá acudir a los mecanismos de resolución alternativa de litigios de consumo competentes.</p>
              <p className="mt-3">Las presentes condiciones se rigen por las leyes de España. Los tribunales competentes serán los del lugar de residencia del usuario, conforme a la normativa española de consumidores.</p>
              <p className="mt-3">Contacto para reclamaciones: <strong>laura.quintero.vet@gmail.com</strong></p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TerminosCondiciones;