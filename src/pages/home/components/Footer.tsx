
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-footprint-fill text-3xl text-[#f2bac9]"></i>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                Laura Quintero
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
               Acompaño a familias a mejorar la salud y calidad de vida de sus mascotas a través de una alimentación adecuada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  className="text-white/80 hover:text-[#f2bac9] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  className="text-white/80 hover:text-[#f2bac9] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={800}
                  className="text-white/80 hover:text-[#f2bac9] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  smooth={true}
                  duration={800}
                  className="text-white/80 hover:text-[#f2bac9] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Reseñas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-fill text-lg text-[#bad7f2]"></i>
                </div>
                <span className="text-white/80">+34 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-fill text-lg text-[#f2bac9]"></i>
                </div>
                <span className="text-white/80">info@dogcare.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-fill text-lg text-[#bad7f2]"></i>
                </div>
                <span className="text-white/80">Madrid, España</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#f2bac9] rounded-full transition-all duration-300"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/laura_quintero_veterinaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#f2bac9] rounded-full transition-all duration-300"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Laura Quintero. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
