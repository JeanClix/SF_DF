'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-smartfit-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-smartfit-black">smart</span>
                <span className="text-smartfit-yellow">fit</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/gimnasios"
              className="text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200 font-medium"
            >
              Gimnasios
            </a>
            <a
              href="/tu-espacio"
              className="text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200 font-medium"
            >
              Tu Espacio
            </a>
            <a
              href="/corporativo"
              className="text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200 font-medium"
            >
              Corporativo
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/inscribete"
              className="bg-smartfit-yellow text-smartfit-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              ¡Inscríbete ya!
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-smartfit-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a
                href="/gimnasios"
                className="block text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gimnasios
              </a>
              <a
                href="/tu-espacio"
                className="block text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tu Espacio
              </a>
              <a
                href="/corporativo"
                className="block text-smartfit-black hover:text-smartfit-yellow transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Corporativo
              </a>
              <a
                href="/inscribete"
                className="block bg-smartfit-yellow text-smartfit-black px-6 py-3 rounded-full font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                ¡Inscríbete ya!
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
