import './globals.css'
import { PortfolioDock } from '../components/ui/portfolio-dock'

export const metadata = {
  title: 'Md Suhail',
  description: 'A highly animated and visually engaging portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
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
