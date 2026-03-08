import type { Metadata } from 'next'
import { homepageMetadata } from '@/lib/seo'
import { generateLocalBusinessSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import HeroSection from '@/components/home/HeroSection'
import PricingSection from '@/components/home/PricingSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import LocationSection from '@/components/home/LocationSection'
import FAQPreviewSection from '@/components/home/FAQPreviewSection'

export const metadata: Metadata = homepageMetadata

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <HeroSection />
      <PricingSection />
      <ServicesSection />
      <WhyChooseSection />
      <GalleryPreview />
      <TestimonialsSection />
      <LocationSection />
      <FAQPreviewSection />
    </>
  )
}
