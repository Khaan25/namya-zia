'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export const buttonVariants = cva('rounded-full font-medium transition-all duration-300', {
  variants: {
    variant: {
      primary: 'bg-secondary text-primary font-bold hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]',
      secondary: 'bg-primary text-secondary hover:bg-opacity-80 border border-white/10 hover:bg-white hover:text-black hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]',
    },
    size: {
      default: 'px-6 py-3',
      sm: 'px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={buttonVariants({ variant, size, className })} ref={ref} {...props} />
})

export default Button
Button.displayName = 'Button'
