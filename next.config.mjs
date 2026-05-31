/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [],
  },
  eslint: {
    // Run ESLint separately via `npm run lint` — not blocking builds
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
