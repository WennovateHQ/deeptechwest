import React from 'react';

const ValuePropositionSection = () => {
  return (
    <section id="about" className="section bg-[#E8F4FD]">
      <div className="container-inner">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Research Breakthrough to Market Leadership</h2>
          <p className="text-lg text-[#6C757D]">
            Western Canada's universities produce world-class research in AI, IoT, and robotics. Deeptech West bridges the critical gap between discovery and commercialization, connecting exceptional talent with the resources needed to build global companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            <div className="text-4xl text-[#1B365D] mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Curated Excellence</h3>
            <p>High-quality membership standards ensure every interaction adds value to your deep tech journey</p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            <div className="text-4xl text-[#1B365D] mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Strategic Connections</h3>
            <p>Purpose-built network connecting researchers, entrepreneurs, and capital across the innovation spectrum</p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            <div className="text-4xl text-[#1B365D] mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Commercialization Focus</h3>
            <p>Specialized support for taking TRL 5+ technologies from lab to market leadership</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
