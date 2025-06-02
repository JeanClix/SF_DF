// Suggested code may be subject to a license. Learn more: ~LicenseLog:2035519185.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:623975298.
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
            <div className="relative h-48 ">
              <img src="https://assets.smartfit.com.br/attachments/d97a57e8163e5ad2df89f238f84dee4803ae8b4e/store/1ea7c8ff15ba58ab211bd0a813e7a72c8cee43c716fe89d784a286afee6a/image_mobile" alt="Smart Fit Coach" className="absolute inset-0 w-full h-full object-cover" />
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
