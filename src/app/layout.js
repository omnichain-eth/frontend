import { ThirdwebProvider } from "thirdweb/react";
import { Figtree, Press_Start_2P, Inter } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${pressStart2P.variable} ${inter.variable}`}>
      <body className="bg-white-pointer-50 min-h-screen">
        <div>
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </div>
      </body>
    </html>
  )
}
