import React, { useState } from "react"
import Logo from "../assets/Logo.png"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-transparent absolute top-0 left-0 right-0 z-20"> 
      <h1 className="flex items-center">
        <a href="/" aria-label="Tesla Logo" className="text-white"> 
          <img src={Logo} alt="Tesla Logo" className="h-6 sm:h-8 w-auto" /> 
          <span className="sr-only">Tesla</span>
        </a>
        <a className="sr-only focus:not-sr-only" href="#main-content" id="top-of-page">
          Skip to main content
        </a>
      </h1>

      {/* Desktop Navigation */}
      <ol className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6">
        <li className="relative group">
          <button
            type="button"
            id="dx-nav-item--vehicles"
            className="py-2 px-1 text-sm font-medium text-white relative transition-all duration-300" 
            onClick={() => {}}
          >
            <span>Book Now</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>
        <li className="relative group">
          <button
            type="button"
            id="dx-nav-item--energy"
            className="py-2 px-1 text-sm font-medium text-white relative transition-all duration-300" 
            onClick={() => {}}
          >
            <span>Service</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>
        <li className="relative group">
          <button
            type="button"
            id="dx-nav-item--charging"
            className="py-2 px-1 text-sm font-medium text-white relative transition-all duration-300" 
            onClick={() => {}}
          >
            <span>Gift Cards</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>
        <li className="relative group">
          <button
            type="button"
            id="dx-nav-item--discover"
            className="py-2 px-1 text-sm font-medium text-white relative transition-all duration-300" 
            onClick={() => {}}
          >
            <span>Contact Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>
        <li className="relative group">
          <a 
            href="https://shop.tesla.com" 
            id="dx-nav-item--shop" 
            className="py-2 px-1 text-sm font-medium text-white relative block transition-all duration-300"
          >
            <span>FAQ</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ol>

      {/* CTA Button - visible on all screen sizes */}
      <div className="hidden sm:block">
        <a
          href="/book-now"
          className="px-4 sm:px-6 py-2 bg-white/20 text-black font-medium rounded-full hover:bg-white/30 transition-all duration-300 shadow-md text-sm"
        >
          Book Cleaning Service
        </a>
      </div>


      {/* Mobile Menu Button */}
      <button 
        type="button" 
        className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none" 
        onClick={toggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Open main menu</span>
        {/* Hamburger icon */}
        {!mobileMenuOpen ? (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="absolute top-16 inset-x-0 z-30 md:hidden bg-black/80 backdrop-blur-md" 
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <button
              type="button"
              className="block w-full text-center py-2 px-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-all duration-300"
              onClick={() => {}}
            >
              Book Now
            </button>
            <button
              type="button"
              className="block w-full text-center py-2 px-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-all duration-300"
              onClick={() => {}}
            >
              Service
            </button>
            <button
              type="button"
              className="block w-full text-center py-2 px-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-all duration-300"
              onClick={() => {}}
            >
              Gift Cards
            </button>
            <button
              type="button"
              className="block w-full text-center py-2 px-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-all duration-300"
              onClick={() => {}}
            >
              Contact Us
            </button>
            <a
              href="https://shop.tesla.com"
              className="block w-full text-center py-2 px-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              FAQ
            </a>
          
            <a
              href="/book-now"
              className="block w-full text-center mt-4 py-2 px-4 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300 shadow-md"
            >
              Book Cleaning Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;