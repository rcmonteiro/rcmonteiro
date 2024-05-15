import '@/shared/dayjs'
import { Footer } from '@/ui/layout/footer'
import { Header } from '@/ui/layout/header'
import type { Metadata } from 'next'
import { JetBrains_Mono as Mono, Poppins } from 'next/font/google'
import './globals.css'

const base = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
const mono = Mono({
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
        className={`font-default antialiased h-screen bg-dark-900 text-default mx-auto p-4`}
      >
        <div className="max-w-5xl w-full h-screen grid grid-rows-[8rem_1fr_8rem] mx-auto gap-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
