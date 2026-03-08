import Link from 'next/link'
import PricingTable from '@/components/shared/PricingTable'
import VehicleSizeGuide from '@/components/shared/VehicleSizeGuide'
import FadeIn from '@/components/shared/FadeIn'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-[#080c14]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-medium mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            Simple, Clear Pricing — No Surprises
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            We charge by vehicle size. Here&apos;s exactly what you&apos;ll pay before you arrive.
            Select a service below to see prices for every vehicle size.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <PricingTable />
        </FadeIn>

        <FadeIn delay={200} className="mt-10">
          <h3 className="text-sm font-semibold text-[#94a3b8] uppercase tracking-wider mb-4 text-center">
            Vehicle Size Reference Guide
          </h3>
          <VehicleSizeGuide />
        </FadeIn>

        <FadeIn delay={300} className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold text-sm hover:opacity-90 hover:shadow-sky-glow transition-all btn-glow"
          >
            See Full Services &amp; Pricing
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
