import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import LanguageProvider from '@/components/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaming Incentives Comparison',
  description: 'Compare incentive mechanisms in League of Legends, Counter-Strike 2, and Clash Royale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
