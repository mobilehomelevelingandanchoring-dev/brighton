'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Phone, MapPin, ChevronDown, Clock, Shield, Car, Star } from 'lucide-react'

const trustBadges = [
  { icon: Clock, label: 'Open 7 Days' },
  { icon: Shield, label: 'Hand Washed Every Time' },
  { icon: Car, label: 'All Vehicle Sizes' },
  { icon: MapPin, label: 'Marina Square Location' },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/brighton-marina-car-wash-team-service.jpg"
          alt="Brighton Marina hand car wash team professionally cleaning a vehicle at Marina Square"
          fill
          priority
          quality={90}
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-[#080c14]/80" />

      {/* Blue shimmer on top of photo */}
      <div
        className="absolute inset-0 animate-pulse-slow pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(14,165,233,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-sm font-medium mb-6"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
          Brighton Marina · Marina Square · BN2 5UT
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#f0f9ff] leading-tight mb-5 text-balance"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          Brighton Marina&apos;s{' '}
          <span className="gradient-text">Professional</span>{' '}
          Hand Car Wash
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          Expert hand car wash and valeting at Marina Square, Brighton.
          Clear pricing, every vehicle size, 7 days a week.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold text-base hover:opacity-90 hover:shadow-sky-glow transition-all btn-glow"
          >
            See Our Prices
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold text-base transition-all"
          >
            <MapPin className="w-4 h-4" />
            Find Us at the Marina
          </Link>
        </div>

        {/* Phone */}
        <a
          href="tel:+447392596532"
          className="inline-flex items-center gap-2 text-[#38bdf8] hover:text-white transition-colors mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}
        >
          <Phone className="w-4 h-4" />
          <span className="font-mono font-medium">+44 7392 596532</span>
        </a>

        {/* Trust badges */}
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 0.5s',
          }}
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1624]/80 border border-[#1e3a5f] text-sm text-[#94a3b8] backdrop-blur-sm"
            >
              <Icon className="w-4 h-4 text-[#0ea5e9]" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-xs text-[#475569]">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-[#1e3a5f]" />
      </div>
    </section>
  )
}
