import { MetadataRoute } from 'next'

const BASE_URL = 'https://cardetailinginbrighton.co.uk'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Google — full crawl access, all pages
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Google Image Bot — allow gallery for Google Images visibility
        userAgent: 'Googlebot-Image',
        allow: ['/gallery/', '/public/'],
      },
      {
        // Bing — full crawl access
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        // All other crawlers — allow site, block system/build paths
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',       // Next.js build files — no SEO value
          '/api/',         // Internal API routes
          '/*.json$',      // Raw JSON files
          '/static/',      // Static build assets
        ],
      },
      // Block AI training crawlers — protect content from being used
      // to train AI models without consent
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ChatGPT-User', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'Claude-Web', disallow: '/' },
      { userAgent: 'Omgilibot', disallow: '/' },
      { userAgent: 'FacebookBot', disallow: '/' },
    ],
    // Canonical sitemap location — tells crawlers where to find all URLs
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Canonical host declaration — prevents crawling of www. or http:// variants
    host: BASE_URL,
  }
}
