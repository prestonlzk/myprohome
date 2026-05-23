import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import { blogPosts } from '@/data/blog'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | MyHomePro Malaysia`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.myhomepro.com.my/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.myhomepro.com.my/blog/${post.slug}`,
    },
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })
}

function AutoGateRepairCost() {
  return (
    <div className="prose-content">
      <p className="text-text-secondary text-lg leading-relaxed mb-6">
        Auto gate repairs are one of the most common home service requests in Malaysia. But before
        you call a technician, it helps to know what a fair price looks like so you can make an
        informed decision. Here is a complete breakdown of auto gate repair costs in Malaysia for 2025.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        Typical Auto Gate Repair Costs in Malaysia
      </h2>

      <h3 className="font-poppins font-semibold text-[20px] text-text-primary mt-7 mb-3">
        Motor Repair: RM150 – RM400
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        The motor is the most critical component of your auto gate. Repair costs depend on the
        severity of the fault — a minor electrical issue or capacitor replacement may cost as
        little as RM150, while a more involved motor overhaul can run up to RM400. If the motor
        has seized or burnt out completely, replacement is usually a better option than repair.
      </p>

      <h3 className="font-poppins font-semibold text-[20px] text-text-primary mt-7 mb-3">
        Remote Control Replacement: RM50 – RM120
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Remote controls are consumable items. A standard replacement remote for common brands
        costs between RM50 and RM80. Branded remotes or those requiring programming may cost
        up to RM120. Always check whether your existing remote just needs a battery change before
        assuming it is faulty — this is a surprisingly common issue.
      </p>

      <h3 className="font-poppins font-semibold text-[20px] text-text-primary mt-7 mb-3">
        Sensor Repair: RM80 – RM200
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Safety sensors (also called photocells or infrared sensors) detect obstructions in the
        gate&apos;s path. When sensors malfunction, your gate may refuse to close, reverse unexpectedly,
        or open randomly. Sensor alignment costs are on the lower end (RM80-100), while replacing
        damaged sensor units can cost RM150-200.
      </p>

      <h3 className="font-poppins font-semibold text-[20px] text-text-primary mt-7 mb-3">
        Full Gate Replacement: RM800 – RM2,500
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        When your gate structure or motor is beyond repair, a full replacement is the way to go.
        Costs vary based on gate type (swing, sliding, or folding), material (aluminium, steel,
        or timber), size, and brand. A basic sliding gate with a new motor and installation starts
        around RM800-1,200. Premium systems with smart features can exceed RM2,500.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        Factors That Affect the Price
      </h2>
      <ul className="flex flex-col gap-3 mb-6">
        {[
          'Gate type (swing gates are generally more complex to repair than sliding gates)',
          'Brand of the motor (OEM parts for less common brands cost more)',
          'Severity of the problem (minor faults vs. complete motor failure)',
          'Your location (technicians in major cities like KL and Penang may charge differently)',
          'Parts availability (imported parts may require waiting time)',
          'Labour rates of the individual technician or company',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
            <span className="text-text-secondary text-base">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        When to Repair vs. Replace Your Auto Gate
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        A good rule of thumb: if the cost of repair exceeds 60% of the cost of a new gate and motor,
        replacement is usually the smarter choice. Age matters too — auto gate motors typically last
        8 to 15 years depending on usage and maintenance. If your gate is older than 10 years and
        experiencing repeated problems, a new system will likely save you money in the long run.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        However, if the gate is relatively new (under 5 years old) or the problem is clearly
        isolated (a blown fuse, a faulty remote, or a dirty sensor), repair is almost always
        the right choice.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        Maintenance Tips to Avoid Costly Repairs
      </h2>
      <ul className="flex flex-col gap-3 mb-6">
        {[
          'Do a monthly visual inspection — check for rust, loose hinges, and debris near sensors',
          'Lubricate the gate rails, wheels, and hinges every 3 to 6 months with a suitable lubricant',
          'Keep the sensor lenses clean and free from dirt, cobwebs, and vegetation',
          'Test the manual override function so you know how to operate it during power outages',
          'Replace remote batteries proactively — do not wait until they go flat',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2.5" />
            <span className="text-text-secondary text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SignsRoofNeedsRepair() {
  return (
    <div className="prose-content">
      <p className="text-text-secondary text-lg leading-relaxed mb-6">
        Malaysia&apos;s monsoon seasons bring heavy, sustained rainfall that can quickly turn a small
        roof weakness into a major water damage problem. The key is catching roof issues early —
        before the rains arrive. Here are five warning signs that your roof needs attention right now.
      </p>

      <h3 className="font-poppins font-semibold text-[22px] text-text-primary mt-8 mb-3">
        1. Water Stains on Your Ceiling
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Brown or yellowish patches on your ceiling are almost always caused by water intrusion
        from above. Even if you cannot see an active drip, the stain tells you that water has
        already penetrated your roof and is pooling somewhere in your ceiling structure. Over time,
        this moisture promotes mould growth, weakens plaster, and can cause your false ceiling to
        sag or collapse.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        What to do: Do not just paint over the stain. Have a roofing professional inspect and
        locate the source of the leak. The entry point of water on the roof is often not directly
        above the stain — water can travel along rafters and beams before dripping down.
      </p>

      <h3 className="font-poppins font-semibold text-[22px] text-text-primary mt-8 mb-3">
        2. Daylight Visible Through Roof Boards
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        If you can access your attic or roof void, look up on a bright day. Any visible light
        coming through the roof boards or tiles indicates a gap that water can also penetrate.
        This is especially common in older terrace houses where roof timber has dried and shrunk
        over decades.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        What to do: Even small gaps should be addressed promptly. Water follows the path of least
        resistance, and a tiny gap during moderate rain can become a waterfall during a heavy
        Malaysian downpour.
      </p>

      <h3 className="font-poppins font-semibold text-[22px] text-text-primary mt-8 mb-3">
        3. Missing, Cracked, or Broken Roof Tiles
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Clay and concrete roof tiles are robust but not indestructible. UV exposure, thermal
        expansion and contraction, and occasional physical impacts (from falling branches or
        improper installation of satellite dishes and solar panels) can crack or dislodge tiles.
        Missing tiles leave the underlayment exposed, which deteriorates quickly in Malaysia&apos;s
        UV-intense climate.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        What to do: Walk around your property after a storm and look for tile fragments on the
        ground. A professional can replace individual tiles without disturbing the surrounding roof.
        Address this before monsoon season, not during.
      </p>

      <h3 className="font-poppins font-semibold text-[22px] text-text-primary mt-8 mb-3">
        4. Sagging Sections of Roof
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        A roof should be flat or uniformly sloped. If you notice any dipping, sagging, or uneven
        sections from the outside, this is a serious sign. Sagging usually indicates that the
        roof decking or structural supports have been weakened — often by long-term water damage
        or timber rot.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        What to do: A sagging roof is a structural issue that requires immediate professional
        assessment. Do not delay — the weight of rainwater on a compromised roof structure can
        cause a partial collapse.
      </p>

      <h3 className="font-poppins font-semibold text-[22px] text-text-primary mt-8 mb-3">
        5. Unexplained Increase in Energy Bills
      </h3>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        This one surprises many homeowners. If your air-conditioning is running harder than usual
        and your electricity bills are climbing without an obvious reason, your roof insulation
        may be compromised. Damaged roofing or deteriorated insulation allows more heat to enter
        your home, making your air-conditioning work harder to maintain the same temperature.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        What to do: Have a roofing professional inspect your roof insulation and underlayment.
        In some cases, adding or replacing insulation can significantly reduce your monthly
        electricity costs.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        Act Before the Monsoon Arrives
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        The best time to fix your roof is during the dry season — not when it is already raining.
        Getting a professional inspection before the monsoon allows time for proper repairs, parts
        sourcing, and thorough waterproofing work without the pressure of an active leak.
      </p>
    </div>
  )
}

function KitchenHoodCleaningGuide() {
  return (
    <div className="prose-content">
      <p className="text-text-secondary text-lg leading-relaxed mb-6">
        The kitchen hood is one of the most neglected appliances in Malaysian homes. It runs
        silently in the background every time you cook, capturing grease, smoke, and moisture
        before they coat your kitchen walls and cabinets. But all of that captured grease has
        to go somewhere — and it builds up inside your hood faster than most people realise.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        Why Grease Builds Up So Quickly in Malaysian Kitchens
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Malaysian cooking involves a lot of high-heat methods — stir-frying over a powerful
        gas flame, deep-frying ayam goreng, making rempah for curries, and grilling over open
        heat. These cooking techniques generate far more airborne grease particles than, say,
        boiling pasta or baking in an oven.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        This means that even if you only cook once or twice a day, your kitchen hood filters can
        become saturated with grease in as little as 3 to 4 months. In restaurant kitchens, the
        buildup happens even faster — in weeks rather than months.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        The Fire Risk You Cannot Ignore
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        Grease is highly flammable. When it accumulates in your kitchen hood and ductwork, you
        are essentially creating a fire hazard directly above your cooktop. A grease fire that
        reaches the hood can travel up through the ductwork and spread to the ceiling cavity
        — a scenario that can be devastating.
      </p>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        In Malaysia, kitchen fires are among the most common causes of residential fires. Many
        of these could be prevented with regular hood maintenance. Insurance companies increasingly
        require commercial kitchen operators to have documented hood cleaning records — a sign of
        how seriously this risk is taken.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        What a Professional Kitchen Hood Cleaning Includes
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        A professional service goes far beyond what you can achieve with a cloth and some
        degreaser spray. Here is what a proper professional cleaning involves:
      </p>
      <ul className="flex flex-col gap-3 mb-6">
        {[
          'Dismantling of the hood cover, filters, and accessible ductwork sections',
          'Degreasing all internal surfaces with commercial-grade cleaning agents',
          'Filter removal, soaking, and thorough cleaning or replacement if beyond saving',
          'Cleaning of the exhaust fan blades (a major grease accumulation point that most DIY cleaners miss)',
          'Inspection of the motor and electrical components for any damage',
          'Reassembly and testing to confirm suction power is fully restored',
          'Disposal of removed grease in accordance with waste regulations',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
            <span className="text-text-secondary text-base">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        DIY vs. Professional Cleaning — What You Can Do Yourself
      </h2>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        There are things you can and should do yourself between professional cleanings:
      </p>
      <ul className="flex flex-col gap-3 mb-6">
        {[
          'Wipe down the exterior of the hood with a damp cloth and mild degreaser after every few cooking sessions',
          'Remove and rinse the mesh filters monthly under hot water — many are dishwasher-safe',
          'Check that the hood light is working and replace bulbs as needed',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2.5" />
            <span className="text-text-secondary text-base">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        However, cleaning the exhaust fan blades, the ductwork interior, and the motor housing
        requires disassembly and the right chemicals — this is where a professional is needed.
        Attempting it without experience can damage components or create a chemical hazard.
      </p>

      <h2 className="font-poppins font-bold text-[24px] md:text-[28px] text-text-primary mt-10 mb-4">
        How Often Should You Get a Professional Clean?
      </h2>
      <ul className="flex flex-col gap-3 mb-6">
        {[
          'Light home cooking (once a day or less): every 12 months',
          'Moderate home cooking (twice daily, Malaysian-style cooking): every 6 months',
          'Heavy home cooking or frequent deep-frying: every 3 to 4 months',
          'Small cafe or food stall: every 2 to 3 months',
          'Commercial restaurant kitchen: every 4 to 8 weeks',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
            <span className="text-text-secondary text-base">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-text-secondary text-base leading-relaxed mb-4">
        A clean kitchen hood also works more efficiently. When filters are clogged, the fan has
        to work harder to pull air through, consuming more electricity and generating more noise.
        After a professional clean, many homeowners notice the difference immediately — a quieter
        hood with noticeably stronger suction.
      </p>
    </div>
  )
}

const contentMap: Record<string, React.FC> = {
  'auto-gate-repair-cost-malaysia': AutoGateRepairCost,
  'signs-roof-needs-repair': SignsRoofNeedsRepair,
  'kitchen-hood-cleaning-guide': KitchenHoodCleaningGuide,
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const ContentComponent = contentMap[post.slug]
  if (!ContentComponent) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <Header />

      <article className="py-10 md:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Meta */}
            <div className="flex items-center gap-4 text-text-secondary text-sm mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <span className="text-[#D1D5DB]">·</span>
              <div className="flex items-center gap-1.5">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-poppins font-bold text-[28px] md:text-[40px] text-text-primary leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-text-secondary text-lg leading-relaxed border-l-4 border-primary pl-4 mb-8">
              {post.excerpt}
            </p>

            {/* Content */}
            <ContentComponent />

            {/* Lead Form */}
            <div className="mt-14 pt-10 border-t border-[#E5E7EB]">
              <div className="text-center mb-8">
                <h2 className="font-poppins font-bold text-[24px] md:text-[30px] text-text-primary">
                  Need Help With Your Home?
                </h2>
                <p className="mt-3 text-text-secondary text-base">
                  Submit a free request and we will connect you with a trusted professional
                  in your area within 24 hours.
                </p>
              </div>
              <div className="bg-primary-light rounded-2xl p-6 md:p-8">
                <LeadForm />
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-14">
                <h2 className="font-poppins font-bold text-[22px] text-text-primary mb-6">
                  Related Posts
                </h2>
                <div className="flex flex-col gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group border border-[#E5E7EB] rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-1.5 text-text-secondary text-sm mb-2">
                        <Calendar size={13} />
                        <time dateTime={related.date}>{formatDate(related.date)}</time>
                      </div>
                      <h3 className="font-poppins font-semibold text-[16px] text-text-primary group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
