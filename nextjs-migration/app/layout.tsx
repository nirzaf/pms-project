import type { Metadata } from 'next'
import { Pacifico, Quicksand } from 'next/font/google'
import './globals.css'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap'
})

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "O'Reilly's Bungalow - Premium Accommodation",
  description: 'Experience luxury and comfort at O\'Reilly\'s Bungalow. Book your perfect getaway with stunning views and premium amenities.',
  keywords: 'accommodation, bungalow, luxury, booking, vacation rental',
  authors: [{ name: "O'Reilly's Bungalow" }],
  openGraph: {
    title: "O'Reilly's Bungalow - Premium Accommodation",
    description: 'Experience luxury and comfort at O\'Reilly\'s Bungalow. Book your perfect getaway with stunning views and premium amenities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "O'Reilly's Bungalow - Premium Accommodation",
    description: 'Experience luxury and comfort at O\'Reilly\'s Bungalow. Book your perfect getaway with stunning views and premium amenities.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${pacifico.variable} ${quicksand.variable}`}>
      <body className={quicksand.className}>
        {children}
      </body>
    </html>
  )
}