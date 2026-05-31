import { Star } from 'lucide-react'
import FadeIn from './FadeIn'

interface TestimonialCardProps {
  name: string
  car: string
  rating: number
  text: string
  index?: number
}

export default function TestimonialCard({ name, car, rating, text, index = 0 }: TestimonialCardProps) {
  return (
    <FadeIn delay={index * 100} className="h-full">
      <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6 hover:border-[#0ea5e9]/30 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 h-full">
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
          ))}
        </div>
        <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
        <div className="flex items-center gap-2 pt-4 border-t border-[#1e3a5f]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white text-sm font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-medium text-[#f0f9ff]">{name}</div>
            <div className="text-xs text-[#94a3b8]">{car}</div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
