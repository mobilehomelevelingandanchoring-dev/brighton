import { MetadataRoute } from 'next'
import { getAllAreaSlugs } from '@/lib/areas'
import { getAllServiceSlugs } from '@/lib/service-pages'

const BASE_URL = 'https://cardetailinginbrighton.co.uk'

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
  const areaSlugs = getAllAreaSlugs()
  const serviceSlugs = getAllServiceSlugs()

  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${BASE_URL}/gallery/brighton-marina-car-wash-team-service.jpg`],
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: galleryImageUrls,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const areaPages: MetadataRoute.Sitemap = areaSlugs.map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...corePages, ...servicePages, ...areaPages]
}
