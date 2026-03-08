import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'

const previewImages = [
  {
    src: '/gallery/porsche-panamera-exterior-detail-brighton-marina.webp',
    alt: 'Porsche Panamera exterior detail at Brighton Marina hand car wash',
    label: 'Exterior Detail — Porsche Panamera',
    tag: 'Exterior',
  },
  {
    src: '/gallery/brighton-marina-hand-wash-results.jpg',
    alt: 'Hand wash results at Brighton Marina car wash',
    label: 'Hand Wash Results — Brighton Marina',
    tag: 'After',
  },
  {
    src: '/gallery/hand-car-wash-valeting-brighton-marina-1.jpg',
    alt: 'Professional hand car wash and valeting at Brighton Marina',
    label: 'Professional Valeting — Brighton Marina',
    tag: 'Valeting',
  },
]

export default function GalleryPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-4">
            Our Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f9ff] mb-4">
            See the Difference We Make
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Real results from real cars. Every wash is done with care at Brighton Marina.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {previewImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#1e3a5f] aspect-square hover:border-[#0ea5e9]/50 transition-all">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#0ea5e9]/80 text-white mr-2">
                    {img.tag}
                  </span>
                  <p className="text-xs text-white mt-1 leading-tight">{img.label}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300} className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-medium text-sm transition-all"
          >
            See Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
