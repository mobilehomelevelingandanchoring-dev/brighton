import { vehicleSizes } from '@/lib/pricing'
import FadeIn from './FadeIn'

export default function VehicleSizeGuide() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {vehicleSizes.map((size, i) => (
        <FadeIn key={size.id} delay={i * 60} className="h-full">
          <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#0f1624] border border-[#1e3a5f] hover:border-[#0ea5e9]/50 transition-all h-full">
            <div className="text-3xl mb-2">{size.icon}</div>
            <div className="text-sm font-semibold text-[#f0f9ff] mb-1">{size.label}</div>
            <div className="text-xs text-[#94a3b8] leading-relaxed">{size.examples}</div>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
