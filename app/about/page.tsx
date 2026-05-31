import type { Metadata } from 'next'
import { aboutMetadata } from '@/lib/seo'
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import AboutPageContent from '@/components/about/AboutPageContent'

export const metadata: Metadata = aboutMetadata

const BASE_URL = 'https://cardetailinginbrighton.co.uk'

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: BASE_URL },
          { name: 'About', url: `${BASE_URL}/about` },
        ])}
      />
      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />
        <AboutPageContent />
      </div>
    </>
  )
}
