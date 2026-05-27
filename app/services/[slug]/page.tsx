import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FAQSection from '@/components/FAQSection'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}

  const title = `${service.name} in Malaysia — Get Free Help | MyHomePro`
  const description = service.description

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.myhomepro.com.my/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.myhomepro.com.my/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const seoParas = service.seoContent
    .split('\n\n')
    .filter(Boolean)
    .map((p) => p.trim())

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-primary-light py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-[32px] md:text-[48px] text-text-primary leading-tight max-w-3xl mx-auto">
            {service.name} in Malaysia
          </h1>
          <p className="mt-3 text-[#6B7280] text-[14px] font-inter">
            Serving homeowners across Malaysia · Fast response · Free to enquire
          </p>
          <p className="mt-4 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
          <div className="mt-8">
            <Link
              href="#lead-form"
              className="inline-block bg-accent text-white font-poppins font-semibold text-lg py-[18px] px-9 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Free Help Now
            </Link>
          </div>
        </div>
      </section>

      {/* Problems we help with */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-[26px] md:text-[32px] text-text-primary mb-6">
              What We Help You With
            </h2>
            <ul className="flex flex-col gap-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary text-base">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section id="lead-form" className="py-12 md:py-20 bg-[#EFF6FF]">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-[26px] md:text-[32px] text-text-primary">
              Get Help With {service.name} Today
            </h2>
            <p className="mt-3 mb-8 text-text-secondary text-base">
              Free to enquire. We arrange everything for you.
            </p>
            <WhatsAppButton service={service.slug} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />

      {/* SEO Content */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-[24px] md:text-[30px] text-text-primary mb-6">
              About {service.name} in Malaysia
            </h2>
            <div className="flex flex-col gap-5">
              {seoParas.map((para, i) => (
                <p key={i} className="text-text-secondary text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-[24px] md:text-[30px] text-text-primary mb-8">
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
