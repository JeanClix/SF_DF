'use client'

import { Clock, Activity } from 'lucide-react'

const classes = [
  {
    name: 'ZUMBA',
    image: 'https://ext.same-assets.com/2715102107/3730214372.webp',
    duration: '45/50 min',
    intensity: 'Alta',
    description: 'Diviértete en una clase que fusiona el baile con una rutina de ejercicios al compás de la música, mejorando tu forma física y tu coordinación.',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'SMART TABATA',
    image: 'https://ext.same-assets.com/2715102107/2216706228.webp',
    duration: '30 min',
    intensity: 'Alta',
    description: 'Clase de intervalos de alta intensidad, donde ejercicios vigorosos se combinan con breves descansos para maximizar resultados. Mejora tu resistencia, fuerza y salud en general en sesiones dinámicas y efectivas.',
    color: 'from-blue-600 to-purple-600'
  },
  {
    name: 'BIKE',
    image: 'https://ext.same-assets.com/2715102107/4211964151.webp',
    duration: '45/60 min',
    intensity: 'Alta',
    description: 'Entrenamiento de indoor cycling que presenta 3 maneras de intensificación: lineal, ondulatoria y por intervalos; cuyo objetivo es la pérdida de grasa y el acondicionamiento cardiovascular.',
    color: 'from-green-600 to-blue-600'
  }
]

export default function GroupClasses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-smartfit-black mb-4">
            Conoce nuestras Clases Grupales <span className="text-smartfit-yellow">EXCLUSIVAS</span>
          </h2>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {/* Class Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t bg-opacity-80`}></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">
                    {classItem.name}
                  </h3>
                </div>
              </div>

              {/* Class Details */}
              <div className="p-6">
                {/* Duration and Intensity */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="text-smartfit-yellow mr-2" size={16} />
                    <span className="text-sm font-medium text-smartfit-black">
                      Duración
                    </span>
                  </div>
                  <span className="text-sm font-bold text-smartfit-black">
                    {classItem.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Activity className="text-smartfit-yellow mr-2" size={16} />
                    <span className="text-sm font-medium text-smartfit-black">
                      Intensidad
                    </span>
                  </div>
                  <span className="text-sm font-bold text-smartfit-black">
                    {classItem.intensity}
                  </span>
                </div>

                {/* Description */}
                <p className="text-smartfit-black text-sm leading-relaxed mb-4">
                  {classItem.description}
                </p>

                {/* More Details Button */}
                <button className="text-smartfit-yellow font-semibold text-sm hover:text-smartfit-black transition-colors duration-200">
                  Más detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-smartfit-yellow text-smartfit-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Ver todas las clases grupales
          </button>
        </div>
      </div>
    </section>
  )
}
