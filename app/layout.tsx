import "./globals.css"
import type { Metadata } from "next"
import NavBar from "./NavBar"

export const metadata: Metadata = {
  title: "Prof. Abubakar O. Sulaiman | Digital Archive",
  description:
    "Honouring Professor Abubakar O. Sulaiman, Director-General of NILDS. Academic Architect and Legislative Reformer.",
  openGraph: {
    title: "Prof. A.O. Sulaiman | The Digital Legacy",
    description: "Explore the official digital archive documenting a legacy of legislative excellence.",
    url: "https://sulaiman-archive-project.vercel.app",
    siteName: "The Sulaiman Standard",
    images: [
      {
        url: "https://sulaiman-archive-project.vercel.app/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Prof. Abubakar O. Sulaiman",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Abubakar O. Sulaiman | Digital Archive",
    description: "Defining the Amana standard in Nigerian governance.",
    images: ["https://sulaiman-archive-project.vercel.app/hero-background.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-black text-gray-100">
        <NavBar />

        <main className="flex-1 relative z-0">{children}</main>

        <footer className="border-t border-slate-800 bg-black text-slate-400">
          <div className="max-w-7xl mx-auto px-6 py-10 text-sm flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="text-white font-bold">NILDS Digital Archive</div>
              <div className="mt-2 max-w-xl">
                In honour of Professor Abubakar O. Sulaiman, Director-General of the National Institute for Legislative and Democratic Studies.
              </div>
            </div>
            <div className="md:text-right">
              <div>© {new Date().getFullYear()} DigitalArchive</div>
              <div className="text-xs mt-2 text-slate-600 font-semibold tracking-wider">POWERED BY HAWEA HERITAGE</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
