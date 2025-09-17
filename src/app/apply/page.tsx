import React from 'react';

const ApplicationPage = () => {
  return (
    <div className="min-h-screen bg-light-tech">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B365D] to-[#00A86B] text-white py-20">
        <div className="container-inner mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Deep Tech Journey?
            </h1>
            <p className="text-xl text-light-tech">
              Join Western Canada's most connected and impactful deep tech community. 
              Our rigorous selection process ensures you're connecting with the region's most promising innovators and strategic partners.
            </p>
          </div>
        </div>
      </section>

      {/* Discord Call-to-Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community on Discord</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We've moved our application process to Discord! Join our community to connect with other members, 
                  access exclusive resources, and start your journey with Deep Tech Entrepreneurial Network.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <a 
                  href="https://discord.gg/Hh7JrF6K" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.32 4.37a19.79 19.79 0 00-4.9-1.52.07.07 0 00-.08.03c-.2.4-.45.86-.62 1.25a18.27 18.27 0 00-5.49 0 12.64 12.64 0 00-.62-1.25.07.07 0 00-.08-.03A19.71 19.71 0 003.68 4.37a.07.07 0 00-.04.03C.5 9.05-.32 13.58.1 18.05a.07.07 0 00.02.04 19.9 19.9 0 006 3.03.07.07 0 00.08-.03c.42-.63.8-1.3 1.12-2a.07.07 0 00-.04-.1 13.2 13.2 0 01-1.82-.9.07.07 0 01-.01-.11c.1-.08.22-.17.32-.25a.07.07 0 01.08 0 14.13 14.13 0 0012.06 0 .07.07 0 01.08 0c.1.08.22.17.32.25a.07.07 0 01-.01.11 13.2 13.2 0 01-1.82.9.07.07 0 00-.04.1c.32.7.7 1.37 1.12 2a.07.07 0 00.08.03 19.9 19.9 0 006-3.03.07.07 0 00.02-.04c.5-5.18-.8-9.7-3.56-13.65a.07.07 0 00-.03-.04zM8.02 15.33c-1.2 0-2.2-1.12-2.2-2.5 0-1.37.97-2.5 2.2-2.5 1.23 0 2.23 1.13 2.2 2.5 0 1.38-.97 2.5-2.2 2.5zm7.97 0c-1.2 0-2.2-1.12-2.2-2.5 0-1.37.97-2.5 2.2-2.5 1.23 0 2.23 1.13 2.2 2.5 0 1.38-.97 2.5-2.2 2.5z"/>
                  </svg>
                  <span>Join Our Discord Server</span>
                </a>
                
                <div className="mt-8 text-sm text-gray-500">
                  <p>By joining, you agree to our <a href="/code-of-conduct" className="text-[#00A86B] hover:underline">Code of Conduct</a></p>
                  <p className="mt-2">Need help? <a href="mailto:support@deeptechwest.ca" className="text-[#00A86B] hover:underline">Contact our support team</a></p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Why Discord?</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Real-time Communication</h4>
                  <p className="text-sm text-gray-600">Connect instantly with other members and the community team</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Exclusive Resources</h4>
                  <p className="text-sm text-gray-600">Access member-only channels with valuable resources and documents</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-blue-600 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Networking</h4>
                  <p className="text-sm text-gray-600">Meet and collaborate with other deep tech enthusiasts and professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1B365D] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Joining?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team is here to help you through the process of joining our community.
          </p>
          <a 
            href="mailto:hello@deeptechwest.ca" 
            className="inline-flex items-center gap-2 bg-white text-[#1B365D] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApplicationPage;
