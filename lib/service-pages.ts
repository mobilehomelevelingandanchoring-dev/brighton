export interface ServiceStep {
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServicePageData {
  slug: string
  name: string
  title: string
  h1: string
  metaDescription: string
  primaryKeyword: string
  secondaryKeywords: string[]
  priceFrom: string
  intro: string
  description: string
  process: ServiceStep[]
  benefits: string[]
  faqs: ServiceFAQ[]
  relatedSlugs: string[]
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'car-detailing-brighton',
    name: 'Car Detailing Brighton',
    title: 'Car Detailing Brighton | Professional Auto Detailing Service BN2',
    h1: 'Professional Car Detailing in Brighton',
    metaDescription:
      'Expert car detailing in Brighton at Marina Square. Hand car wash, full valet, ceramic coating & paint correction. Open 7 days. Transparent pricing. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Brighton',
    secondaryKeywords: [
      'auto detailing Brighton',
      'car detailing service Brighton',
      'professional car detailing Brighton',
      'Brighton car detail',
    ],
    priceFrom: '£10',
    intro:
      'Car Detailing in Brighton provides professional car detailing services at Marina Square, Brighton Marina — open seven days a week with transparent, size-based pricing and no hidden charges.',
    description:
      'Car detailing is the systematic cleaning, restoration, and protection of a vehicle, both inside and out. Unlike a standard car wash that removes surface dirt, professional car detailing addresses bonded contamination, paint defects, oxidation, and interior staining — restoring the vehicle closer to its original condition. At Car Detailing in Brighton, we offer a full range of detailing services from a quick exterior hand wash to complete multi-day ceramic coating packages. Brighton\'s coastal environment — with its salt air, sea spray, and high humidity — makes regular professional detailing more important here than in many other UK cities. Salt accelerates paint degradation and corrosion; UV from long seafront sun exposure fades paintwork; and road grime from the A259 bonds to panels and wheels. Our team uses professional-grade products and equipment to address all of these challenges properly, protecting your vehicle\'s appearance and long-term value.',
    process: [
      {
        title: 'Assessment',
        description:
          'We inspect your vehicle under lighting to assess paint condition, identify defects, and confirm services and pricing before we begin.',
      },
      {
        title: 'Pre-Wash & Snow Foam',
        description:
          'A pH-neutral snow foam pre-wash loosens surface dirt and road grime without contact, reducing the risk of scratch introduction.',
      },
      {
        title: 'Hand Wash',
        description:
          'Using the two-bucket wash method with clean microfibre mitts and pH-neutral shampoo, we wash every panel, wheel arch, and sill.',
      },
      {
        title: 'Decontamination',
        description:
          'Iron fallout remover dissolves brake dust and metallic particles bonded to paint. Clay bar treatment removes remaining bonded contamination.',
      },
      {
        title: 'Polishing & Correction',
        description:
          'Where required, machine polishing removes swirl marks, fine scratches, and oxidation — restoring paint clarity and gloss.',
      },
      {
        title: 'Protection',
        description:
          'A paint sealant, wax, or ceramic coating is applied to protect the clean paint surface and extend the results of the detail.',
      },
      {
        title: 'Interior Detailing',
        description:
          'For valet packages, interior surfaces are vacuumed, wiped down, treated, and protected — including upholstery, leather, dashboard, and glass.',
      },
    ],
    benefits: [
      'Protects paintwork from Brighton\'s coastal salt air and UV exposure',
      'Removes bonded contamination that regular washing cannot shift',
      'Restores paint clarity and depth through professional machine polishing',
      'Maintains vehicle resale value — a detailed car achieves higher sale prices',
      'Professional products outperform supermarket alternatives significantly',
      'Transparent pricing based on vehicle size — confirmed before work begins',
      'Open 7 days a week — no appointment needed for most services',
    ],
    faqs: [
      {
        question: 'What is the difference between car detailing and a car wash?',
        answer:
          'A car wash removes surface dirt. Car detailing goes much further — it addresses bonded contamination, paint defects, oxidation, and interior staining using specialist products and equipment. Detailing restores the vehicle; washing maintains it.',
      },
      {
        question: 'How often should I get my car detailed in Brighton?',
        answer:
          'In Brighton\'s coastal environment, we recommend a full detail every 3–4 months and a maintenance wash every 2–4 weeks. The salt air and UV exposure here accelerate paint degradation faster than inland areas.',
      },
      {
        question: 'How much does car detailing cost in Brighton?',
        answer:
          'Pricing at Car Detailing in Brighton starts from £10 for an exterior hand wash, £25 for a mini valet, and £50 for a full valet. Ceramic coating starts from £200. All prices are confirmed by vehicle size before we begin.',
      },
      {
        question: 'Do I need to book for car detailing in Brighton?',
        answer:
          'Walk-ins are welcome for exterior washes and mini valets at Brighton Marina. For full valets, ceramic coating, and paint correction, we recommend calling +44 7495 885042 to book a slot.',
      },
    ],
    relatedSlugs: [
      'car-valeting-brighton',
      'ceramic-coating-brighton',
      'paint-correction-brighton',
      'interior-detailing-brighton',
    ],
  },
  {
    slug: 'ceramic-coating-brighton',
    name: 'Ceramic Coating Brighton',
    title: 'Ceramic Coating Brighton | Professional Paint Protection That Lasts',
    h1: 'Ceramic Coating in Brighton — Long-Term Paint Protection',
    metaDescription:
      'Professional ceramic coating in Brighton at Marina Square. Nano-ceramic protection lasting 1–5 years. Hydrophobic, scratch-resistant, UV-stable. From £200. Call +44 7495 885042.',
    primaryKeyword: 'ceramic coating Brighton',
    secondaryKeywords: [
      'car ceramic coating Brighton',
      'paint protection coating Brighton',
      'nano ceramic coating Brighton',
      'ceramic car coating Brighton',
    ],
    priceFrom: '£200',
    intro:
      'Ceramic coating is the most durable paint protection available today. Car Detailing in Brighton applies professional-grade nano-ceramic coatings at Brighton Marina, providing Brighton car owners with long-term protection against salt, UV, rain, and road contamination.',
    description:
      'A ceramic coating is a liquid polymer that chemically bonds to your car\'s factory paint, creating a semi-permanent, ultra-hard protective layer. Unlike wax or sealant products that sit on the surface and wash away within weeks to months, a professional ceramic coating bonds at the molecular level and lasts between one and five years depending on the grade applied. In Brighton\'s coastal environment, ceramic coating provides critical protection against the salt air, UV exposure, and sea spray that accelerate paint degradation. The coating\'s hydrophobic properties cause water to bead and roll off the surface, taking dirt and contaminants with it — making maintenance washes faster and more effective. Before any ceramic coating application, the paint must be properly decontaminated and corrected. This is a critical step: coating over contaminated or defect-heavy paint will lock imperfections in permanently. Our process begins with a full paint decontamination, followed by paint correction where needed, then ceramic coating application in a controlled environment.',
    process: [
      {
        title: 'Paint Inspection',
        description:
          'We inspect paintwork under a detailing light and measure paint thickness to assess condition and identify any areas requiring correction before coating.',
      },
      {
        title: 'Full Decontamination',
        description:
          'Snow foam pre-wash, hand wash, iron fallout removal, and clay bar treatment remove all bonded contamination from the paint surface.',
      },
      {
        title: 'Paint Correction',
        description:
          'Machine polishing removes swirl marks, fine scratches, and surface defects. This step is essential before coating — defects locked under ceramic coating are permanent.',
      },
      {
        title: 'IPA Wipe-Down',
        description:
          'An isopropyl alcohol wipe-down removes all polish residue and oils, leaving a perfectly clean bonding surface for the ceramic coating.',
      },
      {
        title: 'Ceramic Coating Application',
        description:
          'The ceramic coating is applied panel by panel using a suede applicator block in thin, even layers. The coating begins flashing (curing) within minutes of application.',
      },
      {
        title: 'Levelling & Curing',
        description:
          'Each panel is levelled with a clean microfibre cloth to remove high spots before the coating sets. The vehicle then cures for 24–48 hours before water contact.',
      },
    ],
    benefits: [
      'Lasts 1–5 years depending on coating grade — far longer than wax or sealant',
      'Hydrophobic surface repels salt water, rain, and road spray',
      'UV-stable chemistry prevents paint oxidation and colour fade',
      'Reduces maintenance time — dirt releases more easily from coated surfaces',
      'Adds hardness to paintwork — increased scratch and swirl resistance',
      'Chemical resistance protects against bird drops, tree sap, and road salt',
      'Enhances paint gloss and depth — makes paint look better than new',
    ],
    faqs: [
      {
        question: 'How long does ceramic coating last?',
        answer:
          'Professional-grade ceramic coatings typically last 2–5 years with proper maintenance. Consumer-grade coatings sold in shops last 6–12 months. The durability depends on the coating grade, application quality, and ongoing care.',
      },
      {
        question: 'How much does ceramic coating cost in Brighton?',
        answer:
          'Ceramic coating at Car Detailing in Brighton starts from £200 for a small car with a 1–2 year coating. Mid-tier coatings with multi-year warranties range from £350–£500. Premium packages with paint correction preparation can reach £600+. Call +44 7495 885042 for a quote.',
      },
      {
        question: 'Do I need paint correction before ceramic coating?',
        answer:
          'If your paintwork has noticeable swirl marks, fine scratches, or oxidation, paint correction before coating is strongly recommended. Any defects present at coating time will be locked under the ceramic and become permanent.',
      },
      {
        question: 'How do I maintain a ceramic-coated car?',
        answer:
          'Wash with pH-neutral shampoo using the two-bucket method. Avoid automated car washes with abrasive brushes. Apply a ceramic booster spray every 3–6 months to maintain hydrophobic performance.',
      },
      {
        question: 'Is ceramic coating worth it in Brighton\'s coastal environment?',
        answer:
          'Especially so. Brighton\'s salt air, sea spray, and UV exposure are among the most aggressive conditions for car paintwork in the UK. Ceramic coating creates a barrier that resists salt corrosion, UV fading, and chemical contamination — it is one of the best investments a Brighton car owner can make.',
      },
    ],
    relatedSlugs: [
      'paint-correction-brighton',
      'exterior-detailing-brighton',
      'car-detailing-brighton',
    ],
  },
  {
    slug: 'paint-correction-brighton',
    name: 'Paint Correction Brighton',
    title: 'Paint Correction Brighton | Swirl Mark & Scratch Removal',
    h1: 'Paint Correction Service in Brighton',
    metaDescription:
      'Professional paint correction in Brighton. Remove swirl marks, scratches & oxidation by machine polishing. 1, 2 & 3-stage correction available. From £150. Call +44 7495 885042.',
    primaryKeyword: 'paint correction Brighton',
    secondaryKeywords: [
      'swirl mark removal Brighton',
      'scratch removal Brighton car',
      'machine polishing Brighton',
      'paint polishing Brighton',
    ],
    priceFrom: '£150',
    intro:
      'Paint correction is the professional removal of surface defects — swirl marks, fine scratches, oxidation, and water spots — from a car\'s paintwork using machine polishers and cutting compounds. Car Detailing in Brighton offers 1, 2, and 3-stage paint correction at Brighton Marina.',
    description:
      'Over time, every car\'s paintwork accumulates microscopic surface defects. Swirl marks appear from improper washing technique — circular motions, dirty sponges, or abrasive automated car washes. Fine scratches accumulate from careless door opens, shopping trolleys, and road debris. Oxidation develops from UV exposure, causing paint to look dull and chalky. Water spots leave mineral deposits that etch into the clear coat. Paint correction is the only way to properly remove these defects. Using a dual-action or rotary machine polisher with cutting compounds of varying aggressiveness, our team levels the clear coat surface around each defect — effectively removing it rather than merely filling or hiding it. The number of stages determines the depth of correction: a 1-stage polish removes light swirls and enhances gloss; a 2-stage removes moderate defects; a full 3-stage correction addresses deep swirls, heavy oxidation, and significant scratch damage. Paint correction is the essential preparation step before ceramic coating application.',
    process: [
      {
        title: 'Paint Thickness Measurement',
        description:
          'We measure paint depth across all panels using a digital gauge, ensuring safe working depth and identifying any areas with insufficient clear coat.',
      },
      {
        title: 'Full Decontamination Wash',
        description:
          'Paint is decontaminated through snow foam, hand wash, iron fallout removal, and clay bar treatment before any polishing begins.',
      },
      {
        title: 'Defect Assessment',
        description:
          'Under a detailing light, all panels are inspected and the correction strategy is agreed — confirming the number of polishing stages required.',
      },
      {
        title: 'Machine Polishing',
        description:
          'Using a dual-action polisher with appropriate cutting pads and compounds, we work panel by panel to remove defects systematically.',
      },
      {
        title: 'Refining',
        description:
          'A finer finishing polish removes any marring from the cutting stage and maximises paint clarity and gloss.',
      },
      {
        title: 'Protection Application',
        description:
          'Corrected paint is sealed immediately with a paint sealant or ceramic coating to protect the results and prevent rapid re-contamination.',
      },
    ],
    benefits: [
      'Removes swirl marks, fine scratches, and oxidation permanently',
      'Restores paint gloss, clarity, and depth',
      'Essential preparation step before ceramic coating application',
      'Improves vehicle resale value significantly',
      'Results in a finish better than many new cars leave the factory with',
      'Professional machine polishing is safer than hand polishing',
    ],
    faqs: [
      {
        question: 'Will paint correction remove all scratches from my car?',
        answer:
          'Paint correction removes surface defects in the clear coat layer — swirl marks, light to moderate fine scratches, and oxidation. Deep scratches that penetrate through the clear coat into the base coat or primer cannot be removed by polishing and require touch-up paint or respray.',
      },
      {
        question: 'How much does paint correction cost in Brighton?',
        answer:
          'A 1-stage correction starts from £150 for a small car. A 2-stage correction runs £250–£400. A full 3-stage correction on a larger vehicle can reach £600+. Call +44 7495 885042 for a specific quote based on your vehicle and its condition.',
      },
      {
        question: 'How long does paint correction take?',
        answer:
          'A 1-stage correction takes 4–6 hours. A 2-stage correction takes a full day. A 3-stage correction on a large vehicle can take 1–2 full days. Please allow sufficient time and book in advance.',
      },
      {
        question: 'Does paint correction damage the clear coat?',
        answer:
          'When performed by a professional with proper paint thickness measurement, paint correction does not damage the clear coat. The process removes a minimal amount of clear coat material — well within safe limits — and is safe to repeat every 2–3 years if required.',
      },
    ],
    relatedSlugs: [
      'ceramic-coating-brighton',
      'exterior-detailing-brighton',
      'car-detailing-brighton',
    ],
  },
  {
    slug: 'interior-detailing-brighton',
    name: 'Interior Car Detailing Brighton',
    title: 'Interior Car Detailing Brighton | Deep Clean & Full Interior Valet',
    h1: 'Interior Car Detailing & Deep Clean in Brighton',
    metaDescription:
      'Professional interior car detailing in Brighton. Leather treatment, fabric protection, odour elimination & deep clean. At Brighton Marina. From £25. Call +44 7495 885042.',
    primaryKeyword: 'interior car detailing Brighton',
    secondaryKeywords: [
      'car interior clean Brighton',
      'deep car interior clean Brighton',
      'interior valet Brighton',
      'car interior detailing Brighton',
    ],
    priceFrom: '£25',
    intro:
      'A professionally detailed car interior is cleaner, fresher, and better protected than any home clean can achieve. Car Detailing in Brighton offers full interior detailing at Brighton Marina — from a standard vacuum and wipe-down to a complete deep clean with leather treatment and fabric protection.',
    description:
      'The interior of a car accumulates an extraordinary range of contamination over time: road dust through ventilation systems, food and drink spillages, pet hair, skin oils on leather and upholstery, mould in carpets from damp clothing and wet dog, and deep-seated odours from smoking, pets, or mildew. A professional interior detail addresses all of these systematically, using tools and products not available in consumer cleaning ranges. Our interior detailing service includes deep vacuuming of all carpets and upholstery, including under seats and in door pockets. Dashboard, centre console, and all hard surfaces are cleaned with appropriate interior dressings. Leather is cleaned, conditioned, and protected with leather-specific products. Fabric upholstery is shampooed where required. All glass surfaces are polished inside and out. Headlining is carefully cleaned. Air vents are cleaned with dedicated brushes and compressed air. Persistent odours are addressed with ozone treatment or specialist deodourisers where required.',
    process: [
      {
        title: 'Dry Vacuum',
        description:
          'All carpets, mats, seats, and boot are thoroughly vacuumed, including under seats, in door pockets, and in ventilation slots.',
      },
      {
        title: 'Hard Surface Clean',
        description:
          'Dashboard, centre console, door cards, steering wheel, and all plastic trim are cleaned with specialist interior cleaners and appropriate brushes.',
      },
      {
        title: 'Leather or Fabric Treatment',
        description:
          'Leather seats are cleaned with pH-balanced leather cleaner, then conditioned and protected. Fabric seats are shampooed and stain-treated where required.',
      },
      {
        title: 'Carpet & Mat Shampoo',
        description:
          'Carpets and rubber mats are shampooed with professional upholstery cleaner, agitated, and extracted to remove deep-seated grime and staining.',
      },
      {
        title: 'Glass Polish',
        description:
          'All interior glass is polished with glass-specific cleaner to remove smears, haze, and finger marks for crystal-clear visibility.',
      },
      {
        title: 'Final Dress & Protect',
        description:
          'All surfaces are dressed and protected as appropriate — plastic trim with UV-stable dressing, leather with conditioner, and rubber with appropriate protectant.',
      },
    ],
    benefits: [
      'Removes deeply embedded dirt, staining, and odours professional tools cannot reach',
      'Leather conditioning prevents cracking and extends upholstery life significantly',
      'Professional extraction equipment removes moisture and prevents mould growth',
      'Significantly improves resale value — buyers judge cars heavily on interior condition',
      'Eliminates persistent odours from pets, smoking, and dampness',
      'Creates a healthier environment by removing allergens, bacteria, and dust',
    ],
    faqs: [
      {
        question: 'What does an interior car detail include?',
        answer:
          'Our full interior detail includes deep vacuuming, hard surface clean, leather or fabric treatment, carpet shampoo, glass polish, and surface protection. The mini valet includes vacuuming, wipe-down, and glass clean.',
      },
      {
        question: 'Can you remove pet hair from car interiors?',
        answer:
          'Yes — we remove pet hair using specialist rubber brushes and high-powered extraction vacuums. Heavy pet hair may require additional time and is factored into pricing.',
      },
      {
        question: 'Can you remove smoke smell from a car interior?',
        answer:
          'Smoke odour is one of the more persistent interior problems. We address it through thorough interior cleaning and ozone treatment or specialist deodourisers. Results depend on how deeply the smoke has penetrated surfaces. Call +44 7495 885042 to discuss your specific situation.',
      },
      {
        question: 'How long does an interior detail take?',
        answer:
          'A standard interior clean takes 1–2 hours. A full interior detail with shampoo and leather treatment takes 2–4 hours depending on vehicle size and condition.',
      },
    ],
    relatedSlugs: [
      'car-valeting-brighton',
      'exterior-detailing-brighton',
      'car-detailing-brighton',
    ],
  },
  {
    slug: 'exterior-detailing-brighton',
    name: 'Exterior Car Detailing Brighton',
    title: 'Exterior Car Detailing Brighton | Paint, Wheels & Glass Treatment',
    h1: 'Exterior Car Detailing in Brighton',
    metaDescription:
      'Professional exterior car detailing in Brighton. Paint decontamination, machine polishing, alloy wheels & glass treatment. At Brighton Marina. From £10. Call +44 7495 885042.',
    primaryKeyword: 'exterior car detailing Brighton',
    secondaryKeywords: [
      'car paint detailing Brighton',
      'exterior valet Brighton',
      'exterior car clean Brighton',
      'car exterior detail Brighton',
    ],
    priceFrom: '£10',
    intro:
      'Exterior car detailing goes far beyond a standard car wash — it decontaminates, corrects, and protects every external surface of your vehicle. Car Detailing in Brighton offers comprehensive exterior detailing at Brighton Marina.',
    description:
      'The exterior of a car in Brighton faces constant assault from salt air, sea spray, road grime, brake dust, bird deposits, tree sap, UV radiation, and industrial fallout. A standard car wash removes loose surface dirt but leaves bonded contamination — the invisible layer of metallic particles, chemical deposits, and abrasive particles that dull paintwork over time. Our professional exterior detailing process begins with a proper decontamination wash, then addresses bonded contamination with iron fallout remover and clay bar treatment, followed by machine polishing where required to restore paint clarity and gloss, and finally the application of a protective sealant or ceramic coating. Alloy wheels receive a dedicated clean with wheel-specific products that safely dissolve brake dust without damaging the wheel\'s finish. Glass is polished with dedicated glass compounds. Tyres are cleaned and dressed. Rubber and plastic trim is restored and protected. The result is an exterior that looks better than a standard car wash can achieve and is protected against future contamination build-up.',
    process: [
      {
        title: 'Pre-Rinse',
        description:
          'A high-pressure pre-rinse removes loose dirt and debris before any contact cleaning begins.',
      },
      {
        title: 'Snow Foam Pre-Wash',
        description:
          'pH-neutral snow foam is applied, dwells, and lifts road grime from all surfaces before rinsing.',
      },
      {
        title: 'Hand Wash',
        description:
          'Two-bucket hand wash with clean microfibre mitts and pH-neutral shampoo cleans all painted surfaces safely.',
      },
      {
        title: 'Iron Fallout Removal',
        description:
          'Iron fallout remover dissolves embedded brake dust and metallic particles from paint and wheels.',
      },
      {
        title: 'Clay Bar Treatment',
        description:
          'Clay bar removes remaining bonded contamination not lifted by chemicals, leaving a smooth, glass-like paint surface.',
      },
      {
        title: 'Machine Polish',
        description:
          'Where required, machine polishing removes swirl marks and surface defects, restoring paint clarity and depth.',
      },
      {
        title: 'Protection',
        description:
          'A paint sealant, wax, or ceramic coating is applied to protect all corrected surfaces and extend the clean.',
      },
      {
        title: 'Wheel, Glass & Trim Finish',
        description:
          'Alloys are cleaned and dressed, glass is polished, rubber trim is restored, and tyres are dressed for a complete finish.',
      },
    ],
    benefits: [
      'Complete paint decontamination removes bonded contamination regular washing misses',
      'Machine polishing restores gloss and removes swirl marks',
      'Protective coating extends the clean and resists future contamination',
      'Alloy wheel cleaning removes brake dust that damages wheel finishes over time',
      'Glass polishing removes road film and improves driver visibility',
      'Brighton\'s coastal environment makes proper exterior detailing essential',
    ],
    faqs: [
      {
        question: 'What is the difference between an exterior detail and a car wash?',
        answer:
          'A car wash removes surface dirt. An exterior detail goes further: it decontaminates bonded particles with iron fallout remover and clay bar, corrects paint defects with machine polishing, and protects all surfaces with sealants or ceramic coating.',
      },
      {
        question: 'How long does an exterior detail take?',
        answer:
          'An exterior-only detail typically takes 2–4 hours depending on the level of decontamination and correction required.',
      },
    ],
    relatedSlugs: [
      'paint-correction-brighton',
      'ceramic-coating-brighton',
      'car-detailing-brighton',
    ],
  },
  {
    slug: 'mobile-car-detailing-brighton',
    name: 'Mobile Car Detailing Brighton',
    title: 'Mobile Car Detailing Brighton | Professional Detailing at Your Location',
    h1: 'Mobile Car Detailing Service in Brighton',
    metaDescription:
      'Mobile car detailing in Brighton — professional hand car wash and valeting at your location. Serving all Brighton postcodes. Book today on +44 7495 885042.',
    primaryKeyword: 'mobile car detailing Brighton',
    secondaryKeywords: [
      'mobile car valet Brighton',
      'car detailing at home Brighton',
      'mobile car wash Brighton',
      'at home car valet Brighton',
    ],
    priceFrom: '£30',
    intro:
      'Mobile car detailing brings professional car cleaning and valeting directly to your location in Brighton. Whether at home, at work, or elsewhere in the city, our mobile service provides the same professional standard as our Brighton Marina base.',
    description:
      'Mobile car detailing is the most convenient way to maintain your vehicle\'s condition — our team comes to you, so there\'s no need to drive to Brighton Marina or wait around. The service is ideal for drivers with busy schedules, multiple vehicles, businesses with fleets, or those who simply prefer the convenience of in-driveway or in-car-park detailing. Our mobile service operates across all Brighton postcodes — BN1, BN2, BN3, BN41, and BN42 — bringing professional-grade equipment and products to your location. Mobile services include exterior hand wash, mini valet, and full valet. For ceramic coating and advanced paint correction, we recommend our Marina Square facility where we have a controlled environment and full lighting setup. Contact us to discuss your mobile detailing requirements and we will confirm availability and pricing.',
    process: [
      {
        title: 'Booking & Arrival',
        description:
          'Call +44 7495 885042 to arrange a mobile visit. We confirm the service, pricing, and arrival time in advance.',
      },
      {
        title: 'On-Site Assessment',
        description:
          'We assess your vehicle at your location, confirm the service required, and begin work.',
      },
      {
        title: 'Professional Service Delivery',
        description:
          'All services are performed to the same professional standard as our Marina Square base, using the same products and techniques.',
      },
      {
        title: 'Final Check & Payment',
        description:
          'We complete a final walkround with you, take payment, and leave your location clean and tidy.',
      },
    ],
    benefits: [
      'Maximum convenience — we come to your home, office, or any location',
      'Same professional standard as our Brighton Marina base',
      'No travel time required on your part',
      'Ideal for multiple vehicles or fleet cleaning at a single location',
      'Flexible scheduling across all Brighton postcodes',
    ],
    faqs: [
      {
        question: 'What mobile car detailing services do you offer in Brighton?',
        answer:
          'Our mobile service covers exterior hand wash, mini valet, and full valet. For ceramic coating and paint correction, we recommend visiting our Brighton Marina base where we have a controlled environment.',
      },
      {
        question: 'Which areas of Brighton do you cover for mobile detailing?',
        answer:
          'We cover all Brighton and Hove postcodes — BN1, BN2, BN3, BN41, and BN42 — for mobile car detailing. Call +44 7495 885042 to confirm availability for your specific location.',
      },
      {
        question: 'How do I book a mobile car detail in Brighton?',
        answer:
          'Call +44 7495 885042 to discuss your requirements and arrange a mobile booking. We will confirm availability, pricing, and a convenient time slot.',
      },
    ],
    relatedSlugs: ['car-valeting-brighton', 'car-detailing-brighton', 'interior-detailing-brighton'],
  },
  {
    slug: 'car-valeting-brighton',
    name: 'Car Valeting Brighton',
    title: 'Car Valeting Brighton | Mini Valet, Full Valet & More',
    h1: 'Professional Car Valeting in Brighton',
    metaDescription:
      'Professional car valeting in Brighton at Marina Square. Mini valet from £25, full valet from £50. All vehicle sizes. Open 7 days. Walk-ins welcome. Call +44 7495 885042.',
    primaryKeyword: 'car valeting Brighton',
    secondaryKeywords: [
      'car valet Brighton',
      'mini valet Brighton',
      'full valet Brighton',
      'car valeting service Brighton',
      'vehicle valeting Brighton',
    ],
    priceFrom: '£25',
    intro:
      'Car valeting is the professional cleaning and preparation of a vehicle — inside and out. Car Detailing in Brighton provides professional car valeting at Brighton Marina with transparent pricing by vehicle size and walk-in availability for most services.',
    description:
      'A car valet is more thorough than a standard wash but typically less comprehensive than a full detail. Valeting focuses on cleaning — removing dirt, grime, staining, and contamination from all surfaces — rather than the corrective and protective work involved in full detailing. At Car Detailing in Brighton, we offer three core valeting packages: Exterior Wash, Mini Valet, and Full Valet. Our Exterior Wash is a professional hand car wash with wheel clean, window clean, and tyre dressing. Our Mini Valet adds interior vacuum, dashboard wipe, door shut clean, and full glass clean. Our Full Valet is the most comprehensive option — it includes everything in the mini valet plus deep interior shampoo, leather or fabric treatment, thorough boot clean, tyre dressing, and paintwork protection. All pricing is based on vehicle size — small, medium, large, SUV/MPV, and van — and is always confirmed before we begin. There are no surprises at the end of the service.',
    process: [
      {
        title: 'Vehicle Sizing',
        description:
          'We assess your vehicle\'s size category and confirm the exact price before any work begins.',
      },
      {
        title: 'Exterior Hand Wash',
        description:
          'Two-bucket hand wash with professional shampoo and microfibre mitts. Wheel arches, sills, and door shuts included.',
      },
      {
        title: 'Wheel & Tyre Clean',
        description:
          'Alloy wheels are cleaned with wheel-safe cleaner. Tyres are washed and dressed.',
      },
      {
        title: 'Interior Clean (Valet packages)',
        description:
          'Vacuum, dash wipe, door pockets, glass clean, and where included — full shampoo and leather or fabric treatment.',
      },
      {
        title: 'Protection & Finish',
        description:
          'Paintwork is dried and a spray wax or sealant is applied. Trim is dressed. Glass is polished inside and out.',
      },
    ],
    benefits: [
      'Transparent pricing confirmed before work begins — no surprises',
      'Walk-in availability for exterior wash and mini valet',
      'All vehicle sizes catered for — small to large van',
      'Open 7 days a week including weekends and bank holidays',
      'Free parking at Brighton Marina while your car is cleaned',
      'Professional results that maintain your vehicle\'s condition and value',
    ],
    faqs: [
      {
        question: 'What is the difference between a mini valet and a full valet?',
        answer:
          'A mini valet includes exterior hand wash, interior vacuum, dashboard wipe, door shut clean, and glass clean. A full valet adds deep interior shampoo, leather or fabric treatment, boot clean, paint protection, and tyre dressing — a far more thorough service.',
      },
      {
        question: 'How much does a car valet cost in Brighton?',
        answer:
          'Prices at Car Detailing in Brighton: Exterior Wash from £10, Mini Valet from £25, Full Valet from £50. All prices are by vehicle size and confirmed before we start.',
      },
      {
        question: 'How long does a car valet take in Brighton?',
        answer:
          'An exterior wash takes 30–60 minutes. A mini valet takes 1–1.5 hours. A full valet takes 2–4 hours depending on vehicle size and condition.',
      },
      {
        question: 'Do I need to book a car valet in Brighton?',
        answer:
          'Walk-ins are welcome for exterior washes and mini valets. Full valets are best booked in advance by calling +44 7495 885042 to secure your preferred time.',
      },
    ],
    relatedSlugs: [
      'car-detailing-brighton',
      'interior-detailing-brighton',
      'exterior-detailing-brighton',
    ],
  },
  {
    slug: 'headlight-restoration-brighton',
    name: 'Headlight Restoration Brighton',
    title: 'Headlight Restoration Brighton | Clear Foggy Yellow Headlights',
    h1: 'Headlight Restoration Service in Brighton',
    metaDescription:
      'Professional headlight restoration in Brighton. Remove yellowing, fogging & UV oxidation. Restore clarity and MOT compliance. From £40. Call +44 7495 885042.',
    primaryKeyword: 'headlight restoration Brighton',
    secondaryKeywords: [
      'foggy headlight repair Brighton',
      'headlight polishing Brighton',
      'yellow headlight restoration Brighton',
      'headlight cleaning Brighton',
    ],
    priceFrom: '£40',
    intro:
      'Yellowed, foggy headlights are one of the most common and noticeable signs of an ageing vehicle. Car Detailing in Brighton offers professional headlight restoration at Brighton Marina — restoring clarity, improving night visibility, and potentially saving your MOT.',
    description:
      'Polycarbonate headlight lenses, used on the majority of vehicles manufactured since the 1990s, degrade over time through UV oxidation. The clear protective coating on the lens surface breaks down under UV exposure, allowing the underlying polycarbonate to oxidise — turning yellow, hazy, or opaque. This degradation is purely cosmetic at first, but as it progresses it significantly reduces the output of your headlights, creating a genuine road safety issue. Severely oxidised headlights can also cause an MOT failure on illumination grounds. Our headlight restoration process uses multi-stage wet sanding with progressively finer abrasive papers to remove the oxidised outer layer, followed by machine polishing to restore optical clarity and gloss. A UV-stable sealant is then applied to the restored lens surface to protect against further oxidation. The result is a lens that looks like new and performs significantly better at night. Restoration costs a fraction of headlight replacement — typically £40–£80 per pair versus £200–£800+ for new OEM units on modern vehicles.',
    process: [
      {
        title: 'Assessment',
        description:
          'We assess the severity of oxidation on each lens to determine the sanding and polishing stages required.',
      },
      {
        title: 'Masking',
        description:
          'Surrounding paintwork is masked to protect against any contact with sanding materials.',
      },
      {
        title: 'Wet Sanding',
        description:
          'Progressive wet sanding (typically 400–2000 grit) removes the oxidised outer layer of the polycarbonate lens.',
      },
      {
        title: 'Machine Polishing',
        description:
          'Machine polishing with cutting and finishing compounds restores full optical clarity and gloss to the sanded surface.',
      },
      {
        title: 'UV Sealant Application',
        description:
          'A UV-stable protective sealant is applied to the restored lens to prevent rapid re-oxidation and extend the results.',
      },
    ],
    benefits: [
      'Restores optical clarity and significantly improves night-time visibility',
      'Costs a fraction of headlight replacement — typically £40–£80 vs £200–£800+',
      'May resolve an MOT headlight failure',
      'Makes the vehicle look significantly better and more cared-for',
      'UV sealant slows future re-oxidation',
    ],
    faqs: [
      {
        question: 'Can headlight restoration fix my MOT failure?',
        answer:
          'If your MOT failure is related to reduced headlight output caused by oxidised lenses rather than a bulb or electrical fault, headlight restoration may resolve it. We recommend confirming the specific failure reason with your MOT tester first.',
      },
      {
        question: 'How much does headlight restoration cost in Brighton?',
        answer:
          'Headlight restoration at Car Detailing in Brighton starts from £40 per pair for light oxidation and up to £80 for severely oxidised lenses requiring additional sanding stages.',
      },
      {
        question: 'How long does headlight restoration last?',
        answer:
          'With UV sealant applied, restoration results typically last 12–24 months before noticeable re-oxidation begins. Keeping the vehicle garaged or waxing the headlights periodically extends the results.',
      },
      {
        question: 'Is headlight restoration better than buying new headlights?',
        answer:
          'For the majority of vehicles, restoration is significantly more cost-effective than replacement — especially for premium vehicles where OEM headlight units cost hundreds of pounds. Results are comparable to new units in most cases.',
      },
    ],
    relatedSlugs: [
      'exterior-detailing-brighton',
      'car-valeting-brighton',
      'car-detailing-brighton',
    ],
  },
]

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug)
}
