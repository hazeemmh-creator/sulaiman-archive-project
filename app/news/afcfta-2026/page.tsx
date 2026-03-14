"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function AfcftaPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-mono selection:bg-blue-500 selection:text-white pb-24">
      
      {/* 1. DOSSIER NAVIGATION */}
      <nav className="border-b border-slate-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">
            <FaArrowLeft /> [ RETURN TO MAIN TERMINAL ]
          </Link>
          <div className="text-[10px] text-blue-500 uppercase tracking-[0.2em]">
            FILE_REF: AFCFTA-2026-03
          </div>
        </div>
      </nav>

      {/* 2. DOSSIER METADATA HEADER */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-8 border-b border-dashed border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-8">
          <div>
            <span className="block text-slate-700 mb-1">CLASSIFICATION</span>
            <span className="text-blue-500">GLOBAL / ECONOMIC</span>
          </div>
          <div>
            <span className="block text-slate-700 mb-1">LOCATION</span>
            <span className="text-white">ABUJA, NIGERIA</span>
          </div>
          <div>
            <span className="block text-slate-700 mb-1">PARTNERS</span>
            <span className="text-emerald-500">UN (UNECA)</span>
          </div>
          <div>
            <span className="block text-slate-700 mb-1">DATE</span>
            <span className="text-white">MAR 3-5, 2026</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
          AfCFTA Capacity-Building Programme
        </h1>
        <div className="text-xs text-slate-400 uppercase tracking-widest border-l-2 border-blue-500 pl-4">
          Translating Africa's most ambitious economic integration into national law.
        </div>
      </header>

      {/* 3. HERO EVIDENCE (IMAGE) */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative h-[40vh] md:h-[60vh] w-full border border-slate-800 p-2 bg-slate-900/50">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 z-10"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 z-10"></div>
          <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {/* MAKE SURE TO ADD 'afcfta-2026.jpg' TO YOUR PUBLIC/NEWS FOLDER */}
            <Image 
              src="/news/afcfta-2026.jpg" 
              alt="AfCFTA Programme" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="text-[10px] text-right text-slate-600 mt-2 tracking-widest uppercase">
          [ EVIDENCE REF: VISUAL_DATA_02 ]
        </div>
      </div>

      {/* 4. THE 3-BULLET EXECUTIVE BRIEFING */}
      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 relative">
          <h3 className="text-blue-500 text-xs font-bold tracking-[0.3em] uppercase mb-8 border-b border-slate-800 pb-4">
            [// DECRYPTED BRIEFING ]
          </h3>

          <ul className="space-y-10 text-sm md:text-base font-sans leading-relaxed text-slate-300">
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-slate-500 font-mono text-xs tracking-widest w-32 shrink-0 pt-1">CONTEXT:</span>
              <p>The African Continental Free Trade Area (AfCFTA) is Africa's most ambitious economic initiative[cite: 26]. However, international agreements only succeed when domestic legislators understand how to translate them into national laws[cite: 27].</p>
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-blue-400 font-mono text-xs tracking-widest w-32 shrink-0 pt-1">ACTION:</span>
              <p>NILDS partnered with the United Nations Economic Commission for Africa (UNECA) to execute a major legislative capacity-building programme in Abuja[cite: 23, 24].</p>
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-emerald-500 font-mono text-xs tracking-widest w-32 shrink-0 pt-1">OUTCOME:</span>
              <p>Successfully trained Members of the National Assembly, parliamentary clerks, and legislative researchers to effectively implement trade agreements and strengthen Nigeria's economic integration[cite: 24, 28].</p>
            </li>
          </ul>
        </div>
      </article>

    </div>
  )
}