import { cn } from '@/lib/utils'
import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react'

type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

// We can improve it further by using a map to define the size classes
export default function Heading({ level, children, className, ...props }: HeadingProps) {
  let HeadingTag = 'h1' as keyof JSX.IntrinsicElements

  switch (level) {
    case 1:
      HeadingTag = 'h1'
      break
    case 2:
      HeadingTag = 'h2'
      break
    case 3:
      HeadingTag = 'h3'
      break
    case 4:
      HeadingTag = 'h4'
      break
    case 5:
      HeadingTag = 'h5'
      break
    case 6:
      HeadingTag = 'h6'
      break
    default:
      // If an invalid level is provided, render h1 by default
      HeadingTag = 'h1'
      break
  }

  const baseClasses = 'font-geist font-medium'
  const sizeClasses = {
    1: 'text-heading-1',
    2: 'text-heading-2',
    3: 'text-heading-3',
    4: 'text-heading-4',
    5: 'text-body',
    6: 'text-body'
  }[level] || 'text-body'

  return (
    <HeadingTag className={cn(baseClasses, sizeClasses, className)} {...props}>
      {children}
    </HeadingTag>
  )
}
