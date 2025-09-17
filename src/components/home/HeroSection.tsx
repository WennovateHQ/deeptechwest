import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1B365D] to-[#00A86B] text-white py-24 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container-inner mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Accelerating Deep Tech Innovation Across Western Canada
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-[#E8F4FD] drop-shadow-md">
            Transform groundbreaking university research into market-leading companies. 
            Join Western Canada's most connected community of deep tech entrepreneurs, researchers, and investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply" className="btn-tertiary inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-xl transition-shadow">
              Join the Network
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/#focus" className="inline-flex items-center gap-2 text-lg text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1B365D] transition-all duration-300">
              Explore Focus Areas
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
