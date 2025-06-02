'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  const handleLearnMore = () => {
    // In a real implementation, this would navigate to the privacy policy
    window.open('/politica-privacidad', '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-smartfit-black text-smartfit-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Utilizamos cookies para personalizar anuncios y mejorar su experiencia en el sitio.
            Al continuar navegando, aceptas nuestra política de privacidad.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLearnMore}
            className="text-smartfit-yellow hover:text-white transition-colors duration-200 text-sm font-medium underline"
          >
            Saber más
          </button>
          <button
            onClick={handleAccept}
            className="bg-smartfit-white text-smartfit-black px-6 py-2 rounded-full font-semibold hover:bg-smartfit-yellow transition-colors duration-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
