import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type DescriptionProps = ComponentProps<'p'>

export default function Description({ className, ...props }: DescriptionProps) {
  return <p className={cn('text-body leading-8 text-secondary/70 font-medium', className)} {...props} />
}
