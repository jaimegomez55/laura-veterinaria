export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#bad7f2] to-[#f2bac9] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="mt-32 md:mt-0 text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Te ayudo a mejorar la salud de tu perro a través de una buena alimentación
            </h1>
            <p className="text-xl text-[#1e3a5f]/80 mb-8 leading-relaxed max-w-xl">
              Te explico paso a paso todo lo que necesitas saber para hacer el cambio, acompañándote en el proceso y resolviendo todas las dudas que puedas tener.
            </p>
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
