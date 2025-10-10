import './globals.css'
import { Inter } from 'next/font/google'
import { PortfolioDock } from '../components/ui/portfolio-dock'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animated Portfolio',
  description: 'A highly animated and visually engaging portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          {children}
          <div className="bg-gray-100 w-full">
            <PortfolioDock />
          </div>
        </div>
      </body>
    </html>
  )
}
