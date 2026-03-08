import type { Metadata } from 'next'
import { servicesMetadata } from '@/lib/seo'
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import { faqs } from '@/lib/faqs'
import ServicesPageContent from '@/components/services/ServicesPageContent'

export const metadata: Metadata = servicesMetadata

const BASE_URL = 'https://brightonmarinahandcarwash.co.uk'

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: BASE_URL },
    { name: 'Services & Pricing', url: `${BASE_URL}/services` },
  ]

  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd
        data={generateServiceSchema(
          'Hand Car Wash Brighton Marina',
          'Professional hand car wash services at Brighton Marina, including exterior wash, mini valet and full valet.',
          '10'
        )}
      />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services & Pricing' },
          ]}
        />
        <ServicesPageContent />
      </div>
    </>
  )
}
