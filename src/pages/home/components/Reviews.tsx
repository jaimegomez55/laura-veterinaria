const reviews = [
  {
    name: 'Jennifer Thompson',
    location: 'Seattle, WA',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Happy%20professional%20woman%20in%20her%2040s%20with%20warm%20smile%20holding%20a%20golden%20retriever%20dog%20outdoors%20in%20a%20park%20setting%2C%20natural%20daylight%2C%20candid%20photography%20style%2C%20joyful%20expression%2C%20simple%20natural%20background&width=120&height=120&seq=review-person-001&orientation=squarish',
    text: 'Laura completely transformed our rescue dog, Luna. She came to us with severe anxiety and fear-based aggression. After just 8 weeks of training, Luna is now a confident, happy dog who loves meeting new people and other dogs. Sarah\'s patience and expertise are truly remarkable. I can\'t recommend her enough!'
  },
  {
    name: 'Michael Rodriguez',
    location: 'Portland, OR',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Smiling%20Hispanic%20man%20in%20his%2030s%20with%20a%20German%20Shepherd%20dog%20in%20a%20modern%20home%20interior%2C%20warm%20natural%20lighting%2C%20professional%20portrait%20style%2C%20genuine%20happiness%2C%20simple%20clean%20background&width=120&height=120&seq=review-person-002&orientation=squarish',
    text: 'Our German Shepherd, Max, was pulling on the leash so hard that walks were impossible. Sarah taught us proper leash training techniques and now Max walks perfectly beside us. She also helped with his jumping behavior. The difference is night and day. Worth every penny!'
  },
  {
    name: 'Emily Chen',
    location: 'Vancouver, BC',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Asian%20woman%20in%20her%20late%2020s%20smiling%20with%20a%20small%20beagle%20puppy%20in%20her%20arms%20in%20a%20bright%20living%20room%2C%20soft%20natural%20light%2C%20lifestyle%20photography%2C%20warm%20atmosphere%2C%20simple%20modern%20background&width=120&height=120&seq=review-person-003&orientation=squarish',
    text: 'As a first-time dog owner, I was overwhelmed with puppy training. Sarah\'s puppy socialization classes were a game-changer! My beagle, Charlie, learned so much and I gained the confidence I needed. Sarah is incredibly knowledgeable and makes learning fun for both dogs and owners.'
  },
  
  {
    name: 'Amanda Foster',
    location: 'Austin, TX',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Young%20woman%20in%20her%2020s%20with%20blonde%20hair%20smiling%20while%20sitting%20with%20a%20border%20collie%20dog%20in%20a%20cozy%20home%20environment%2C%20natural%20window%20light%2C%20lifestyle%20portrait%2C%20happy%20moment%2C%20simple%20warm%20background&width=120&height=120&seq=review-person-005&orientation=squarish',
    text: 'We adopted a senior dog with some behavioral issues and Sarah provided incredible adoption support. She helped us understand his needs and gave us practical strategies to help him adjust. Three months later, he\'s a completely different dog - relaxed, trusting, and loving. Thank you, Sarah!'
  },
  {
    name: 'Robert Kim',
    location: 'Denver, CO',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Asian%20man%20in%20his%2040s%20smiling%20with%20a%20husky%20dog%20in%20a%20modern%20urban%20park%20setting%2C%20bright%20daylight%2C%20candid%20photography%20style%2C%20joyful%20expression%2C%20simple%20outdoor%20background&width=120&height=120&seq=review-person-006&orientation=squarish',
    text: 'Sarah\'s dog walking service has been a lifesaver for our high-energy husky. She comes back tired and happy every time. Sarah sends updates and photos, and I can tell she genuinely cares about every dog she works with. Highly professional and reliable!'
  }
];

export default function Reviews() {
  const reviews = [
    {
      name: 'María González',
      image: 'https://readdy.ai/api/search-image?query=professional-headshot-smiling-hispanic-woman-30s-friendly-warm-natural-lighting-outdoor-portrait&width=150&height=150&seq=review-maria&orientation=squarish',
      rating: 5,
      text:'Estamos muy contentos con la ayuda de Laura, es una gran profesional que se preocupa de verdad por los peludos y se nota desde el primer momento por su atención, implicación y cariño. Desde que nos adapta la dieta casera para Khali, notamos una gran mejora ya desde el primer día en sus síntomas digestivos, y también muy pronto en su bienestar general: pelo, peso, ánimo...Además, nos sentimos muy acompañados y respaldados porque siempre está disponible y dispuesta para cualquier duda o situación que pueda surgir, y eso es una gran tranquilidad y se valora muchísimo.Tanto Khali como sus humanos estamos muy agradecidos con ella',
      dog: 'Max, Labrador de 2 años',
    },
    {
      name: 'Carlos Rodríguez',
      image: 'https://readdy.ai/api/search-image?query=professional-headshot-smiling-latino-man-40s-confident-friendly-natural-outdoor-portrait&width=150&height=150&seq=review-carlos&orientation=squarish',
      rating: 5,
      text: 'El servicio de peluquería es excepcional. Mi golden retriever siempre sale luciendo hermoso y relajado. El equipo es profesional, cariñoso y realmente se preocupa por el bienestar de las mascotas.',
      dog: 'Luna, Golden Retriever de 4 años',
    },
    {
      name: 'Ana Martínez',
      image: 'https://readdy.ai/api/search-image?query=professional-headshot-smiling-woman-35s-warm-approachable-natural-lighting-outdoor-portrait&width=150&height=150&seq=review-ana&orientation=squarish',
      rating: 5,
      text: 'Adopté a mi perro rescatado hace 6 meses y Sarah me ayudó con todo el proceso. Su apoyo y orientación fueron invaluables. ¡Ahora tengo un compañero feliz y bien adaptado!',
      dog: 'Rocky, Mestizo de 3 años',
    },

  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-[#f2bac9] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No confíes solo en nuestra palabra. Escucha lo que dicen los dueños de perros felices sobre nuestros servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-[#bad7f2]"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">{review.name}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-[#f2bac9]"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <p className="text-sm text-[#bad7f2] font-semibold">
                — {review.dog}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
