import type { Metadata } from 'next'
import { galleryMetadata } from '@/lib/seo'
import { generateBreadcrumbSchema, generateGalleryImageSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import GalleryPageContent from '@/components/gallery/GalleryPageContent'

export const metadata: Metadata = galleryMetadata

const BASE_URL = 'https://brightonmarinahandcarwash.co.uk'

const galleryImages = [
  { src: '/gallery/porsche-panamera-exterior-detail-brighton-marina.webp', alt: 'Porsche Panamera exterior detail hand car wash at Brighton Marina — professional paint care', caption: 'Porsche Panamera — Exterior Detail' },
  { src: '/gallery/suv-interior-before-clean.webp', alt: 'SUV interior before professional valet clean at Brighton Marina hand car wash', caption: 'SUV Interior — Before Professional Valet' },
  { src: '/gallery/hand-car-wash-valeting-brighton-marina-1.jpg', alt: 'Hand car wash and valeting service at Brighton Marina — expert team cleaning vehicle', caption: 'Hand Car Wash & Valeting — Brighton Marina' },
  { src: '/gallery/hand-car-wash-valeting-brighton-marina-2.jpg', alt: 'Brighton Marina car wash valeting results — spotless finish by hand wash team', caption: 'Valeting Results — Spotless Finish' },
  { src: '/gallery/brighton-marina-car-wash-team-service.jpg', alt: 'Brighton Marina hand car wash team providing professional cleaning service in car park', caption: 'Our Team — Professional Car Wash Service' },
  { src: '/gallery/brighton-marina-hand-wash-results.jpg', alt: 'Hand wash results at Brighton Marina car wash — gleaming exterior after professional clean', caption: 'Hand Wash Results — Brighton Marina' },
  { src: '/gallery/hand-car-wash-location-brighton-marina.webp', alt: 'Brighton Marina hand car wash location — car park at Brighton Marina BN2 5UT', caption: 'Our Location — Brighton Marina Car Park' },
  { src: '/gallery/brighton-marina-car-park-location.webp', alt: 'Brighton Marina car wash and valeting — located in Brighton Marina car park BN2 5UT', caption: 'Brighton Marina Car Wash — Car Park' },
  { src: '/gallery/hand-wash-valeting-services-brighton.webp', alt: 'Brighton hand car wash and valeting services — professional vehicle cleaning near Brighton Marina', caption: 'Hand Wash & Valeting Services — Brighton' },
]

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: BASE_URL },
          { name: 'Gallery', url: `${BASE_URL}/gallery` },
        ])}
      />
      <JsonLd data={generateGalleryImageSchema(galleryImages)} />
      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gallery' },
          ]}
        />
        <GalleryPageContent />
      </div>
    </>
  )
}
