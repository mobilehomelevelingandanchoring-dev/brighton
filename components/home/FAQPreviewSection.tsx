import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import FAQAccordion from '@/components/shared/FAQAccordion'
import FadeIn from '@/components/shared/FadeIn'
import { faqs } from '@/lib/faqs'

const previewFaqs = faqs.slice(0, 3)

export default function FAQPreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#080c14]">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-4">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            Common Questions
          </h2>
          <p className="text-[#94a3b8] leading-relaxed">
            Quick answers to the questions we hear most at the car wash.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <FAQAccordion faqs={previewFaqs} />
        </FadeIn>

        <FadeIn delay={250} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services#faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-medium text-sm transition-all"
          >
            See All FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+447392596532"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold text-sm hover:opacity-90 hover:shadow-sky-glow transition-all btn-glow"
          >
            <Phone className="w-4 h-4" />
            Still have a question? Call us
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
