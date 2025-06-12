'use client'

import React, { useState, useEffect } from 'react'; // Import React, useState for state management, and useEffect for side effects

// Array of hero images and their associated text content
const heroImages = [
  {
    id: 'hero-1',
    url: 'https://ext.same-assets.com/727016425/4134817646.jpeg',
    title: 'Vive La Experiencia Mega Force',
    subtitle: 'Tu mejor versión te espera'
  },
  {
    id: 'hero-2',
    url: 'https://ext.same-assets.com/727016425/2437218162.jpeg',
    title: 'Equipos de Última Generación',
    subtitle: 'Tecnología para tu entrenamiento'
  },
  {
    id: 'hero-3',
    url: 'https://ext.same-assets.com/727016425/1620518694.jpeg',
    title: 'Espacios Modernos',
    subtitle: 'Ambiente ideal para entrenar'
  },
  {
    id: 'hero-4',
    url: 'https://ext.same-assets.com/727016425/1809766357.jpeg',
    title: 'Múltiples Sedes',
    subtitle: 'Encuentra la más cercana a ti'
  }
];

// Define the HeroSection functional component
export default function HeroSection() {
  // State to manage the current active slide in the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to track the vertical scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);

  // useEffect hook to handle automatic slide transitions
  useEffect(() => {
    // Set up an interval to change the slide every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      // Increment currentSlide, looping back to 0 if it exceeds the number of images
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup function: clear the interval when the component unmounts or the effect re-runs
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // useEffect hook to handle scroll events for parallax effects
  useEffect(() => {
    // Function to update scrollY state when the window is scrolled
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: remove the scroll event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // Hero Section with a relative position and fixed height, overflowing content is hidden
    <section className="relative h-[650px] overflow-hidden rounded-lg shadow-xl"> {/* Added rounded corners and shadow */}
      {/* Background Images for the slider */}
      {heroImages.map((image, index) => (
        <div
          key={image.id} // Unique key for each image for React list rendering
          className={`absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out`}
          // Apply opacity based on currentSlide for fading effect
          // Apply translateY for a subtle parallax scroll effect
          style={{
            backgroundImage: `url(${image.url})`,
            opacity: index === currentSlide ? '1' : '0', // Full opacity for current slide, 0 for others
            transform: `translateY(${scrollY * 0.5}px)`, // Image moves slower than scroll for parallax
          }}
        />
      ))}

      {/* Overlay with content (title, subtitle, button) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Title of the current slide with parallax and fade effects */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`, // Title moves slower than scroll
              opacity: Math.max(0, 1 - scrollY / 400) // Title fades out on scroll
            }}
          >
            {heroImages[currentSlide].title}
          </h1>
          {/* Subtitle of the current slide with parallax and fade effects */}
          <p
            className="text-xl md:text-2xl mb-8 opacity-90 transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`, // Subtitle moves slower than scroll
              opacity: Math.max(0, 0.9 - scrollY / 400) // Subtitle fades out on scroll
            }}
          >
            {heroImages[currentSlide].subtitle}
          </p>
          {/* Call to action button with parallax and hover effects */}
          <button
            className="bg-[#e64a61] hover:bg-[#d43851] text-white font-bold py-4 px-12 rounded-lg text-2xl md:text-4xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            // Scrolls to the element with id 'sedes' when clicked
            onClick={() => document.getElementById('sedes')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              transform: `translateY(${scrollY * 0.1}px) scale(${1 + (scrollY > 0 ? 0.05 : 0)})`, // Button moves slower and scales slightly on scroll
              opacity: Math.max(0, 1 - scrollY / 500) // Button fades out on scroll
            }}
          >
            INSCRÍBETE
          </button>
        </div>
      </div>

      {/* Slide Indicators - positioned at the bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((image, index) => (
          <button
            key={image.id} // Unique key for each indicator button
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125' // Active indicator is larger and white
                : 'bg-white/50 hover:bg-white/75' // Inactive indicators are semi-transparent with hover effect
            }`}
            onClick={() => setCurrentSlide(index)} // Changes slide to the clicked indicator's index
            aria-label={`Go to slide ${index + 1}`} // Accessibility improvement
          />
        ))}
      </div>

      {/* Navigation Arrows - positioned left and right middle */}
      {/* Left Arrow Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#3ca8e0] transition-colors duration-300 bg-black/30 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3ca8e0]"
        // Decrements currentSlide, looping to the last slide if at the beginning
        onClick={() => setCurrentSlide((prev) => prev === 0 ? heroImages.length - 1 : prev - 1)}
        aria-label="Previous slide" // Accessibility improvement
      >
        {/* SVG icon for left arrow */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Right Arrow Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#3ca8e0] transition-colors duration-300 bg-black/30 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3ca8e0]"
        // Increments currentSlide, looping to the first slide
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
        aria-label="Next slide" // Accessibility improvement
      >
        {/* SVG icon for right arrow */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
