export interface Partner {
  id: string;
  name: string;
  category: 'Ceramic Coating' | 'Paint Protection' | 'Interior Detailing';
  description: string;
  services: string[];
  location: 'Manchester' | 'Stockport' | 'Both';
  rating: number;
  reviews: number;
  certified: string[];
  website?: string;
  phone?: string;
  icon: string;
}

export const partnersData: Partner[] = [
  {
    id: 'srv-ceramic-coating',
    name: 'SRV Detailing - Ceramic Coating',
    category: 'Ceramic Coating',
    description:
      'Expert ceramic coating application protecting your vehicle with industry-leading nano-technology. Long-lasting paint protection that enhances gloss and repels contaminants.',
    services: [
      'Ceramic Coating Application',
      'Paint Correction',
      'Professional Polishing',
      'Wheel & Trim Protection',
      'Maintenance Packages',
    ],
    location: 'Both',
    rating: 4.9,
    reviews: 247,
    certified: ['Gyeon Q2', 'CarPro', 'IGL Coatings', 'XPEL'],
    website: 'https://srvdetailing.co.uk',
    phone: '+44XXXXXXXXXX',
    icon: '🛡️',
  },
  {
    id: 'srv-paint-protection',
    name: 'SRV Detailing - Paint Protection Film',
    category: 'Paint Protection',
    description:
      'Premium paint protection film (PPF) installation offering maximum defense against chips, scratches, and environmental damage. Self-healing technology for ultimate durability.',
    services: [
      'Full-Body PPF Installation',
      'Partial PPF Coverage',
      'Self-Healing Film Application',
      'Edge Protection',
      'Hydrophobic Treatment',
      'UV Protection',
    ],
    location: 'Both',
    rating: 4.95,
    reviews: 198,
    certified: ['XPEL Ultimate', 'XPEL Prime', '3M Scotchgard Pro'],
    website: 'https://srvdetailing.co.uk',
    phone: '+44XXXXXXXXXX',
    icon: '🔒',
  },
  {
    id: 'srv-interior-detailing',
    name: 'SRV Detailing - Interior Detailing',
    category: 'Interior Detailing',
    description:
      'Comprehensive interior detailing restoring and protecting your vehicle\'s cabin. Professional treatment for leather, fabric, alcantara, and all interior surfaces.',
    services: [
      'Deep Interior Cleaning',
      'Leather Conditioning & Protection',
      'Fabric & Upholstery Treatment',
      'Alcantara Care',
      'Stain & Odor Removal',
      'Dashboard Protection',
      'Window Tinting Service',
    ],
    location: 'Both',
    rating: 4.88,
    reviews: 156,
    certified: ['Leather Expert', 'Fabric Guard Pro', 'Interior Specialist'],
    website: 'https://srvdetailing.co.uk',
    phone: '+44XXXXXXXXXX',
    icon: '✨',
  },
];
