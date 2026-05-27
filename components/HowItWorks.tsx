const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Fill in our simple form with your location, the service you need, and a brief description of your problem. It takes less than 2 minutes.',
  },
  {
    number: '02',
    title: 'We Find the Right Pro',
    description:
      'We match your request with trusted, vetted service professionals in your area who have the right skills and experience.',
  },
  {
    number: '03',
    title: 'Get Contacted Directly',
    description:
      'The pro reaches out to you on WhatsApp or by phone to discuss the job and arrange a visit.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-text-primary">
            How It Works
          </h2>
          <p className="mt-3 text-text-secondary text-base md:text-lg max-w-xl mx-auto">
            Getting the right help for your home has never been easier. Three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-start md:items-center md:text-center">
              <div className="flex items-center gap-4 md:flex-col md:gap-3">
                <span className="font-poppins font-bold text-[40px] md:text-[48px] text-primary leading-none">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-0.5 bg-[#E5E7EB] flex-1 absolute" />
                )}
              </div>
              <div className="mt-3 md:mt-4">
                <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-text-secondary text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
