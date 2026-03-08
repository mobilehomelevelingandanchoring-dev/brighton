'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import FadeIn from '@/components/shared/FadeIn'

type FilterType = 'All' | 'Exterior' | 'Interior' | 'Location' | 'Valeting'

const filters: FilterType[] = ['All', 'Exterior', 'Interior', 'Location', 'Valeting']

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: FilterType
  caption: string
  width: number
  height: number
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/gallery/porsche-panamera-exterior-detail-brighton-marina.webp',
    alt: 'Porsche Panamera exterior detail hand car wash at Brighton Marina — professional paint care',
    category: 'Exterior',
    caption: 'Porsche Panamera — Exterior Detail',
    width: 1200,
    height: 900,
  },
  {
    id: 2,
    src: '/gallery/suv-interior-before-clean.webp',
    alt: 'SUV interior before professional valet clean at Brighton Marina hand car wash',
    category: 'Interior',
    caption: 'SUV Interior — Before Professional Valet',
    width: 1200,
    height: 900,
  },
  {
    id: 3,
    src: '/gallery/hand-car-wash-valeting-brighton-marina-1.jpg',
    alt: 'Hand car wash and valeting service at Brighton Marina — expert team cleaning vehicle',
    category: 'Valeting',
    caption: 'Hand Car Wash & Valeting — Brighton Marina',
    width: 1200,
    height: 900,
  },
  {
    id: 4,
    src: '/gallery/hand-car-wash-valeting-brighton-marina-2.jpg',
    alt: 'Brighton Marina car wash valeting results — spotless finish by hand wash team',
    category: 'Valeting',
    caption: 'Valeting Results — Spotless Finish',
    width: 1200,
    height: 900,
  },
  {
    id: 5,
    src: '/gallery/brighton-marina-car-wash-team-service.jpg',
    alt: 'Brighton Marina hand car wash team providing professional cleaning service in car park',
    category: 'Exterior',
    caption: 'Our Team — Professional Car Wash Service',
    width: 1200,
    height: 900,
  },
  {
    id: 6,
    src: '/gallery/brighton-marina-hand-wash-results.jpg',
    alt: 'Hand wash results at Brighton Marina car wash — gleaming exterior after professional clean',
    category: 'Exterior',
    caption: 'Hand Wash Results — Brighton Marina',
    width: 1200,
    height: 900,
  },
  {
    id: 7,
    src: '/gallery/hand-car-wash-location-brighton-marina.webp',
    alt: 'Brighton Marina hand car wash location — car park at Brighton Marina BN2 5UT',
    category: 'Location',
    caption: 'Our Location — Brighton Marina Car Park',
    width: 1200,
    height: 900,
  },
  {
    id: 8,
    src: '/gallery/brighton-marina-car-park-location.webp',
    alt: 'Brighton Marina car wash and valeting — located in Brighton Marina car park BN2 5UT',
    category: 'Location',
    caption: 'Brighton Marina Car Wash — Car Park',
    width: 1200,
    height: 900,
  },
  {
    id: 9,
    src: '/gallery/hand-wash-valeting-services-brighton.webp',
    alt: 'Brighton hand car wash and valeting services — professional vehicle cleaning near Brighton Marina',
    category: 'Valeting',
    caption: 'Hand Wash & Valeting Services — Brighton',
    width: 1200,
    height: 900,
  },
]

export default function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const selectedItem = galleryItems.find((item) => item.id === selectedId)

  return (
    <div>
      <FadeIn className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-4">
          Hand Car Wash Results —
          <span className="block gradient-text">Brighton Marina Gallery</span>
        </h1>
        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
          Real results from our hand car wash and valeting team at Brighton Marina.
          Every vehicle treated with professional care — inside and out.
        </p>
      </FadeIn>

      {/* Filter tabs */}
      <FadeIn delay={100} className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white'
                : 'bg-[#0f1624] border border-[#1e3a5f] text-[#94a3b8] hover:text-[#f0f9ff] hover:border-[#0ea5e9]/50'
            }`}
          >
            {filter}
          </button>
        ))}
      </FadeIn>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#1e3a5f] bg-[#0f1624] hover:border-[#0ea5e9]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
            aria-label={`View photo: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index < 3}
              quality={85}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs text-white font-medium leading-tight">{item.caption}</p>
              <span className="text-[10px] px-1.5 py-0.5 mt-1 inline-block rounded-full bg-[#0ea5e9]/80 text-white">
                {item.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.caption}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0f1624] border border-[#1e3a5f] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 p-2 rounded-xl text-white bg-black/50 hover:bg-black/70 transition-all"
              onClick={() => setSelectedId(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                quality={90}
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-[#f0f9ff] mb-1">{selectedItem.caption}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#0ea5e9]/30">
                {selectedItem.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <FadeIn className="mt-12 text-center">
        <p className="text-[#94a3b8] mb-4">Ready to see results like these on your car?</p>
        <a
          href="tel:+447392596532"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 hover:shadow-sky-glow transition-all btn-glow"
        >
          Book Your Wash — +44 7392 596532
        </a>
      </FadeIn>
    </div>
  )
}
