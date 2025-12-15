const stories = [
  {
    title: 'From Fearful to Fearless',
    dogName: 'Bella',
    breed: 'Rescue Mix',
    duration: '12 weeks',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20happy%20rescue%20mixed%20breed%20dog%20with%20brown%20and%20white%20fur%20sitting%20confidently%20in%20a%20bright%20modern%20training%20facility%2C%20professional%20photography%2C%20warm%20natural%20lighting%2C%20dog%20looking%20at%20camera%20with%20confident%20expression%2C%20simple%20clean%20background&width=600&height=400&seq=success-dog-001&orientation=landscape',
    challenge: 'Bella was rescued from an abusive situation and was terrified of people, especially men. She would hide, shake, and refuse to eat when strangers were around.',
    solution: 'Through gradual desensitization, positive reinforcement, and patience, we helped Bella build confidence and trust over 12 weeks of specialized training.',
    result: 'Today, Bella is a therapy dog who visits hospitals and nursing homes, bringing joy to countless people. She\'s confident, loving, and has found her true purpose helping others heal.'
  },
  {
    title: 'Aggressive to Affectionate',
    dogName: 'Rocky',
    breed: 'German Shepherd',
    duration: '16 weeks',
    image: 'https://readdy.ai/api/search-image?query=Majestic%20German%20Shepherd%20dog%20sitting%20calmly%20and%20peacefully%20in%20a%20sunny%20park%20with%20green%20grass%2C%20professional%20dog%20photography%2C%20natural%20daylight%2C%20gentle%20expression%2C%20dog%20looking%20relaxed%20and%20friendly%2C%20simple%20natural%20outdoor%20background&width=600&height=400&seq=success-dog-002&orientation=landscape',
    challenge: 'Rocky showed severe aggression towards other dogs and strangers. His family was considering rehoming him as they couldn\'t safely walk him or have visitors.',
    solution: 'We implemented a comprehensive behavioral modification program focusing on impulse control, socialization in controlled environments, and teaching alternative behaviors.',
    result: 'Rocky now enjoys regular playdates at the dog park, welcomes guests into his home with a wagging tail, and has become a beloved member of his community. His transformation has been nothing short of miraculous.'
  },
  {
    title: 'Anxious Puppy to Confident Companion',
    dogName: 'Daisy',
    breed: 'Golden Retriever',
    duration: '8 weeks',
    image: 'https://readdy.ai/api/search-image?query=Adorable%20golden%20retriever%20puppy%20with%20shiny%20coat%20sitting%20happily%20in%20a%20bright%20modern%20home%20interior%2C%20professional%20pet%20photography%2C%20soft%20natural%20window%20light%2C%20puppy%20with%20joyful%20expression%20and%20bright%20eyes%2C%20simple%20warm%20background&width=600&height=400&seq=success-dog-003&orientation=landscape',
    challenge: 'Daisy suffered from severe separation anxiety, destroying furniture and barking non-stop when left alone. Her owners were at their wit\'s end and facing eviction notices.',
    solution: 'We created a structured routine with crate training, gradual alone-time exposure, mental enrichment activities, and teaching calm settling behaviors.',
    result: 'Daisy can now be left alone for up to 8 hours without any issues. She relaxes in her crate, plays with her puzzle toys, and greets her family calmly when they return. The transformation saved her from being rehomed.'
  },
  {
    title: 'Leash Reactive to Perfect Walker',
    dogName: 'Zeus',
    breed: 'Pitbull Mix',
    duration: '10 weeks',
    image: 'https://readdy.ai/api/search-image?query=Strong%20athletic%20pitbull%20mix%20dog%20with%20muscular%20build%20walking%20calmly%20on%20leash%20in%20urban%20park%20setting%2C%20professional%20dog%20photography%2C%20bright%20natural%20daylight%2C%20dog%20with%20relaxed%20body%20language%20and%20gentle%20expression%2C%20simple%20outdoor%20background&width=600&height=400&seq=success-dog-004&orientation=landscape',
    challenge: 'Zeus would lunge, bark, and pull aggressively whenever he saw other dogs or people on walks. His strength made walks dangerous and stressful for his elderly owner.',
    solution: 'We focused on loose-leash walking techniques, attention training, and teaching Zeus to focus on his handler rather than environmental triggers.',
    result: 'Zeus now walks beautifully on a loose leash, can pass other dogs calmly, and even participates in group training classes. His owner can now enjoy peaceful daily walks and has regained confidence in handling him.'
  },
  {
    title: 'Rescue to Service Dog',
    dogName: 'Cooper',
    breed: 'Labrador Retriever',
    duration: '24 weeks',
    image: 'https://readdy.ai/api/search-image?query=Intelligent%20yellow%20labrador%20retriever%20dog%20wearing%20service%20dog%20vest%20sitting%20attentively%20in%20a%20professional%20training%20facility%2C%20professional%20photography%2C%20bright%20even%20lighting%2C%20dog%20with%20focused%20alert%20expression%2C%20simple%20clean%20background&width=600&height=400&seq=success-dog-005&orientation=landscape',
    challenge: 'Cooper was a high-energy rescue with no training. His owner, who has PTSD, needed a service dog but couldn\'t afford a professionally trained one.',
    solution: 'We provided intensive service dog training including task work, public access skills, and specialized PTSD response behaviors, all at a reduced rate.',
    result: 'Cooper is now a fully certified service dog who helps his owner manage PTSD symptoms, alerts to anxiety attacks, and provides deep pressure therapy. He\'s changed his owner\'s life completely, allowing them to work and socialize again.'
  },
  {
    title: 'Senior Dog, New Tricks',
    dogName: 'Maggie',
    breed: 'Beagle',
    duration: '6 weeks',
    image: 'https://readdy.ai/api/search-image?query=Sweet%20senior%20beagle%20dog%20with%20gray%20muzzle%20sitting%20peacefully%20in%20a%20cozy%20home%20environment%2C%20professional%20pet%20photography%2C%20warm%20soft%20lighting%2C%20dog%20with%20wise%20gentle%20expression%20and%20happy%20demeanor%2C%20simple%20comfortable%20background&width=600&height=400&seq=success-dog-006&orientation=landscape',
    challenge: 'Maggie, a 10-year-old beagle, was adopted by a new family but had never been trained. She had accidents in the house, begged constantly, and didn\'t know any commands.',
    solution: 'Using gentle, age-appropriate training methods, we taught Maggie basic obedience, house training, and polite manners, proving that old dogs can indeed learn new tricks.',
    result: 'Maggie is now fully house-trained, knows multiple commands, and has become a well-mannered family member. Her adopters are thrilled and Maggie is living her best senior years with dignity and love.'
  }
];

export default function SuccessStories() {
  const stories = [
    {
      name: 'Lobo',
      breed: 'Pastor Aleman',
      image: 'https://readdy.ai/api/search-image?query=happy-well-trained-labrador-retriever-dog-sitting-obediently-outdoor-park-sunny-day-professional-photography&width=600&height=400&seq=success-max&orientation=landscape',
      challenge: 'Perro con Leishmaniosis con bajada de peso extrema, insuficiencia renal y no quería comer',
      solution: 'Dieta individualizada con proteína suficientemente elevada para subir de peso y se apetecible pero sin ser suficientemente elevada como para empeorar la insuficiencia renal',
      result: 'A los pocos días Lobo estaba comiendo con apetito y con más ánimo y en sólo dos meses había subido más de 7 kg de peso, estaba más enérgico, con mejor calidad de pelo y la Leishmaniosis más controlada',
      duration: '8 semanas',
    },
    {
      name: 'Khali',
      breed: 'Pastor Alemán',
      image: 'https://readdy.ai/api/search-image?query=calm-confident-german-shepherd-dog-relaxed-posture-outdoor-setting-professional-photography-natural-lighting&width=600&height=400&seq=success-luna&orientation=landscape',
      challenge: 'Pancreatitis crónicas y poco peso',
      solution: 'Dieta individualizada con baja grasa y suplementación adecuada',
      result: 'En un mes y medio ha subido de 5.7 kg a 6.3 kg y se han controlado los episodios de comer hierba y de vómitos además de mejorar la calidad del pelo',
      duration: '4 semanas',
    },
    {
      name: 'Rocky',
      breed: 'Mestizo Rescatado',
      image: 'https://readdy.ai/api/search-image?query=happy-rescued-mixed-breed-dog-confident-joyful-expression-outdoor-park-heartwarming-transformation-professional-photography&width=600&height=400&seq=success-rocky&orientation=landscape',
      challenge: 'Miedo extremo a personas y otros perros debido a abuso previo',
      solution: 'Programa de rehabilitación personalizado con socialización gradual',
      result: 'Rocky ahora disfruta de paseos en el parque, juega con otros perros y confía en las personas. Una transformación completa.',
      duration: '16 semanas',
    },
    {
      name: 'Bella',
      breed: 'Beagle',
      image: 'https://readdy.ai/api/search-image?query=well-socialized-beagle-puppy-playing-with-other-dogs-happy-confident-outdoor-park-professional-photography&width=600&height=400&seq=success-bella&orientation=landscape',
      challenge: 'Cachorro sin socialización adecuada',
      solution: 'Clases de socialización de cachorros y entrenamiento temprano',
      result: 'Bella se convirtió en una perrita sociable, amigable y bien educada que ama interactuar con otros perros y personas.',
      duration: '6 semanas',
    },
    {
      name: 'Thor',
      breed: 'Rottweiler',
      image: 'https://readdy.ai/api/search-image?query=well-trained-rottweiler-dog-calm-obedient-professional-outdoor-setting-confident-gentle-expression-professional-photography&width=600&height=400&seq=success-thor&orientation=landscape',
      challenge: 'Comportamiento agresivo hacia extraños',
      solution: 'Entrenamiento especializado en control de agresión y socialización controlada',
      result: 'Thor ahora es un perro gentil y controlado que puede interactuar de manera segura con extraños bajo supervisión.',
      duration: '14 semanas',
    },
    {
      name: 'Coco',
      breed: 'Bulldog Francés',
      image: 'https://readdy.ai/api/search-image?query=happy-healthy-french-bulldog-dog-energetic-playful-outdoor-park-professional-photography-natural-lighting&width=600&height=400&seq=success-coco&orientation=landscape',
      challenge: 'Problemas de salud y falta de ejercicio',
      solution: 'Plan de ejercicio personalizado y rutina de paseos regulares',
      result: 'Coco perdió peso, mejoró su salud cardiovascular y ahora tiene más energía y vitalidad que nunca.',
      duration: '10 semanas',
    },
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Historias de Éxito
          </h2>
          <div className="w-20 h-1 bg-[#f2bac9] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada perro tiene una historia única. Aquí hay algunas transformaciones increíbles que hemos tenido el privilegio de ser parte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#f2bac9] text-white px-4 py-2 rounded-full font-semibold">
                  {story.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">
                  {story.name}
                </h3>
                <p className="text-[#bad7f2] font-semibold mb-4">{story.breed}</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-error-warning-fill text-lg text-red-500"></i>
                      </div>
                      <h4 className="font-bold text-gray-800">Desafío:</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">
                      {story.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-lightbulb-fill text-lg text-[#bad7f2]"></i>
                      </div>
                      <h4 className="font-bold text-gray-800">Solución:</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">
                      {story.solution}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-checkbox-circle-fill text-lg text-green-500"></i>
                      </div>
                      <h4 className="font-bold text-gray-800">Resultado:</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">
                      {story.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
