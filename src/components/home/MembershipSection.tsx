'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCheck, FaUsers, FaUserTie, FaGraduationCap, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa';

type MembershipCategory = {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
  requirements: string[];
  benefits: string[];
  ctaText: string;
};

type MembershipCardProps = {
  category: MembershipCategory;
  isActive: boolean;
  onClick: () => void;
};

const membershipCategories = [
  {
    id: 'students',
    title: 'Student-Entrepreneurs',
    icon: <FaGraduationCap className="w-5 h-5" />,
    description: 'Ready to launch your deep tech venture?',
    requirements: [
      'Currently enrolled or graduated within 2 years',
      'Deep tech venture or research ready for commercialization',
      'Technology focus: AI/ML, IoT, Robotics',
      'Willing to participate in mentor matching'
    ],
    benefits: [
      'Mentor matching program access',
      'Investor introduction pipeline',
      'Peer learning community',
      'Commercialization workshops'
    ],
    ctaText: 'Apply as Student-Entrepreneur'
  },
  {
    id: 'researchers',
    title: 'Professors & Researchers',
    icon: <FaUserTie className="w-5 h-5" />,
    description: 'Transform your research impact',
    requirements: [
      'Tenure-track or tenured faculty',
      'Active research with commercialization potential',
      'Interest in industry collaboration'
    ],
    benefits: [
      'Industry partnership opportunities',
      'Technology transfer support',
      'Graduate student connections',
      'Research commercialization guidance'
    ],
    ctaText: 'Join as Researcher'
  },
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs',
    icon: <FaRocket className="w-5 h-5" />,
    description: 'Scale your proven deep tech venture',
    requirements: [
      'AI/IoT/Robotics startup founder',
      'Proven traction (MVP, revenue, investment)',
      'Ready pitch deck and data room',
      'Technology focus alignment'
    ],
    benefits: [
      'Investor network access',
      'Strategic partnership opportunities',
      'Scaling expertise and resources',
      'Exit preparation support'
    ],
    ctaText: 'Apply as Entrepreneur'
  },
  {
    id: 'investors',
    title: 'Investors',
    icon: <FaChartLine className="w-5 h-5" />,
    description: 'Access premium deep tech deal flow',
    requirements: [
      'Active early-stage deep tech investment',
      '$10K+ (angels) / $25K+ (institutional) typical investment',
      'Western Canada focus or activity'
    ],
    benefits: [
      'Curated deal flow pipeline',
      'Direct entrepreneur access',
      'Technical due diligence support',
      'Regional market intelligence'
    ],
    ctaText: 'Join Investment Network'
  },
  {
    id: 'program-managers',
    title: 'Program Managers',
    icon: <FaUsers className="w-5 h-5" />,
    description: 'Amplify your ecosystem impact',
    requirements: [
      'Professional role supporting deep tech entrepreneurship',
      'Position at TTO, accelerator, innovation hub, or government',
      'Direct deep tech venture experience'
    ],
    benefits: [
      'Comprehensive member directory',
      'Program collaboration opportunities',
      'Regional impact measurement',
      'Best practice sharing network'
    ],
    ctaText: 'Connect Your Program'
  }
];

const MembershipCard = ({ category, isActive, onClick }: MembershipCardProps) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };
  return (
    <motion.div 
      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${isActive ? 'bg-white shadow-lg border-l-4 border-[#00A86B]' : 'bg-gray-50 hover:bg-gray-100'}`}
      onClick={onClick}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 rounded-full bg-[#E8F4FD] text-[#1B365D]">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold">{category.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{category.description}</p>
      
      <div className="flex items-center text-sm text-[#00A86B] font-medium">
        {isActive ? (
          <>
            <span>Hide details</span>
            <FaChevronUp className="ml-2" />
          </>
        ) : (
          <>
            <span>View details</span>
            <FaChevronDown className="ml-2" />
          </>
        )}
      </div>
      
      {isActive && (
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
            <ul className="space-y-2">
              {category.requirements.map((req: string, i: number) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
            <ul className="space-y-2">
              {category.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link 
            href="/apply" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00A86B] hover:bg-[#008a5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A86B] transition-colors duration-200"
          >
            {category.ctaText}
            <FaChartLine className="ml-2" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

const tabContentVariants = {
  initial: { opacity: 0, y: 10 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

// This component is now replaced by the new implementation below

const MembershipSection = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <section id="membership" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Deep Tech Community
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded innovators, access exclusive resources, and accelerate your deep tech journey.
          </p>
        </div>

        {/* Mobile Accordion View */}
        <motion.div 
          className="lg:hidden space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {membershipCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MembershipCard 
                  category={category}
                  isActive={expandedCard === category.id}
                  onClick={() => toggleCard(category.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Desktop Tabbed View */}
        <motion.div 
          className="hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="flex flex-wrap justify-center mb-8 border-b border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {membershipCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-all duration-300 relative overflow-hidden group ${
                  activeTab === category.id
                    ? 'text-[#1B365D] bg-white border-t-2 border-l-2 border-r-2 border-gray-200 border-b-0'
                    : 'text-gray-600 hover:text-[#1B365D] hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.title}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00A86B] transform origin-left transition-transform duration-300 ${
                    activeTab === category.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {membershipCategories.map((category) => (
                activeTab === category.id && (
                  <motion.div
                    key={category.id}
                    className="p-8"
                    variants={tabContentVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    layoutId={category.id}
                  >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1B365D] to-[#00A86B] bg-clip-text text-transparent mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-8 text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    <motion.div 
                      className="mb-8"
                      initial="hidden"
                      animate="visible"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="space-y-3">
                        {category.requirements.map((req, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            custom={i}
                            variants={listItemVariants}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600">
                                <FaCheck className="h-3 w-3" />
                              </div>
                            </div>
                            <span className="ml-3 text-gray-700">{req}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Link 
                        href="/apply" 
                        className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#008a5a] to-[#00A86B] hover:from-[#00754d] hover:to-[#008a5a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A86B] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {category.ctaText}
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Membership Benefits</h4>
                    <ul className="space-y-4">
                      {category.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200"
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 text-blue-600">
                              <FaCheck className="h-4 w-4" />
                            </div>
                          </div>
                          <p className="ml-4 text-gray-700">{benefit}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 mb-6 text-lg">Not sure which membership is right for you?</p>
          <Link 
            href="/contact" 
            className="group inline-flex items-center text-[#1B365D] font-medium hover:text-[#00A86B] transition-colors duration-200 text-lg"
          >
            <span className="relative">
              Contact our team for guidance
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A86B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
