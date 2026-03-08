'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services & Prices' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#080c14]/95 backdrop-blur-md border-b border-[#1e3a5f] shadow-xl'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Car Detailing in Brighton logo"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-[#f0f9ff] leading-tight">Brighton Marina</div>
                <div className="text-xs text-[#38bdf8] leading-tight">Hand Car Wash</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-[#38bdf8] bg-[#0f1624]'
                      : 'text-[#94a3b8] hover:text-[#f0f9ff] hover:bg-[#0f1624]/60'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+447392596532"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white text-sm font-semibold hover:shadow-sky-glow transition-all duration-300 btn-glow"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">+44 7392 596532</span>
                <span className="md:hidden">Call Us</span>
              </a>

              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:text-[#f0f9ff] hover:border-[#0ea5e9] transition-all"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0f1624] border-l border-[#1e3a5f] shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-[#1e3a5f]">
                <div>
                  <div className="font-bold text-[#f0f9ff]">Brighton Marina</div>
                  <div className="text-sm text-[#38bdf8]">Hand Car Wash</div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-[#94a3b8] hover:text-[#f0f9ff]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all',
                      pathname === link.href
                        ? 'bg-[#0ea5e9]/10 text-[#38bdf8] border border-[#0ea5e9]/20'
                        : 'text-[#94a3b8] hover:text-[#f0f9ff] hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-[#1e3a5f] space-y-3">
                <a
                  href="tel:+447392596532"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  +44 7392 596532
                </a>
                <div className="text-center text-xs text-[#94a3b8]">Open 7 Days · 9am – 6pm</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
