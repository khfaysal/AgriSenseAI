import { Link } from 'react-router-dom'
import {
  Leaf,
  ScanSearch,
  FlaskConical,
  Droplets,
  Sun,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  Leaf,
  ScanSearch,
  FlaskConical,
  Droplets,
  Sun,
  TrendingUp,
}

const toneClasses = {
  green: 'bg-secondary-container/50 text-secondary',
  error: 'bg-error-container/30 text-error',
  tertiary: 'bg-tertiary-fixed/30 text-tertiary',
  blue: 'bg-blue-100 text-blue-600',
  amber: 'bg-amber-100 text-amber-600',
  primary: 'bg-primary-fixed text-primary',
}

export default function ServiceCard({ service, className }) {
  const Icon = iconMap[service.icon] ?? Leaf

  return (
    <div
      className={cn(
        'bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group',
        'transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_32px_rgba(0,0,0,0.08)]',
        className,
      )}
    >
      <div className="w-full h-40 bg-surface-container-low rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="flex items-start gap-4">
        <div className={cn('p-3 rounded-xl shrink-0', toneClasses[service.iconTone] ?? toneClasses.primary)}>
          <Icon size={22} fill="currentColor" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-on-surface">{service.title}</h3>
          <p className="text-base text-on-surface-variant mt-1">{service.description}</p>
        </div>
      </div>

      <Link
        to={service.to}
        className="mt-auto w-full border border-primary text-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all text-[13px]"
      >
        Start Analysis
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}
