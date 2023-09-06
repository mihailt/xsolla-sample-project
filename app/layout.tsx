import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xsolla Sample Integration Project',
  description: 'xsolla demo project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen bg-gray-100 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
