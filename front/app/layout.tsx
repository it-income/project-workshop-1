import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin', 'cyrillic-ext'], weight: '400' })

export const metadata: Metadata = {
  title: 'Тональность отзывов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
