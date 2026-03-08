export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://brightonmarinahandcarwash.co.uk/#business',
    name: 'Brighton Marina Hand Car Wash',
    description:
      'Professional hand car wash and valeting service at Brighton Marina. Transparent pricing for all vehicle sizes. Open 7 days a week.',
    url: 'https://brightonmarinahandcarwash.co.uk',
    telephone: '+447392596532',
    priceRange: '££',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Contactless',
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Marina Way, Marina Square',
      addressLocality: 'Brighton',
      addressRegion: 'East Sussex',
      postalCode: 'BN2 5UT',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8148,
      longitude: -0.1059,
    },
    openingHoursSpecification: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ].map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${day}`,
      opens: '09:00',
      closes: '18:00',
    })),
    areaServed: [
      'Brighton',
      'Hove',
      'Brighton Marina',
      'Kemp Town',
      'Rottingdean',
      'Saltdean',
      'Peacehaven',
      'Lewes Road',
      'Preston Park',
    ].map((area) => ({ '@type': 'City', name: area })),
    hasMap: 'https://maps.app.goo.gl/brightonmarinacarwash',
    image: 'https://brightonmarinahandcarwash.co.uk/images/og-image.jpg',
    sameAs: ['https://maps.app.goo.gl/brightonmarinacarwash'],
  }
}

export function generateServiceSchema(name: string, description: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Brighton Marina Hand Car Wash',
    },
    areaServed: 'Brighton',
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'GBP',
    },
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateGalleryImageSchema(
  images: { src: string; alt: string; caption: string }[]
) {
  const BASE_URL = 'https://brightonmarinahandcarwash.co.uk'
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Brighton Marina Hand Car Wash — Photo Gallery',
    description:
      'Photos of hand car wash, valeting, and detailing results at Brighton Marina, Brighton BN2 5UT.',
    url: `${BASE_URL}/gallery`,
    image: images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${BASE_URL}${img.src}`,
      url: `${BASE_URL}/gallery`,
      name: img.caption,
      description: img.alt,
      author: {
        '@type': 'LocalBusiness',
        name: 'Brighton Marina Hand Car Wash',
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
