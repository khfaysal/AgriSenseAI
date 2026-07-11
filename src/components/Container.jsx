import { cn } from '@/lib/utils'

function Container({ className, children, ...props }) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-margin', className)} {...props}>
      {children}
    </div>
  )
}

export { Container }
