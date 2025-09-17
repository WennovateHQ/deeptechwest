import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last Updated: September 5, 2024
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-[#1B365D]">
            <h2 className="text-xl font-semibold text-white">
              Deep Tech Entrepreneurial Network - Western Canada
            </h2>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6 space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing or using the services provided by Deep Tech Entrepreneurial Network - Western Canada ("we," "us," or "our"), 
                you agree to be bound by these Terms of Service and our <Link href="/privacy" className="text-[#00A86B] hover:underline">Privacy Policy</Link>. 
                These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h3>
              <p className="text-gray-700 mb-4">
                We provide a platform that connects deep tech entrepreneurs, researchers, and investors across Western Canada. 
                Our services include networking events, educational resources, and access to a community of like-minded professionals.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h3>
              <p className="text-gray-700 mb-2">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                All content included on our website, including text, graphics, logos, and software, is the property of Deep Tech Entrepreneurial Network 
                or its content suppliers and protected by Canadian and international copyright laws. You may not reproduce, distribute, or create derivative 
                works without our express written permission.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h3>
              <p className="text-gray-700 mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Use our services for any illegal purpose or in violation of any laws</li>
                <li>Post or transmit any harmful, offensive, or inappropriate content</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Collect or harvest any information from our services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by applicable law, Deep Tech Entrepreneurial Network shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss 
                of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws 
                of Canada applicable therein, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject 
                to the exclusive jurisdiction of the courts of British Columbia.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the updated Terms 
                on our website and updating the "Last Updated" date. Your continued use of our services after any changes constitutes your acceptance 
                of the new Terms.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h3>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> <a href="mailto:legal@deeptechwest.ca" className="text-[#00A86B] hover:underline">legal@deeptechwest.ca</a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Mail:</strong> Legal Department, Deep Tech Entrepreneurial Network - Western Canada, [Your Address], Canada
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>This document was last updated on September 5, 2024</p>
        </div>
      </div>
    </div>
  );
}
