import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Detailing Blog Brighton | Tips, Guides & Advice',
  description:
    'Expert car detailing tips, guides, and advice from Car Detailing in Brighton. Learn about ceramic coating, paint correction, valeting, and keeping your car clean in Brighton\'s coastal environment.',
  alternates: { canonical: 'https://cardetailinginbrighton.co.uk/blog' },
  openGraph: {
    title: 'Car Detailing Blog Brighton | Car Detailing in Brighton',
    description:
      'Expert advice on car detailing, ceramic coating, paint correction and maintenance in Brighton.',
    url: 'https://cardetailinginbrighton.co.uk/blog',
    type: 'website',
    siteName: 'Car Detailing in Brighton',
  },
}

const blogCategories = [
  {
    category: 'Brighton Car Care',
    description: 'Local guides for Brighton vehicle owners',
    articles: [
      {
        title: "Why Brighton's Coastal Environment Is Destroying Your Car Paint",
        description:
          'Salt air, sea spray, and UV exposure make Brighton one of the most aggressive environments for car paintwork in the UK. Here\'s what you can do about it.',
        tag: 'Local Guide',
        readTime: '6 min read',
      },
      {
        title: 'The Complete Brighton Car Owner\'s Guide to Seasonal Detailing',
        description:
          'From summer UV protection to winter salt removal — a month-by-month guide to keeping your car in top condition in Brighton.',
        tag: 'Local Guide',
        readTime: '8 min read',
      },
      {
        title: 'How Brighton\'s Sea Air Damages Different Car Finishes Differently',
        description:
          'Black cars, metallic finishes, ceramic-coated vehicles — the coastal environment affects each differently. Find out what your car needs.',
        tag: 'Education',
        readTime: '5 min read',
      },
      {
        title: 'The Best Car Detailing Routine for Brighton and Hove Residents',
        description:
          'A practical, step-by-step car care routine designed specifically for the coastal climate of Brighton and Hove.',
        tag: 'How-To',
        readTime: '7 min read',
      },
      {
        title: 'Before You Sell Your Car in Brighton — Why Detailing Pays for Itself',
        description:
          'A full valet before sale consistently returns more than its cost. Here\'s what the data shows about professional detailing and car resale values.',
        tag: 'Value',
        readTime: '4 min read',
      },
    ],
  },
  {
    category: 'Ceramic Coating',
    description: 'Everything about ceramic paint protection',
    articles: [
      {
        title: 'Ceramic Coating vs Wax: A Complete Comparison for Brighton Car Owners',
        description:
          'Wax lasts weeks. Ceramic coating lasts years. We compare performance, cost, and application for Brighton\'s specific conditions.',
        tag: 'Comparison',
        readTime: '7 min read',
      },
      {
        title: 'How Long Does Ceramic Coating Last? The Real Answer',
        description:
          'Consumer coatings, professional coatings, and spray coatings — we break down realistic durability expectations for each.',
        tag: 'Education',
        readTime: '5 min read',
      },
      {
        title: 'Is Ceramic Coating Worth It for a Used Car?',
        description:
          'Many car owners assume ceramic coating is only for new vehicles. The reality is more nuanced — here\'s when it makes sense on an older car.',
        tag: 'Advice',
        readTime: '5 min read',
      },
      {
        title: 'The 6 Stages of Professional Ceramic Coating Application',
        description:
          'What actually happens during a ceramic coating appointment — from paint decontamination to curing. A complete walkthrough.',
        tag: 'How-To',
        readTime: '6 min read',
      },
      {
        title: 'How to Maintain Your Ceramic Coating and Make It Last Longer',
        description:
          'The products to use, the products to avoid, and the washing technique that preserves ceramic coating performance.',
        tag: 'Maintenance',
        readTime: '6 min read',
      },
    ],
  },
  {
    category: 'Paint Correction',
    description: 'Swirl removal, polishing, and paint restoration',
    articles: [
      {
        title: 'What Are Swirl Marks and How Do They Get on Your Car?',
        description:
          'The most common cause of swirl marks isn\'t what most drivers think. Understanding the cause is the first step to prevention.',
        tag: 'Education',
        readTime: '5 min read',
      },
      {
        title: 'Single-Stage vs Two-Stage Paint Correction: Which Do You Need?',
        description:
          'A guide to understanding paint correction stages — what each removes, how long they take, and when you need each level.',
        tag: 'How-To',
        readTime: '6 min read',
      },
      {
        title: 'Can Paint Correction Fix All Scratches? The Honest Answer',
        description:
          'Paint correction removes surface-level defects in the clear coat. Here\'s exactly what it can and cannot fix.',
        tag: 'Education',
        readTime: '4 min read',
      },
      {
        title: 'Why Paint Correction Must Come Before Ceramic Coating',
        description:
          'Ceramic coating locks whatever is under it permanently. Understanding why defect removal before coating is non-negotiable.',
        tag: 'Advice',
        readTime: '4 min read',
      },
    ],
  },
  {
    category: 'Car Washing & Valeting',
    description: 'Best practices for car cleaning',
    articles: [
      {
        title: 'Why Automated Car Washes Are Damaging Your Paintwork',
        description:
          'Rotating brushes, abrasive chemicals, and high-pressure rinses — the reasons professional detailers never use drive-through car washes.',
        tag: 'Education',
        readTime: '5 min read',
      },
      {
        title: 'The Two-Bucket Wash Method: How to Wash Your Car Without Causing Damage',
        description:
          'The simplest technique that prevents swirl marks from home washing. A step-by-step guide used by professional detailers.',
        tag: 'How-To',
        readTime: '5 min read',
      },
      {
        title: 'Mini Valet vs Full Valet: Which Should You Choose?',
        description:
          'A clear breakdown of what each service includes, how long each takes, and which is right for your situation.',
        tag: 'Advice',
        readTime: '4 min read',
      },
      {
        title: 'How Often Should You Get Your Car Professionally Washed?',
        description:
          'The honest answer depends on where you live, how you drive, and what protection your paint has. Here\'s the guide.',
        tag: 'Advice',
        readTime: '4 min read',
      },
      {
        title: 'Snow Foam Pre-Wash: What It Does and Why Detailers Use It',
        description:
          'Snow foam is not just for aesthetics. Understanding why a proper pre-wash stage matters for paint safety.',
        tag: 'Education',
        readTime: '4 min read',
      },
    ],
  },
]

const tagColours: Record<string, string> = {
  'Local Guide': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Education: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  Comparison: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Advice: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'How-To': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Maintenance: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  Value: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 px-4 sm:px-6 bg-gradient-to-b from-[#080c14] to-[#0f1624]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8] text-xs font-medium mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            Car Detailing Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f9ff] mb-5">
            Car Detailing
            <span className="block gradient-text">Blog & Guides</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl">
            Expert guides, how-to articles, and local Brighton car care advice from
            the team at Car Detailing in Brighton. Everything you need to know about
            keeping your vehicle in perfect condition.
          </p>
        </div>
      </section>

      {/* Articles by category */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {blogCategories.map((cat) => (
            <div key={cat.category}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#f0f9ff] mb-1">{cat.category}</h2>
                <p className="text-sm text-[#64748b]">{cat.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.articles.map((article, i) => (
                  <div
                    key={i}
                    className="group flex flex-col bg-[#0f1624] border border-[#1e3a5f] rounded-2xl p-5 hover:border-[#0ea5e9]/40 transition-all cursor-default"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                          tagColours[article.tag] ?? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                        }`}
                      >
                        {article.tag}
                      </span>
                      <span className="text-xs text-[#475569]">{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-[#f0f9ff] mb-2 leading-snug text-sm">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#64748b] leading-relaxed flex-1">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-1 mt-4 text-xs text-[#0ea5e9] opacity-70 group-hover:opacity-100 transition-opacity">
                      <span>Coming soon</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 sm:px-6 bg-[#0f1624] border-t border-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f0f9ff] mb-3">
            Ready to Book Your Detail?
          </h2>
          <p className="text-[#94a3b8] mb-7">
            Visit us at Brighton Marina — walk-ins welcome 9am to 6pm, 7 days a week.
            Or browse our services and prices below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold hover:opacity-90 transition-all"
            >
              View Services & Prices
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#1e3a5f] text-[#94a3b8] hover:border-[#0ea5e9] hover:text-[#38bdf8] font-semibold transition-all"
            >
              Browse FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
