'use client'

import { Phone, MapPin, Clock, Instagram, Navigation } from 'lucide-react'
import ContactForm from '@/components/shared/ContactForm'
import DirectionsMap from '@/components/shared/DirectionsMap'
import OpeningHours from '@/components/shared/OpeningHours'
import FadeIn from '@/components/shared/FadeIn'

export default function ContactPageContent() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-4">
          Contact &amp; Find
          <span className="block gradient-text">Brighton Marina Hand Car Wash</span>
        </h1>
        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
          Walk-ins welcome — no booking needed for most services. Drop in any day from
          9am to 6pm or send us a message below.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FadeIn delay={100}>
          <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#f0f9ff] mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn delay={150} className="space-y-4">
          <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-[#0ea5e9]" />
              <h3 className="font-semibold text-[#f0f9ff]">Call Us</h3>
            </div>
            <a href="tel:+447392596532" className="text-2xl font-bold text-[#38bdf8] hover:text-white transition-colors font-mono block">
              +44 7392 596532
            </a>
            <p className="text-sm text-[#94a3b8] mt-1">Mon–Sun, 9am–6pm</p>
          </div>

          <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-[#0ea5e9]" />
              <h3 className="font-semibold text-[#f0f9ff]">Address</h3>
            </div>
            <address className="not-italic text-[#94a3b8] leading-relaxed">
              Marina Way, Marina Square<br />
              Brighton Marina<br />
              Brighton and Hove<br />
              <strong className="text-[#38bdf8]">BN2 5UT</strong>
            </address>
            <a
              href="https://maps.app.goo.gl/brightonmarinacarwash"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>

          <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-[#0ea5e9]" />
              <h3 className="font-semibold text-[#f0f9ff]">Opening Hours</h3>
            </div>
            <OpeningHours />
          </div>

          <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <Instagram className="w-5 h-5 text-[#0ea5e9]" />
              <h3 className="font-semibold text-[#f0f9ff]">Instagram</h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
            >
              Follow us for before &amp; after photos and updates
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <h2 className="text-2xl font-bold text-[#f0f9ff] mb-4">How to Find Us</h2>
        <p className="text-[#94a3b8] mb-6 leading-relaxed">
          From Brighton city centre, head east along the A259 (Marine Parade) towards Brighton Marina.
          Turn into the Marina and follow signs for Marina Square. We are in the car wash bays near the main car park.
          Postcode: <strong className="text-[#38bdf8]">BN2 5UT</strong>. Free parking available on site.
        </p>
        <DirectionsMap className="h-[450px]" />
      </FadeIn>
    </div>
  )
}
