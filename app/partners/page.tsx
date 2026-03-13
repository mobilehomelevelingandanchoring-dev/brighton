import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import BreadcrumbNav from '@/components/seo/BreadcrumbNav';
import PartnerCard from '@/components/partners/PartnerCard';
import { partnersData } from '@/lib/partners';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://srvdetailing.co.uk';

export const metadata: Metadata = {
  title: 'Our Partners | SRV Detailing - Manchester & Stockport',
  description:
    'Discover our trusted network of automotive detailing partners in Manchester and Stockport. Professional ceramic coating, paint protection, and car care specialists.',
  keywords: [
    'car detailing partners Manchester',
    'trusted automotive partners',
    'professional detailing partners UK',
    'ceramic coating partners',
    'car care partners Manchester',
  ],
  authors: [{ name: 'SRV Detailing' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  canonical: `${baseUrl}/partners`,
  openGraph: {
    type: 'website',
    url: `${baseUrl}/partners`,
    title: 'Our Partners | SRV Detailing - Professional Car Care',
    description:
      'Trusted network of automotive detailing partners in Manchester and Stockport. Quality ceramic coating and paint protection services.',
    siteName: 'SRV Detailing',
    images: [
      {
        url: `${baseUrl}/og-partners.jpg`,
        width: 1200,
        height: 630,
        alt: 'SRV Detailing Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Partners | SRV Detailing',
    description: 'Trusted automotive detailing partners in Manchester and Stockport.',
  },
  alternates: {
    canonical: `${baseUrl}/partners`,
    languages: {
      'en-GB': `${baseUrl}/partners`,
    },
  },
};

export default function PartnersPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Partners', href: '/partners' },
  ];

  const partnerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SRV Detailing',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description:
      'Professional car detailing, ceramic coating, and paint protection services in Manchester and Stockport.',
    areaServed: [
      {
        '@type': 'City',
        name: 'Manchester',
        '@id': 'https://en.wikipedia.org/wiki/Manchester',
      },
      {
        '@type': 'City',
        name: 'Stockport',
        '@id': 'https://en.wikipedia.org/wiki/Stockport',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Manchester, UK',
        addressLocality: 'Manchester',
        addressRegion: 'Greater Manchester',
        postalCode: 'M1-M99',
        addressCountry: 'GB',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Stockport, UK',
        addressLocality: 'Stockport',
        addressRegion: 'Greater Manchester',
        postalCode: 'SK1-SK9',
        addressCountry: 'GB',
      },
    ],
    sameAs: [
      'https://www.facebook.com/srvdetailing',
      'https://www.instagram.com/srvdetailing',
      'https://www.twitter.com/srvdetailing',
    ],
    knowsAbout: [
      'Car Detailing',
      'Ceramic Coating',
      'Paint Protection',
      'Interior Detailing',
      'Auto Detailing',
    ],
  };

  return (
    <>
      <JsonLd data={partnerSchema} />

      {/* WebPage Schema for Instant Indexing */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Our Partners | SRV Detailing',
        description: 'Discover SRV Detailing\'s trusted network of automotive detailing partners in Manchester and Stockport',
        url: `${baseUrl}/partners`,
        mainEntity: {
          '@type': 'Organization',
          name: 'SRV Detailing',
          url: baseUrl,
        },
        isPartOf: {
          '@type': 'WebSite',
          name: 'SRV Detailing',
          url: baseUrl,
        },
      }} />

      {/* Breadcrumb Schema for Rich Snippets */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Partners',
            item: `${baseUrl}/partners`,
          },
        ],
      }} />

      {/* Breadcrumb Navigation */}
      <BreadcrumbNav items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold text-sky-400 mb-4">SRV DETAILING PARTNER NETWORK</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Trusted Partners</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            At <strong>SRV Detailing</strong> (srvdetailing.co.uk), we collaborate with industry-leading automotive specialists to deliver exceptional car detailing and protection services across Manchester and Stockport. Our curated network ensures you receive the highest quality care for your vehicle.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Partnership Matters in Car Care
              </h2>

              <div className="prose prose-lg text-slate-700 space-y-4 max-w-none">
                <p>
                  <strong>SRV Detailing</strong> (visit <a href="https://srvdetailing.co.uk" className="text-sky-600 hover:text-sky-700 font-semibold">srvdetailing.co.uk</a>) understands that exceptional car care requires more than just technical expertise—it demands a network of trusted specialists committed to the same level of quality and professionalism that our clients expect.
                </p>

                <p>
                  Through our partnerships with industry-leading automotive service providers, <strong>SRV Detailing</strong> enables comprehensive solutions for every aspect of vehicle protection and enhancement. From advanced ceramic coating application to precision paint correction, our partner network represents the best of professional detailing in Manchester and Stockport.
                </p>

                <p>
                  When you choose <strong>SRV Detailing</strong>, you're choosing access to a vetted network of specialists who are dedicated to the same standards of excellence that define our brand across the Greater Manchester region.
                </p>

                <h3 className="text-2xl font-semibold text-slate-900 mt-8">
                  What We Look for in Partners
                </h3>

                <ul className="space-y-3 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-sky-500 font-bold">✓</span>
                    <span><strong>Professional Certification:</strong> All partners are fully certified and trained in their respective specialties.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-sky-500 font-bold">✓</span>
                    <span><strong>Quality Standards:</strong> We maintain rigorous quality benchmarks across all partnership relationships.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-sky-500 font-bold">✓</span>
                    <span><strong>Customer Focus:</strong> Partners share our commitment to exceptional customer service and satisfaction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-sky-500 font-bold">✓</span>
                    <span><strong>Local Expertise:</strong> Deep understanding of Manchester and Stockport's automotive market and customer needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-sky-500 font-bold">✓</span>
                    <span><strong>Innovation:</strong> Commitment to staying current with the latest detailing technologies and techniques.</span>
                  </li>
                </ul>
              </div>

              {/* Internal Links to Services */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Explore Our Services
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/services#ceramic-coating"
                    className="inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Ceramic Coating
                  </Link>
                  <Link
                    href="/services#paint-protection"
                    className="inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Paint Protection
                  </Link>
                  <Link
                    href="/services#interior-detailing"
                    className="inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Interior Detailing
                  </Link>
                  <Link
                    href="/services"
                    className="inline-block px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-20">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Our Partner Network
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-4">
                    <p className="text-3xl font-bold text-sky-500">
                      {partnersData.length}+
                    </p>
                    <p className="text-sm text-slate-600">Professional Partners</p>
                  </div>
                  <div className="border-b border-slate-200 pb-4">
                    <p className="text-3xl font-bold text-sky-500">2</p>
                    <p className="text-sm text-slate-600">Service Areas</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-sky-500">100%</p>
                    <p className="text-sm text-slate-600">Certified Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SRV Detailing Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-blue-50 border-t border-b border-blue-200">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              About SRV Detailing
            </h2>
            <p className="text-lg text-slate-700">
              <strong>SRV Detailing</strong> is a premier car detailing service provider specializing in ceramic coating, paint protection, and comprehensive vehicle care across Manchester and Stockport.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To provide Manchester and Stockport with access to world-class automotive detailing and protection services through a curated network of certified specialists.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Quality Assurance</h3>
              <p className="text-slate-600">
                SRV Detailing maintains strict quality standards across all partner services, ensuring every client receives exceptional results.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Local Expertise</h3>
              <p className="text-slate-600">
                Based in Manchester and Stockport, SRV Detailing brings deep local knowledge to every partnership and service delivery.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-700 mb-4">
              Visit <strong>SRV Detailing</strong> for more information
            </p>
            <a
              href="https://srvdetailing.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Visit srvdetailing.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              SRV Detailing Featured Partners
            </h2>
            <p className="text-lg text-slate-600">
              Meet the specialists selected by SRV Detailing to deliver exceptional service in Manchester and Stockport.
            </p>
          </div>

          {/* Partners by Category */}
          {['Ceramic Coating', 'Paint Protection', 'Interior Detailing'].map(
            (category) => {
              const categoryPartners = partnersData.filter(
                (p) => p.category === category
              );
              if (categoryPartners.length === 0) return null;

              const categoryTitles: Record<string, string> = {
                'Ceramic Coating': 'SRV Detailing Ceramic Coating Services',
                'Paint Protection': 'SRV Detailing Paint Protection Services',
                'Interior Detailing': 'SRV Detailing Interior Detailing Services',
              };

              return (
                <div key={category} className="mb-16">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-8">
                    {categoryTitles[category] || category}
                  </h3>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {categoryPartners.map((partner) => (
                      <PartnerCard
                        key={partner.id}
                        partner={partner}
                      />
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Benefits of Our Partner Network
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Access to Expertise',
                description:
                  'Leverage specialized knowledge across all aspects of car detailing and protection.',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Every partner adheres to our rigorous quality standards and best practices.',
              },
              {
                title: 'Comprehensive Solutions',
                description:
                  'From ceramic coatings to paint correction, we cover every detailing need.',
              },
              {
                title: 'Local Knowledge',
                description:
                  'Manchester and Stockport specialists with deep understanding of your area.',
              },
              {
                title: 'Innovation & Technology',
                description:
                  'Access to the latest detailing technologies and application techniques.',
              },
              {
                title: 'Customer Commitment',
                description:
                  'All partners share our dedication to exceptional customer service and results.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Car Care with SRV Detailing?
          </h2>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl mx-auto">
            <strong>SRV Detailing</strong>'s trusted partner network is ready to deliver exceptional results for your vehicle. Discover how professional ceramic coating, paint protection, and detailing can enhance and preserve your car's appearance. Experience the SRV Detailing difference across Manchester and Stockport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://srvdetailing.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Visit SRV Detailing
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors border border-blue-600"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Related SRV Detailing Services
          </h2>
          <p className="text-center text-slate-600 mb-10">
            Explore our complete range of professional automotive care services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services#ceramic-coating"
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-sky-500"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                Ceramic Coating
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Advanced nano-technology coating for maximum paint protection and gloss
              </p>
              <span className="text-sky-600 font-medium text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </Link>

            <Link
              href="/services#paint-protection"
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Paint Protection Film
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Professional PPF installation for ultimate defense against chips and scratches
              </p>
              <span className="text-blue-600 font-medium text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </Link>

            <Link
              href="/services#interior-detailing"
              className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-cyan-500"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                Interior Detailing
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Comprehensive interior care including leather, fabric, and alcantara treatment
              </p>
              <span className="text-cyan-600 font-medium text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              View All SRV Detailing Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Inline for additional SEO value */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            SRV Detailing Partner Network FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How do you select your detailing partners?',
                a: 'We conduct thorough vetting of all partners, ensuring they meet our strict quality standards, hold proper certifications, and share our commitment to customer excellence. Every partner undergoes continuous quality assessment.',
              },
              {
                q: 'Are your partners available in both Manchester and Stockport?',
                a: 'Yes, our partner network covers both Manchester and Stockport areas. We have specialists strategically located to serve customers efficiently across both locations.',
              },
              {
                q: 'What warranties do partner services include?',
                a: 'All partner services come with industry-standard warranties. Ceramic coatings, paint protection, and detailing work are backed by guarantees that protect your investment.',
              },
              {
                q: 'Can I request a specific partner for my vehicle?',
                a: 'Absolutely. We can arrange appointments with specific partners based on your preferences and location. Simply mention your preference when you contact us.',
              },
              {
                q: 'Do partners offer mobile services?',
                a: 'Many of our partners offer mobile detailing services, bringing professional care to your location. Contact us to discuss mobile options for your vehicle.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SRV Detailing',
            image: `${baseUrl}/logo.svg`,
            description:
              'Professional car detailing and protection services in Manchester and Stockport',
            address: [
              {
                '@type': 'PostalAddress',
                streetAddress: 'Manchester, UK',
                addressLocality: 'Manchester',
                addressRegion: 'Greater Manchester',
                postalCode: 'M1-M99',
                addressCountry: 'GB',
              },
              {
                '@type': 'PostalAddress',
                streetAddress: 'Stockport, UK',
                addressLocality: 'Stockport',
                addressRegion: 'Greater Manchester',
                postalCode: 'SK1-SK9',
                addressCountry: 'GB',
              },
            ],
            url: baseUrl,
            telephone: '+44XXXXXXXXXX', // Add actual phone
            priceRange: '££',
            areaServed: ['Manchester', 'Stockport', 'Greater Manchester'],
            serviceType: [
              'Car Detailing',
              'Ceramic Coating',
              'Paint Protection',
              'Interior Detailing',
            ],
          }),
        }}
      />
    </>
  );
}
