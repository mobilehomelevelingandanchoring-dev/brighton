'use client'

import { Hand, MapPin, Shield, Leaf } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/shared/FadeIn'

const values = [
  {
    icon: Hand,
    title: 'Always By Hand',
    description: 'We never use automated brush machines that scratch paintwork. Every car is washed with clean mitts and quality shampoos by experienced hands.',
  },
  {
    icon: Shield,
    title: 'Transparent & Fair',
    description: 'Our prices are published online and always confirmed before we start. If your car is on the boundary between size categories, we will show you and agree the price together.',
  },
  {
    icon: MapPin,
    title: 'Marina Location',
    description: "Brighton Marina is one of the UK's largest marinas — a great base for us. Easy to reach from central Brighton, Kemp Town, Rottingdean, and beyond. Free parking on site.",
  },
  {
    icon: Leaf,
    title: 'Quality Products',
    description: "We use pH-neutral shampoos, non-acidic wheel cleaners, and professional interior products that are safe on all surfaces. Your car is in safe hands.",
  },
]

export default function AboutPageContent() {
  return (
    <div className="space-y-16">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-4">
          About Brighton Marina
          <span className="block gradient-text">Hand Car Wash</span>
        </h1>
        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
          We are a professional hand car wash and valeting service based at Marina Square,
          Brighton Marina. Our team is committed to delivering great results at prices that
          are transparent, fair, and published upfront.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-4">Our Story</h2>
          <div className="space-y-4 text-[#94a3b8] leading-relaxed">
            <p>
              Brighton Marina Hand Car Wash was established to bring genuine quality and pricing
              honesty to car washing in Brighton. Too often, customers arrive at car washes
              only to be surprised by the final bill — particularly when it comes to larger vehicles
              or SUVs.
            </p>
            <p>
              We set out to fix that. Every price we charge is determined by vehicle size, listed
              publicly, and confirmed with the customer before a single drop of water is applied.
              Simple as that.
            </p>
            <p>
              Located in the heart of Brighton Marina at Marina Square, we are convenient for
              customers across Brighton, Hove, Kemp Town, Rottingdean, Saltdean, and beyond.
              While we wash your car, you can explore the Marina, grab a coffee, or simply
              relax — knowing your car will be ready when you are.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={150}>
        <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <FadeIn key={value.title} delay={i * 80}>
                <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5 hover:border-[#0ea5e9]/40 transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600/20 to-blue-800/20 border border-sky-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0ea5e9]" />
                    </div>
                    <h3 className="font-semibold text-[#f0f9ff]">{value.title}</h3>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="bg-gradient-to-br from-sky-600/10 to-blue-800/10 border border-[#1e3a5f] rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-4">Our Location</h2>
          <p className="text-[#94a3b8] leading-relaxed mb-4">
            You will find us at <strong className="text-[#f0f9ff]">Marina Square, Brighton Marina</strong>,
            just off Marina Way. We are near the main car park entrance. Postcode: <strong className="text-[#38bdf8]">BN2 5UT</strong>.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mb-4">
            Brighton Marina is well-served by bus routes and has excellent road access from
            the A259 and A23. Plenty of free parking is available at the Marina.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            We serve customers from across Brighton and Hove, including Kemp Town, Rottingdean,
            Saltdean, Peacehaven, Lewes Road, and Preston Park.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 hover:shadow-sky-glow transition-all btn-glow"
        >
          See Our Services &amp; Prices
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold transition-all"
        >
          Get in Touch
        </Link>
      </FadeIn>
    </div>
  )
}
