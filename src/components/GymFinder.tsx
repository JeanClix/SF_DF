'use client'

import { Search } from 'lucide-react'; // Import the Search icon from lucide-react
import { useState } from 'react'; // Import useState for managing component state

// Define the GymFinder functional component
export default function GymFinder() {
  // State to hold the search query for filtering gym locations
  const [searchQuery, setSearchQuery] = useState('');

  // Static data for gym locations
  const gymLocations = [
    {
      name: 'Las Flores',
      imageUrl: 'https://ext.same-assets.com/727016425/2437218162.jpeg',
      available: true, // Example status
    },
    {
      name: 'La Hacienda',
      imageUrl: 'https://ext.same-assets.com/727016425/1620518694.jpeg',
      available: true,
    },
    {
      name: 'Santa Rosa',
      imageUrl: 'https://ext.same-assets.com/727016425/1809766357.jpeg',
      available: true,
    },
    {
      name: 'Mariscal Caceres',
      imageUrl: 'https://ext.same-assets.com/727016425/792197030.jpeg',
      available: true,
    },
    {
      name: 'Los Olivos',
      imageUrl: 'https://ext.same-assets.com/727016425/1621831974.jpeg',
      available: true,
    },
    {
      name: 'Ventanilla Metro',
      imageUrl: 'https://ext.same-assets.com/727016425/3377961383.jpeg',
      available: true,
    },
    {
      name: 'Ventanilla Vea',
      imageUrl: 'https://ext.same-assets.com/727016425/4193140704.jpeg',
      available: true,
    },
    {
      name: 'Ate',
      imageUrl: 'https://ext.same-assets.com/727016425/1273954391.jpeg',
      available: true,
    },
    {
      name: 'Mariscal Caceres 2',
      imageUrl: 'https://ext.same-assets.com/727016425/3621356039.jpeg',
      available: true,
    },
  ];

  // Filter gym locations based on the search query
  const filteredGyms = gymLocations.filter(gym =>
    gym.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // Sedes Section: This section displays the available gym locations.
    <section id="sedes" className="py-16 bg-gray-100 rounded-lg shadow-inner"> {/* Added rounded corners and inner shadow */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 relative">
          <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">
            SEDES
          </span>
          {/* Decorative underline for the title */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3ca8e0] to-[#e64a61] rounded-full mt-4" />
        </h2>

        {/* Search Input for filtering locations */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar sedes..."
              className="w-full p-3 pl-10 pr-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#3ca8e0] transition-colors duration-300 shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar sedes" // Accessibility improvement
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> {/* Search icon */}
          </div>
        </div>

        {/* Grid Container for Gym Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through filtered gym locations and render a card for each */}
          {filteredGyms.map((gym, index) => (
            <div
              key={index} // Using index as key, consider a more stable unique ID if available
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container with hover effects */}
              <div className="relative overflow-hidden">
                <img
                  src={gym.imageUrl}
                  alt={gym.name}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  // Fallback for broken images
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/cccccc/333333?text=Imagen+no+disponible`;
                    e.currentTarget.alt = "Imagen no disponible";
                  }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Availability tag */}
                <div className="absolute top-4 right-4 bg-[#e64a61] text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  {gym.available ? 'Disponible' : 'No Disponible'}
                </div>
              </div>
              {/* Card Content (Title and Button) */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-[#3ca8e0] transition-colors duration-300">
                  {gym.name}
                </h3>
                <button className="w-full bg-[#3ca8e0] hover:bg-[#2966ba] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  INSCRÍBETE
                </button>
              </div>
            </div>
          ))}
          {/* Message if no gyms are found */}
          {filteredGyms.length === 0 && (
            <div className="col-span-full text-center text-gray-600 text-xl py-8">
              No se encontraron sedes para tu búsqueda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
