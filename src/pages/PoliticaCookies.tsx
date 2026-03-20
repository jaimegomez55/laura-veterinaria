import React from 'react';
import Navbar from '../pages/home/components/Navbar';
import Footer from '../components/Footer';

const PoliticaCookies: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-6 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-[#1e3a5f] mb-8" style={{ fontFamily: '"Pacifico", serif' }}>
                        Política de Cookies
                    </h1>
                    
                    <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">¿Qué son las cookies?</h2>
                            <p>
                                Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Tipos de cookies que utiliza este sitio web</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.</li>
                                <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.</li>
                                <li><strong>Cookies de análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Desactivación de las cookies</h2>
                            <p>
                                Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PoliticaCookies;
