export default function MobileApp() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-smartfit-black mb-6">
              Smart Fit App: una experiencia de entrenamiento completa,
              <span className="text-smartfit-yellow"> dentro y fuera del gimnasio.</span>
            </h2>

            <p className="text-smartfit-black text-lg mb-8 leading-relaxed">
              No importa si ya tienes experiencia o si recién estás comenzando a practicar actividad física,
              una cosa es segura: ¡al descargar gratis la aplicación Smart Fit, obtienes el mejor aliado para
              tu rutina de entrenamiento! Exclusivo para clientes.
            </p>

            <div className="mb-8">
              <p className="text-smartfit-black font-semibold mb-4">
                Escanea el código para descargar gratis.
              </p>

              {/* QR Code */}
              <div className="inline-block p-4 bg-white rounded-lg shadow-lg mb-6">
                <div className="w-24 h-24 bg-black"></div>
                {/* QR Code placeholder - in real implementation, you'd use a QR code library */}
                <div className="w-24 h-24 bg-gradient-to-br from-black via-gray-800 to-black flex items-center justify-center text-white text-xs font-bold">
                  QR
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <p className="text-smartfit-black font-semibold mb-4">
                Descarga ahora la Smart Fit App
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eokoe.smartfitcoach"
                  className="inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://ext.same-assets.com/2715102107/3301625649.svg"
                    alt="Descargar en Google Play"
                    className="h-12 hover:opacity-80 transition-opacity duration-200"
                  />
                </a>
                <a
                  href="https://apps.apple.com/app/smart-fit-app/id1308265270"
                  className="inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://ext.same-assets.com/2715102107/3394157246.svg"
                    alt="Descargar en App Store"
                    className="h-12 hover:opacity-80 transition-opacity duration-200"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Phone */}
                <div className="relative z-10 bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="bg-black h-6 flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-smartfit-yellow to-orange-400 h-80 flex items-center justify-center">
                      <div className="text-center text-smartfit-black">
                        <div className="text-2xl font-bold mb-2">Smart Fit</div>
                        <div className="text-sm">App</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="absolute -right-8 top-12 z-0 bg-black rounded-3xl p-2 shadow-xl transform rotate-12 opacity-80">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="bg-black h-6 flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-gray-800 to-black h-64 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-lg font-bold mb-1">Fit Go</div>
                        <div className="text-xs">Workouts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
