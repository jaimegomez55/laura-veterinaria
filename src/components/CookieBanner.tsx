import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e3a5f] text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="text-sm text-white/90 leading-relaxed max-w-3xl">
            Utilizamos cookies propias y de terceros para mostrarle publicidad relacionada con sus preferencias en base a un perfil elaborado a partir de sus hábitos de navegación (por ejemplo, páginas visitadas). Para más información consulte la{' '}
            <RouterLink to="/politica-de-cookies" className="text-[#f2bac9] underline hover:text-white transition-colors">
              política de cookies
            </RouterLink>
            .
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm border border-white/40 hover:border-white text-white/80 hover:text-white rounded-lg transition-all"
            >
              Rechazar
            </button>
            <RouterLink
              to="/politica-de-cookies"
              className="px-4 py-2 text-sm border border-white/40 hover:border-white text-white/80 hover:text-white rounded-lg transition-all"
            >
              Configurar
            </RouterLink>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-[#f2bac9] hover:bg-white text-[#1e3a5f] font-semibold rounded-lg transition-all"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}