
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', to: 'home' },
    { name: 'Sobre Mí', to: 'about' },
    { name: 'Servicios', to: 'services' },
    { name: 'Reseñas', to: 'reviews' },
    { name: 'Historias de Éxito', to: 'success-stories' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-footprint-fill text-3xl text-[#f2bac9] group-hover:text-[#bad7f2] transition-colors"></i>
            </div>
            <span className="text-2xl font-bold text-[#1e3a5f]" style={{ fontFamily: '"Pacifico", serif' }}>
              DogCare
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="text-[#f2bac9]"
                className="text-[#1e3a5f] hover:text-[#f2bac9] font-medium cursor-pointer transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="cta"
            smooth={true}
            duration={800}
            className="hidden md:inline-block bg-[#f2bac9] hover:bg-[#bad7f2] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Contactar
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center text-[#1e3a5f]">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
