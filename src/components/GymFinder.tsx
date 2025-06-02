'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function GymFinder() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-black bg-opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-black bg-opacity-5 rounded-full translate-x-24 translate-y-24"></div>
        {/* Dot pattern */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-black bg-opacity-20 rounded-full"></div>
        <div className="absolute top-20 left-16 w-2 h-2 bg-black bg-opacity-20 rounded-full"></div>
        <div className="absolute top-32 left-8 w-3 h-3 bg-black bg-opacity-20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Gym Image */}
          <div className="relative">
            <div className="bg-black bg-opacity-60 rounded-2xl overflow-hidden">
              <img
                src="https://ext.same-assets.com/2715102107/1529962515.webp"
                alt="Smart Fit Gym Exterior"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">
                    <span className="text-white">Smart</span>
                    <span className="text-smartfit-yellow">Fit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Search */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-smartfit-black mb-8">
              Encuentra la sede más cercana
            </h2>

            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar sede"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-smartfit-yellow focus:outline-none text-lg font-medium bg-white shadow-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-smartfit-black text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-200">
                  <Search size={20} />
                </button>
              </div>
            </div>

            <p className="text-smartfit-black text-sm mt-4 opacity-70">
              Encuentra tu gimnasio Smart Fit más cercano
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
