export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 min-h-[600px] flex items-center">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="mb-6">
                <h1 className="text-smartfit-yellow text-4xl md:text-6xl font-bold mb-2">
                  PRIMER MES
                </h1>
                <div className="flex items-baseline">
                  <span className="text-white text-6xl md:text-8xl font-bold">9</span>
                  <span className="text-white text-4xl md:text-5xl font-bold">.90</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white text-lg md:text-xl font-semibold mb-2">
                  EN TODAS LAS SEDES
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">
                  EN PLAN BLACK
                </p>
              </div>

              <button className="bg-smartfit-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg">
                ¡ENTRENA AHORA!
              </button>

              <p className="text-white text-sm mt-4 opacity-80">
                Consulta términos y condiciones en smartfit.com.pe/promocionayo25
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img
                src="https://ext.same-assets.com/2715102107/3891244776.bin"
                alt="Mujer entrenando en Smart Fit"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Red Banner */}
      <div className="bg-smartfit-red py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-center text-xl md:text-2xl font-bold">
            ¡SOLO POR POCOS DÍAS!
          </h2>
        </div>
      </div>
    </section>
  )
}
