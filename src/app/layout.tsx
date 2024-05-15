import '@/shared/dayjs'
import { Footer } from '@/ui/layout/footer'
import { Header } from '@/ui/layout/header'
import type { Metadata } from 'next'
import { JetBrains_Mono as Mono, Poppins } from 'next/font/google'
import './globals.css'

const base = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
export const mono = Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'rcmonteiro',
  description: 'My work',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${base.className} ${mono.variable}`}>
      <body
        className={`font-default antialiased h-screen bg-dark-900 text-default justify-center grid grid-rows-[10rem_1fr_10rem]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
