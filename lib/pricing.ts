export const vehicleSizes = [
  {
    id: 'small',
    label: 'Small Car',
    examples: 'Ford Fiesta, VW Polo, Mini, Fiat 500',
    icon: '🚗',
  },
  {
    id: 'medium',
    label: 'Medium Car',
    examples: 'Ford Focus, VW Golf, BMW 3 Series, Audi A3',
    icon: '🚘',
  },
  {
    id: 'large',
    label: 'Large Car',
    examples: 'BMW 5 Series, Audi A6, Volvo S90, Mercedes E-Class',
    icon: '🚙',
  },
  {
    id: 'suv',
    label: 'SUV / 4x4',
    examples: 'Range Rover, Nissan Qashqai, Kia Sportage, Toyota RAV4',
    icon: '🛻',
  },
  {
    id: 'van',
    label: 'Van / MPV',
    examples: 'VW Transporter, Ford Transit, Mercedes Sprinter',
    icon: '🚐',
  },
]

export type ServiceType = 'exterior' | 'mini' | 'full'

export const pricing: Record<string, Record<ServiceType, number>> = {
  small:  { exterior: 10, mini: 25, full: 50  },
  medium: { exterior: 12, mini: 30, full: 60  },
  large:  { exterior: 15, mini: 40, full: 75  },
  suv:    { exterior: 18, mini: 50, full: 95  },
  van:    { exterior: 20, mini: 60, full: 110 },
}

export const services = [
  {
    id: 'exterior',
    name: 'Exterior Wash',
    description: 'Full hand wash of the exterior, windows, tyres, and wheel arches.',
    includes: [
      'Pre-rinse to remove loose dirt',
      'Hand wash with premium car shampoo',
      'Wheel & tyre clean',
      'Rinse and hand dry',
      'Window clean (exterior)',
    ],
  },
  {
    id: 'mini',
    name: 'Mini Valet',
    description: 'Exterior wash plus a thorough interior clean — great for regular maintenance.',
    includes: [
      'Everything in Exterior Wash',
      'Interior hoover (seats, carpets, boot)',
      'Dashboard & console wipe down',
      'Door cards & sills cleaned',
      'Interior windows cleaned',
    ],
  },
  {
    id: 'full',
    name: 'Full Valet',
    description: 'The complete treatment — thorough exterior and deep interior detail.',
    includes: [
      'Everything in Mini Valet',
      'Shampoo seats & carpets',
      'Leather conditioning (if applicable)',
      'Door shuts & hinges cleaned',
      'Tyre dressing applied',
      'Exterior wax protection',
      'Air freshener',
    ],
  },
]

export const additionalServices = [
  {
    id: 'engine',
    name: 'Engine Bay Clean',
    description: 'Safe degreasing and cleaning of the engine bay.',
    startingPrice: 30,
  },
  {
    id: 'alloy',
    name: 'Alloy Wheel Deep Clean',
    description: 'Iron fallout remover and deep scrub on all four wheels.',
    startingPrice: 20,
  },
]
