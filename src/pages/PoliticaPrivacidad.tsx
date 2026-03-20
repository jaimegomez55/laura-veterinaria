import React from 'react';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../components/Footer';

const PoliticaPrivacidad: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-6 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-[#1e3a5f] mb-8" style={{ fontFamily: '"Pacifico", serif' }}>
                        Política de Privacidad
                    </h1>
                    
                    <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">1. Información al Usuario</h2>
                            <p>
                                Laura Quintero, como responsable del tratamiento, le informa que sus datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">2. Finalidad del Tratamiento</h2>
                            <p>
                                Tratamos sus datos para gestionar las consultas y servicios solicitados a través de la web, así como para el envío de comunicaciones comerciales en caso de que haya dado su consentimiento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">3. Conservación de Datos</h2>
                            <p>
                                Se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">4. Derechos del Usuario</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                                <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos.</li>
                                <li>Derecho a la limitación u oposición a su tratamiento.</li>
                                <li>Derecho a presentar una reclamación ante la autoridad de control (aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">5. Contacto</h2>
                            <p>
                                Para ejercer sus derechos, puede contactar con nosotros en: <strong>laura.quintero.vet@gmail.com</strong>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PoliticaPrivacidad;
