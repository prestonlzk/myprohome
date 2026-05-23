import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MyHomePro — Find Trusted Home Service Pros in Malaysia',
    template: '%s | MyHomePro Malaysia',
  },
  description:
    'MyHomePro connects Malaysian homeowners with trusted local service professionals for auto gate repair, roof leaks, kitchen hood cleaning, water heater repair, false ceiling repair, and junk removal.',
  keywords: [
    'home services Malaysia',
    'home repair Malaysia',
    'handyman Malaysia',
    'auto gate repair',
    'roof leak repair',
    'kitchen hood cleaning',
    'water heater repair',
    'false ceiling repair',
    'junk removal Malaysia',
  ],
  authors: [{ name: 'MyHomePro' }],
  creator: 'MyHomePro',
  publisher: 'MyHomePro',
  metadataBase: new URL('https://www.myhomepro.com.my'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://www.myhomepro.com.my',
    siteName: 'MyHomePro',
    title: 'MyHomePro — Find Trusted Home Service Pros in Malaysia',
    description:
      'Connect with trusted home service professionals across Malaysia. Free to request, response within 24 hours.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyHomePro — Home Services Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyHomePro — Find Trusted Home Service Pros in Malaysia',
    description:
      'Connect with trusted home service professionals across Malaysia. Free to request, response within 24 hours.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MyHomePro',
  description:
    'MyHomePro connects Malaysian homeowners with trusted local service professionals for home repairs and maintenance.',
  url: 'https://www.myhomepro.com.my',
  telephone: '+60123456789',
  email: 'hello@myhomepro.com.my',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MY',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Malaysia',
  },
  serviceType: [
    'Auto Gate Repair',
    'Roof Leak Repair',
    'Kitchen Hood Cleaning',
    'Water Heater Repair',
    'False Ceiling Repair',
    'Junk Removal',
  ],
  priceRange: 'RM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter text-text-primary bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
