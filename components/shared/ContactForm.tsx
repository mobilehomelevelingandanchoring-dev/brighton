'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { vehicleSizes } from '@/lib/pricing'

const serviceOptions = [
  'Exterior Hand Wash',
  'Mini Valet',
  'Full Valet',
  'Engine Bay Clean',
  'Alloy Wheel Deep Clean',
  'Not sure yet',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle className="w-14 h-14 text-[#0ea5e9]" />
        <h3 className="text-xl font-bold text-[#f0f9ff]">Message Sent!</h3>
        <p className="text-[#94a3b8] max-w-sm">
          Thank you for getting in touch. We aim to respond within 1 hour during opening times (Mon–Sun, 9am–6pm).
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#94a3b8] mb-1.5">Name *</label>
          <input
            type="text"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl bg-[#0f1624] border border-[#1e3a5f] text-[#f0f9ff] placeholder-[#475569] text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#94a3b8] mb-1.5">Phone</label>
          <input
            type="tel"
            placeholder="Your phone number"
            className="w-full px-4 py-3 rounded-xl bg-[#0f1624] border border-[#1e3a5f] text-[#f0f9ff] placeholder-[#475569] text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#94a3b8] mb-1.5">Email *</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-xl bg-[#0f1624] border border-[#1e3a5f] text-[#f0f9ff] placeholder-[#475569] text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#94a3b8] mb-1.5">Service Interested In</label>
          <select className="w-full px-4 py-3 rounded-xl bg-[#0f1624] border border-[#1e3a5f] text-[#f0f9ff] text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors">
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#94a3b8] mb-1.5">Vehicle Size</label>
          <select className="w-full px-4 py-3 rounded-xl bg-[#0f1624] border border-[#1e3a5f] text-[#f0f9ff] text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors">
            <option value="">Select vehicle size</option>
            {vehicleSizes.map((v) => (
              <option key={v.id} value={v.id}>{v.label} — e.g. {v.examples.split(',')[0]}</option>
            ))}
            <option value="unsure">Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#94a3b8] mb-1.5">Message</label>
        <textarea
          rows={4}
          placeholder="Any questions or additional details..."
          className="w-full px-4 py-3 rounded-xl bg-[#0f1624] border border-[#1e3a5f] text-[#f0f9ff] placeholder-[#475569] text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:shadow-sky-glow transition-all disabled:opacity-60"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-center text-[#94a3b8]">
        We aim to respond within 1 hour during opening times (Mon–Sun, 9am–6pm)
      </p>
    </form>
  )
}
