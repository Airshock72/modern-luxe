import type { Metadata } from 'next'
import { geistSans } from './fonts/geist-sans'
import { geistMono } from './fonts/geist-mono'
import './globals.css'
import { ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/app/components/Header'

export const metadata: Metadata = {
  title: 'Luxe Home',
  description:
      'Luxe Home is a modern lifestyle and interior inspiration platform offering elegant design ideas, premium home décor,' +
      ' and curated collections that blend comfort, functionality, and timeless style.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Toaster position='top-center' closeButton  />
      </body>
    </html>
  )
}
