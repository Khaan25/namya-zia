import type { Metadata } from 'next'
import './globals.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Hero Section for Namya',
  description: 'Built by Zia Ur Rehman',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-dvh font-sans antialiased', GeistSans.variable, GeistMono.variable)}>{children}</body>
    </html>
  )
}
