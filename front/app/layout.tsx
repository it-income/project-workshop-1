import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import {WithSideNav} from "@/app/components/withSideNav";

const roboto = Roboto({subsets: ['latin', 'cyrillic-ext'], weight: '400'})

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
    <CssBaseline/>
    <body className={roboto.className}>
      <WithSideNav>
        {children}
      </WithSideNav>
    </body>
    </html>
  )
}
