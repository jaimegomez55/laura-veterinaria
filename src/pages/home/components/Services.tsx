const services = [
  {
    icon: 'ri-graduation-cap-line',
    title: 'Dog Training',
    description: 'Comprehensive obedience training, behavioral modification, and advanced skills development using positive reinforcement techniques tailored to your dog\'s learning style.'
  },
  {
    icon: 'ri-scissors-2-line',
    title: 'Professional Grooming',
    description: 'Full-service grooming including bathing, haircuts, nail trimming, ear cleaning, and teeth brushing to keep your dog looking and feeling their absolute best.'
  },
  {
    icon: 'ri-footprint-line',
    title: 'Dog Walking',
    description: 'Daily exercise and socialization walks customized to your dog\'s energy level and needs, ensuring they stay healthy, happy, and mentally stimulated.'
  },
  {
    icon: 'ri-heart-line',
    title: 'Adoption Support',
    description: 'Expert guidance for new rescue dog owners, including home preparation, integration strategies, and ongoing behavioral support during the adjustment period.'
  },
  {
    icon: 'ri-home-heart-line',
    title: 'Puppy Socialization',
    description: 'Critical early-age socialization classes that help puppies develop confidence, learn proper play behavior, and build positive associations with new experiences.'
  },
  {
    icon: 'ri-stethoscope-line',
    title: 'Behavioral Consultation',
    description: 'In-depth assessment and customized treatment plans for anxiety, aggression, fear-based behaviors, and other challenging issues affecting your dog\'s quality of life.'
  }
];

export default function Services() {
  const services = [
    {
      icon: 'ri-graduation-cap-fill',
      title: 'Evaluación inicial personalizada',
      description: 'Analizo el caso de tu perro o gato para saber si es apto para una dieta natural y qué enfoque nutricional necesita según su situación actual.',
      color: 'from-[#bad7f2] to-[#bad7f2]/80',
    },
    {
      icon: 'ri-scissors-2-fill',
      title: 'Primera consulta nutricional',
      description: 'Sesión online de 45 minutos donde revisamos su historial, diagnóstico, síntomas, medicación y alimentación actual, y te explico paso a paso cómo será el proceso.',
      color: 'from-[#f2bac9] to-[#f2bac9]/80',
    },
    {
      icon: 'ri-walk-fill',
      title: 'Dieta adaptada a su patología',
      description: 'En un plazo aproximado de 10 días recibirás una dieta adaptada a tu mascota, que ajustare las veces que haga falta.',
      color: 'from-[#bad7f2] to-[#bad7f2]/80',
    },
    {
      icon: 'ri-heart-add-fill',
      title: 'Acompañamiento y seguimiento',
      description: 'Realizamos revisiones cada dos semanas y tienes consultas de seguimiento para resolver dudas y ajustar la dieta durante el proceso.',
      color: 'from-[#f2bac9] to-[#f2bac9]/80',
    },
    {
      icon: 'ri-team-fill',
      title: 'Socialización de Cachorros',
      description: 'Clases de socialización temprana para ayudar a tu cachorro a desarrollar confianza y habilidades sociales positivas.',
      color: 'from-[#bad7f2] to-[#bad7f2]/80',
    },
    {
      icon: 'ri-psychotherapy-fill',
      title: 'Consulta de Comportamiento',
      description: 'Soluciones profesionales para problemas de comportamiento como ansiedad, agresión y miedo.',
      color: 'from-[#f2bac9] to-[#f2bac9]/80',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Servicios de nutrición adaptados a tu perro
          </h2>
          <div className="w-20 h-1 bg-[#f2bac9] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Planes personalizados, seguimiento y acompañamiento real para mejorar su salud a través de la alimentación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
