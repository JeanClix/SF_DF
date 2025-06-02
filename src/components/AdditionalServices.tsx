export default function AdditionalServices() {
  return (
    <section className="py-16 bg-smartfit-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-smartfit-black mb-4">
            Conoce nuestros productos y servicios adicionales para ti
          </h2>
          <p className="text-lg text-smartfit-black">
            Solo en Smart hay servicios y productos para potenciar tus resultados
          </p>
        </div>

        {/* Service Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Service Image */}
            <div className="relative h-48 bg-gradient-to-r from-gray-600 to-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-smartfit-yellow">smart</span>
                    <span className="text-3xl font-bold text-white">fit</span>
                  </div>
                  <div className="text-smartfit-yellow text-2xl font-bold">Coach</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-smartfit-yellow rounded-full opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-smartfit-yellow rounded-full opacity-60"></div>
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-white rounded-full opacity-40"></div>
            </div>

            {/* Service Content */}
            <div className="p-6">
              <div className="mb-4">
                <span className="text-smartfit-yellow text-sm font-semibold">Smart Fit Coach</span>
                <h3 className="text-xl font-bold text-smartfit-black mt-1">
                  Smart Fit Coach
                </h3>
              </div>

              <p className="text-smartfit-black text-sm leading-relaxed mb-6">
                Resuelve tus dudas y personaliza tu entrenamiento y plan alimentar a través de
                videollamadas periódicas con un profesor y nutricionista especializado.
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-smartfit-black">S/ 29,90</span>
                  <span className="text-sm text-smartfit-black ml-1">/mes</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-smartfit-yellow text-smartfit-black py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                Infórmate más
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-smartfit-black opacity-70">
            Consulta la disponibilidad de los servicios físicos en el gimnasio deseado.
          </p>
        </div>
      </div>
    </section>
  )
}
