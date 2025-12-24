import { useEffect } from 'react';

export default function VideoSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.net/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Descubre cómo transformamos la vida de tu perro
          </h2>
          <p className="text-xl text-[#1e3a5f]/70 max-w-3xl mx-auto">
            Mira cómo una alimentación adecuada puede mejorar la salud, energía y felicidad de tu mejor amigo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#bad7f2] to-[#f2bac9] p-1">
            <div className="relative bg-white rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/8wbdpudhc5?web_component=true&seo=true&videoFoam=false"
                title="VSL Video"
                allow="autoplay; fullscreen"
                allowTransparency={true}
                frameBorder="0"
                scrolling="no"
                className="wistia_embed absolute top-0 left-0 w-full h-full"
                name="wistia_embed"
                style={{ width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-[#bad7f2] rounded-full">
                <i className="ri-heart-pulse-fill text-3xl text-[#1e3a5f]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                Mejora la salud con ellos
              </h3>
              <p className="text-[#1e3a5f]/70">
                Alimentación natural que fortalece el sistema inmunológico
              </p>
            </div>

            

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-[#bad7f2] rounded-full">
                <i className="ri-emotion-happy-fill text-3xl text-[#1e3a5f]"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                Mayor felicidad
              </h3>
              <p className="text-[#1e3a5f]/70">
                Perros más felices con una dieta equilibrada y sabrosa como a ellos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
