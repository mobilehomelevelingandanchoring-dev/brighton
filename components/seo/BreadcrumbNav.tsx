import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-[#94a3b8] mb-6">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#1e3a5f]" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-[#38bdf8] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#f0f9ff]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
