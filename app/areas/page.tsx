import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ChevronRight, Clock, Phone } from 'lucide-react'
import { areasData } from '@/lib/areas'

export const metadata: Metadata = {
  title: 'Areas We Serve | Car Detailing in Brighton & Surrounding Areas',
  description:
    'Car Detailing in Brighton serves all Brighton and Hove neighbourhoods. Professional hand car wash, valeting & ceramic coating for Brighton Marina, Hove, Kemptown, Rottingdean, Saltdean & more.',
  alternates: { canonical: 'https://cardetailinginbrighton.co.uk/areas' },
  openGraph: {
    title: 'Areas We Serve | Car Detailing in Brighton',
    description:
      'We serve all Brighton and Hove areas from our Brighton Marina base. See your nearest location page.',
    url: 'https://cardetailinginbrighton.co.uk/areas',
    type: 'website',
    siteName: 'Car Detailing in Brighton',
  },
}

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#080c14] to-[#0f1624]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Based at Brighton Marina · Serving All Surrounding Areas
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-5">
            Areas We Serve
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl mx-auto mb-8">
            Car Detailing in Brighton is based at Marina Square, Brighton Marina, BN2 5UT.
            We serve customers from across Brighton, Hove, and all surrounding neighbourhoods.
            Find your area below to see travel times, services, and local information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447495885042"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 transition-all"
            >
              <Phone className="w-4 h-4" />
              +44 7495 885042
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold transition-all"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-8 px-4 sm:px-6 bg-[#0f1624] border-y border-[#1e3a5f]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '19+', label: 'Areas Served' },
              { value: '7', label: 'Days a Week' },
              { value: 'BN2 5UT', label: 'Our Location' },
              { value: 'Free', label: 'Marina Parking' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-xs text-[#64748b] uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-8">Brighton & Hove — All Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areasData.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex items-start justify-between p-5 rounded-2xl bg-[#0f1624] border border-[#1e3a5f] hover:border-[#0ea5e9]/50 transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-[#0ea5e9]" />
                    <h3 className="font-semibold text-[#f0f9ff] group-hover:text-[#38bdf8] transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748b]">{area.postcode}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-3.5 h-3.5 text-[#475569]" />
                    <span className="text-xs text-[#64748b]">{area.travelTime} from Marina</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1e3a5f] group-hover:text-[#0ea5e9] mt-1 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location info */}
      <section className="py-16 px-4 sm:px-6 bg-[#0f1624] border-t border-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-6">Our Location — Brighton Marina</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Our base is at <strong className="text-[#f0f9ff]">Marina Square, Brighton Marina, BN2 5UT</strong> —
                one of the most recognisable landmarks on the Brighton and East Sussex coastline.
                Brighton Marina provides free parking for all our customers while their vehicle is being serviced.
              </p>
              <p>
                The Marina is well-served by the A259 coast road from the west (Brighton and Hove)
                and the east (Rottingdean, Saltdean, Peacehaven). Free parking is available throughout
                the Marina complex, and there are cafés, restaurants, and shops within easy walking distance.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                  <span>Marina Square, Brighton Marina, Brighton, BN2 5UT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                  <a href="tel:+447495885042" className="hover:text-[#38bdf8] transition-colors">
                    +44 7495 885042
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                  <span>Monday – Sunday, 9:00am – 6:00pm</span>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden border border-[#1e3a5f]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.3726!2d-0.105948!3d50.814847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df72c6fc95c7b1%3A0x9fb0e4a9a8d21e0c!2sBrighton%20Marina%2C%20Brighton%20BN2%205UT!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Car Detailing in Brighton location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
