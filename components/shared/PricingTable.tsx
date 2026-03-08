'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { pricing, services, vehicleSizes } from '@/lib/pricing'
import PaymentBadges from './PaymentBadges'

type Tab = 'exterior' | 'mini' | 'full'

const tabs: { id: Tab; label: string }[] = [
  { id: 'exterior', label: 'Exterior Wash' },
  { id: 'mini', label: 'Mini Valet' },
  { id: 'full', label: 'Full Valet' },
]

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState<Tab>('exterior')
  const activeService = services.find((s) => s.id === activeTab)!

  return (
    <div className="space-y-6">
      {/* Tab switcher */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#0f1624] rounded-2xl border border-[#1e3a5f]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-lg'
                : 'text-[#94a3b8] hover:text-[#f0f9ff]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Price cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {vehicleSizes.map((size) => {
          const price = pricing[size.id][activeTab]
          return (
            <div
              key={size.id}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#0f1624] border border-[#1e3a5f] hover:border-[#0ea5e9]/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all"
            >
              <div className="text-2xl mb-1">{size.icon}</div>
              <div className="text-xs font-semibold text-[#94a3b8] mb-2 leading-tight">{size.label}</div>
              <div className="text-2xl font-bold text-[#f59e0b]">£{price}</div>
            </div>
          )
        })}
      </div>

      {/* What's included */}
      <div className="bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5">
        <h4 className="font-semibold text-[#f0f9ff] mb-3 text-sm">
          What&apos;s included in {activeService.name}:
        </h4>
        <ul className="space-y-2">
          {activeService.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#94a3b8]">
              <Check className="w-4 h-4 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Payment + disclaimer */}
      <div className="space-y-3">
        <PaymentBadges />
        <p className="text-xs text-[#94a3b8] flex items-start gap-1.5">
          <span className="text-[#f59e0b] font-bold">*</span>
          Not sure which size your car is? Just ask our team — we will always confirm before we start.
        </p>
      </div>
    </div>
  )
}
