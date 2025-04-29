import React, { useState, useEffect } from "react";
import Hero from "../assets/chair.jpg";
import Hero1 from "../assets/hero.jpg";
import Hero2 from "../assets/Tv.jpg";

const HeroCarousel = () => {
  // Using placeholder images instead of imports
  const images = [
    Hero,
    Hero1,
    Hero2
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full h-screen">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000  ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-fill"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-0">
        <h1 className="text-5xl md:text-7xl font-medium text-white">Welcome To Clensy!</h1>
        
        {/* CTA Button */}
        <div className="mt-8 md:mt-10">
          <button className="bg-white text-black font-medium rounded px-8 py-2 min-w-[200px] text-center hover:bg-opacity-90 transition-all">
            Book Service
          </button>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;