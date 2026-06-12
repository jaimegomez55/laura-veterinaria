import { useRef, useState } from 'react';

// ─── Config ──────────────────────────────────────────────────────────────────

const PROFILE_URL = 'https://maps.app.goo.gl/LZgHbw1DjtuZj5nF6';
const TOTAL_REVIEWS = 6;

// ─── Data ────────────────────────────────────────────────────────────────────

const reviewsData: ReviewData[] = [
  {
    name: 'Chus Montañes',
    initials: 'CM',
    avatarBg: '#E6F4EA',
    avatarColor: '#137333',
    date: 'Hace 3 semanas',
    rating: 5,
    text: 'Cuando nos dieron el diagnóstico de Lobo nos dieron una esperanza de vida de unas semanas. Gracias a Laura, con la dieta que nos marcó, seguimos disfrutando de nuestro perro. Ya hace un año desde aquello. Lobo parece otro. Está alegre, come bien, juega y corre con total normalidad. Su enfermedad nunca se curará, pero está teniendo una calidad de vida y un tiempo extra que no hubiéramos tenido de otra manera. No podemos estar más agradecidos al trabajo que ha hecho con nuestro perro.',
  },
  {
    name: 'Abeiro Hospital Veterinario',
    initials: 'AH',
    avatarBg: '#FEF7E0',
    avatarColor: '#b06000',
    date: 'Hace 27 minutos',
    rating: 5,
    text: 'Si quieres ofrecer la mejor nutrición para tus animales, sin duda, Laura es una gran profesional. Se vuelca con los casos y basa sus pautas en las últimas evidencias científicas, trabajando en conjunto con los veterinarios referidores. Además, organizamos una formación para nuestro equipo veterinario que fue todo un éxito. La recomiendo.',
  },
  {
    name: 'Marina Couceiro',
    initials: 'MC',
    avatarBg: '#F3E8FD',
    avatarColor: '#7b1fa2',
    date: 'Hace 15 horas',
    rating: 5,
    text: 'Encantadora y todo un acierto. Nuestra gata llevaba tiempo mal, con problemas graves renales, y en una sola reunión ya nos recomendó una dieta que cambió por completo el día a día. Pasamos por quirófano, e incluso con pocas esperanza, y pasados ya casi dos años, nuestra gata está sana y con mucha energía. Muchas gracias, Laura!',
  },
  {
    name: 'Judit',
    initials: 'J',
    avatarBg: '#E8F0FE',
    avatarColor: '#1a73e8',
    date: 'Hace un mes',
    rating: 5,
    text: 'Laura nos ayudó con la dieta de nuestra perrita después de que esta pasase una pancreatitis bastante fuerte, ya que a raíz de sufrir esta patología necesitaba una dieta adaptada que se ajustase a sus necesidades de salud actuales. Queríamos darle una dieta natural, y Laura nos ayudó a planificarla y a hacerla completa, además de acompañarnos con mucha atención y cariño en todo el proceso. Al poco tiempo de empezar con su nueva dieta notamos muy rápidamente la mejoría en la salud general de nuestra perra, en seguida empezó a encontrarse mejor y a estar más activa, mejoró muchísimo el aspecto de su pelaje, volviendo a recuperar el brillo y la densidad, y volvió a subir de peso y a estabilizarse. Laura es una profesional súper implicada, que se nota de verdad que se preocupa por la salud de los peludos y que siempre está disponible y dispuesta para ayudar. Súper agradecidas!!',
    detail: 'Pancreatitis canina',
  },
  {
    name: 'Alba Pousada Agis',
    initials: 'AP',
    avatarBg: '#FCE8E6',
    avatarColor: '#c5221f',
    date: 'Hace 5 días',
    rating: 5,
    text: 'Mi perro Valko es súper desconfiado y miedoso, pero desde el primer momento se mostró cercano y cariñoso con Laura. Siempre ha tenido problemas con la comida en el aspecto digestivo y siendo un perro tan activo me preocupaba que eso afectase a su salud general. Laura nos aconsejó cambiarle el pienso y nos recomendó optar por una alimentación más natural que seguro mejoraría la salud digestiva de Valko. Es atenta y amable y estoy súper agradecida por la ayuda que me brindó. Actualización: Tras seguir una dieta natural, el cambio es más que evidente. El pelo mucho más brillante y una actitud mucho más relajada al no tener digestiones tan pesadas, mil gracias una vez más Laura.',
  },
  {
    name: 'María IV',
    initials: 'MI',
    avatarBg: '#E8F0FE',
    avatarColor: '#1a73e8',
    date: 'Hace 25 minutos',
    rating: 5,
    text: 'Nutricionista veterinaria que aplica las últimas evidencias en sus pautas. No solo para elaboración de dietas naturales. También revisión de piensos, dietas húmedas o asesoramiento a otros veterinarios. Muy recomendable.',
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function GoogleG({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function GoogleWordmark({ className = 'text-base' }: { className?: string }) {
  return (
    <span className={`font-medium ${className}`} style={{ fontFamily: 'arial, sans-serif' }}>
      <span style={{ color: '#4285F4' }}>G</span>
      <span style={{ color: '#EA4335' }}>o</span>
      <span style={{ color: '#FBBC05' }}>o</span>
      <span style={{ color: '#4285F4' }}>g</span>
      <span style={{ color: '#34A853' }}>l</span>
      <span style={{ color: '#EA4335' }}>e</span>
    </span>
  );
}

function StarFill() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" fill="#F9AB00" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 lg:w-6 lg:h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

interface ReviewData {
  name: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  date: string;
  rating: number;
  text: string;
  detail?: string;
}

function ReviewCard({ review }: { review: ReviewData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
            style={{ backgroundColor: review.avatarBg, color: review.avatarColor }}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-semibold text-[#1e3a5f] text-sm leading-tight">{review.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
          </div>
        </div>
        <GoogleG className="w-5 h-5 flex-shrink-0 mt-0.5" />
      </div>

      <div className="flex gap-0.5 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <StarFill key={i} />
        ))}
      </div>

      <div className="flex-1">
        <p className={`text-gray-700 text-sm leading-relaxed ${!expanded ? 'line-clamp-4' : ''}`}>
          {review.text}
        </p>
        <button
          onClick={() => setExpanded(e => !e)}
          className="text-[#1a73e8] text-sm font-medium mt-1 hover:underline focus:outline-none"
        >
          {expanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>

      {review.detail && (
        <p className="text-xs text-[#bad7f2] font-semibold mt-4 pt-4 border-t border-gray-100">
          — {review.detail}
        </p>
      )}
    </div>
  );
}

// ─── Carousel ────────────────────────────────────────────────────────────────

const ARROW_BUTTON_CLASSES =
  'flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#bad7f2] flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white hover:border-[#1e3a5f] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#1e3a5f] disabled:cursor-not-allowed transition-colors duration-200';

function ReviewsCarousel({ reviews }: { reviews: ReviewData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (container && card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    let closest = 0;
    let minDistance = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - container.offsetLeft - container.scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <div>
      <div className="flex items-center gap-2 lg:gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Reseña anterior"
          className={ARROW_BUTTON_CLASSES}
        >
          <ChevronIcon direction="left" />
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1.3334rem)]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(reviews.length - 1, activeIndex + 1))}
          disabled={activeIndex === reviews.length - 1}
          aria-label="Reseña siguiente"
          className={ARROW_BUTTON_CLASSES}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir a la reseña ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === activeIndex ? 'bg-[#1e3a5f]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            La experiencia de quienes ya han confiado en este proceso
          </h2>
          <div className="w-20 h-1 bg-[#f2bac9] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencias reales de personas que confiaron en una consulta online para mejorar la salud de su perro.
          </p>
        </div>

        {/* Google aggregate badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 shadow-sm">
            <GoogleG className="w-6 h-6" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold text-gray-800 leading-none">5,0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarFill key={i} />)}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Basado en {TOTAL_REVIEWS} reseñas en <GoogleWordmark className="text-xs" />
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <ReviewsCarousel reviews={reviewsData} />

        {/* Google CTA button */}
        <div className="flex justify-center mt-10">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <GoogleG className="w-5 h-5" />
            Ver todas las reseñas en <GoogleWordmark />
          </a>
        </div>

        {/* Calendly CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            ¿Te ves reflejado en estas experiencias? Agenda una llamada gratuita y cuéntame tu caso.
          </p>
          <div className="flex justify-center">
            <a
              href="https://calendly.com/laura-quintero-vet/llamada-gratuita-informacion?month=2025-12"
              className="inline-block bg-[#ff6b5a] hover:bg-[#ff5544] text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Agenda una llamada gratuita
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
