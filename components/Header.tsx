'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const WA_URL =
  'https://wa.me/60124476688?text=Hi%20MyHomePro!%20I%20need%20help%20with%20my%20home.'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="font-poppins font-bold text-xl text-primary">MyHomePro</span>
          </Link>

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
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-[18px] py-[10px] rounded-lg hover:bg-[#1fba58] transition-colors"
            >
              <Phone size={15} />
              012-447 6688
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-[#374151] hover:text-primary hover:bg-[#F3F4F6] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

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
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-base px-5 py-3 rounded-lg hover:bg-[#1fba58] transition-colors"
            >
              <Phone size={16} />
              012-447 6688
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
