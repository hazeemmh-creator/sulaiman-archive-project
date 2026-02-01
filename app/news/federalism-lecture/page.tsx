"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft, FaBookOpen, FaCalendarAlt, FaMicrophoneAlt, FaLandmark } from "react-icons/fa"

export default function FederalismPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 1. NAVIGATION HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-white transition-colors uppercase tracking-widest">
            <FaArrowLeft /> Return to Archive
          </Link>
          <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
            National Discourse
          </div>
        </div>
      </nav>

      {/* 2. ARTICLE HERO IMAGE */}
      <header className="relative pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[50vh] w-full rounded-3xl overflow-hidden border border-white/10 mb-10 shadow-2xl shadow-emerald-900/20">
             <Image 
               src="/news/federalism-lecture.jpg" 
               alt="Prof. Rotimi Suberu and Prof. Sulaiman" 
               fill 
               className="object-cover object-top"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                <div className="flex items-center gap-3 text-emerald-400 text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur px-3 py-1 rounded-full w-fit border border-emerald-500/30">
                  <FaLandmark /> Abuja, Nigeria
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl">
                  70 Years of Federalism in Nigeria
                </h1>
             </div>
          </div>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-b border-white/10 pb-8 mb-8">
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-emerald-500" /> January 16, 2026</span>
            <span className="hidden md:inline">•</span>
            <span>NILDS Permanent Site</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2"><FaMicrophoneAlt /> Guest Lecturer: Prof. Rotimi Suberu</span>
          </div>
        </div>
      </header>

      {/* 3. ARTICLE CONTENT */}
      <article className="max-w-3xl mx-auto px-6 pb-24 leading-loose text-lg text-slate-300">
        
        <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-500 first-letter:mr-3 first-letter:float-left">
          As Nigeria marks seven decades of federal practice, the National Institute for Legislative and Democratic Studies (NILDS) convened a landmark public lecture to interrogate the structural integrity of the nation's governance model.
        </p>

        <p className="mb-8">
          Hosted by <strong>Prof. Abubakar O. Sulaiman</strong>, the event featured renowned scholar <strong>Prof. Rotimi Suberu</strong> of Bennington College, Vermont. The lecture served as a critical platform for policymakers to assess whether the current federal structure supports or hinders national development.
        </p>

        <div className="my-12 p-8 bg-emerald-900/10 border-l-4 border-emerald-500 rounded-r-xl">
          <h3 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-3">The Director General's Stance</h3>
          <p className="text-white font-medium italic">
            "We cannot legislate in a vacuum. Understanding our history—where our federalism has succeeded and where it has fractured—is the only way to build a resilient democracy for the future."
          </p>
        </div>

        <p className="mb-8">
          The discourse focused on three critical areas:
        </p>
        <ul className="list-none pl-0 mb-8 space-y-4">
          <li className="flex items-start gap-3">
             <FaBookOpen className="text-emerald-500 mt-1 flex-shrink-0" />
             <span><strong>Devolution of Power:</strong> Re-examining the exclusive legislative list.</span>
          </li>
          <li className="flex items-start gap-3">
             <FaBookOpen className="text-emerald-500 mt-1 flex-shrink-0" />
             <span><strong>Fiscal Federalism:</strong> Ensuring equitable resource allocation across states.</span>
          </li>
          <li className="flex items-start gap-3">
             <FaBookOpen className="text-emerald-500 mt-1 flex-shrink-0" />
             <span><strong>Constitutional Reform:</strong> The role of the National Assembly in restructuring.</span>
          </li>
        </ul>

        <p>
          This event reinforces NILDS' position as the intellectual engine room of the National Assembly, bridging the gap between academic theory and legislative practice.
        </p>

      </article>

      {/* 4. FOOTER */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <Link href="/" className="inline-block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all font-bold text-sm uppercase tracking-widest">
          Return to Home
        </Link>
      </footer>

    </div>
  )
}