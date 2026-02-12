
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../Fotos/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre Mí', to: 'about', type: 'scroll' },
    { name: 'Servicios', to: 'services', type: 'scroll' },
    { name: 'Calculadora Materia Seca', to: '/calculadora', type: 'route' },
    { name: 'Reseñas', to: 'reviews', type: 'scroll' },
    { name: 'Historias de Éxito', to: 'success-stories', type: 'scroll' },
  ];

  const handleLogoClick = () => {
    if (isHome) {
      // Allow react-scroll to handle it via the Link component
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {isHome ? (
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Logo Laura Quintero"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-2xl font-bold text-[#1e3a5f]" style={{ fontFamily: '"Pacifico", serif' }}>
                Laura Quintero
              </span>
            </Link>
          ) : (
            <div
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Logo Laura Quintero"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-2xl font-bold text-[#1e3a5f]" style={{ fontFamily: '"Pacifico", serif' }}>
                Laura Quintero
              </span>
            </div>
          )}

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === 'scroll' && isHome ? (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  activeClass="text-[#f2bac9]"
                  className="text-[#1e3a5f] hover:text-[#f2bac9] font-medium cursor-pointer transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  key={item.name}
                  onClick={() => {
                    if (item.type === 'route') {
                      navigate(item.to);
                    } else {
                      navigate('/');
                      setTimeout(() => {
                        const element = document.getElementById(item.to);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }
                  }}
                  className={`text-[#1e3a5f] hover:text-[#f2bac9] font-medium cursor-pointer transition-colors whitespace-nowrap ${location.pathname === item.to ? 'text-[#f2bac9]' : ''
                    }`}
                >
                  {item.name}
                </span>
              )
            ))}
          </div>

          {/* CTA Button */}
          {isHome ? (
            <Link
              to="cta"
              smooth={true}
              duration={800}
              className="hidden md:inline-block bg-[#f2bac9] hover:bg-[#bad7f2] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Contactar
            </Link>
          ) : (
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById('cta');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
              className="hidden md:inline-block bg-[#f2bac9] hover:bg-[#bad7f2] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Contactar
            </button>
          )}


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#1e3a5f]"
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                item.type === 'scroll' && isHome ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    activeClass="text-[#f2bac9]"
                    className="text-[#1e3a5f] hover:text-[#f2bac9] font-medium cursor-pointer transition-colors px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    key={item.name}
                    onClick={() => {
                      if (item.type === 'route') {
                        navigate(item.to);
                      } else {
                        navigate('/');
                        setTimeout(() => {
                          const element = document.getElementById(item.to);
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`text-[#1e3a5f] hover:text-[#f2bac9] font-medium cursor-pointer transition-colors px-2 ${location.pathname === item.to ? 'text-[#f2bac9]' : ''
                      }`}
                  >
                    {item.name}
                  </span>
                )
              ))}
              {isHome ? (
                <Link
                  to="cta"
                  smooth={true}
                  duration={800}
                  className="bg-[#f2bac9] hover:bg-[#bad7f2] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactar
                </Link>
              ) : (
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('cta');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#f2bac9] hover:bg-[#bad7f2] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer text-center"
                >
                  Contactar
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
