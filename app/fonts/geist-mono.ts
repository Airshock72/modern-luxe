import localFont from 'next/font/local'

export const geistMono = localFont({
  src: [
    { path: './GeistMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: './GeistMono-Bold.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-geist-mono',
  display: 'swap'
})
