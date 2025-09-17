'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-inner mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <img 
            src="/logo.svg" 
            alt="DeepTech West Logo" 
            className="h-12 w-auto"
            width="48"
            height="48"
          />
          <div className="hidden sm:block text-[#1B365D] font-bold">
            <div className="text-lg leading-tight">Deep Tech</div>
            <div className="text-lg leading-tight">Entrepreneurial Network</div>
            <div className="text-sm text-gray-600 leading-tight">Western Canada</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/#about" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors">
            About
          </Link>
          <Link href="/#membership" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors">
            Membership
          </Link>
          <Link href="/#focus" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors">
            Focus Areas
          </Link>
          <Link href="/#events" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors">
            Events
          </Link>
          <Link href="/apply" className="btn-primary">
            Join the Network
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-[#1B365D]" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link href="/#about" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/#membership" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors" onClick={toggleMenu}>
              Membership
            </Link>
            <Link href="/#focus" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors" onClick={toggleMenu}>
              Focus Areas
            </Link>
            <Link href="/#events" className="text-[#1B365D] hover:text-[#00A86B] font-medium transition-colors" onClick={toggleMenu}>
              Events
            </Link>
            <Link href="/apply" className="btn-primary text-center" onClick={toggleMenu}>
              Join the Network
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
