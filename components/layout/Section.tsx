import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function Section({ children, className, id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 px-4 sm:px-6',
        dark ? 'bg-[#0a0f1a]' : 'bg-[#080c14]',
        className
      )}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}
