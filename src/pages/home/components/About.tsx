import lauraPhoto from '../../../assets/images/laura.jpeg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={lauraPhoto}
                alt="Laura Quintero - Professional Dog Trainer"
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
              Hola, soy <strong className="text-[#1e3a5f]">Laura Quintero</strong>, veterinaria especializada en Nutrición Clínica para perros y gatos. A lo largo de mi trayectoria he comprobado como una alimentación adecuada puede transformar la calidad de vida de los animales, tanto en pacientes sanos como en aquellos que conviven con distintas patologías.

            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mi objetivo  <strong className="text-[#f2bac9]">es acercar la nutrición veterinaria de calidad a más animales, tutores y profesionales </strong>, ofreciendo asesoramiento individual y adaptado a las necesidades reales de cada paciente. Quiero ayudarte a que tu compañero disfrute de una vida más saludable, cómoda y equilibrada.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
}
