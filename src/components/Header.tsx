// 'use client' directive marks this component as a Client Component in Next.js
'use client'

// Import necessary hooks and components from React and Next.js
import { useState } from 'react'; // useState for managing component state
import Link from 'next/link'; // Link component for client-side navigation (though currently using 'a' tags for hash links)
import { Menu, X } from 'lucide-react'; // Menu and X icons from lucide-react for the mobile menu

// Define the Header functional component
export default function Header() {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main header element with Tailwind CSS classes for styling
    <header className="bg-white shadow-sm rounded-lg"> {/* Added rounded corners for better aesthetics */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://ext.same-assets.com/727016425/2008953691.png"
            alt="Gym Megaforce Logo"
            className="h-12 rounded-full" // Added rounded-full for a circular logo
          />
        </div>

        {/* Desktop Navigation - hidden on small screens, flex on medium and larger */}
        <nav className="hidden md:flex space-x-8">
          {/* Navigation links with hover effects and font styling */}
          <a href="#nosotros" className="text-gray-700 hover:text-[#3ca8e0] font-medium transition-colors duration-300">
            Nosotros
          </a>
          <a href="#planes" className="text-gray-700 hover:text-[#3ca8e0] font-medium transition-colors duration-300">
            Planes
          </a>
          <a href="#corporativo" className="text-gray-700 hover:text-[#3ca8e0] font-medium transition-colors duration-300">
            Corporativo
          </a>
          <a href="#contactenos" className="text-gray-700 hover:text-[#3ca8e0] font-medium transition-colors duration-300">
            Contáctenos
          </a>
        </nav>

        {/* Mobile Menu Button - visible only on small screens */}
        <button
          className="md:hidden text-gray-700 hover:text-[#3ca8e0] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ca8e0]"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the mobile menu open/close
          aria-label="Toggle mobile menu" // Accessibility improvement
        >
          {/* Displays X icon when menu is open, Menu icon when closed */}
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation - conditionally rendered based on isMenuOpen state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t rounded-b-lg"> {/* Added rounded-b-lg for aesthetics */}
          <div className="px-4 py-2 space-y-2">
            {/* Mobile navigation links */}
            <a href="#nosotros" className="block text-gray-700 hover:text-[#3ca8e0] py-2 transition-colors duration-300">
              Nosotros
            </a>
            <a href="#planes" className="block text-gray-700 hover:text-[#3ca8e0] py-2 transition-colors duration-300">
              Planes
            </a>
            <a href="#corporativo" className="block text-gray-700 hover:text-[#3ca8e0] py-2 transition-colors duration-300">
              Corporativo
            </a>
            <a href="#contactenos" className="block text-gray-700 hover:text-[#3ca8e0] py-2 transition-colors duration-300">
              Contáctenos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
