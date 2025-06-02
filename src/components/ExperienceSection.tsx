export default function ExperienceSection() {
  const features = [
    {
      title: 'Equipos modernos',
      image: 'https://ext.same-assets.com/2715102107/385051210.webp',
      alt: 'Equipos modernos de gimnasio'
    },
    {
      title: 'Clases grupales',
      image: 'https://ext.same-assets.com/2715102107/3616124910.webp',
      alt: 'Clases grupales en Smart Fit'
    },
    {
      title: 'Zona de entrenamiento',
      image: 'https://ext.same-assets.com/2715102107/1529962515.webp',
      alt: 'Zona de entrenamiento funcional'
    }
  ]

  return (
    <section className="py-16 bg-smartfit-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-smartfit-black mb-4">
            Vive la experiencia <span className="text-smartfit-yellow">Smart Fit</span>: El gimnasio para ti
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-smartfit-yellow text-smartfit-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg">
            ¡Inscríbete ya!
          </button>
        </div>
      </div>
    </section>
  )
}
