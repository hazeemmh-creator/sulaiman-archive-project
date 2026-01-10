"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaPoll, 
  FaBrain, 
  FaBalanceScale, 
  FaMapMarkedAlt, 
  FaLightbulb, 
  FaArrowLeft,
  FaFileAlt,
  FaQuoteRight
} from "react-icons/fa"

export default function NationalEliteSurvey() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24">

      {/* 1. HERO: THE ARCHITECTURE OF CONSENSUS */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/national-elite-survey.jpg"
            alt="National Survey on Elite Consensus"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 text-blue-400">
              <FaBrain className="text-sm" />
              <span className="font-bold tracking-widest text-[10px] uppercase">Strategic Research Initiative</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
              The Elite <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Consensus</span> Project
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A masterstroke of policy research directed by <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span>, 
              designed to harmonize the "Rules of the Game" for Nigeria’s future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE LEADERSHIP SNAPSHOT */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center">
            <FaQuoteRight className="text-4xl text-blue-900 mb-4" />
            <p className="text-xl text-slate-200 italic leading-relaxed">
              "Without consensus among the elite, democracy remains a fragile experiment. This survey is NILDS' contribution to building a stable, predictable, and prosperous Nigeria."
            </p>
            <div className="mt-6">
              <span className="block text-white font-bold text-lg">— Prof. Abubakar O. Sulaiman</span>
              <span className="text-blue-500 text-sm font-bold uppercase tracking-widest">Director General, NILDS</span>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl shadow-blue-900/20">
            <FaFileAlt className="text-5xl text-white mb-4" />
            <h3 className="text-white font-black text-2xl mb-2">Dec 18, 2025</h3>
            <p className="text-blue-100 text-sm font-medium">Public presentation of findings led by former INEC Chair, <span className="font-bold">Prof. Attahiru Jega</span>.</p>
          </div>
        </div>
      </section>

      {/* 3. CORE OBJECTIVES (Visual Grid) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4">The Strategic Roadmap</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Purpose & Objectives</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ObjectiveCard 
            icon={<FaBalanceScale />}
            title="Policy Continuity"
            desc="Building cross-regional buy-in to prevent the frequent policy reversals that stall national growth."
          />
          <ObjectiveCard 
            icon={<FaMapMarkedAlt />}
            title="The National Question"
            desc="Interrogating sensitive issues: State Police, Revenue Sharing, and Ethno-federalism with data-driven rigor."
          />
          <ObjectiveCard 
            icon={<FaPoll />}
            title="Evidence Framework"
            desc="Generating a roadmap to align key stakeholders—Security, Finance, Judiciary—around critical reforms."
          />
        </div>
      </section>

      {/* 4. THE FINDINGS (Visual Progress/Status) */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-white">Consensus Pillars of 2025</h2>
              <p className="text-slate-400">The report identifies where Nigeria's leadership converges—and where deep divisions remain.</p>
              
              <div className="space-y-6">
                <PillarItem title="State Police Frameworks" progress={75} label="High Support with Safeguards" />
                <PillarItem title="Revenue Mobilization" progress={60} label="Moderate Consensus" />
                <PillarItem title="Ethno-Federalism" progress={45} label="Deeply Divided" />
                <PillarItem title="Governance Accountability" progress={85} label="Universal Demand" />
              </div>
            </div>

            <div className="w-full md:w-1/3 space-y-4">
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-blue-500 font-bold text-xs uppercase mb-4 tracking-tighter">Methodology Scope</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between"><span>Traditional Institutions</span> <FaCheckCircle className="text-blue-500" /></li>
                    <li className="flex justify-between"><span>Security & Finance</span> <FaCheckCircle className="text-blue-500" /></li>
                    <li className="flex justify-between"><span>Labour & Media</span> <FaCheckCircle className="text-blue-500" /></li>
                    <li className="flex justify-between"><span>Religious Leaders</span> <FaCheckCircle className="text-blue-500" /></li>
                  </ul>
               </div>
               <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/20">
                  <p className="text-xs text-blue-300 font-medium italic leading-relaxed">
                    "This survey targets the non-partisan elites, seeking solutions that transcend short-term political party interests."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEXT STEPS & MEDIA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <FaLightbulb className="text-5xl text-amber-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-6">What Comes Next?</h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          The 2025 findings serve as the foundation for the <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">National Summit on Elite Consensus (Q1 2026)</span>. 
          The goal is to translate this data into concrete constitutional and legal reforms.
        </p>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group hover:border-blue-500 transition-colors">
          <h4 className="text-white font-bold mb-2">Watch the NILDS Media Feature</h4>
          <p className="text-slate-500 text-sm mb-4 italic">NILDS Unveils Survey Findings To Drive Elite Consensus Development</p>
          <button className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            View on YouTube →
          </button>
        </div>

        <div className="mt-20">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <FaArrowLeft /> Return to Digital Library
          </Link>
        </div>
      </section>

    </div>
  )
}

// --- COMPONENTS ---

function ObjectiveCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800 hover:bg-slate-900 transition-all group">
      <div className="text-3xl text-blue-900 group-hover:text-blue-500 transition-colors mb-6">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function PillarItem({ title, progress, label }: { title: string, progress: number, label: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-200 font-semibold">{title}</span>
        <span className="text-blue-500 font-bold">{label}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-blue-700 to-blue-400"
        />
      </div>
    </div>
  )
}

function FaCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}