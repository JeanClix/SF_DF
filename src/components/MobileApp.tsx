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
              <div className="inline-block rounded-lg shadow-lg ">
                <img src="https://assets.smartfit.com.br/production/newHome/qrcode.png" alt="" />
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
                <div className="relative z-10 bg-black rounded-3xl p-2 shadow-2xl">
                  <img src="https://assets.smartfit.com.br/images/new_home_br/app-devices-v2.webp" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
