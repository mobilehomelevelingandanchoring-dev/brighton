export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://cardetailinginbrighton.co.uk/#business',
    name: 'Car Detailing in Brighton',
    description:
      'Professional hand car wash and valeting service at Brighton Marina. Transparent pricing for all vehicle sizes. Open 7 days a week.',
    url: 'https://cardetailinginbrighton.co.uk',
    telephone: '+447495885042',
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
      'Portslade',
      'Patcham',
      'Preston Park',
      'Hanover',
      'Whitehawk',
      'Woodingdean',
      'Rottingdean',
      'Saltdean',
      'Moulsecoomb',
      'Coldean',
      'Hollingbury',
      'Withdean',
      'Westdene',
      'Bevendean',
      'Elm Grove',
      'Seven Dials',
      'Peacehaven',
    ].map((area) => ({ '@type': 'City', name: area })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car Detailing Services Brighton',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Exterior Hand Wash', description: 'Professional hand car wash from £10 for small cars' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '10', maxPrice: '18' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Mini Valet', description: 'Interior vacuum, exterior wash, windows and dashboard from £25' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '25', maxPrice: '45' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Full Valet', description: 'Complete interior deep clean and full exterior detail from £50' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '50', maxPrice: '90' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Engine Bay Clean', description: 'Professional engine bay degreasing and clean from £30' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '30', maxPrice: '60' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Alloy Wheel Clean', description: 'Deep alloy wheel clean and iron fallout removal from £20' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '20', maxPrice: '40' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Ceramic Coating', description: 'Professional nano ceramic coating for long-term paint protection from £200' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '200', maxPrice: '600' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Paint Correction', description: 'Machine polishing to remove swirl marks, scratches and oxidation from £150' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '150', maxPrice: '600' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Headlight Restoration', description: 'Professional headlight polishing and UV sealing from £40' },
          priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: '40', maxPrice: '80' },
        },
      ],
    },
    hasMap: 'https://maps.app.goo.gl/brightonmarinacarwash',
    image: 'https://cardetailinginbrighton.co.uk/images/og-image.jpg',
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
      name: 'Car Detailing in Brighton',
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
  const BASE_URL = 'https://cardetailinginbrighton.co.uk'
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Car Detailing in Brighton — Photo Gallery',
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
        name: 'Car Detailing in Brighton',
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
