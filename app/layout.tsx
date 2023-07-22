import { Footer, Navbar } from '../components/layouts'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cars Show Room',
  description: 'Show Room',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
