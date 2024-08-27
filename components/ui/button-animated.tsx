import { cn } from '@/lib/utils'
import Button, { ButtonProps } from './button'

export default function ButtonAnimated({ children, className, variant, ...props }: ButtonProps) {
  return (
    <Button variant={variant} className={cn('group relative inline-flex items-center justify-center h-12 overflow-hidden duration-500', className)} {...props}>
      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">{children}</div>
      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">{children}</div>
    </Button>
  )
}
