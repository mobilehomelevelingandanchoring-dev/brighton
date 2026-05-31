import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, ChevronRight, CheckCircle2 } from 'lucide-react'
import { getAreaBySlug, getAllAreaSlugs } from '@/lib/areas'
import { generateLocalBusinessSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) return {}
  const BASE_URL = 'https://cardetailinginbrighton.co.uk'
  return {
    title: area.title,
    description: area.metaDescription,
    keywords: [area.primaryKeyword, ...area.secondaryKeywords],
    alternates: { canonical: `${BASE_URL}/areas/${area.slug}` },
    openGraph: {
      title: area.title,
      description: area.metaDescription,
      url: `${BASE_URL}/areas/${area.slug}`,
      type: 'website',
      siteName: 'Car Detailing in Brighton',
    },
  }
}

const serviceLinks = [
  { href: '/services/car-detailing-brighton', label: 'Car Detailing' },
  { href: '/services/car-valeting-brighton', label: 'Car Valeting' },
  { href: '/services/ceramic-coating-brighton', label: 'Ceramic Coating' },
  { href: '/services/paint-correction-brighton', label: 'Paint Correction' },
  { href: '/services/interior-detailing-brighton', label: 'Interior Detailing' },
  { href: '/services/exterior-detailing-brighton', label: 'Exterior Detailing' },
  { href: '/services/headlight-restoration-brighton', label: 'Headlight Restoration' },
]

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) notFound()

  const BASE_URL = 'https://cardetailinginbrighton.co.uk'

  const breadcrumbs = [
    { name: 'Home', url: BASE_URL },
    { name: 'Areas We Serve', url: `${BASE_URL}/areas` },
    { name: area.name, url: `${BASE_URL}/areas/${area.slug}` },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <BreadcrumbNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve', href: '/areas' },
          { label: area.name, href: `/areas/${area.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#080c14] to-[#0f1624]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Serving {area.name}, {area.postcode}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-5 leading-tight">
            {area.h1}
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl mb-8">
            {area.intro}
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
              See Prices & Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey info */}
      <section className="py-10 px-4 sm:px-6 bg-[#0f1624] border-y border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0ea5e9]" />
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wide">Distance</p>
                <p className="text-sm font-semibold text-[#f0f9ff]">{area.distance} from Marina</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#0ea5e9]" />
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wide">Drive Time</p>
                <p className="text-sm font-semibold text-[#f0f9ff]">{area.travelTime} drive</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#0ea5e9]" />
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wide">Opening Hours</p>
                <p className="text-sm font-semibold text-[#f0f9ff]">7 Days · 9am – 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-4">
                  Car Detailing for {area.name} Residents
                </h2>
                <div className="space-y-4 text-[#94a3b8] leading-relaxed">
                  <p>{area.bodyParagraph}</p>
                  <p>{area.closingParagraph}</p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-5">
                  Services Available to {area.name} Customers
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#0f1624] border border-[#1e3a5f] hover:border-[#0ea5e9]/40 hover:text-[#38bdf8] text-[#94a3b8] transition-all group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                      <span className="text-sm font-medium">{s.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {area.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#f0f9ff] mb-5">
                    Frequently Asked Questions — {area.name}
                  </h2>
                  <div className="space-y-4">
                    {area.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5"
                      >
                        <h3 className="font-semibold text-[#f0f9ff] mb-2">{faq.question}</h3>
                        <p className="text-sm text-[#94a3b8] leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-[#f0f9ff] mb-5">Find Us</h3>
                <div className="space-y-4 text-sm text-[#94a3b8]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <address className="not-italic leading-relaxed">
                      Marina Square<br />
                      Brighton Marina<br />
                      Brighton, BN2 5UT
                    </address>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                    <a href="tel:+447495885042" className="hover:text-[#38bdf8] transition-colors">
                      +44 7495 885042
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                    <span>Mon–Sun: 9am – 6pm</span>
                  </div>
                </div>
                <a
                  href="tel:+447495885042"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold text-sm hover:opacity-90 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold text-sm transition-all"
                >
                  Get Directions
                </Link>
              </div>

              {/* Pricing */}
              <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6">
                <h3 className="font-bold text-[#f0f9ff] mb-4">Pricing</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: 'Exterior Wash', price: 'from £10' },
                    { label: 'Mini Valet', price: 'from £25' },
                    { label: 'Full Valet', price: 'from £50' },
                    { label: 'Ceramic Coating', price: 'from £200' },
                    { label: 'Paint Correction', price: 'from £150' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center justify-between">
                      <span className="text-[#94a3b8]">{item.label}</span>
                      <span className="text-[#38bdf8] font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-4 block text-center text-xs text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
                >
                  View full pricing →
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
            Ready to Book Your {area.name} Car Detail?
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            Walk in any day from 9am to 6pm — no booking needed for most services.
            Brighton Marina, Marina Square, BN2 5UT.
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors border border-blue-600"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
