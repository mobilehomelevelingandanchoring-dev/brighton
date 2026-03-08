import { Phone, MapPin, Clock, ParkingSquare } from 'lucide-react'
import DirectionsMap from '@/components/shared/DirectionsMap'
import OpeningHours from '@/components/shared/OpeningHours'
import FadeIn from '@/components/shared/FadeIn'

export default function LocationSection() {
  return (
    <section id="find-us" className="py-20 px-4 sm:px-6 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-4">
            <MapPin className="w-3 h-3" />
            Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            Find Us at Brighton Marina
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            We are located in Marina Square at Brighton Marina, just off Marina Way.
            Look for the hand car wash bays near the main car park entrance.
            Postcode: <strong className="text-[#38bdf8]">BN2 5UT</strong>
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeIn className="lg:col-span-2">
            <DirectionsMap />
          </FadeIn>

          <FadeIn delay={100} className="space-y-4">
            <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#f0f9ff] mb-1">Address</div>
                  <address className="not-italic text-sm text-[#94a3b8] leading-relaxed">
                    Marina Way, Marina Square<br />
                    Brighton Marina<br />
                    Brighton BN2 5UT
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0ea5e9] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#f0f9ff] mb-1">Phone</div>
                  <a href="tel:+447392596532" className="text-sm text-[#38bdf8] hover:text-white transition-colors font-mono">
                    +44 7392 596532
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                <div className="font-semibold text-[#f0f9ff]">Opening Hours</div>
              </div>
              <OpeningHours compact />
            </div>

            <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <ParkingSquare className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#f0f9ff] mb-1">Free Parking</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    Plenty of free parking available at Brighton Marina while your car is being washed.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
