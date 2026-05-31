import type { Metadata } from 'next'

const BASE_URL = 'https://cardetailinginbrighton.co.uk'

const sharedOG = {
  siteName: 'Car Detailing in Brighton',
  images: [
    {
      url: `${BASE_URL}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Car Detailing in Brighton',
    },
  ],
}

export const homepageMetadata: Metadata = {
  title: 'Car Detailing in Brighton | Professional Hand Car Wash Brighton BN2',
  description:
    'Hand car wash at Brighton Marina. Transparent pricing for all vehicle sizes. Open 7 days, 9am–6pm. Located in Marina Square, Brighton BN2 5UT. Call +44 7495 885042',
  keywords: [
    'hand car wash Brighton',
    'car wash Brighton Marina',
    'car valeting Brighton',
    'car wash BN2',
    'car detailing Brighton',
    'mobile car wash Brighton',
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Car Detailing in Brighton | Professional Hand Car Wash Brighton BN2',
    description:
      'Hand car wash at Brighton Marina. Transparent pricing. Open 7 days. Located in Marina Square, BN2 5UT.',
    url: BASE_URL,
    type: 'website',
    ...sharedOG,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Detailing in Brighton',
    description: 'Professional hand car wash at Brighton Marina. Clear pricing, 7 days a week.',
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
}

export const servicesMetadata: Metadata = {
  title: 'Car Wash & Valeting Services Brighton Marina | Prices & Packages',
  description:
    'Full pricing for hand car wash and valeting at Brighton Marina. Exterior wash from £10, mini valet from £25, full valet from £50. All vehicle sizes catered for.',
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Car Wash & Valeting Services Brighton Marina | Prices & Packages',
    description: 'Transparent pricing for all vehicle sizes. Exterior, Mini Valet and Full Valet.',
    url: `${BASE_URL}/services`,
    type: 'website',
    ...sharedOG,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Pricing | Car Detailing in Brighton',
    description: 'Clear pricing for every vehicle size — no surprises.',
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
}

export const galleryMetadata: Metadata = {
  title: 'Car Wash Results Gallery | Car Detailing in Brighton',
  description:
    'See the results of our professional hand car wash and valeting services. Before and after photos from Car Detailing in Brighton.',
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: 'Car Wash Results Gallery | Car Detailing in Brighton',
    description: 'Before and after results from our hand car wash team at Brighton Marina.',
    url: `${BASE_URL}/gallery`,
    type: 'website',
    ...sharedOG,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Car Detailing in Brighton',
    description: 'See our professional car wash and detailing results.',
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
}

export const aboutMetadata: Metadata = {
  title: 'About Car Detailing in Brighton | Our Story & Team',
  description:
    'Learn about Car Detailing in Brighton — our team, our commitment to hand washing, and why we are Brighton\'s premier car wash at Marina Square, BN2 5UT.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About Car Detailing in Brighton',
    description: 'Professional hand car wash team at Brighton Marina. No machines, just expert hands.',
    url: `${BASE_URL}/about`,
    type: 'website',
    ...sharedOG,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Car Detailing in Brighton',
    description: 'Our story, team and commitment to quality at Brighton Marina.',
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
}

export const contactMetadata: Metadata = {
  title: 'Find Us at Brighton Marina | Hand Car Wash Brighton BN2 5UT',
  description:
    'Contact Car Detailing in Brighton. Find us at Marina Square, Brighton BN2 5UT. Open 7 days, 9am–6pm. Call +44 7495 885042.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact & Find Car Detailing in Brighton',
    description: 'Marina Square, Brighton BN2 5UT. Open every day 9am–6pm. Call +44 7495 885042.',
    url: `${BASE_URL}/contact`,
    type: 'website',
    ...sharedOG,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Car Detailing in Brighton',
    description: 'Find us at Brighton Marina Square, BN2 5UT. Open 7 days.',
    images: [`${BASE_URL}/images/og-image.jpg`],
  },
  robots: { index: true, follow: true },
}
