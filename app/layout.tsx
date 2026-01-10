import './globals.css'
import type { Metadata } from 'next'
import NavBar from './NavBar'

export const metadata: Metadata = {
  title: 'DigitalArchive',
  description: 'Honouring Professor Abubakar O. Sulaiman, Director-General of NILDS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-black text-gray-100">
        {/* Navigation */}
        <NavBar />

        {/* Page Content */}
        <main className="flex-1 relative z-0 p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-700 bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm">
            <div>NILDS — DigitalArchive in honour of Professor Abubakar O. Sulaiman</div>
            <div className="mt-2">© {new Date().getFullYear()} DigitalArchive</div>
          </div>
        </footer>
      </body>
    </html>
  )
}