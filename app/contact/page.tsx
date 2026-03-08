import type { Metadata } from 'next'
import { contactMetadata } from '@/lib/seo'
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import BreadcrumbNav from '@/components/seo/BreadcrumbNav'
import ContactPageContent from '@/components/contact/ContactPageContent'

export const metadata: Metadata = contactMetadata

const BASE_URL = 'https://brightonmarinahandcarwash.co.uk'

export default function ContactPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: BASE_URL },
          { name: 'Contact', url: `${BASE_URL}/contact` },
        ])}
      />
      <div className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]}
        />
        <ContactPageContent />
      </div>
    </>
  )
}
