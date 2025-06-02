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
    <section className="py-16 bg-white text-smartfit-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ELIGE <span className="text-smartfit-yellow">TU PLAN</span>
          </h2>
          <p className="text-lg">
            ¡Comienza a entrenar con nosotros! Elige el plan que quieras y nos vemos en la sede de tu preferencia.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto hidden lg:block">
          <table className="w-full table-auto border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-left text-sm text-smartfit-yellow py-2"></th>
                {plans.map((plan, idx) => (
                  <th key={idx} className="text-center py-2">
                    <div className="mb-2">
                      {plan.popular && (
                        <span className="bg-smartfit-yellow text-smartfit-black -top-2 relative px-2 py-1 text-xs font-semibold rounded-full inline-block mb-2">
                          Más beneficios
                        </span>
                      )}
                      <div className="text-sm font-bold">
                        PLAN <span className="font-black">{plan.name}</span>
                      </div>
                      <div className="text-xs mt-1">{plan.description}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 text-sm">{feature}</td>
                  {plans.map((plan, pIndex) => (
                    <td key={pIndex} className="text-center">
                      {plan.features[index] ? (
                        <Check className="text-green-500 mx-auto" size={20} />
                      ) : (
                        <X className="text-gray-400 mx-auto" size={20} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Precios */}
              <tr className="font-bold text-sm">
                <td className="py-4">DESDE</td>
                {plans.map((plan, index) => (
                  <td key={index} className="py-4 text-center">
                    <div className="text-lg font-bold">S/ {plan.price}*</div>
                    <div className="text-xs font-normal">
                      en el 1er mes, después<br />S/ {plan.originalPrice}/mes
                    </div>
                    <div className="text-xs mt-1">{plan.fidelity}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Botón CTA */}
        <div className="text-center mt-10">
          <button className="bg-smartfit-yellow text-smartfit-black px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition transform hover:scale-105 shadow-lg">
            ¡Inscríbete ya!
          </button>
          <p className="text-xs mt-2 opacity-70">*Valores promocionales</p>
        </div>
      </div>
    </section>
  )
}
