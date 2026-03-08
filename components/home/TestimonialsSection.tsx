import TestimonialCard from '@/components/shared/TestimonialCard'
import FadeIn from '@/components/shared/FadeIn'
import { Info } from 'lucide-react'

const testimonials = [
  {
    name: 'James T.',
    car: 'BMW 5 Series (Large)',
    rating: 5,
    text: 'Excellent full valet — the car looked showroom-fresh. The team confirmed the price before starting and the result was worth every penny. Will be back monthly.',
  },
  {
    name: 'Sarah M.',
    car: 'Nissan Qashqai (SUV)',
    rating: 5,
    text: 'Really pleased with the mini valet on my Qashqai. They explained I was in the SUV price bracket before starting which I appreciated — no nasty surprises at the end.',
  },
  {
    name: 'Rob H.',
    car: 'VW Golf (Medium)',
    rating: 5,
    text: 'Quick exterior wash done brilliantly. £12 for my Golf, exactly as advertised. Staff were friendly and the finish was great. Convenient location at the Marina too.',
  },
  {
    name: 'Priya K.',
    car: 'Ford Fiesta (Small)',
    rating: 5,
    text: 'Booked a full valet for my Fiesta and the team did a thorough job. Interior and exterior both immaculate. Great value at £50 and very transparent about what was included.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#080c14]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-medium mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Real feedback from Brighton Marina Hand Car Wash customers.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0f1624] border border-[#1e3a5f]">
            <Info className="w-4 h-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#94a3b8]">
              We take all feedback seriously. Our pricing is always confirmed before work begins —
              if your vehicle is on the boundary between sizes, we will show you and agree the price before starting.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
