import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Clock, Star, MapPin, Check, Zap, Shield } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import ServiceCard from '@/components/ServiceCard'
import WhatsAppButton from '@/components/WhatsAppButton'
import BlogCard from '@/components/BlogCard'
import { services } from '@/data/services'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'MyHomePro — Find Trusted Home Service Pros in Malaysia',
  description:
    'MyHomePro connects Malaysian homeowners with trusted local service professionals. Free to request. Response within 24 hours. Serving all of Malaysia.',
  alternates: {
    canonical: 'https://www.myhomepro.com.my',
  },
}

const trustReasons = [
  {
    icon: ShieldCheck,
    title: 'Vetted Professionals',
    description:
      'Every service professional in our network is verified and reviewed by real homeowners.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description:
      'Submit your request and expect to hear back within 24 hours — often much sooner.',
  },
  {
    icon: Star,
    title: 'No Obligation',
    description:
      'Requesting help is completely free. You decide whether to proceed after speaking to the pro.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description:
      'We have service professionals across all major states in Malaysia, from Penang to JB.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MyHomePro',
  url: 'https://www.myhomepro.com.my',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.myhomepro.com.my/services/{search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-white py-14 md:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-[36px] md:text-[56px] text-text-primary leading-tight max-w-3xl mx-auto">
            Find Trusted Home Service Pros in Malaysia
          </h1>
          <p className="mt-5 text-text-secondary text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Submit one request. We match you with the right local professional for any home
            repair or maintenance job. Fast, free, and with no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#lead-form"
              className="w-full sm:w-auto bg-accent text-white font-poppins font-semibold text-lg py-[18px] px-9 rounded-lg hover:bg-green-700 transition-colors text-center"
            >
              Get Free Help Now
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto text-primary font-semibold text-base border border-primary px-8 py-[17px] rounded-lg hover:bg-primary-light transition-colors text-center"
            >
              Browse Services
            </Link>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {[
              { icon: Check, label: 'Free to Enquire' },
              { icon: Zap, label: 'Reply Within 1 Hour' },
              { icon: Shield, label: 'Trusted Across Malaysia' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 bg-[#F3F4F6] text-[#6B7280] text-[13px] font-inter px-3 py-1.5 rounded-full"
              >
                <Icon size={13} className="flex-shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 md:py-20 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-text-primary">
              Services We Connect You With
            </h2>
            <p className="mt-3 text-text-secondary text-base md:text-lg max-w-xl mx-auto">
              From gate repairs to rubbish removal — we cover the home services Malaysian
              homeowners need most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* WhatsApp Contact */}
      <section id="lead-form" className="py-12 md:py-20 bg-primary-light">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-text-primary">
              Get In Touch — It&apos;s Free
            </h2>
            <p className="mt-3 mb-8 text-text-secondary text-base md:text-lg">
              Chat with us on WhatsApp and we will connect you with the right professional.
              No forms, no waiting — just a quick message.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-text-primary">
              Why Homeowners Choose MyHomePro
            </h2>
            <p className="mt-3 text-text-secondary text-base md:text-lg max-w-xl mx-auto">
              We make finding reliable home service professionals simple, transparent, and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {trustReasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="flex gap-5 p-6 bg-surface rounded-xl border border-[#E5E7EB]"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[18px] text-text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-text-primary">
                Tips &amp; Guides
              </h2>
              <p className="mt-2 text-text-secondary text-base">
                Helpful advice for Malaysian homeowners.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-primary font-semibold text-sm hover:underline flex-shrink-0"
            >
              View all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
