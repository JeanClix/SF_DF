'use client'

// Import social media icons from lucide-react
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'; // Note: LinkedIn icon is imported but not used in the provided URLs, a TikTok icon might be more appropriate if that's the intended platform.

// Define the Footer functional component
export default function Footer() {
  return (
    // Footer section with dark background and white text
    <footer className="bg-gray-800 text-white py-8 rounded-t-lg shadow-inner"> {/* Added rounded top corners and inner shadow */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Flex container for responsive layout: column on small screens, row on medium and up */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright information */}
          <div className="mb-4 md:mb-0">
            <p className="text-lg text-center md:text-left">
              MEGA FORCE © 2025 Todos los derechos reservados.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/gymmegaforceoficial/"
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="Instagram" // Accessibility improvement
            >
              <Instagram className="w-8 h-8" /> {/* Lucide React Instagram icon */}
            </a>
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/megaforce.hacienda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" /> {/* Lucide React Facebook icon */}
            </a>
            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@megaforceate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8" /> {/* Lucide React YouTube icon */}
            </a>
            {/* TikTok Link (using a generic social icon as TikTok is not in Lucide, or a custom SVG would be ideal) */}
            {/* Since 'lucide-react' doesn't have a direct TikTok icon, I'll use a placeholder or you might consider a custom SVG. */}
            {/* For this example, if Linkedin was intended for a general social link (instead of TikTok), I'd use it.
                Given the URL is TikTok, I'll use a placeholder and note it. */}
            <a
              href="https://www.tiktok.com/@gymmegaforce"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="TikTok"
            >
              {/* You might want to use a custom SVG for TikTok or find a specific icon library that includes it. */}
              {/* For now, I'm using a simple text fallback or you could use a placeholder if an icon is not available. */}
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true" role="img">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.176 9.387c-.642-.234-1.393-.36-2.144-.36-1.571 0-2.846.592-3.805 1.776-.96 1.184-1.44 2.766-1.44 4.743v.014c0 1.977.48 3.559 1.44 4.743.959 1.184 2.234 1.776 3.805 1.776.75 0 1.501-.126 2.144-.36v2.09c-.642.234-1.393.36-2.144.36-2.846 0-5.143-1.423-6.892-4.267-1.75-2.844-2.625-6.52-2.625-11.026V.862c0-1.066.862-1.928 1.928-1.928h1.928c1.066 0 1.928.862 1.928 1.928v11.754c0 .825.253 1.472.76 1.942.507.47 1.17.705 1.986.705 1.066 0 1.928-.862 1.928-1.928V9.387z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
