'use client'

import { Check, X } from 'lucide-react'

const features = [
  'Entrena en todos los gimnasios de Smart Fit en Perú y Latinoamérica (+1700)',
  'Acceso ilimitado a todas las áreas de peso libre e integrado - Máquinas, pesas, discos y barras',
  'Clases grupales con profesores - Actívate, baila y relájate',
  'Smart Fit App - Tu plan de entrenamiento personalizado',
  'Smart Fit Go - Entrena donde y cuando quieras',
  'Relájate en los sillones de masajes',
  '5 invitados al mes en el gimnasio que quieras'
]

const plans = [
  {
    name: 'Black',
    description: 'Entrena en cualquiera de nuestras sedes de Perú y Latinoamérica',
    price: '9,90',
    originalPrice: '109,90',
    popular: true,
    features: [true, true, true, true, true, true, true],
    fidelity: '12 meses de fidelidad'
  },
  {
    name: 'Fit',
    description: 'Entrena cuando quieras en tu gimnasio de elección',
    price: '29,90',
    originalPrice: '79,90',
    popular: false,
    features: [false, true, true, true, true, false, false],
    fidelity: '12 meses de fidelidad'
  },
  {
    name: 'Smart',
    description: 'Entrena cuando quieras en la sede que elijas',
    price: '49,90',
    originalPrice: '89,90',
    popular: false,
    features: [false, true, true, true, true, false, false],
    fidelity: 'Sin fidelidad'
  }
]

export default function PricingPlans() {
  return (
    <section className="py-16 bg-smartfit-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-smartfit-black mb-4">
            ELIGE <span className="text-smartfit-yellow">TU PLAN</span>
          </h2>
          <p className="text-lg text-smartfit-black max-w-3xl mx-auto">
            ¡Comienza a entrenar con nosotros! Elige el plan que quieras y nos vemos en la sede de tu preferencia.
          </p>
        </div>

        {/* Features List - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-smartfit-black mb-4">Beneficios incluidos:</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-smartfit-black">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-6 w-1/2"></th>
                {plans.map((plan) => (
                  <th key={plan.name} className="text-center py-6 w-1/6">
                    <div className={`rounded-lg p-6 ${plan.popular ? 'bg-smartfit-yellow border-2 border-smartfit-yellow' : 'bg-gray-50'}`}>
                      <div className="mb-4">
                        {plan.popular && (
                          <span className="bg-smartfit-yellow text-smartfit-black px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                            Más beneficios
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-smartfit-black">
                          PLAN <span className="font-black">{plan.name}</span>
                        </h3>
                        <p className="text-sm text-smartfit-black mt-2">{plan.description}</p>
                      </div>

                      <div className="mb-4">
                        <div className="text-smartfit-black text-sm mb-1">DESDE</div>
                        <div className="text-2xl font-bold text-smartfit-black">
                          S/ {plan.price}*
                        </div>
                        <div className="text-sm text-smartfit-black">
                          <span className="font-bold">en el 1er mes</span>, después
                        </div>
                        <div className="text-sm text-smartfit-black">
                          S/ {plan.originalPrice}/mes
                        </div>
                        <div className="text-xs text-smartfit-black mt-2">{plan.fidelity}</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-b border-gray-200">
                  <td className="py-4 text-smartfit-black">{feature}</td>
                  {plans.map((plan, planIndex) => (
                    <td key={planIndex} className="py-4 text-center">
                      {plan.features[featureIndex] ? (
                        <Check className="text-green-500 mx-auto" size={20} />
                      ) : (
                        <X className="text-gray-400 mx-auto" size={20} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-lg p-6 ${plan.popular ? 'bg-smartfit-yellow border-2 border-smartfit-yellow' : 'bg-gray-50'}`}>
              {plan.popular && (
                <span className="bg-smartfit-yellow text-smartfit-black px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  Más beneficios
                </span>
              )}
              <h3 className="text-xl font-bold text-smartfit-black mb-2">
                PLAN <span className="font-black">{plan.name}</span>
              </h3>
              <p className="text-sm text-smartfit-black mb-4">{plan.description}</p>

              <div className="mb-4">
                <div className="text-smartfit-black text-sm mb-1">DESDE</div>
                <div className="text-2xl font-bold text-smartfit-black">
                  S/ {plan.price}*
                </div>
                <div className="text-sm text-smartfit-black">
                  <span className="font-bold">en el 1er mes</span>, después S/ {plan.originalPrice}/mes
                </div>
                <div className="text-xs text-smartfit-black mt-2">{plan.fidelity}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-smartfit-yellow text-smartfit-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg">
            ¡Inscríbete ya!
          </button>
          <p className="text-sm text-smartfit-black mt-4 opacity-70">*Valores promocionales</p>
        </div>
      </div>
    </section>
  )
}
