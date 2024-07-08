import { fonts } from '@/app/fonts'

import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: '',
  description: 'Created with love.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={fonts.chakraPetch.variable}>{children}</body>
    </html>
  )
}
