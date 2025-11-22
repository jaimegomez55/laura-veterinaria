export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=professional-female-dog-trainer-with-multiple-happy-dogs-outdoor-park-setting-warm-natural-lighting-friendly-approachable-expert-caring-compassionate-professional-photography&width=600&height=700&seq=about-trainer&orientation=portrait"
                alt="Sarah Mitchell - Professional Dog Trainer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#bad7f2] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f2bac9] rounded-full -z-10"></div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Sobre Mí
            </h2>
            <div className="w-20 h-1 bg-[#f2bac9] mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hola, soy <strong className="text-[#1e3a5f]">Sarah Mitchell</strong>, entrenadora certificada de perros con más de 15 años de experiencia ayudando a familias a construir relaciones más fuertes y felices con sus compañeros caninos.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mi pasión por los perros comenzó en mi infancia, y desde entonces he dedicado mi vida a comprender su comportamiento, necesidades y la mejor manera de comunicarme con ellos. Me especializo en métodos de entrenamiento positivos que respetan la naturaleza única de cada perro.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mi misión es simple: <strong className="text-[#f2bac9]">ayudar a cada perro a alcanzar su máximo potencial</strong> mientras fortalezco el vínculo entre mascotas y sus dueños. Creo que cada perro merece amor, paciencia y la guía adecuada para prosperar.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#bad7f2] to-[#bad7f2]/70 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <i className="ri-award-fill text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                <p className="text-white/90">Años de Experiencia</p>
              </div>
              <div className="bg-gradient-to-br from-[#f2bac9] to-[#f2bac9]/70 p-6 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <i className="ri-heart-fill text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">500+</h3>
                <p className="text-white/90">Perros Entrenados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
