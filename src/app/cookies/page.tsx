import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-4">Cookies Policy</h1>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h3>
              <p className="text-gray-700 mb-4">
                This Cookies Policy explains how Deep Tech Entrepreneurial Network - Western Canada ("we," "us," or "our") 
                uses cookies and similar tracking technologies when you visit our website. This policy is designed to comply with 
                Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and other applicable privacy laws.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies?</h3>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to the website owners.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h3>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-6">a. Essential Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in 
                response to actions made by you, such as setting your privacy preferences or filling in forms.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-6">b. Analytics Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. 
                They help us know which pages are the most and least popular and see how visitors move around the site.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-6">c. Functional Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by 
                third-party providers whose services we have added to our pages.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-6">d. Targeting/Advertising Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build 
                a profile of your interests and show you relevant advertisements on other sites.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Cookies</h3>
              <p className="text-gray-700 mb-2">We use cookies for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>To keep you signed in to your account</li>
                <li>To remember your preferences</li>
                <li>To understand how our website is being used</li>
                <li>To deliver targeted advertising</li>
                <li>To measure the effectiveness of our marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability 
                of websites to set cookies, you may worsen your overall user experience and/or prevent you from accessing certain 
                features of our website.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Browser Controls:</h4>
              <p className="text-gray-700 mb-2">You can set or amend your web browser controls to accept or refuse cookies. Here's how to do this:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#00A86B] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#00A86B] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#00A86B] hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#00A86B] hover:underline">Microsoft Edge</a></li>
              </ul>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Cookie Consent Tool:</h4>
              <p className="text-gray-700 mb-4">
                You can manage your cookie preferences for our website using our cookie consent tool, which appears when you first visit our site.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Cookies</h3>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set their own cookies to provide features on our website, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Google Analytics</li>
                <li>Social media platforms (e.g., LinkedIn, Twitter, Facebook)</li>
                <li>Embedded content (e.g., YouTube videos)</li>
                <li>Advertising networks</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These third-party services are governed by their own privacy policies, not this one. We recommend you review their policies.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new policy 
                on this page and updating the "Last Updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Cookies Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:privacy@deeptechwest.ca" className="text-[#00A86B] hover:underline">privacy@deeptechwest.ca</a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Mail:</strong> Privacy Officer, Deep Tech Entrepreneurial Network - Western Canada, [Your Address], Canada
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
