import { Hand, Car, BadgePoundSterling, Calendar, MapPin, Award } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'

const reasons = [
  {
    icon: Hand,
    title: 'Hand Washed Every Time',
    description: 'No machines, no automated brushes. Every car is cleaned by skilled hands using premium products.',
  },
  {
    icon: Car,
    title: 'All Sizes Welcome',
    description: 'Small hatchbacks to large vans — we have pricing and space for every vehicle type.',
  },
  {
    icon: BadgePoundSterling,
    title: 'Transparent Pricing',
    description: 'Our prices are shown upfront by vehicle size. Your price is confirmed before we start — always.',
  },
  {
    icon: Calendar,
    title: '7 Days a Week',
    description: 'Open every day including weekends and bank holidays. 9am to 6pm, Monday to Sunday.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Located in Marina Square at Brighton Marina with plenty of free parking on-site.',
  },
  {
    icon: Award,
    title: 'Professional Results',
    description: "Experienced team using quality products to deliver a finish you'll be proud of, every time.",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#080c14]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            Why Choose Brighton Marina Hand Car Wash
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            We built this business around one principle: great results at a price you know upfront.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <FadeIn key={reason.title} delay={i * 80} className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600/20 to-blue-800/20 border border-sky-500/20 flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-[#0ea5e9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#f0f9ff] mb-1.5">{reason.title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{reason.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={300} className="mt-14">
          <div className="grid grid-cols-3 gap-4 bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-6">
            {[
              { number: '7', label: 'Days a Week' },
              { number: '5', label: 'Vehicle Sizes' },
              { number: '3', label: 'Service Levels' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-sm text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
