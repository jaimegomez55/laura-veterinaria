
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#bad7f2] to-[#f2bac9] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-16 h-16 flex items-center justify-center">
        <i className="ri-footprint-fill text-5xl text-[#1e3a5f] opacity-30"></i>
      </div>
      <div className="absolute top-32 right-64 w-12 h-12 flex items-center justify-center">
        <i className="ri-arrow-right-down-line text-4xl text-[#1e3a5f] opacity-20" style={{ transform: 'rotate(-15deg)' }}></i>
      </div>
      <div className="absolute bottom-32 left-32 w-16 h-16 flex items-center justify-center">
        <i className="ri-restaurant-fill text-5xl text-[#1e3a5f] opacity-20"></i>
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 flex items-center justify-center">
        <i className="ri-footprint-fill text-5xl text-[#1e3a5f] opacity-20"></i>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="mt-32 md:mt-0 text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Te ayudo a mejorar la salud de tu perro a través de una buena alimentación
            </h1>
            <p className="text-xl text-[#1e3a5f]/80 mb-8 leading-relaxed max-w-xl">
              Te explico paso a paso todo lo que necesitas saber para hacer el cambio, acompañándote en el proceso y resolviendo todas las dudas que puedas tener. Pincha aqui
            </p>
            <Link
              to="services"
              smooth={true}
              duration={800}
              className="inline-block bg-[#ff6b5a] hover:bg-[#ff5544] text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Cotillea los servicios
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://readdy.ai/api/search-image?query=happy-golden-retriever-dog-holding-fresh-orange-carrot-in-mouth-with-clean-simple-light-blue-background-healthy-pet-nutrition-concept-professional-photography-natural-lighting-joyful-expression&width=600&height=700&seq=hero-dog-carrot&orientation=portrait"
                alt="Happy dog with carrot"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
