import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Instagram } from 'lucide-react'

const serviceLinks = [
  { href: '/services#exterior', label: 'Exterior Hand Wash' },
  { href: '/services#mini', label: 'Mini Valet' },
  { href: '/services#full', label: 'Full Valet' },
  { href: '/services#engine', label: 'Engine Bay Clean' },
  { href: '/services#alloy', label: 'Alloy Wheel Clean' },
]

const areaLinks = [
  'Brighton', 'Hove', 'Brighton Marina', 'Kemp Town',
  'Rottingdean', 'Saltdean', 'Peacehaven', 'Preston Park',
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                <div className="font-bold text-[#f0f9ff] text-sm leading-tight">Brighton Marina</div>
                <div className="text-xs text-[#38bdf8] leading-tight">Hand Car Wash</div>
              </div>
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Brighton&apos;s premier hand car wash and detailing service. Located at Marina Square, Brighton Marina.
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
            <h3 className="font-semibold text-[#f0f9ff] mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] font-medium transition-colors">
                  View All Prices →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-semibold text-[#f0f9ff] mb-4">Areas We Serve</h3>
            <ul className="space-y-1">
              {areaLinks.map((area) => (
                <li key={area} className="text-sm text-[#94a3b8]">
                  {area}
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
                  Marina Way, Marina Square<br />
                  Brighton Marina<br />
                  Brighton, BN2 5UT
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                <a
                  href="tel:+447392596532"
                  className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                >
                  +44 7392 596532
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
            © {new Date().getFullYear()} Brighton Marina Hand Car Wash. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              Services & Pricing
            </Link>
            <Link href="/contact" className="text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
