import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle2, ChevronRight, Star } from 'lucide-react'
import { getServiceBySlug, getAllServiceSlugs, servicePages } from '@/lib/service-pages'
import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const BASE_URL = 'https://cardetailinginbrighton.co.uk'
  return {
    title: service.title,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: { canonical: `${BASE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${BASE_URL}/services/${service.slug}`,
      type: 'website',
      siteName: 'Car Detailing in Brighton',
    },
  }
}

export default async function ServiceSiloPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const BASE_URL = 'https://cardetailinginbrighton.co.uk'

  const relatedServices = servicePages.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${BASE_URL}/services/${service.slug}` },
    ],
  }

  const serviceSchema = generateServiceSchema(
    service.name,
    service.description.slice(0, 200),
    service.priceFrom.replace('£', '')
  )

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      <BreadcrumbNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#080c14] to-[#0f1624]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Brighton Marina · Marina Square · BN2 5UT
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-5 leading-tight">
            {service.h1}
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl mb-3">
            {service.intro}
          </p>
          <p className="text-2xl font-bold text-[#38bdf8] mb-8">
            From {service.priceFrom}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447495885042"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 transition-all btn-glow"
            >
              <Phone className="w-4 h-4" />
              Call +44 7495 885042
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold transition-all"
            >
              View All Prices
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-8 px-4 sm:px-6 bg-[#0f1624] border-y border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {[
              'Open 7 Days · 9am–6pm',
              'Walk-ins Welcome',
              'Transparent Pricing',
              'Free Marina Parking',
              'All Vehicle Sizes',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-4">
                  What Is {service.name}?
                </h2>
                <p className="text-[#94a3b8] leading-relaxed">{service.description}</p>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 bg-[#0f1624] border border-[#1e3a5f] rounded-2xl"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#f0f9ff] mb-1">{step.title}</h3>
                        <p className="text-sm text-[#94a3b8] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">
                  Benefits of {service.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#0f1624] border border-[#1e3a5f] rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
                      <h3 className="font-semibold text-[#f0f9ff] mb-2">{faq.question}</h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#f0f9ff] mb-5">Related Services</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group p-5 bg-[#0f1624] border border-[#1e3a5f] rounded-2xl hover:border-[#0ea5e9]/40 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-[#f0f9ff] group-hover:text-[#38bdf8] transition-colors text-sm">
                            {s.name}
                          </h3>
                          <ChevronRight className="w-4 h-4 text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors" />
                        </div>
                        <p className="text-xs text-[#64748b]">From {s.priceFrom}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-5">
                  <p className="text-3xl font-bold text-[#38bdf8]">{service.priceFrom}</p>
                  <p className="text-xs text-[#64748b] mt-1">Starting price — confirmed before we begin</p>
                </div>
                <a
                  href="tel:+447495885042"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold mb-3 hover:opacity-90 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold text-sm transition-all"
                >
                  Get Directions
                </Link>

                <div className="mt-5 pt-5 border-t border-[#1e3a5f] space-y-3 text-sm text-[#94a3b8]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <span>Marina Square, Brighton Marina, BN2 5UT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                    <span>Mon–Sun: 9am – 6pm</span>
                  </div>
                </div>
              </div>

              {/* Areas served */}
              <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6">
                <h3 className="font-bold text-[#f0f9ff] mb-4 text-sm">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Brighton Marina', 'Hove', 'Kemptown', 'Rottingdean',
                    'Saltdean', 'Preston Park', 'Hanover', 'Whitehawk',
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-2 py-1 rounded-lg bg-[#080c14] border border-[#1e3a5f] text-xs text-[#64748b]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <Link
                  href="/areas"
                  className="mt-4 block text-xs text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
                >
                  View all areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Book Your {service.name} Today
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Walk in any day 9am–6pm at Brighton Marina, or call ahead for specialist services.
            Price always confirmed before we start — no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447495885042"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +44 7495 885042
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors border border-blue-600"
            >
              All Services & Prices
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
