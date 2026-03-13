import type { Partner } from '@/lib/partners';
import Link from 'next/link';

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  const locationText = {
    Manchester: 'Manchester',
    Stockport: 'Stockport',
    Both: 'Manchester & Stockport',
  };

  return (
    <article
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Header with Icon */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-8 text-center">
        <div className="text-5xl mb-3">{partner.icon}</div>
        <h3
          className="text-xl font-bold text-white"
          itemProp="name"
        >
          {partner.name}
        </h3>
        <p className="text-blue-100 text-sm mt-2 flex items-center justify-center gap-2">
          <span>📍</span>
          <span itemProp="areaServed">{locationText[partner.location]}</span>
        </p>
      </div>

      {/* Content */}
      <div className="flex-grow p-6">
        {/* Description */}
        <p
          className="text-slate-600 text-sm leading-relaxed mb-4"
          itemProp="description"
        >
          {partner.description}
        </p>

        {/* Rating */}
        <div className="mb-5 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(partner.rating) ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span
              className="text-sm font-semibold text-slate-900"
              itemProp="ratingValue"
            >
              {partner.rating}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Based on {partner.reviews} reviews
          </p>
        </div>

        {/* Services */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-slate-900 mb-3">
            Services
          </h4>
          <div className="flex flex-wrap gap-2">
            {partner.services.map((service, index) => (
              <span
                key={index}
                className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-slate-900 mb-2">
            Certifications
          </h4>
          <div className="flex flex-wrap gap-2">
            {partner.certified.map((cert, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded border border-green-200"
              >
                <span>✓</span>
                <span>{cert}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Contact Links */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
        {partner.website && (
          <Link
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors mb-2"
            itemProp="url"
          >
            Visit Website
          </Link>
        )}
        <Link
          href={`/contact?partner=${partner.id}`}
          className="inline-block w-full text-center px-4 py-2 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
        >
          Inquire Now
        </Link>
      </div>

      {/* Hidden Schema Markup */}
      <meta itemProp="image" content={partner.icon} />
      <meta itemProp="priceRange" content="££" />
      <meta itemProp="serviceType" content={partner.services.join(', ')} />
    </article>
  );
}
