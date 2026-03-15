"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function CAEEPNewsPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-mono selection:bg-blue-500 selection:text-white pb-24">
      
      {/* 1. DOSSIER NAVIGATION */}
      <nav className="border-b border-slate-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">
            <FaArrowLeft /> [ RETURN TO MAIN TERMINAL ]
          </Link>
          <div className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">
            FILE_REF: CAEEP-2026-04
          </div>
        </div>
      </nav>

      {/* 2. DOSSIER METADATA HEADER */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-8 border-b border-dashed border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs tracking-[0.2em] text-slate-300 uppercase mb-8">
          <div>
            <span className="block text-slate-400 font-semibold mb-1">CLASSIFICATION</span>
            <span className="text-blue-400 font-bold">INSTITUTIONAL</span>
          </div>
          <div>
            <span className="block text-slate-400 font-semibold mb-1">LOCATION</span>
            <span className="text-white font-bold">NILDS ACADEMY</span>
          </div>
          <div>
            <span className="block text-slate-400 font-semibold mb-1">TARGET</span>
            <span className="text-emerald-400 font-bold">EXECUTIVES</span>
          </div>
          <div>
            <span className="block text-slate-400 font-semibold mb-1">STATUS</span>
            <span className="text-white font-bold">ADMISSIONS OPEN</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
          2026 Executive Education
        </h1>
        <div className="text-sm text-slate-300 uppercase tracking-widest border-l-2 border-blue-500 pl-4 font-semibold">
          Bespoke certification programmes for Nigeria's top-tier leadership.
        </div>
      </header>

      {/* 3. HERO EVIDENCE (IMAGE) */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative h-[40vh] md:h-[60vh] w-full border border-slate-800 p-2 bg-slate-900/50">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 z-10"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 z-10"></div>
          <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/news/caeep-2026.jpg" 
              alt="CAEEP 2026" 
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="text-xs text-right text-slate-500 mt-2 tracking-widest uppercase font-semibold">
          [ EVIDENCE REF: VISUAL_DATA_04 ]
        </div>
      </div>

      {/* 4. THE 3-BULLET EXECUTIVE BRIEFING */}
      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 relative mb-8">
          <h3 className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-8 border-b border-slate-800 pb-4">
            [// DECRYPTED BRIEFING ]
          </h3>

          <ul className="space-y-10 text-base font-sans leading-relaxed text-slate-200">
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-slate-400 font-mono text-sm tracking-widest w-32 shrink-0 pt-1 font-bold">CONTEXT:</span>
              <p>Modern governance in Nigeria requires specialized capacity. Legislators, Heads of Ministries, and Political Party Executives need advanced, tailored education to address unique national challenges.</p>
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-blue-400 font-mono text-sm tracking-widest w-32 shrink-0 pt-1 font-bold">ACTION:</span>
              <p>The Centre for Advanced Executive Education Programme (CAEEP) at NILDS officially opened applications for its 2026 Academic Session, offering specialized tracks like Legislative Governance and Public Policy Development.</p>
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-emerald-400 font-mono text-sm tracking-widest w-32 shrink-0 pt-1 font-bold">OUTCOME:</span>
              <p>Equipping Nigeria's political class with flexible (On-Site/Hybrid) professional certifications to drive institutional transformation and effective policy implementation.</p>
            </li>
          </ul>
        </div>
        
        {/* CALL TO ACTION DOSSIER STYLE */}
        <div className="flex justify-center mt-12">
            <a href="mailto:caeep@nilds.gov.ng" className="px-8 py-4 bg-blue-600/20 border border-blue-500 text-blue-400 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3">
                [ INITIATE COMMUNICATION: ADMISSIONS ]
            </a>
        </div>
      </article>

    </div>
  )
}