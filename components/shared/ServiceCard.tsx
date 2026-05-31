import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import FadeIn from './FadeIn'

interface ServiceCardProps {
  icon: LucideIcon
  name: string
  description: string
  startingPrice: string
  href?: string
  index?: number
}

export default function ServiceCard({
  icon: Icon,
  name,
  description,
  startingPrice,
  href = '/services',
  index = 0,
}: ServiceCardProps) {
  return (
    <FadeIn delay={index * 80} className="h-full">
      <div className="group relative bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 hover:border-[#0ea5e9]/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 h-full">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600/20 to-blue-800/20 border border-sky-500/20 flex items-center justify-center group-hover:from-sky-600/30 group-hover:to-blue-800/30 transition-all">
            <Icon className="w-6 h-6 text-[#0ea5e9]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[#f0f9ff] mb-1">{name}</h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-3">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#38bdf8]">
                From <span className="text-[#f59e0b] text-base">{startingPrice}</span>
              </span>
              <Link
                href={href}
                className="flex items-center gap-1 text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors group/link"
              >
                See Full Prices
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
