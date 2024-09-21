import { ThirdwebProvider } from "thirdweb/react";
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-2 my-2">
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </div>
      </body>
    </html>
  )
}
