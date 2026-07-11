import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-xl border border-outline-variant bg-surface-container-lowest px-4 py-3 text-base text-on-surface shadow-inner transition-all placeholder:text-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

export { Textarea }
