interface FAQ {
  q: string
  a: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  serviceName?: string
}

export default function FAQSection({ faqs, serviceName }: FAQSectionProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-text-primary mb-8 md:mb-10">
            Frequently Asked Questions
            {serviceName ? ` — ${serviceName}` : ''}
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E5E7EB] rounded-xl p-6"
              >
                <h3 className="font-poppins font-semibold text-[17px] text-text-primary mb-2">
                  {faq.q}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
