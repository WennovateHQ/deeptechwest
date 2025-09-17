import React from 'react';

type FocusAreaProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const FocusAreaCard: React.FC<FocusAreaProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:scale-105 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-[#1B365D]">{title}</h3>
        <p className="text-sm text-neutral-grey leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FocusAreasSection = () => {
  const focusAreas = [
    {
      title: 'Healthcare AI & IoT',
      description: 'Medical imaging, drug discovery, remote monitoring, clinical decision support',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Agriculture & Food Security',
      description: 'Precision agriculture, crop optimization, livestock monitoring, supply chain intelligence',
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Smart Logistics & Supply Chain',
      description: 'Route optimization, inventory management, asset tracking, automated quality control',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Financial Technology',
      description: 'Fraud detection, risk assessment, algorithmic trading, regulatory compliance',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Educational Technology',
      description: 'Personalized learning, automated assessment, learning analytics, virtual tutoring',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Health & Wellness',
      description: 'Fitness optimization, mental health monitoring, rehabilitation support, environmental health',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Energy & Clean Technology',
      description: 'Smart grid optimization, renewable forecasting, carbon tracking, energy efficiency',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Robotics & Automation',
      description: 'Industrial automation, autonomous systems, human-robot interaction, robotic process optimization',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="focus" className="section bg-light-tech">
      <div className="container-inner">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep Tech Expertise Across Key Sectors</h2>
          <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
            Our community spans multiple industries, leveraging cutting-edge technologies to solve pressing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <FocusAreaCard
              key={index}
              title={area.title}
              description={area.description}
              imageUrl={area.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
