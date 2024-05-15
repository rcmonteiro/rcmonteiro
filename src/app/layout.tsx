import '@/shared/dayjs'
import { Footer } from '@/ui/layout/footer'
import { Header } from '@/ui/layout/header'
import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
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
