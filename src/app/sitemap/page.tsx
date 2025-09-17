import Link from 'next/link';

type SitemapSection = {
  title: string;
  links: {
    title: string;
    href: string;
    description?: string;
  }[];
};

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    links: [
      {
        title: 'Home',
        href: '/',
        description: 'Welcome to Deep Tech Entrepreneurial Network - Western Canada'
      },
      {
        title: 'About',
        href: '/#about',
        description: 'Learn about our mission and vision'
      },
      {
        title: 'Membership',
        href: '/#membership',
        description: 'Discover membership benefits and join our network'
      },
      {
        title: 'Focus Areas',
        href: '/#focus',
        description: 'Explore our key focus areas in deep tech'
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Events',
        href: '/events',
        description: 'Upcoming workshops, seminars, and networking events'
      },
      {
        title: 'Resources',
        href: '/resources',
        description: 'Tools and materials for deep tech entrepreneurs'
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Insights and updates from the deep tech ecosystem'
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'How we handle your personal information'
      },
      {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Terms and conditions for using our website'
      },
      {
        title: 'Cookies Policy',
        href: '/cookies',
        description: 'Information about our use of cookies'
      },
      {
        title: 'Sitemap',
        href: '/sitemap',
        description: 'Complete overview of all pages on our website'
      }
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B365D] mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            Explore all the pages and sections of our website
          </p>
        </div>

        <div className="space-y-12">
          {sitemapData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#1B365D] px-6 py-4">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="p-6 hover:bg-gray-50 transition-colors">
                    <Link 
                      href={link.href} 
                      className="text-lg font-medium text-[#00A86B] hover:underline block mb-1"
                    >
                      {link.title}
                    </Link>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" className="text-[#00A86B] hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
