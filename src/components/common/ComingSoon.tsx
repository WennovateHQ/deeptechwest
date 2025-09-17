import Link from 'next/link';
import React from 'react';

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description = 'We are currently working on this page. Please check back soon!' }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="text-6xl font-bold text-[#1B365D] mb-6">Coming Soon</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link 
            href="/" 
            className="px-6 py-3 bg-[#1B365D] text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Return Home
          </Link>
          <a 
            href="mailto:hello@deeptechwest.ca" 
            className="px-6 py-3 border border-[#1B365D] text-[#1B365D] font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
