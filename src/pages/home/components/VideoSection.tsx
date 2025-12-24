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

          {/* CTA */}
          <div className="flex justify-center mt-12 mb-8">
            <a 
              href="https://calendly.com/laura-quintero-vet/30min"
              className="inline-block bg-[#ff6b5a] hover:bg-[#ff5544] text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
