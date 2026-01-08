import localFont from 'next/font/local'

export const geistSans = localFont({
  src: [
    { path: './Geist-Regular.woff2', weight: '400', style: 'normal' },
    { path: './Geist-Medium.woff2', weight: '500', style: 'normal' },
    { path: './Geist-Bold.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-geist-sans',
  display: 'swap'
})
