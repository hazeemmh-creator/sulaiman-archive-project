"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function FederalismPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-mono selection:bg-blue-500 selection:text-white pb-24">
      
      {/* 1. DOSSIER NAVIGATION */}
      <nav className="border-b border-slate-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">
            <FaArrowLeft /> [ RETURN TO MAIN TERMINAL ]
          </Link>
          <div className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">
            FILE_REF: FED-2026-02
          </div>
        </div>
      </nav>

      {/* 2. DOSSIER METADATA HEADER */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-8 border-b border-dashed border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs tracking-[0.2em] text-slate-300 uppercase mb-8">
          <div>
            <span className="block text-slate-400 font-semibold mb-1">CLASSIFICATION</span>
            <span className="text-blue-400 font-bold">NATIONAL / GOVERNANCE</span>
          </div>
          <div>
            <span className="block text-slate-400 font-semibold mb-1">LOCATION</span>
            <span className="text-white font-bold">ABUJA, NIGERIA</span>
          </div>
          <div>
            <span className="block text-slate-400 font-semibold mb-1">GUEST</span>
            <span className="text-emerald-400 font-bold">PROF. R. SUBERU</span>
          </div>
          <div>
            <span className="block text-slate-400 font-semibold mb-1">DATE</span>
            <span className="text-white font-bold">JAN 16, 2026</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
          70 Years of Federalism
        </h1>
        <div className="text-sm text-slate-300 uppercase tracking-widest border-l-2 border-blue-500 pl-4 font-semibold">
          Interrogating Nigeria's structural integrity and democratic resilience.
        </div>
      </header>

      {/* 3. HERO EVIDENCE (IMAGE) */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative h-[40vh] md:h-[60vh] w-full border border-slate-800 p-2 bg-slate-900/50">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 z-10"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 z-10"></div>
          <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/news/federalism-lecture.jpg" 
              alt="Federalism Lecture" 
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="text-xs text-right text-slate-500 mt-2 tracking-widest uppercase font-semibold">
          [ EVIDENCE REF: VISUAL_DATA_03 ]
        </div>
      </div>

      {/* 4. THE 3-BULLET EXECUTIVE BRIEFING & INTERCEPT */}
      <article className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 relative mb-8">
          <h3 className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-8 border-b border-slate-800 pb-4">
            [// DECRYPTED BRIEFING ]
          </h3>

          <ul className="space-y-10 text-base font-sans leading-relaxed text-slate-200">
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-slate-400 font-mono text-sm tracking-widest w-32 shrink-0 pt-1 font-bold">CONTEXT:</span>
              <p>As Nigeria marks seven decades of federal practice, there is an urgent need to assess whether the current structure—including the devolution of power and fiscal federalism—supports or hinders national development.</p>
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-blue-400 font-mono text-sm tracking-widest w-32 shrink-0 pt-1 font-bold">ACTION:</span>
              <p>NILDS convened a landmark public lecture hosted by Prof. Abubakar O. Sulaiman, featuring renowned scholar Prof. Rotimi Suberu to critically interrogate the nation's governance model.</p>
            </li>
            <li className="flex flex-col md:flex-row gap-4">
              <span className="text-emerald-400 font-mono text-sm tracking-widest w-32 shrink-0 pt-1 font-bold">OUTCOME:</span>
              <p>Established a critical framework for policymakers and the National Assembly to approach constitutional reform, reinforcing NILDS as the intellectual engine room of Nigerian legislation.</p>
            </li>
          </ul>
        </div>

        {/* DG DIRECT QUOTE */}
        <div className="border-l-2 border-blue-500 pl-6 py-2 my-8">
          <div className="text-xs text-blue-400 tracking-[0.2em] uppercase mb-3 font-bold">
             [// AUDIO_INTERCEPT: DG_DIRECT_QUOTE ]
          </div>
          <p className="text-white font-medium italic font-sans text-lg md:text-xl leading-relaxed">
            "We cannot legislate in a vacuum. Understanding our history—where our federalism has succeeded and where it has fractured—is the only way to build a resilient democracy for the future."
          </p>
        </div>
      </article>

    </div>
  )
}