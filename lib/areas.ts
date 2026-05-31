export interface AreaFAQ {
  question: string
  answer: string
}

export interface AreaData {
  slug: string
  name: string
  postcode: string
  title: string
  h1: string
  metaDescription: string
  primaryKeyword: string
  secondaryKeywords: string[]
  distance: string
  travelTime: string
  intro: string
  bodyParagraph: string
  closingParagraph: string
  faqs: AreaFAQ[]
}

export const areasData: AreaData[] = [
  {
    slug: 'brighton-marina',
    name: 'Brighton Marina',
    postcode: 'BN2 5UT',
    title: 'Car Detailing Brighton Marina | Professional Hand Car Wash BN2',
    h1: 'Car Detailing & Valeting at Brighton Marina',
    metaDescription:
      'Expert car detailing at Brighton Marina, BN2 5UT. Hand car wash, full valet, ceramic coating & paint correction. Open 7 days 9am–6pm. Walk-ins welcome. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Brighton Marina',
    secondaryKeywords: [
      'car wash Brighton Marina',
      'hand car wash Brighton Marina',
      'car valet Brighton Marina',
      'valeting Brighton Marina',
      'car detailing BN2',
    ],
    distance: 'on-site',
    travelTime: '0 minutes',
    intro:
      'Car Detailing in Brighton is based right here at Brighton Marina — in Marina Square, BN2 5UT. As the closest professional car detailing service to the Marina, we serve residents, boat owners, and visitors seven days a week with no booking required for most services.',
    bodyParagraph:
      'Brighton Marina is one of the largest marinas in the UK, home to hundreds of boats, seafront apartments, restaurants, and retail outlets. For car owners based at or near the Marina, our service means you can drop off your car, walk to a coffee shop or the waterfront, and return to a professionally cleaned vehicle. We handle everything from a quick exterior hand wash to a full interior and exterior valet and ceramic coating. Our pricing is always confirmed before work begins — based on vehicle size — with no hidden charges.',
    closingParagraph:
      'Whether you drive a daily hatchback, an SUV, a prestige saloon, or a van, our team at Marina Square has the products, equipment, and experience to deliver professional results every time. The coastal environment at Brighton Marina means salt air, seagull deposits, and sea spray are a daily reality for your paintwork — making regular professional detailing more important here than almost anywhere else in Brighton.',
    faqs: [
      {
        question: 'Where exactly is Car Detailing in Brighton located at Brighton Marina?',
        answer:
          'We are in Marina Square, Brighton Marina, BN2 5UT — just off Marina Way near the main car park entrance. Postcode BN2 5UT will bring you directly to us.',
      },
      {
        question: 'Do I need to book in advance at Brighton Marina?',
        answer:
          'Walk-ins are welcome for exterior washes and mini valets. For full valets, paint correction, and ceramic coating, we recommend calling ahead on +44 7495 885042 to secure your slot.',
      },
      {
        question: 'Is there parking while my car is being cleaned?',
        answer:
          'Brighton Marina has free parking available throughout the complex. You can leave your car with us while you explore the Marina, grab food, or use the amenities nearby.',
      },
      {
        question: 'How long does a full valet take at Brighton Marina?',
        answer:
          'A full valet takes between 2 and 4 hours depending on vehicle size and condition. We will give you an accurate time estimate when you arrive.',
      },
    ],
  },
  {
    slug: 'kemptown',
    name: 'Kemptown',
    postcode: 'BN2',
    title: 'Car Detailing Kemptown Brighton | Hand Car Wash & Full Valet',
    h1: 'Professional Car Detailing in Kemptown, Brighton',
    metaDescription:
      'Car detailing and valeting for Kemptown, Brighton BN2. 10 minutes from Brighton Marina. Hand car wash, full valet & ceramic coating. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Kemptown Brighton',
    secondaryKeywords: [
      'car valeting Kemptown',
      'car wash Kemptown Brighton',
      'hand car wash Kemptown',
      'mobile car valet Kemptown',
    ],
    distance: '1.5 miles',
    travelTime: '10 minutes',
    intro:
      'Kemptown residents are just 10 minutes from one of Brighton\'s best professional car detailing services. Car Detailing in Brighton is based at Marina Square, Brighton Marina — a short drive east along the seafront from Kemptown\'s residential streets and independent shops.',
    bodyParagraph:
      'Kemptown is one of Brighton\'s most characterful neighbourhoods, known for its Regency townhouses, independent cafés, and proximity to the seafront. It\'s also an area where cars are exposed to sea air, salt, and the general grime of urban coastal living. Our team at Brighton Marina provides Kemptown drivers with the full range of professional car detailing services — from a quick exterior hand wash to a complete two-day ceramic coating package. We use pH-neutral shampoos, professional iron fallout removers, and machine polishing equipment to deliver results that far exceed what a home wash or drive-through car wash can achieve.',
    closingParagraph:
      'Getting to us from Kemptown is straightforward: head east along Marine Parade (A259) towards Brighton Marina. You\'ll find us inside the Marina complex at Marina Square. Free parking is available at the Marina while your car is serviced.',
    faqs: [
      {
        question: 'How do I get to Car Detailing in Brighton from Kemptown?',
        answer:
          'Head east on Marine Parade (A259) from Kemptown. Continue into Brighton Marina and follow signs for Marina Square. The drive takes approximately 10 minutes.',
      },
      {
        question: 'Do you offer a collection and delivery service from Kemptown?',
        answer:
          'Currently, our service is based at Brighton Marina. Kemptown is a 10-minute drive, making it easy to drop off and pick up. Call +44 7495 885042 to arrange timing.',
      },
      {
        question: 'What car cleaning services are available for Kemptown residents?',
        answer:
          'We offer hand car wash, mini valet, full valet, alloy wheel clean, engine bay clean, ceramic coating, and paint correction — all available to Kemptown customers at Marina Square.',
      },
    ],
  },
  {
    slug: 'hove',
    name: 'Hove',
    postcode: 'BN3',
    title: 'Car Detailing Hove | Professional Valeting & Ceramic Coating BN3',
    h1: 'Car Detailing & Valeting Service for Hove Residents',
    metaDescription:
      'Professional car detailing for Hove, BN3. Hand car wash, full valet & ceramic coating. 15 minutes to Brighton Marina. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Hove',
    secondaryKeywords: [
      'car valeting Hove',
      'car wash Hove Brighton',
      'ceramic coating Hove',
      'mobile car detailing Hove',
      'full valet Hove',
    ],
    distance: '5 miles',
    travelTime: '15 minutes',
    intro:
      'Hove is home to some of Brighton and Hove\'s most sought-after residential streets and prestige vehicle owners. Car Detailing in Brighton at Marina Square serves Hove customers looking for professional car detailing, valeting, and ceramic coating — a 15-minute drive east along the coast.',
    bodyParagraph:
      'Many Hove residents drive prestige and luxury vehicles — Range Rovers, BMWs, Mercedes-Benz, and Porsches are common on Hove\'s leafy avenues. These vehicles demand a higher standard of care than a standard car wash provides. Our team at Brighton Marina uses professional-grade products and techniques to protect high-value paintwork, including full paint decontamination, machine polishing, ceramic coating application, and interior leather treatment. We price by vehicle size and confirm costs before beginning — so you know exactly what you\'re paying.',
    closingParagraph:
      'From Hove, drive east along the A259 coast road through Brighton, continuing to Brighton Marina. The journey takes approximately 15 minutes in normal traffic. Free parking at the Marina means you can leave your car with us and return when it\'s ready.',
    faqs: [
      {
        question: 'Is Car Detailing in Brighton worth the drive from Hove?',
        answer:
          'At 15 minutes away, most Hove customers find the drive straightforward and the results well worth it. We also have free parking at Brighton Marina so there is no rush to return immediately.',
      },
      {
        question: 'Do you offer ceramic coating for cars from Hove?',
        answer:
          'Yes — ceramic coating is available to all customers including those from Hove. We recommend booking in advance for ceramic coating as it takes 1–2 days. Call +44 7495 885042.',
      },
      {
        question: 'Can you detail a luxury car from Hove?',
        answer:
          'Absolutely. We regularly detail prestige vehicles from Hove including Range Rover, Porsche, BMW M-series, and Mercedes-AMG. Our team is experienced with high-value paintwork.',
      },
    ],
  },
  {
    slug: 'portslade',
    name: 'Portslade',
    postcode: 'BN41',
    title: 'Car Detailing Portslade | Professional Valeting Near Brighton BN41',
    h1: 'Car Detailing & Valeting Serving Portslade',
    metaDescription:
      'Professional car detailing for Portslade, BN41. Hand wash, interior detailing & ceramic coating at Brighton Marina. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Portslade',
    secondaryKeywords: [
      'car wash Portslade',
      'valeting Portslade',
      'car cleaning Portslade Brighton',
      'full valet Portslade',
    ],
    distance: '6 miles',
    travelTime: '20 minutes',
    intro:
      'Car Detailing in Brighton serves customers from Portslade, BN41, with professional car detailing and valeting at Brighton Marina. Our Marina Square location is approximately 20 minutes east of Portslade along the A259 coast road.',
    bodyParagraph:
      'Portslade is a working community on the western edge of Brighton and Hove, home to a mix of residential and commercial vehicle owners. Whether you\'re looking for a professional exterior wash to remove road grime and salt, a full interior and exterior valet, or long-term paint protection through ceramic coating, our team at Brighton Marina delivers consistent results at transparent prices. We service everything from small hatchbacks to large vans, with pricing confirmed upfront by vehicle size.',
    closingParagraph:
      'From Portslade, take the A259 east through Hove and Brighton to reach Brighton Marina. Follow signs for Marina Square once inside the Marina. The drive takes approximately 20 minutes.',
    faqs: [
      {
        question: 'How far is Portslade from Car Detailing in Brighton?',
        answer:
          'Portslade is approximately 6 miles from Brighton Marina — around a 20-minute drive east along the A259 coast road.',
      },
      {
        question: 'Do you offer van detailing for Portslade businesses?',
        answer:
          'Yes — we detail commercial vans as well as cars. Van pricing is higher due to size and is confirmed before we begin. Contact us on +44 7495 885042 to discuss your requirements.',
      },
    ],
  },
  {
    slug: 'patcham',
    name: 'Patcham',
    postcode: 'BN1',
    title: 'Car Detailing Patcham Brighton | Professional Hand Car Wash BN1',
    h1: 'Car Detailing & Valeting Service for Patcham, Brighton',
    metaDescription:
      'Car detailing and valeting serving Patcham, Brighton BN1. Full valet, ceramic coating & hand wash. 20 minutes to Brighton Marina. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Patcham',
    secondaryKeywords: [
      'car wash Patcham Brighton',
      'valeting Patcham',
      'hand car wash Patcham',
      'car care Patcham Brighton',
    ],
    distance: '5 miles',
    travelTime: '20 minutes',
    intro:
      'Patcham sits on the northern edge of Brighton, surrounded by the South Downs. Car Detailing in Brighton at Brighton Marina is approximately 20 minutes south, offering Patcham residents professional car detailing, valeting, and ceramic coating with no booking required for standard services.',
    bodyParagraph:
      'Patcham drivers often travel through Brighton\'s busiest roads, picking up road grime, exhaust deposits, and brake dust that dulls paintwork over time. Our professional hand wash and detailing services remove these contaminants properly — using iron fallout sprays, clay bar decontamination, and machine polishing where required. The result is cleaner, better-protected paintwork that resists future contamination more effectively than a standard wash.',
    closingParagraph:
      'From Patcham, head south on the A23 through Preston Park, then east along the seafront to Brighton Marina. Follow signs for Marina Square on arrival. Free parking is available throughout the Marina complex.',
    faqs: [
      {
        question: 'How do I reach Brighton Marina from Patcham?',
        answer:
          'Take the A23 south from Patcham towards Brighton city centre, then head east along Marine Parade to Brighton Marina. The drive takes around 20 minutes.',
      },
      {
        question: 'Is there a car detailing service closer to Patcham?',
        answer:
          'We are based at Brighton Marina. While there may be basic car washes closer, our professional detailing, ceramic coating and machine polishing services are not typically available at neighbourhood car washes.',
      },
    ],
  },
  {
    slug: 'preston-park',
    name: 'Preston Park',
    postcode: 'BN1',
    title: 'Car Detailing Preston Park Brighton | Valeting & Ceramic Coating',
    h1: 'Professional Car Detailing for Preston Park, Brighton',
    metaDescription:
      'Car detailing, valeting and ceramic coating serving Preston Park, Brighton BN1. 15 minutes from Brighton Marina. Hand car wash from £10. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Preston Park Brighton',
    secondaryKeywords: [
      'car wash Preston Park Brighton',
      'valeting Preston Park',
      'car valet near Preston Park',
      'car cleaning BN1 Brighton',
    ],
    distance: '3.5 miles',
    travelTime: '15 minutes',
    intro:
      'Preston Park is one of Brighton\'s most desirable residential areas, known for its large Victorian properties and proximity to both the park and Brighton city centre. Car Detailing in Brighton at Brighton Marina is just 15 minutes away, providing Preston Park residents with professional detailing, valeting, and ceramic coating services.',
    bodyParagraph:
      'Cars parked on Preston Park\'s residential streets are exposed daily to tree sap, bird droppings, and urban pollution — all of which etch into paintwork if not addressed regularly. Our professional detailing service addresses these issues properly: we decontaminate the paint surface, remove bonded contaminants, and apply protective coatings that extend the life of your paintwork. This is particularly valuable for the prestige and classic cars that are common in Preston Park\'s residential streets.',
    closingParagraph:
      'From Preston Park, head east towards the seafront via Ditchling Road or the A23, then travel east along Marine Parade to Brighton Marina. The drive takes approximately 15 minutes.',
    faqs: [
      {
        question: 'Can you remove tree sap from my car\'s paintwork?',
        answer:
          'Yes — tree sap is removed as part of our paint decontamination process using specialist tar and sap remover. If it has etched into the paint, light machine polishing may be required.',
      },
      {
        question: 'Do you detail classic cars from Preston Park?',
        answer:
          'Yes — we regularly work on classic cars and use appropriate gentle products for older paintwork. We recommend calling ahead on +44 7495 885042 to discuss your classic car\'s specific needs.',
      },
    ],
  },
  {
    slug: 'hanover-brighton',
    name: 'Hanover',
    postcode: 'BN2',
    title: 'Car Detailing Hanover Brighton | Hand Car Wash & Full Valet',
    h1: 'Car Detailing & Valeting in Hanover, Brighton',
    metaDescription:
      'Professional car detailing for Hanover, Brighton. Hand wash, interior valet & ceramic coating at Brighton Marina. 10 minutes away. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Hanover Brighton',
    secondaryKeywords: [
      'car wash Hanover Brighton',
      'valeting Hanover Brighton',
      'hand car wash near Hanover',
      'car valet Hanover',
    ],
    distance: '2 miles',
    travelTime: '10 minutes',
    intro:
      'Hanover is a vibrant hillside neighbourhood in Brighton BN2, just 10 minutes from Brighton Marina. Car Detailing in Brighton serves Hanover residents with professional hand car washing, full valeting, and ceramic coating — with walk-in availability for most services.',
    bodyParagraph:
      'Hanover\'s narrow residential streets and hillside location mean cars are often parked in challenging conditions — tight spaces, under trees, and close to other vehicles — making paint protection especially important. Our professional detailing team at Brighton Marina uses machine polishing to remove the fine scratches that accumulate from urban car ownership, and ceramic coatings to protect against future damage. All services are priced transparently by vehicle size.',
    closingParagraph:
      'From Hanover, head east along Elm Grove or towards the seafront via St James\'s Street, then continue east along Marine Parade to Brighton Marina. The drive takes approximately 10 minutes.',
    faqs: [
      {
        question: 'Is there parking at Brighton Marina when I bring my car from Hanover?',
        answer:
          'Yes — Brighton Marina has free parking available throughout the complex. You can leave your car with us while you use the Marina\'s shops, restaurants, or waterfront.',
      },
      {
        question: 'How much does a hand car wash cost for a Hanover resident visiting Brighton Marina?',
        answer:
          'A hand car wash starts from £10 for a small car. Pricing is based on vehicle size and is confirmed before we begin. There are no hidden charges.',
      },
    ],
  },
  {
    slug: 'whitehawk',
    name: 'Whitehawk',
    postcode: 'BN2',
    title: 'Car Detailing Whitehawk Brighton | Local Valeting Service BN2',
    h1: 'Car Detailing & Valeting for Whitehawk, Brighton',
    metaDescription:
      'Car detailing and valeting for Whitehawk, Brighton BN2. Minutes from Brighton Marina. Full valet, exterior wash & alloy cleaning. Walk-ins welcome. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Whitehawk Brighton',
    secondaryKeywords: [
      'car wash Whitehawk Brighton',
      'valeting Whitehawk',
      'car cleaning near Whitehawk',
      'hand car wash Whitehawk',
    ],
    distance: '1 mile',
    travelTime: '5 minutes',
    intro:
      'Whitehawk is one of Brighton\'s nearest neighbourhoods to Brighton Marina — just a 5-minute drive. Car Detailing in Brighton at Marina Square is the closest professional car detailing service for Whitehawk residents, open 7 days a week with no booking required for most services.',
    bodyParagraph:
      'Whitehawk\'s proximity to Brighton Marina makes us the natural choice for professional car cleaning and valeting. Whether you need a quick exterior hand wash to remove weekend grime or a full interior and exterior valet for a special occasion, our team is ready. We also offer alloy wheel cleaning, engine bay cleaning, and ceramic coating for drivers looking for long-term paint protection.',
    closingParagraph:
      'From Whitehawk, Brighton Marina is just a short drive south along Wilson Avenue or Manor Hill. BN2 5UT will bring your satnav directly to Marina Square where we are located.',
    faqs: [
      {
        question: 'Is Car Detailing in Brighton the nearest professional car wash to Whitehawk?',
        answer:
          'Yes — at just 5 minutes away, Brighton Marina is one of the closest professional hand car wash and detailing services to Whitehawk.',
      },
      {
        question: 'Can I walk in without a booking from Whitehawk?',
        answer:
          'Yes — walk-ins are always welcome for exterior washes and mini valets. For full valets and specialist services, calling ahead ensures you get the slot you want.',
      },
    ],
  },
  {
    slug: 'woodingdean',
    name: 'Woodingdean',
    postcode: 'BN2',
    title: 'Car Detailing Woodingdean Brighton | Professional Valeting BN2',
    h1: 'Car Detailing & Valeting Service for Woodingdean, Brighton',
    metaDescription:
      'Car detailing, hand car wash and full valet serving Woodingdean, Brighton BN2. 10 minutes to Brighton Marina. Transparent pricing. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Woodingdean',
    secondaryKeywords: [
      'car wash Woodingdean Brighton',
      'valeting Woodingdean',
      'car valet near Woodingdean',
      'hand car wash Woodingdean',
    ],
    distance: '3 miles',
    travelTime: '10 minutes',
    intro:
      'Woodingdean sits on the eastern Downs above Brighton, just 10 minutes from Brighton Marina. Car Detailing in Brighton provides Woodingdean residents with professional car detailing and valeting services at Marina Square — open 7 days with walk-in availability.',
    bodyParagraph:
      'Cars in Woodingdean face unique challenges: chalk dust from the Downs, clay-heavy road grime from rural approaches, and the salt air that drifts up from the coast. These contaminants bond to paintwork and wheels, creating a build-up that regular hosing won\'t shift. Our professional decontamination process — which includes iron fallout removal, clay bar treatment, and wheel acid wash — properly eliminates these bonded contaminants before we begin any polishing or protection work.',
    closingParagraph:
      'From Woodingdean, head west on the B2123 towards Brighton Marina via Ovingdean Road. The drive takes approximately 10 minutes. You\'ll arrive at Marina Way — follow signs for Marina Square.',
    faqs: [
      {
        question: 'How do I drive from Woodingdean to Brighton Marina?',
        answer:
          'Take the B2123 west from Woodingdean through Ovingdean, then continue towards Brighton Marina via Marine Drive. The drive takes around 10 minutes.',
      },
      {
        question: 'Do you remove chalky Downs grime from vehicles?',
        answer:
          'Yes — our paint decontamination process handles chalk dust, clay particles, and bonded road contamination that regular washing leaves behind. Iron fallout remover and clay bar treatment are included in our full valet package.',
      },
    ],
  },
  {
    slug: 'rottingdean',
    name: 'Rottingdean',
    postcode: 'BN2',
    title: 'Car Detailing Rottingdean | Professional Valeting Nearest BN2',
    h1: 'Car Detailing & Valeting for Rottingdean Residents',
    metaDescription:
      'Professional car detailing for Rottingdean, BN2. Your nearest hand car wash — just along the coast at Brighton Marina. Full valet from £50. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Rottingdean',
    secondaryKeywords: [
      'car wash Rottingdean Brighton',
      'valeting Rottingdean',
      'hand car wash BN2 Rottingdean',
      'car valet Rottingdean',
    ],
    distance: '3 miles',
    travelTime: '12 minutes',
    intro:
      'Rottingdean is a picturesque coastal village just 3 miles east of Brighton Marina along the A259. Car Detailing in Brighton at Marina Square is your nearest professional car detailing and valeting service, 12 minutes west along the coast road.',
    bodyParagraph:
      'Living in a coastal village like Rottingdean means your car is continuously exposed to sea salt, especially in winter when salt-laden winds come off the Channel. Salt accelerates corrosion and degrades paintwork faster than inland environments. Regular professional washing with pH-neutral products removes salt properly — unlike domestic hosing which often leaves salt residue in panel gaps and seams. Our full valet service and ceramic coating packages are especially popular with Rottingdean residents looking to protect their vehicles from the coastal environment.',
    closingParagraph:
      'From Rottingdean, head west on the A259 (Marine Drive) along the clifftop and into Brighton Marina. It\'s a beautiful coastal drive that takes approximately 12 minutes. Free parking at the Marina.',
    faqs: [
      {
        question: 'Is Car Detailing in Brighton the nearest professional car wash to Rottingdean?',
        answer:
          'Yes — Brighton Marina is the closest professional hand car wash and detailing centre to Rottingdean, just 12 minutes west along the A259 coast road.',
      },
      {
        question: 'Is ceramic coating worth it for a car in Rottingdean?',
        answer:
          'Absolutely. Coastal salt air is one of the most aggressive environments for car paintwork. Ceramic coating creates a hydrophobic barrier that repels salt water and makes washing easier — it pays for itself in paint preservation.',
      },
    ],
  },
  {
    slug: 'saltdean',
    name: 'Saltdean',
    postcode: 'BN2',
    title: 'Car Detailing Saltdean Brighton | Nearest Professional Hand Car Wash',
    h1: 'Professional Car Detailing Serving Saltdean',
    metaDescription:
      'Saltdean\'s nearest professional car detailing & valeting. Brighton Marina is your closest quality car wash. Full valet, ceramic coating & more. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Saltdean',
    secondaryKeywords: [
      'car wash Saltdean',
      'valeting Saltdean Brighton',
      'hand car wash near Saltdean',
      'car valet Saltdean',
    ],
    distance: '4.5 miles',
    travelTime: '15 minutes',
    intro:
      'Saltdean is a clifftop suburb on the East Sussex coast, approximately 15 minutes west of Brighton Marina along the A259. Car Detailing in Brighton is the nearest professional car detailing, valeting, and ceramic coating service for Saltdean residents.',
    bodyParagraph:
      'Saltdean\'s exposed clifftop position means cars here face some of the most aggressive salt exposure in the Brighton area. Sea spray, wind-driven salt, and the constant damp coastal atmosphere mean paint degradation happens faster than most car owners realise. A ceramic coating applied by our professional team at Brighton Marina creates a semi-permanent protective layer that resists salt, UV damage, and contamination — dramatically extending the life of your vehicle\'s paintwork.',
    closingParagraph:
      'From Saltdean, head west on the A259 (Marine Drive) along the coast to Brighton Marina. The scenic coastal drive takes approximately 15 minutes. Free parking is available at the Marina for all our customers.',
    faqs: [
      {
        question: 'How often should Saltdean residents get their cars professionally washed?',
        answer:
          'Due to the intense coastal salt exposure in Saltdean, we recommend a professional wash at least every 2–3 weeks in winter and monthly in summer. This prevents salt from etching into paintwork and seams.',
      },
      {
        question: 'Can you apply ceramic coating to protect a car from Saltdean\'s coastal environment?',
        answer:
          'Yes — ceramic coating is one of the best investments a Saltdean car owner can make. It repels salt water, makes cleaning easier, and protects against UV oxidation from the exposed clifftop environment.',
      },
    ],
  },
  {
    slug: 'moulsecoomb',
    name: 'Moulsecoomb',
    postcode: 'BN2',
    title: 'Car Detailing Moulsecoomb Brighton | Hand Wash & Full Valet',
    h1: 'Car Detailing & Valeting for Moulsecoomb, Brighton',
    metaDescription:
      'Car detailing and valeting serving Moulsecoomb, Brighton BN2. Quick drive to Brighton Marina. Full valet, hand wash & alloy cleaning. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Moulsecoomb',
    secondaryKeywords: [
      'car wash Moulsecoomb Brighton',
      'valeting near Moulsecoomb',
      'hand car wash Moulsecoomb',
    ],
    distance: '3 miles',
    travelTime: '12 minutes',
    intro:
      'Moulsecoomb is a residential neighbourhood in the heart of Brighton BN2, approximately 12 minutes from Brighton Marina. Car Detailing in Brighton provides Moulsecoomb residents with professional car cleaning, valeting, and detailing services at Marina Square.',
    bodyParagraph:
      'Moulsecoomb\'s central Brighton location means cars accumulate heavy urban contamination — road grime, brake dust, exhaust deposits, and the general particulate pollution of a busy city. Our professional detailing service decontaminates paintwork properly, removing bonded particles that regular car washing leaves behind. Services range from a quick exterior hand wash to a comprehensive full valet and ceramic coating application.',
    closingParagraph:
      'From Moulsecoomb, take Lewes Road south towards Brighton, then head east along the A259 seafront road to Brighton Marina. Alternatively, take Wilson Avenue directly to the Marina. The drive takes approximately 12 minutes.',
    faqs: [
      {
        question: 'What is the quickest route from Moulsecoomb to Brighton Marina?',
        answer:
          'Take Lewes Road south to the seafront, then head east along Marine Parade to Brighton Marina. The drive takes around 12 minutes. Alternatively, Wilson Avenue leads directly to the Marina from the east side.',
      },
    ],
  },
  {
    slug: 'coldean',
    name: 'Coldean',
    postcode: 'BN1',
    title: 'Car Detailing Coldean Brighton | Professional Valeting Service',
    h1: 'Car Detailing & Valeting for Coldean Residents',
    metaDescription:
      'Professional car detailing serving Coldean, Brighton BN1. Hand wash, interior & exterior detailing at Brighton Marina. Easy drive. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Coldean Brighton',
    secondaryKeywords: [
      'car wash Coldean Brighton',
      'valeting Coldean',
      'car care near Coldean',
    ],
    distance: '5 miles',
    travelTime: '18 minutes',
    intro:
      'Coldean is a quiet residential neighbourhood in north Brighton, sitting between the A27 and the Lewes Road corridor. Car Detailing in Brighton at Brighton Marina is approximately 18 minutes south, providing Coldean residents with access to professional car detailing and valeting services.',
    bodyParagraph:
      'Coldean\'s position near the A27 and A270 means cars travelling these busy commuter routes accumulate significant road contamination, tyre deposits, and motorway film. Our professional paint decontamination and valeting services properly address this kind of heavy road contamination, restoring paintwork to a clean and protected state.',
    closingParagraph:
      'From Coldean, take Coldean Lane south to Lewes Road, then continue south to the seafront and east to Brighton Marina. The drive takes approximately 18 minutes.',
    faqs: [
      {
        question: 'Is it worth driving from Coldean to Brighton Marina for a car valet?',
        answer:
          'Many Coldean customers find the 18-minute drive worthwhile, especially for full valets, ceramic coating, and paint correction — services that are not available at local car washes. Free parking at the Marina makes it easy to leave your car and return when it\'s ready.',
      },
    ],
  },
  {
    slug: 'hollingbury',
    name: 'Hollingbury',
    postcode: 'BN1',
    title: 'Car Detailing Hollingbury Brighton | Full Valet & Hand Car Wash',
    h1: 'Professional Car Detailing for Hollingbury, Brighton',
    metaDescription:
      'Car detailing and valeting for Hollingbury, Brighton BN1. Full valet, hand car wash & ceramic coating at Brighton Marina. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Hollingbury',
    secondaryKeywords: [
      'car wash Hollingbury Brighton',
      'valeting Hollingbury',
      'mobile valet near Hollingbury',
    ],
    distance: '5 miles',
    travelTime: '18 minutes',
    intro:
      'Hollingbury is a residential area in north Brighton BN1, close to the industrial estate and the Hollingbury Park golf course. Car Detailing in Brighton at Brighton Marina provides Hollingbury residents with professional car detailing and valeting 18 minutes south.',
    bodyParagraph:
      'Cars based near Hollingbury\'s industrial and retail parks often accumulate heavy contamination from commercial vehicle exhaust and warehouse dust. Our professional detailing removes this deeply embedded grime, restoring paintwork and protecting it with sealants or ceramic coatings. All services are available to Hollingbury customers at Marina Square.',
    closingParagraph:
      'From Hollingbury, head south through Brighton on Ditchling Road or Lewes Road, then east along the seafront to Brighton Marina. The drive takes around 18 minutes.',
    faqs: [
      {
        question: 'Do you offer fleet detailing for Hollingbury businesses?',
        answer:
          'We can accommodate multiple vehicles for businesses. Contact us on +44 7495 885042 to discuss fleet cleaning or regular service schedules.',
      },
    ],
  },
  {
    slug: 'withdean',
    name: 'Withdean',
    postcode: 'BN1',
    title: 'Car Detailing Withdean Brighton | Valeting & Ceramic Coating',
    h1: 'Car Detailing Service Covering Withdean, Brighton',
    metaDescription:
      'Car detailing and valeting for Withdean, Brighton BN1. Transparent pricing, open 7 days. Brighton Marina is your nearest professional car wash. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Withdean Brighton',
    secondaryKeywords: [
      'car wash near Withdean',
      'valeting Withdean Brighton',
      'car valet Withdean',
    ],
    distance: '4 miles',
    travelTime: '18 minutes',
    intro:
      'Withdean is a leafy, affluent residential area in north Brighton, known for its large detached properties and proximity to Withdean Stadium. Car Detailing in Brighton at Brighton Marina serves Withdean residents looking for professional car detailing, valeting, and ceramic coating — 18 minutes south.',
    bodyParagraph:
      'Withdean\'s well-established residential streets are home to many prestige and luxury vehicles. Our professional detailing service caters to drivers who expect a higher standard of care for their vehicles — machine polishing, ceramic coating, leather treatment, and paint correction are all available at Marina Square. We use professional-grade equipment and products not available at standard car washes.',
    closingParagraph:
      'From Withdean, head south on the A23 towards Brighton city centre, then east along the seafront to Brighton Marina. The drive takes approximately 18 minutes.',
    faqs: [
      {
        question: 'Do you offer paint correction for prestige cars in Withdean?',
        answer:
          'Yes — we provide professional paint correction for prestige vehicles from Withdean. Call +44 7495 885042 to discuss your vehicle\'s requirements and book an appointment.',
      },
    ],
  },
  {
    slug: 'westdene',
    name: 'Westdene',
    postcode: 'BN1',
    title: 'Car Detailing Westdene Brighton | Hand Car Wash & Full Valet',
    h1: 'Professional Car Detailing for Westdene, Brighton',
    metaDescription:
      'Car detailing and valeting serving Westdene, Brighton BN1. Expert hand car wash and full valet. Visit Brighton Marina — open 7 days 9am–6pm. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Westdene Brighton',
    secondaryKeywords: ['car wash Westdene Brighton', 'valeting near Westdene'],
    distance: '5 miles',
    travelTime: '20 minutes',
    intro:
      'Westdene is a quiet residential suburb in west Brighton BN1. Car Detailing in Brighton at Brighton Marina provides Westdene residents with professional car detailing and valeting — approximately 20 minutes east along the coast.',
    bodyParagraph:
      'Our full range of car detailing services is available to Westdene customers: exterior hand wash, mini valet, full valet, alloy wheel clean, engine bay clean, ceramic coating, and paint correction. Pricing is confirmed before work begins and is based on vehicle size — small, medium, large, SUV/MPV, and van — with no hidden charges.',
    closingParagraph:
      'From Westdene, take the A27 or Dyke Road south towards Brighton, then head east along the coast to Brighton Marina. The drive takes approximately 20 minutes.',
    faqs: [
      {
        question: 'What services do you offer for Westdene customers?',
        answer:
          'We offer hand car wash, mini valet, full valet, alloy wheel clean, engine bay clean, ceramic coating, and paint correction at our Brighton Marina base. All services are available to Westdene customers.',
      },
    ],
  },
  {
    slug: 'bevendean',
    name: 'Bevendean',
    postcode: 'BN2',
    title: 'Car Detailing Bevendean Brighton | Professional Valeting Service',
    h1: 'Car Detailing & Valeting for Bevendean Residents',
    metaDescription:
      'Professional car detailing for Bevendean, Brighton BN2. Hand wash, interior clean and full valet at Brighton Marina. Walk-ins welcome. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Bevendean Brighton',
    secondaryKeywords: ['car wash Bevendean', 'valeting Bevendean Brighton'],
    distance: '3 miles',
    travelTime: '12 minutes',
    intro:
      'Bevendean is a hillside residential neighbourhood in east Brighton BN2, approximately 12 minutes from Brighton Marina. Car Detailing in Brighton at Marina Square serves Bevendean residents with professional car cleaning, interior and exterior detailing, and ceramic coating.',
    bodyParagraph:
      'Bevendean\'s elevated position means cars are exposed to significant wind-driven contamination from the Downs and the city below. Our professional detailing team removes bonded road grime, bird deposits, and tree contamination, then applies protective coatings to keep paintwork looking fresh for longer.',
    closingParagraph:
      'From Bevendean, head south on Bevendean Avenue or Elm Grove to the seafront, then east along Marine Parade to Brighton Marina. The drive takes around 12 minutes.',
    faqs: [
      {
        question: 'Is there a hand car wash near Bevendean?',
        answer:
          'The nearest professional hand car wash to Bevendean is Car Detailing in Brighton at Brighton Marina — just 12 minutes south-east along the seafront.',
      },
    ],
  },
  {
    slug: 'elm-grove-brighton',
    name: 'Elm Grove',
    postcode: 'BN2',
    title: 'Car Detailing Elm Grove Brighton | Hand Car Wash & Full Valet',
    h1: 'Car Detailing Service for Elm Grove, Brighton',
    metaDescription:
      'Car detailing and valeting for Elm Grove, Brighton BN2. Just 10 minutes to Brighton Marina. Full valet from £50. Open 7 days a week. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Elm Grove Brighton',
    secondaryKeywords: ['car wash Elm Grove Brighton', 'valeting near Elm Grove'],
    distance: '2.5 miles',
    travelTime: '10 minutes',
    intro:
      'Elm Grove is a busy urban road connecting Brighton city centre to the eastern suburbs, lined with residential properties and small businesses. Car Detailing in Brighton at Brighton Marina is just 10 minutes from Elm Grove — a quick and easy drive along the seafront.',
    bodyParagraph:
      'Cars parked on Elm Grove and the surrounding streets face daily exposure to heavy traffic pollution, industrial particulates from nearby commercial areas, and the general grime of urban Brighton. Our professional detailing service properly removes this contamination and protects paintwork with sealants and coatings that prevent future build-up.',
    closingParagraph:
      'From Elm Grove, head east towards the seafront and continue along Marine Parade to Brighton Marina. The drive takes approximately 10 minutes.',
    faqs: [
      {
        question: 'How far is Elm Grove from Car Detailing in Brighton?',
        answer:
          'Elm Grove is approximately 2.5 miles from Brighton Marina — around 10 minutes by car heading east along the seafront.',
      },
    ],
  },
  {
    slug: 'seven-dials-brighton',
    name: 'Seven Dials',
    postcode: 'BN1',
    title: 'Car Detailing Seven Dials Brighton | Professional Hand Car Wash',
    h1: 'Car Detailing & Valeting for Seven Dials, Brighton',
    metaDescription:
      'Professional car detailing for Seven Dials, Brighton BN1. Hand car wash, ceramic coating & full valet at Brighton Marina. 15 minutes away. Open 7 days. Call +44 7495 885042.',
    primaryKeyword: 'car detailing Seven Dials Brighton',
    secondaryKeywords: ['car wash Seven Dials Brighton', 'valeting near Seven Dials'],
    distance: '3 miles',
    travelTime: '15 minutes',
    intro:
      'Seven Dials is one of Brighton\'s most recognisable intersections — a hub of independent shops, cafés, and residential streets in Brighton BN1. Car Detailing in Brighton at Brighton Marina is just 15 minutes east, providing Seven Dials residents with professional car detailing and valeting services.',
    bodyParagraph:
      'Seven Dials is a heavily trafficked area of Brighton, and cars parked in the surrounding streets accumulate heavy urban contamination quickly. Our professional detailing removes this contamination properly, restores paintwork, and protects vehicles from future build-up. Services range from a quick exterior wash to a full interior and exterior detail with ceramic coating application.',
    closingParagraph:
      'From Seven Dials, head east towards the seafront via Western Road and then east along Marine Parade to Brighton Marina. The drive takes approximately 15 minutes.',
    faqs: [
      {
        question: 'What car detailing services are available for Seven Dials residents?',
        answer:
          'All of our services are available to Seven Dials customers: hand car wash from £10, mini valet from £25, full valet from £50, ceramic coating, paint correction, alloy wheel clean, and engine bay clean.',
      },
    ],
  },
]

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areasData.find((area) => area.slug === slug)
}

export function getAllAreaSlugs(): string[] {
  return areasData.map((area) => area.slug)
}
