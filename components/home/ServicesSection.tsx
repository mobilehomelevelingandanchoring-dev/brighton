import { Droplets, Sparkles, Star, ShieldCheck, Cog, Circle } from 'lucide-react'
import ServiceCard from '@/components/shared/ServiceCard'
import FadeIn from '@/components/shared/FadeIn'

const serviceData = [
  {
    icon: Droplets,
    name: 'Exterior Hand Wash',
    description: 'Full exterior hand wash with premium shampoo, wheel clean, and hand dry.',
    startingPrice: '£10',
    href: '/services#exterior',
  },
  {
    icon: Sparkles,
    name: 'Interior Valet',
    description: 'Thorough hoover, dashboard wipe, door cards, and interior window clean.',
    startingPrice: '£20',
    href: '/services#interior',
  },
  {
    icon: Star,
    name: 'Mini Valet',
    description: 'Best of both worlds — exterior wash plus a full interior clean.',
    startingPrice: '£25',
    href: '/services#mini',
  },
  {
    icon: ShieldCheck,
    name: 'Full Valet',
    description: 'Complete interior and exterior treatment including wax, shampoo, and tyre dressing.',
    startingPrice: '£50',
    href: '/services#full',
  },
  {
    icon: Cog,
    name: 'Engine Bay Clean',
    description: 'Safe degreasing and detailed clean of the engine bay.',
    startingPrice: '£30',
    href: '/services#engine',
  },
  {
    icon: Circle,
    name: 'Alloy Wheel Deep Clean',
    description: 'Iron fallout remover and professional scrub on all four alloy wheels.',
    startingPrice: '£20',
    href: '/services#alloy',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            Everything Your Car Needs
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            From a quick exterior wash to a full valet — all done by hand at Brighton Marina.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceData.map((service, i) => (
            <ServiceCard key={service.name} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
