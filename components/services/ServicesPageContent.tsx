'use client'

import { Check, Phone } from 'lucide-react'
import Link from 'next/link'
import PricingTable from '@/components/shared/PricingTable'
import VehicleSizeGuide from '@/components/shared/VehicleSizeGuide'
import FAQAccordion from '@/components/shared/FAQAccordion'
import PaymentBadges from '@/components/shared/PaymentBadges'
import FadeIn from '@/components/shared/FadeIn'
import { faqs } from '@/lib/faqs'
import { additionalServices } from '@/lib/pricing'

export default function ServicesPageContent() {
  return (
    <div className="space-y-16">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-4">
          Hand Car Wash &amp; Valeting Services
          <span className="block text-2xl sm:text-3xl gradient-text mt-2">at Brighton Marina</span>
        </h1>
        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
          All prices listed by vehicle size. We always confirm your price before any work begins —
          no hidden charges, no surprises.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-2">Pricing by Service &amp; Vehicle Size</h2>
          <p className="text-[#94a3b8] text-sm">Select a service tab to see prices per vehicle size.</p>
        </div>
        <PricingTable />
      </FadeIn>

      <FadeIn id="vehicle-sizes">
        <h2 className="text-2xl font-bold text-[#f0f9ff] mb-2">Vehicle Size Guide</h2>
        <p className="text-[#94a3b8] text-sm mb-6">
          Use this guide to identify your vehicle&apos;s size category. Not sure? Our team will confirm before we start.
        </p>
        <VehicleSizeGuide />
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">Additional Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {additionalServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5 hover:border-[#0ea5e9]/50 transition-all"
            >
              <h3 className="font-semibold text-[#f0f9ff] mb-1">{service.name}</h3>
              <p className="text-sm text-[#94a3b8] mb-3">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#38bdf8]">
                  From <span className="text-[#f59e0b] font-bold text-base">£{service.startingPrice}</span>
                </span>
                <a href="tel:+447392596532" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
                  Call for quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">What&apos;s Included — At a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: 'Exterior Wash', id: 'exterior',
              items: ['Pre-rinse', 'Hand wash with premium shampoo', 'Wheel & tyre clean', 'Rinse & hand dry', 'Exterior windows'],
            },
            {
              label: 'Mini Valet', id: 'mini',
              items: ['Everything in Exterior Wash', 'Interior hoover', 'Dashboard & console wipe', 'Door cards & sills', 'Interior windows'],
            },
            {
              label: 'Full Valet', id: 'full',
              items: ['Everything in Mini Valet', 'Seat & carpet shampoo', 'Leather conditioning', 'Door shuts cleaned', 'Tyre dressing & exterior wax'],
            },
          ].map((tier) => (
            <div key={tier.id} id={tier.id} className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
              <h3 className="font-semibold text-[#f0f9ff] mb-3">{tier.label}</h3>
              <ul className="space-y-2">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                    <Check className="w-4 h-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6">
          <h3 className="font-semibold text-[#f0f9ff] mb-3">Payment Methods</h3>
          <PaymentBadges />
          <p className="mt-3 text-sm text-[#94a3b8]">
            Payment is taken after your car is washed and you have inspected the result.
          </p>
        </div>
      </FadeIn>

      <FadeIn id="faq">
        <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 p-5 bg-[#0f1624] border border-[#1e3a5f] rounded-2xl">
          <Phone className="w-5 h-5 text-[#0ea5e9] flex-shrink-0" />
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm text-[#94a3b8]">Still have a question?</p>
            <p className="font-semibold text-[#f0f9ff]">Call us and we will be happy to help.</p>
          </div>
          <a
            href="tel:+447392596532"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold text-sm whitespace-nowrap hover:opacity-90 transition-all"
          >
            +44 7392 596532
          </a>
        </div>
      </FadeIn>

      <FadeIn className="text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-base hover:opacity-90 hover:shadow-sky-glow transition-all btn-glow"
        >
          Find Us at Brighton Marina
        </Link>
        <p className="mt-3 text-sm text-[#94a3b8]">Walk-ins welcome · Open 7 days · 9am – 6pm</p>
      </FadeIn>
    </div>
  )
}
