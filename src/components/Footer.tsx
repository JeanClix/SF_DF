import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-smartfit-black text-smartfit-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-4xl font-bold">
            <span className="text-smartfit-white">smart</span>
            <span className="text-smartfit-yellow">fit</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-6">Síguenos</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/smartfitpe"
              className="w-12 h-12 bg-white text-smartfit-black rounded-full flex items-center justify-center hover:bg-smartfit-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/smartfitpe/"
              className="w-12 h-12 bg-white text-smartfit-black rounded-full flex items-center justify-center hover:bg-smartfit-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC9T5QGLXy2mgQePIJfjdi-Q"
              className="w-12 h-12 bg-white text-smartfit-black rounded-full flex items-center justify-center hover:bg-smartfit-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@smartfitpe"
              className="w-12 h-12 bg-white text-smartfit-black rounded-full flex items-center justify-center hover:bg-smartfit-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-5 h-5 bg-smartfit-black rounded-sm"></div>
            </a>
            <a
              href="https://www.linkedin.com/company/smart-fit-perú/"
              className="w-12 h-12 bg-white text-smartfit-black rounded-full flex items-center justify-center hover:bg-smartfit-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Smart Fit Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Smart Fit</h4>
            <ul className="space-y-3">
              <li>
                <a href="/acerca" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Habla con nosotros
                </a>
              </li>
              <li>
                <a href="/faq" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/politica-privacidad" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Política de datos personales de SmartFit Perú
                </a>
              </li>
              <li>
                <a href="/derechos-arco" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Formulario Derechos ARCO
                </a>
              </li>
              <li>
                <a href="/reclamaciones" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Libro de Reclamaciones
                </a>
              </li>
              <li>
                <a href="/sustentabilidad" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Sustentabilidad
                </a>
              </li>
            </ul>
          </div>

          {/* Plans Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Planes</h4>
            <ul className="space-y-3">
              <li>
                <a href="/planes" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Conoce nuestros planes
                </a>
              </li>
              <li>
                <a href="/documentos" className="text-smartfit-white hover:text-smartfit-yellow transition-colors duration-200">
                  Documentos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Libro de Reclamaciones */}
        <div className="text-center">
          <a href="/reclamaciones" className="inline-block">
            <img
              src="https://ext.same-assets.com/2715102107/3462649717.png"
              alt="Libro de Reclamaciones"
              className="h-16 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-400">
            © 2024 Smart Fit. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
