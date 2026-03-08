import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Brighton Marina Hand Car Wash | Professional Car Wash Brighton BN2',
  description:
    'Hand car wash at Brighton Marina. Transparent pricing for all vehicle sizes. Open 7 days, 9am–6pm. Located in Marina Square, Brighton BN2 5UT. Call +44 7392 596532',
  metadataBase: new URL('https://brightonmarinahandcarwash.co.uk'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} antialiased bg-[#080c14] text-[#f0f9ff]`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
