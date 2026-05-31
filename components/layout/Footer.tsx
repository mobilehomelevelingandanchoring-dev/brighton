import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Instagram } from 'lucide-react'

const serviceLinks = [
  { href: '/services/car-detailing-brighton', label: 'Car Detailing Brighton' },
  { href: '/services/ceramic-coating-brighton', label: 'Ceramic Coating Brighton' },
  { href: '/services/paint-correction-brighton', label: 'Paint Correction Brighton' },
  { href: '/services/car-valeting-brighton', label: 'Car Valeting Brighton' },
  { href: '/services/interior-detailing-brighton', label: 'Interior Detailing' },
  { href: '/services/exterior-detailing-brighton', label: 'Exterior Detailing' },
  { href: '/services/headlight-restoration-brighton', label: 'Headlight Restoration' },
  { href: '/services', label: 'View All Prices →' },
]

const areaLinks = [
  { href: '/areas/brighton-marina', label: 'Brighton Marina' },
  { href: '/areas/hove', label: 'Hove' },
  { href: '/areas/kemptown', label: 'Kemptown' },
  { href: '/areas/rottingdean', label: 'Rottingdean' },
  { href: '/areas/saltdean', label: 'Saltdean' },
  { href: '/areas/preston-park', label: 'Preston Park' },
  { href: '/areas/whitehawk', label: 'Whitehawk' },
  { href: '/areas', label: 'All Areas →' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Car Detailing in Brighton logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-[#f0f9ff] text-sm leading-tight">Car Detailing</div>
                <div className="text-xs text-[#38bdf8] leading-tight">in Brighton</div>
              </div>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Brighton&apos;s professional hand car wash, valeting, and ceramic coating service.
              Located at Marina Square, Brighton Marina, BN2 5UT.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Follow on Instagram
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#f0f9ff] mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      link.label.includes('→')
                        ? 'text-[#0ea5e9] hover:text-[#38bdf8] font-medium'
                        : 'text-[#94a3b8] hover:text-[#38bdf8]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-[#f0f9ff] mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      link.label.includes('→')
                        ? 'text-[#0ea5e9] hover:text-[#38bdf8] font-medium'
                        : 'text-[#94a3b8] hover:text-[#38bdf8]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#f0f9ff] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services & Prices' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/faq', label: 'FAQs' },
                { href: '/blog', label: 'Blog & Guides' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact & Directions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#f0f9ff] mb-4">Find Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                <address className="not-italic text-sm text-[#94a3b8] leading-relaxed">
                  Marina Square<br />
                  Brighton Marina<br />
                  Brighton, BN2 5UT
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                <a
                  href="tel:+447495885042"
                  className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                >
                  +44 7495 885042
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-[#94a3b8]">
                  Monday – Sunday<br />
                  9:00 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e3a5f] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94a3b8]">
            © {new Date().getFullYear()} Car Detailing in Brighton. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/faq" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">FAQ</Link>
            <Link href="/blog" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">Blog</Link>
            <Link href="/areas" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">Areas</Link>
            <Link href="/services" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">Services</Link>
            <Link href="/gallery" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">Gallery</Link>
            <Link href="/about" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">About</Link>
            <Link href="/contact" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
