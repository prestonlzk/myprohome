export type Service = {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  keywords: string[]
  faqs: { q: string; a: string }[]
  problems: string[]
  seoContent: string
}

export const services: Service[] = [
  {
    slug: "auto-gate-repair",
    name: "Auto Gate Repair",
    tagline: "Gate not opening? We fix it fast.",
    description: "Auto gate motors, remote controls, sensors, and full gate replacements for homes and businesses across Malaysia.",
    icon: "GanttChart",
    keywords: ["auto gate repair Malaysia", "auto gate repair Penang", "auto gate not working", "auto gate motor repair"],
    problems: [
      "Motor not working or making unusual noises",
      "Gate stuck halfway and won't open or close",
      "Remote control not responding",
      "Gate opening slowly or inconsistently",
      "Sensor issues causing random opening/closing",
      "Full gate replacement needed"
    ],
    faqs: [
      { q: "How long does auto gate repair take?", a: "Most repairs take 1 to 2 hours. If parts need ordering, we will let you know upfront." },
      { q: "Do you repair all brands?", a: "Yes. We service all major auto gate brands including Autogate, FAAC, CAME, and more." },
      { q: "Is it better to repair or replace my auto gate?", a: "We always check if repair is possible first. We only recommend replacement if the motor or structure is beyond repair." },
    ],
    seoContent: `Auto gate systems are a convenience that many Malaysian homeowners rely on daily. When your auto gate stops working, it can disrupt your routine and compromise the security of your home. Whether you have a swing gate, sliding gate, or folding gate, our network of experienced technicians can diagnose and fix the problem quickly.\n\nCommon auto gate problems in Malaysia include motor failures due to power surges during thunderstorms, remote control issues from signal interference, and mechanical wear from regular use. The tropical climate also plays a role — heat and humidity can affect electronic components over time.\n\nMost auto gate repairs can be completed within the same day. Our technicians carry common spare parts for major brands, which means faster turnaround for you. We service all states including Penang, Kuala Lumpur, Selangor, Johor Bahru, and beyond.\n\nIf you are unsure whether to repair or replace your auto gate, our technicians will give you an honest assessment. We always try to repair first, and only recommend replacement when it is truly the more cost-effective option in the long run. Ready to get help? Submit your request above and we will be in touch within 24 hours.`
  },
  {
    slug: "roof-leak-repair",
    name: "Roof Leak Repair",
    tagline: "Leaking roof? Get it fixed before the damage spreads.",
    description: "Professional roof leak detection and repair for terrace houses, bungalows, and commercial properties across Malaysia.",
    icon: "Home",
    keywords: ["roof leak repair Malaysia", "roof leaking Penang", "roof repair contractor Malaysia", "fix roof leak"],
    problems: [
      "Water stains or damp patches on the ceiling",
      "Active leak during rain",
      "Cracked or broken roof tiles",
      "Damaged or rusted roof flashing",
      "Flat roof with pooling water",
      "Ridge tiles loose or missing"
    ],
    faqs: [
      { q: "How do I know if my roof is leaking?", a: "Common signs include water stains on ceilings, mould on walls, and damp patches after rain." },
      { q: "How long does roof repair take?", a: "Minor repairs can be done in a day. Larger jobs may take 2 to 3 days depending on the scope." },
      { q: "What types of roofs do you repair?", a: "We repair all common Malaysian roof types including clay tiles, metal roofs, flat roofs, and zinc roofs." },
    ],
    seoContent: `Roof leaks are one of the most common and costly home problems in Malaysia, especially during the monsoon season. A small leak that is ignored can quickly lead to ceiling damage, mould growth, electrical hazards, and structural deterioration. Acting quickly is always the right decision.\n\nMalaysian homes face unique roofing challenges. The heavy monsoon rains, intense UV exposure, and high humidity accelerate wear on roofing materials. Clay tiles crack, metal roofs rust, and flat roof membranes deteriorate over time. Even a small gap in the flashing around a skylight or air-conditioning unit can let in significant amounts of water.\n\nOur network of roofing contractors across Malaysia are experienced with all types of residential and commercial roofs. They use quality waterproofing materials and proven repair techniques to ensure long-lasting results. Before starting any work, they will show you exactly where the leak is coming from and what needs to be done.\n\nDo not wait until the next downpour causes more damage to your ceilings, walls, and belongings. Ready to get help? Submit your request above and we will be in touch within 24 hours.`
  },
  {
    slug: "kitchen-hood-cleaning",
    name: "Kitchen Hood Cleaning",
    tagline: "Greasy kitchen hood? A clean hood is a safe kitchen.",
    description: "Deep cleaning of kitchen hoods, filters, and exhaust fans for homes and restaurants across Malaysia.",
    icon: "Wind",
    keywords: ["kitchen hood cleaning Malaysia", "kitchen exhaust cleaning Penang", "range hood cleaning service", "kitchen hood deep clean"],
    problems: [
      "Greasy buildup inside the hood and on filters",
      "Clogged filters reducing suction power",
      "Fan making noise or vibrating",
      "Hood not extracting smoke effectively",
      "Hood light not working",
      "Full deep clean for restaurant kitchen"
    ],
    faqs: [
      { q: "How often should I clean my kitchen hood?", a: "For home kitchens, every 6 months is ideal. For restaurant kitchens, every 1 to 3 months." },
      { q: "Why is kitchen hood cleaning important?", a: "Grease buildup is a fire hazard. A clean hood also works more efficiently and keeps your kitchen smelling fresh." },
      { q: "Do you clean the filters too?", a: "Yes. We clean or replace the filters, the hood interior, and the exhaust fan as part of our standard service." },
    ],
    seoContent: `The kitchen hood is one of the most overlooked appliances in Malaysian homes, yet it plays a critical role in keeping your kitchen safe and comfortable. Every time you cook, grease particles, smoke, and moisture are drawn up into the hood. Over time, this builds up into a thick layer of flammable grease that poses a serious fire risk.\n\nIn Malaysian kitchens where stir-frying, deep frying, and other high-heat cooking methods are common, grease buildup happens faster than in Western kitchens. Many homeowners are surprised by how much grease accumulates inside their hood and ductwork in just six months.\n\nA professional kitchen hood cleaning service does much more than wipe the visible surfaces. Our technicians dismantle the hood, degrease the internal components, clean or replace the filters, clean the exhaust fan blades, and ensure everything is reassembled correctly. The result is a hood that extracts smoke more efficiently, uses less electricity, and poses no fire risk.\n\nFor restaurant and commercial kitchen owners, regular hood cleaning is not just good practice — it may be required by your insurance policy or local health regulations. Ready to get help? Submit your request above and we will be in touch within 24 hours.`
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    tagline: "No hot water? We diagnose and fix it the same day.",
    description: "Repair and replacement of instant water heaters, storage water heaters, and solar heaters for Malaysian homes.",
    icon: "Thermometer",
    keywords: ["water heater repair Malaysia", "water heater repair Penang", "instant water heater not working", "water heater replacement"],
    problems: [
      "No hot water coming out",
      "Circuit breaker or switch keeps tripping",
      "Water heater leaking from the unit or connections",
      "Inconsistent water temperature",
      "Heater making popping or rumbling noises",
      "Full water heater replacement needed"
    ],
    faqs: [
      { q: "Why is my water heater tripping the switch?", a: "This is usually caused by a faulty heating element or a water pressure issue. Our technician will diagnose it on the spot." },
      { q: "Do you repair instant and storage heaters?", a: "Yes. We repair and install all types including instant heaters, storage tanks, and solar water heaters." },
      { q: "How long does a repair take?", a: "Most repairs are completed in under 2 hours. Replacements may take half a day." },
    ],
    seoContent: `Hot water is not a luxury in Malaysian homes — it is a daily necessity. When your water heater breaks down, it affects the whole household. Whether you have an instant water heater, a storage tank, or a solar heater, our technicians can diagnose and fix the problem quickly.\n\nInstant water heaters are the most common type in Malaysian homes. Common issues include tripped circuit breakers (often caused by a failing heating element or earth leakage), no hot water due to a faulty thermostat, and water leaking from the unit. These problems are usually repairable at a reasonable cost.\n\nStorage water heaters develop different problems over time. Sediment builds up inside the tank, reducing efficiency. The anode rod that prevents corrosion eventually depletes and needs replacement. Ignoring these issues leads to a shorter lifespan for your heater.\n\nOur technicians carry common spare parts for major brands like Joven, Rheem, Alpha, and Panasonic, allowing most repairs to be completed in a single visit. We also advise you honestly on whether repair or full replacement makes more financial sense. Ready to get help? Submit your request above and we will be in touch within 24 hours.`
  },
  {
    slug: "false-ceiling-repair",
    name: "False Ceiling Repair",
    tagline: "Cracked or sagging ceiling? Fix it before it falls.",
    description: "Plaster, gypsum, and POP false ceiling repairs for residential and commercial properties across Malaysia.",
    icon: "Layers",
    keywords: ["false ceiling repair Malaysia", "plaster ceiling repair Penang", "gypsum ceiling crack repair", "ceiling repair contractor"],
    problems: [
      "Ceiling cracking along joints or panels",
      "Sagging or bulging ceiling sections",
      "Water damage stains on the ceiling",
      "Gypsum board falling or at risk of falling",
      "Plaster peeling from the ceiling surface",
      "New false ceiling installation"
    ],
    faqs: [
      { q: "What causes false ceilings to crack?", a: "Common causes include water leaks from above, poor installation, building settlement, and humidity." },
      { q: "Can you repair a specific section or do you replace the whole ceiling?", a: "We can repair just the damaged section in most cases, which is faster and more cost-effective." },
      { q: "Do you match the existing ceiling texture?", a: "Yes. We do our best to match the texture and finish of the existing ceiling." },
    ],
    seoContent: `False ceilings add aesthetic value to Malaysian homes, but they require attention when problems arise. A cracked, sagging, or stained ceiling is more than an eyesore — it can indicate a serious problem above, and in extreme cases, ceiling sections can fall and cause injury.\n\nThe most common cause of false ceiling damage in Malaysia is water leakage from the unit above (in apartments and condominiums) or from a roof leak (in landed properties). Once water saturates the gypsum board or plaster, it weakens rapidly. Acting quickly can limit the damage to a small section rather than requiring a full ceiling replacement.\n\nOur ceiling repair contractors work with all types of false ceilings common in Malaysia including gypsum board (plasterboard) ceilings, plaster of Paris (POP) decorative ceilings, and calcium silicate board ceilings. In most cases, only the damaged section needs to be removed and replaced, saving you time and money.\n\nAfter repairing the ceiling, we also recommend addressing the root cause of the damage — whether that is fixing a roof leak, resolving a plumbing issue from the unit above, or improving ventilation to reduce condensation. Ready to get help? Submit your request above and we will be in touch within 24 hours.`
  },
  {
    slug: "junk-removal",
    name: "Junk & Rubbish Removal",
    tagline: "Need to clear out your home? We take everything away.",
    description: "Bulky item disposal, old furniture removal, post-renovation rubbish clearance, and full house cleanouts across Malaysia.",
    icon: "Trash2",
    keywords: ["junk removal Malaysia", "rubbish disposal Penang", "bulky item collection Malaysia", "house cleanout service"],
    problems: [
      "Old furniture that needs to be cleared",
      "Broken appliances and electronics",
      "Post-renovation rubbish and construction waste",
      "Garden waste and green cuttings",
      "Full house or office cleanout",
      "Single bulky items like mattresses or sofas"
    ],
    faqs: [
      { q: "What items can you remove?", a: "We remove old furniture, appliances, renovation waste, garden rubbish, and general household junk. We cannot remove hazardous materials." },
      { q: "Do I need to help carry things out?", a: "No. Our team handles all the heavy lifting. You just show us what needs to go." },
      { q: "How is the cost calculated?", a: "Pricing depends on the volume of items. We give you a quote before starting any work." },
    ],
    seoContent: `Clearing out junk and unwanted items from your home is a task that many Malaysians put off simply because it seems overwhelming. Whether you are moving house, renovating, downsizing, or just doing a long-overdue cleanout, our junk removal service makes it simple. You point, we take it away.\n\nOur teams operate across Malaysia and can handle everything from a single bulky sofa to a full house clearance after a renovation. We remove old furniture, broken appliances, renovation debris, garden waste, and general household junk. All items are disposed of responsibly — we recycle wherever possible and only send waste to approved disposal sites.\n\nPost-renovation junk removal is a speciality. After any renovation project, you are left with broken tiles, leftover building materials, old fixtures, and packaging waste. This type of debris is difficult to dispose of through regular rubbish collection and often ends up sitting in your garage or porch for weeks. Our teams have the equipment and vehicles to clear it all in a single visit.\n\nPricing is transparent — you get a quote based on the volume of items before any work begins. There are no hidden charges. Ready to get help? Submit your request above and we will be in touch within 24 hours.`
  },
]
