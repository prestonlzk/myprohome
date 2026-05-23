import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-poppins font-bold text-xl text-primary">
              MyHomePro
            </span>
            <p className="mt-2 text-[#9CA3AF] text-sm">Home services, sorted.</p>
            <p className="mt-4 text-[#9CA3AF] text-sm leading-relaxed">
              Connecting Malaysian homeowners with trusted local service professionals
              for all home repair and maintenance needs.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D1D5DB] hover:text-white text-sm transition-colors"
              >
                <Phone size={15} />
                <span>+60 12-345 6789</span>
              </a>
              <a
                href="mailto:hello@myhomepro.com.my"
                className="flex items-center gap-2 text-[#D1D5DB] hover:text-white text-sm transition-colors"
              >
                <Mail size={15} />
                <span>hello@myhomepro.com.my</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Auto Gate Repair', slug: 'auto-gate-repair' },
                { label: 'Roof Leak Repair', slug: 'roof-leak-repair' },
                { label: 'Kitchen Hood Cleaning', slug: 'kitchen-hood-cleaning' },
                { label: 'Water Heater Repair', slug: 'water-heater-repair' },
                { label: 'False Ceiling Repair', slug: 'false-ceiling-repair' },
                { label: 'Junk Removal', slug: 'junk-removal' },
              ].map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                >
                  Blog &amp; Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/#lead-form"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
                >
                  Submit a Request
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#374151] text-center">
          <p className="text-[#6B7280] text-sm">
            &copy; {currentYear} MyHomePro. All rights reserved. | Serving homeowners across Malaysia.
          </p>
        </div>
      </div>
    </footer>
  )
}
