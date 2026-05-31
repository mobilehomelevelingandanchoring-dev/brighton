import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Car Detailing FAQs Brighton | Prices, Services & Booking',
  description:
    'Frequently asked questions about car detailing, valeting, ceramic coating and paint correction in Brighton. Prices, booking, location and more answered.',
  alternates: { canonical: 'https://cardetailinginbrighton.co.uk/faq' },
  openGraph: {
    title: 'Car Detailing FAQs Brighton | Car Detailing in Brighton',
    description: 'All your questions about professional car detailing and valeting in Brighton answered.',
    url: 'https://cardetailinginbrighton.co.uk/faq',
    type: 'website',
    siteName: 'Car Detailing in Brighton',
  },
}

const faqCategories = [
  {
    category: 'Pricing',
    faqs: [
      {
        q: 'How much does a car wash cost in Brighton?',
        a: 'A professional exterior hand wash at Car Detailing in Brighton starts from £10 for a small car, £12 for medium, £14 for large, £16 for SUV/MPV, and £18 for vans. All prices are confirmed before we begin.',
      },
      {
        q: 'How much does a mini valet cost in Brighton?',
        a: 'A mini valet starts from £25 for a small car and varies by vehicle size up to approximately £45 for a large SUV or van. Pricing is always confirmed before work begins.',
      },
      {
        q: 'How much does a full car valet cost in Brighton?',
        a: 'A full valet starts from £50 for a small car, £60 for medium, £70 for large, £80 for SUV/MPV, and £90+ for vans. This includes a complete interior deep clean and full exterior detail.',
      },
      {
        q: 'How much does ceramic coating cost in Brighton?',
        a: 'Ceramic coating starts from £200 for a small car with a 1–2 year protection grade. Mid-tier coatings with multi-year warranties range from £350–£500. Premium packages with paint correction can reach £600+.',
      },
      {
        q: 'How much does paint correction cost in Brighton?',
        a: 'A 1-stage paint correction starts from £150. A 2-stage correction runs £250–£400. A full 3-stage correction can reach £600+ depending on vehicle size and paint condition.',
      },
      {
        q: 'How much does headlight restoration cost?',
        a: 'Headlight restoration starts from £40 per pair for light oxidation, rising to £80 for more severely degraded lenses requiring additional sanding stages.',
      },
      {
        q: 'Do you charge more for bigger cars?',
        a: 'Yes — pricing is based on vehicle size category: small, medium, large, SUV/MPV, and van. The exact price is confirmed before we begin so there are no surprises.',
      },
      {
        q: 'Are there any hidden charges?',
        a: 'No. We confirm the full price based on your vehicle size before any work begins. The price you are quoted is the price you pay.',
      },
    ],
  },
  {
    category: 'Services',
    faqs: [
      {
        q: 'What is the difference between car valeting and car detailing?',
        a: 'Valeting focuses on cleaning — removing dirt, grime, and contamination. Detailing goes further with paint decontamination, machine polishing, paint correction, protective coatings, and full restoration of both interior and exterior surfaces.',
      },
      {
        q: 'What is included in a mini valet?',
        a: 'A mini valet includes exterior hand wash, wheel clean, interior vacuum, dashboard and trim wipe, door shut clean, and interior and exterior glass clean.',
      },
      {
        q: 'What is included in a full valet?',
        a: 'A full valet includes everything in the mini valet plus deep interior shampoo, leather or fabric treatment, boot clean, thorough carpet clean, tyre dressing, paintwork protection, and full glass polish.',
      },
      {
        q: 'What is ceramic coating?',
        a: 'Ceramic coating is a liquid polymer that chemically bonds to your car\'s paintwork, creating a semi-permanent hydrophobic and UV-resistant protective layer that lasts 1–5 years depending on the grade applied.',
      },
      {
        q: 'What is paint correction?',
        a: 'Paint correction is the professional removal of surface defects — swirl marks, fine scratches, oxidation — from a car\'s clear coat using machine polishers and cutting compounds.',
      },
      {
        q: 'Do you remove pet hair from car interiors?',
        a: 'Yes — we remove pet hair as part of our interior detailing service using specialist rubber brushes and professional extraction vacuums.',
      },
      {
        q: 'Can you remove smoke smell from a car?',
        a: 'We address smoke odour through thorough interior cleaning and deodourising treatments. Results depend on how deeply the smoke has penetrated surfaces. Call +44 7495 885042 to discuss your specific situation.',
      },
      {
        q: 'Can you detail electric vehicles?',
        a: 'Yes — we detail electric vehicles including Tesla, BMW i-series, and Porsche Taycan. EV paint is typically identical to petrol/diesel vehicles and all our services apply equally.',
      },
    ],
  },
  {
    category: 'Location & Booking',
    faqs: [
      {
        q: 'Where is Car Detailing in Brighton located?',
        a: 'We are at Marina Square, Brighton Marina, Brighton, BN2 5UT — inside the Marina complex off Marina Way, near the main car park entrance.',
      },
      {
        q: 'Do I need to book in advance?',
        a: 'Walk-ins are welcome for exterior washes and mini valets. Full valets, ceramic coating, and paint correction should be booked in advance by calling +44 7495 885042.',
      },
      {
        q: 'What are your opening hours?',
        a: 'We are open 7 days a week, Monday to Sunday, 9:00am to 6:00pm, including bank holidays.',
      },
      {
        q: 'Is there parking at Brighton Marina?',
        a: 'Yes — free parking is available throughout Brighton Marina while your car is being serviced. You can explore the Marina\'s shops, cafés, and restaurants while you wait.',
      },
      {
        q: 'How do I get to Brighton Marina from Brighton city centre?',
        a: 'Head east along Marine Parade (A259) from Brighton city centre. Continue into Brighton Marina and follow signs for Marina Square. The drive takes approximately 10 minutes from the city centre.',
      },
      {
        q: 'Do you serve Hove?',
        a: 'Yes — we serve customers from Hove, approximately 15 minutes east along the A259 coast road. All our services are available to Hove customers.',
      },
      {
        q: 'Do you serve Rottingdean and Saltdean?',
        a: 'Yes — we are the nearest professional car wash to both Rottingdean and Saltdean, just 12–15 minutes west along the coast road.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, credit card, debit card, and contactless payment.',
      },
    ],
  },
  {
    category: 'Car Care & Advice',
    faqs: [
      {
        q: 'How often should I get my car detailed in Brighton?',
        a: 'Due to Brighton\'s coastal salt air and UV exposure, we recommend a full detail every 3–4 months and a maintenance wash every 2–4 weeks to prevent paint degradation.',
      },
      {
        q: 'Is hand car wash better than an automatic car wash?',
        a: 'Yes — automatic car washes with rotating brushes are a leading cause of swirl marks and paint scratches. Professional hand washing with proper technique and products is significantly safer for your paintwork.',
      },
      {
        q: 'Is ceramic coating worth it in Brighton?',
        a: 'Especially so. Brighton\'s salt air, sea spray, and UV exposure make ceramic coating one of the most valuable investments a local car owner can make. It protects against all three and significantly extends paintwork life.',
      },
      {
        q: 'How do I maintain ceramic coating?',
        a: 'Wash with pH-neutral shampoo using the two-bucket method. Avoid automated car washes with brushes. Apply a ceramic booster spray every 3–6 months to maintain hydrophobic performance.',
      },
      {
        q: 'What causes swirl marks on car paint?',
        a: 'Swirl marks are caused by improper washing technique — using dirty sponges, single-bucket washing, circular scrubbing motions, or automated car washes with rotating brushes.',
      },
      {
        q: 'Can detailing improve my car\'s resale value?',
        a: 'Yes — a professionally detailed car consistently achieves higher private sale and part-exchange prices. Buyers assess condition heavily on first impression, and a clean, protected vehicle signals better overall maintenance.',
      },
      {
        q: 'Should I get my car detailed before selling it?',
        a: 'Absolutely. A full valet or detail before sale typically returns significantly more than its cost in improved sale price. Paint correction removes years of swirl damage and makes an older car look dramatically better.',
      },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    }))
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardetailinginbrighton.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://cardetailinginbrighton.co.uk/faq' },
    ],
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq' }]} />

      {/* Hero */}
      <section className="pt-28 pb-14 px-4 sm:px-6 bg-gradient-to-b from-[#080c14] to-[#0f1624]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-5">
            Frequently Asked
            <span className="block gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
            Everything you need to know about professional car detailing, valeting,
            ceramic coating, and paint correction in Brighton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447495885042"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 transition-all"
            >
              <Phone className="w-4 h-4" />
              Ask Us Directly
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold transition-all"
            >
              View Services & Prices
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6 pb-3 border-b border-[#1e3a5f]">
                {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5 hover:border-[#0ea5e9]/30 transition-colors"
                  >
                    <h3 className="font-semibold text-[#f0f9ff] mb-2">{faq.q}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-14 px-4 sm:px-6 bg-[#0f1624] border-t border-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-3">Still Have a Question?</h2>
          <p className="text-[#94a3b8] mb-7">
            Call us or visit us at Brighton Marina — walk-ins welcome 9am to 6pm, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447495885042"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 transition-all"
            >
              <Phone className="w-4 h-4" />
              +44 7495 885042
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold transition-all"
            >
              <MapPin className="w-4 h-4" />
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
