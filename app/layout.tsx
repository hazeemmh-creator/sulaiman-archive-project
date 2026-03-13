import './globals.css'
import type { Metadata } from 'next'
import NavBar from './NavBar'

// 🚀 VIP WHATSAPP/TWITTER PREVIEW CODE (OPEN GRAPH)
export const metadata: Metadata = {
  title: 'Prof. Abubakar O. Sulaiman | Digital Archive',
  description: 'Honouring Professor Abubakar O. Sulaiman, Director-General of NILDS. Academic Architect & Legislative Reformer.',
  openGraph: {
    title: 'Prof. A.O. Sulaiman | The Digital Legacy',
    description: 'Explore the official digital archive documenting a legacy of legislative excellence.',
    url: 'https://sulaiman-archive-project.vercel.app', 
    siteName: 'The Sulaiman Standard',
    images: [
      {
        url: 'https://sulaiman-archive-project.vercel.app/hero-background.jpg', 
        width: 1200,
        height: 630,
        alt: 'Prof. Abubakar O. Sulaiman',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prof. Abubakar O. Sulaiman | Digital Archive',
    description: 'Defining the Amana standard in Nigerian governance.',
    images: ['https://sulaiman-archive-project.vercel.app/hero-background.jpg'], 
  },
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
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <div>NILDS — Digital Archive in honour of Professor Abubakar O. Sulaiman</div>
            <div className="text-right">
              <div>© {new Date().getFullYear()} DigitalArchive</div>
              <div className="text-xs mt-1 text-gray-600 font-semibold tracking-wider">POWERED BY HAWEA HERITAGE</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}