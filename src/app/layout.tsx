import React from 'react'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], fallback: ['sans-serif'], weight: ['400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Reddn\'t it',
  description: 'Not the front page of the internet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
