import Link from 'next/link'
import { MapPin, ChevronRight } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'

const featuredAreas = [
  { slug: 'brighton-marina', name: 'Brighton Marina', postcode: 'BN2 5UT', time: 'On-site' },
  { slug: 'kemptown', name: 'Kemptown', postcode: 'BN2', time: '10 min' },
  { slug: 'hove', name: 'Hove', postcode: 'BN3', time: '15 min' },
  { slug: 'rottingdean', name: 'Rottingdean', postcode: 'BN2', time: '12 min' },
  { slug: 'saltdean', name: 'Saltdean', postcode: 'BN2', time: '15 min' },
  { slug: 'whitehawk', name: 'Whitehawk', postcode: 'BN2', time: '5 min' },
  { slug: 'preston-park', name: 'Preston Park', postcode: 'BN1', time: '15 min' },
  { slug: 'woodingdean', name: 'Woodingdean', postcode: 'BN2', time: '10 min' },
]

const featuredServices = [
  { slug: 'car-detailing-brighton', name: 'Car Detailing', price: 'from £10' },
  { slug: 'ceramic-coating-brighton', name: 'Ceramic Coating', price: 'from £200' },
  { slug: 'paint-correction-brighton', name: 'Paint Correction', price: 'from £150' },
  { slug: 'car-valeting-brighton', name: 'Car Valeting', price: 'from £25' },
  { slug: 'interior-detailing-brighton', name: 'Interior Detailing', price: 'from £25' },
  { slug: 'exterior-detailing-brighton', name: 'Exterior Detailing', price: 'from £10' },
  { slug: 'headlight-restoration-brighton', name: 'Headlight Restoration', price: 'from £40' },
  { slug: 'mobile-car-detailing-brighton', name: 'Mobile Detailing', price: 'from £30' },
]

export default function AreasSiloSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Services silo */}
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-3">
                All Services
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f9ff]">
                Our Detailing Services
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-1 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
            >
              View all prices <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-4 rounded-2xl bg-[#0f1624] border border-[#1e3a5f] hover:border-[#0ea5e9]/40 transition-all"
              >
                <p className="font-semibold text-[#f0f9ff] text-sm mb-1 group-hover:text-[#38bdf8] transition-colors leading-snug">
                  {service.name}
                </p>
                <p className="text-xs text-[#38bdf8]">{service.price}</p>
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* Areas */}
        <FadeIn delay={100}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-medium mb-3">
                <MapPin className="w-3 h-3" />
                Areas We Serve
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f9ff]">
                Serving Brighton & Beyond
              </h2>
            </div>
            <Link
              href="/areas"
              className="hidden sm:flex items-center gap-1 text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
            >
              All 19 areas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group p-4 rounded-2xl bg-[#0f1624] border border-[#1e3a5f] hover:border-[#0ea5e9]/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0ea5e9] flex-shrink-0" />
                  <p className="font-semibold text-[#f0f9ff] text-sm group-hover:text-[#38bdf8] transition-colors">
                    {area.name}
                  </p>
                </div>
                <p className="text-xs text-[#64748b]">{area.postcode} · {area.time}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center sm:hidden">
            <Link href="/areas" className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors">
              View all 19 areas →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
