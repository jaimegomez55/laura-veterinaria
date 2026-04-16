import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../components/Footer';

const PoliticaPrivacidad: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: '"Pacifico", serif' }}>
            Política de Privacidad
          </h1>
          <p className="text-gray-400 text-sm mb-8">Última actualización: marzo 2026</p>

          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-8">

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">Información sobre Protección de Datos</h2>
              <p>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), le informamos sobre el tratamiento de sus datos personales.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Quién es el responsable del tratamiento de sus datos?</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm border border-gray-100">
                <p><span className="font-semibold">Identidad:</span> QUINTERO ALVAREZ, LAURA</p>
                <p><span className="font-semibold">Dirección postal:</span> CL. Casimiro Gómez, 18 – 3 B Y, 36002 Pontevedra (Pontevedra), España</p>
                <p><span className="font-semibold">Teléfono:</span> 634 359 766</p>
                <p><span className="font-semibold">Correo electrónico:</span> laura.quintero.vet@gmail.com</p>
                <p><span className="font-semibold">Delegado de Protección de Datos:</span> No necesario</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Con qué finalidad tratamos sus datos personales?</h2>
              <p className="font-semibold mt-3 mb-1">Si eres cliente:</p>
              <p>Tratamos la información con la finalidad de posibilitar la adecuada prestación del servicio concertado, la facturación, el desarrollo de acciones comerciales y la oferta y/o contratación de productos y servicios.</p>
              <p className="font-semibold mt-3 mb-1">Si te has puesto en contacto con nosotros:</p>
              <p>Tratamos la información para gestionar la consulta, queja, sugerencia y/o reclamación.</p>
              <p className="font-semibold mt-3 mb-1">Si navegas por la web:</p>
              <p>Tratamos la información recopilada a través de las cookies. Puedes revisar nuestra Política de Cookies y modificar tus preferencias en cualquier momento.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Por cuánto tiempo conservaremos sus datos?</h2>
              <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial y no se solicite su supresión por parte del interesado, teniendo en cuenta los plazos previstos por la legislación respecto a la prescripción de responsabilidades.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
              <p>Nos basamos en el consentimiento del interesado y/o la ejecución del contrato.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿A qué destinatarios se comunicarán sus datos?</h2>
              <p>Se cederán datos a terceros siempre que exista una obligación legal. Podrán tratar y/o acceder a sus datos los siguientes encargados de tratamiento:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Asesoría, con la finalidad de prestar el servicio de gestión y asesoramiento fiscal y contable.</li>
                <li>Empresas de consultoría, certificación y/o asesoramiento jurídico.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
              <p>Cualquier persona tiene derecho a obtener confirmación sobre si en QUINTERO ALVAREZ, LAURA estamos tratando datos personales que les conciernan, o no.</p>
              <p className="mt-2">Tiene derecho a solicitar el acceso a los datos personales, su rectificación o supresión, la limitación de su tratamiento, oponerse al tratamiento y a la portabilidad de los datos.</p>
              <p className="mt-2">Asimismo, tiene derecho a retirar el consentimiento otorgado en cualquier momento, y a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
              <p className="mt-3"><span className="font-semibold">Puede ejercer sus derechos por escrito en:</span><br />
              CL. Casimiro Gómez, 18 – 3 B Y, 36002 Pontevedra (Pontevedra), España<br />
              Email: laura.quintero.vet@gmail.com</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">¿Cómo hemos obtenido sus datos?</h2>
              <p>Los datos se han obtenido directamente del interesado o su representante legal. Las categorías de datos tratados son:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>De identificación: nombre y apellidos, NIF, dirección postal, teléfonos, e-mail.</li>
                <li>Datos bancarios: para la domiciliación de pago.</li>
                <li>Los necesarios para el mantenimiento de la relación comercial y facturación.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;