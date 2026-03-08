import { MetadataRoute } from 'next'

const BASE_URL = 'https://cardetailinginbrighton.co.uk'

// Gallery image URLs — included for Google Image Search indexing
const galleryImageUrls = [
  `${BASE_URL}/gallery/brighton-marina-car-wash-team-service.jpg`,
  `${BASE_URL}/gallery/porsche-panamera-exterior-detail-brighton-marina.webp`,
  `${BASE_URL}/gallery/brighton-marina-hand-wash-results.jpg`,
  `${BASE_URL}/gallery/hand-car-wash-valeting-brighton-marina-1.jpg`,
  `${BASE_URL}/gallery/hand-car-wash-valeting-brighton-marina-2.jpg`,
  `${BASE_URL}/gallery/hand-car-wash-location-brighton-marina.webp`,
  `${BASE_URL}/gallery/brighton-marina-car-park-location.webp`,
  `${BASE_URL}/gallery/hand-wash-valeting-services-brighton.webp`,
  `${BASE_URL}/gallery/suv-interior-before-clean.webp`,
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Homepage — primary landing page, highest crawl priority
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${BASE_URL}/gallery/brighton-marina-car-wash-team-service.jpg`],
    },
    {
      // Services & Pricing — highest-intent money page
      // Targets: "hand car wash prices Brighton", "car valeting Brighton Marina"
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      // Contact — critical for local SEO (NAP + direction queries)
      // Targets: "car wash near me Brighton", "hand car wash BN2 5UT"
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.85,
    },
    {
      // Gallery — trust signals + Google Image Search traffic
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: galleryImageUrls,
    },
    {
      // About — E-E-A-T signal (Experience, Expertise, Authority, Trust)
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
