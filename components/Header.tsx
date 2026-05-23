'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Contact', href: '/#lead-form' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-poppins font-bold text-xl text-primary">
              MyHomePro
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#374151] hover:text-primary font-medium text-[15px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#lead-form"
              className="bg-accent text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Free Help
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-[#374151] hover:text-primary hover:bg-[#F3F4F6] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <nav className="max-w-content mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#374151] hover:text-primary font-medium text-base py-2.5 px-2 rounded-md hover:bg-[#F3F4F6] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#lead-form"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-accent text-white font-poppins font-semibold text-base px-5 py-3 rounded-lg text-center hover:bg-green-700 transition-colors"
            >
              Get Free Help Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
