import { CreditCard, Banknote, Wifi } from 'lucide-react'

const methods = [
  { icon: Banknote, label: 'Cash' },
  { icon: CreditCard, label: 'Card' },
  { icon: Wifi, label: 'Contactless' },
]

export default function PaymentBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-sm text-[#94a3b8] mr-1">We Accept:</span>
      {methods.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f1624] border border-[#1e3a5f] text-sm text-[#f0f9ff]"
        >
          <Icon className="w-3.5 h-3.5 text-[#38bdf8]" />
          {label}
        </div>
      ))}
    </div>
  )
}
