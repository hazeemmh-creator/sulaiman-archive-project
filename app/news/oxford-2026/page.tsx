"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft, FaGlobe, FaCalendarAlt, FaShareAlt } from "react-icons/fa"

export default function OxfordPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 1. NAVIGATION HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-white transition-colors uppercase tracking-widest">
            <FaArrowLeft /> Return to Archive
          </Link>
          <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
            Global Engagement
          </div>
        </div>
      </nav>

      {/* 2. ARTICLE HERO IMAGE */}
      <header className="relative pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[50vh] w-full rounded-3xl overflow-hidden border border-white/10 mb-10 shadow-2xl shadow-blue-900/20">
             <Image 
               src="/news/oxford-group.jpg" 
               alt="Oxford Delegation" 
               fill 
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                <div className="flex items-center gap-3 text-blue-400 text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur px-3 py-1 rounded-full w-fit border border-blue-500/30">
                  <FaGlobe /> United Kingdom
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl">
                  Strategic Capacity Building at Oxford University
                </h1>
             </div>
          </div>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-b border-white/10 pb-8 mb-8">
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-blue-500" /> January 2026</span>
            <span className="hidden md:inline">•</span>
            <span>Saïd Business School</span>
            <span className="hidden md:inline">•</span>
            <span>High Performance Leadership Programme</span>
          </div>
        </div>
      </header>

      {/* 3. ARTICLE CONTENT */}
      <article className="max-w-3xl mx-auto px-6 pb-24 leading-loose text-lg text-slate-300">
        
        <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
          In a move to further strengthen the legislative capacity of the National Assembly, Prof. Abubakar O. Sulaiman led a high-level delegation to the prestigious <strong>Saïd Business School, University of Oxford</strong>.
        </p>

        <p className="mb-8">
          Participating in the <em>High Performance Leadership Programme</em>, the Director General engaged with global thought leaders on strategies for institutional reform, policy innovation, and sustainable governance. This engagement underscores NILDS' commitment to integrating world-class standards into Nigeria's democratic processes.
        </p>

        <div className="my-12 p-8 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl">
          <h3 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-3">Key Takeaway</h3>
          <p className="text-white font-medium italic">
            "True legislative sovereignty requires not just local understanding, but global competence. We are building a bridge between the Nigerian reality and global best practices."
          </p>
        </div>

        <p className="mb-8">
          The intensive sessions focused on:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-4 marker:text-blue-500">
          <li><strong>Strategic Alignment:</strong> synchronizing legislative agendas with national development goals.</li>
          <li><strong>Crisis Management:</strong> Leading institutions through periods of volatility.</li>
          <li><strong>Digital Transformation:</strong> Leveraging technology for transparent governance.</li>
        </ul>

        <p>
          This visit marks another milestone in the Director General's vision to position NILDS as a premier intellectual hub in West Africa.
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