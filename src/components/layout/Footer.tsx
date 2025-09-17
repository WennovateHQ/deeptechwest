'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1f3a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 h-12">
              <Link href="/" className="flex-shrink-0 h-full flex items-center">
                <Image 
                  src="/logo.svg" 
                  alt="DeepTech West Logo" 
                  className="h-full w-auto"
                  width={200}
                  height={48}
                />
              </Link>
              <div className="flex flex-col justify-center h-full py-1">
                <div className="text-lg leading-tight">Deep Tech</div>
                <div className="text-lg leading-tight">Entrepreneurial Network</div>
                <div className="text-gray-300 text-sm leading-tight">Western Canada</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Accelerating deep tech innovation and commercialization across Western Canada through collaboration, resources, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/deeptech-west" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A86B] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/deeptechwest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A86B] transition-colors" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/deeptechwest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A86B] transition-colors" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#00A86B]"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-gray-300 hover:text-[#00A86B] transition-colors">About Us</Link></li>
              <li><Link href="/#membership" className="text-gray-300 hover:text-[#00A86B] transition-colors">Membership</Link></li>
              <li><Link href="/#focus" className="text-gray-300 hover:text-[#00A86B] transition-colors">Focus Areas</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-[#00A86B] transition-colors">Events</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-[#00A86B] transition-colors">Resources</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-[#00A86B] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#00A86B]"></span>
            </h3>
            <ul className="space-y-4">
              {/* Address - Commented out
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#00A86B] mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Innovation Drive<br />Kelowna, BC V1V 1V1<br />Canada</span>
              </li>
              */}
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#00A86B]" />
                <a href="mailto:hello@deeptechwest.ca" className="text-gray-300 hover:text-[#00A86B] transition-colors">hello@deeptechwest.ca</a>
              </li>
              {/* Phone - Commented out
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#00A86B]" />
                <a href="tel:+12505550123" className="text-gray-300 hover:text-[#00A86B] transition-colors">+1 (250) 555-0123</a>
              </li>
              */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#00A86B]"></span>
            </h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-100 text-green-800 rounded-md text-sm"
              >
                Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input type="hidden" name="access_key" value="a676b5d6-2965-470e-9933-b74e944cc0c8" />
                <input type="hidden" name="subject" value="New Newsletter Subscription - Deep Tech West" />
                <input type="hidden" name="from_name" value="Deep Tech West Website" />
                <div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a2f4a] border border-gray-700 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B] focus:ring-opacity-50 text-white placeholder-gray-400 outline-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1B365D] to-[#00A86B] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Deep Tech West. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#00A86B] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00A86B] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#00A86B] transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-[#00A86B] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
