"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaMicrophone, 
  FaBroadcastTower, 
  FaPlay, 
  FaHeadphones, 
  FaClock, 
  FaGlobe, 
  FaArrowLeft,
  FaSignal,
  FaBookOpen,
  FaUsers
} from "react-icons/fa"

export default function DemocracyRadioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20 font-sans">

      {/* 1. HERO: THE BROADCAST HUB */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/library-radio.jpg" 
            alt="Democracy Radio Studio"
            fill
            className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-blue-900/20" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500 rounded-full mb-6 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-red-400 font-bold tracking-widest text-[10px] uppercase">On Air: 104.9 FM Abuja</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white mb-4 tracking-tighter">
              VOX <span className="text-blue-500">POPULI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed border-l-2 border-blue-600 pl-6 mb-8 text-left">
              Established by <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span> to bridge the gap between the National Assembly and the Nigerian citizenry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. REAL-TIME BROADCAST SCHEDULE (The Archive Addition) */}
      <section className="py-16 px-6 max-w-6xl mx-auto -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ScheduleCard time="06:00 - 10:00" title="The Morning Show" tag="Daily" />
          <ScheduleCard time="11:00 - 14:00" title="Politics Buffet" tag="Governance" />
          <ScheduleCard time="17:15 - 18:00" title="Sports Connect" tag="Lifestyle" />
          <ScheduleCard time="Weekly" title="Legislature 101" tag="Educative" />
        </div>
      </section>

      {/* 3. CORE ARCHIVE: CITIZENS JOURNALISM WORKSHOP */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 text-blue-500 mb-4">
              <FaUsers className="text-2xl" />
              <span className="font-black text-xs uppercase tracking-[0.3em]">Institutional Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Equipping the Next Generation</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              In November 2024, Democracy Radio hosted its first <span className="text-white font-bold">Citizens Journalism Workshop</span>. Over 50 students from the University of Abuja and other institutions were trained in responsible storytelling and fact-checking.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 flex items-center gap-4">
                <FaBookOpen className="text-blue-500" />
                <span className="text-sm">Digital Fact-Checking & Cybersecurity</span>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 flex items-center gap-4">
                <FaSignal className="text-emerald-500" />
                <span className="text-sm">Solutions-Based Journalism Training</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-800 group">
             <Image 
              src="/library-radio-workshop.jpg" 
              alt="Workshop Session" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-white/70 italic italic">"With power comes responsibility... we must equip young Nigerians to discern truth." — Prof. Sulaiman</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PROGRAMS */}
      <section className="bg-[#050b14] py-20 border-y border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
           <h3 className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-2">Signature Content</h3>
           <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Educating the Citizenry</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
           <ProgramBox 
            title="Legislature 101" 
            desc="A masterclass on the roles of Majority and Minority leaders and inclusive governance." 
           />
           <ProgramBox 
            title="Leadership Lab" 
            desc="Exploring the administrative competence required to drive institutional change." 
           />
           <ProgramBox 
            title="FCT Watch" 
            desc="Monitoring the governance and development specifically within the nation's capital." 
           />
        </div>
      </section>

      {/* BACK NAVIGATION */}
      <div className="py-12 text-center">
         <Link
            href="/library"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <FaArrowLeft /> Exit to Knowledge Base
          </Link>
      </div>

    </div>
  )
}

// Sub-components
function ScheduleCard({ time, title, tag }: { time: string, title: string, tag: string }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
      <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{time}</span>
      <h4 className="text-white font-bold mt-1 mb-3">{title}</h4>
      <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded uppercase font-bold">{tag}</span>
    </div>
  )
}

function ProgramBox({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 bg-slate-950 border border-slate-900 rounded-3xl hover:bg-slate-900 transition-colors">
      <h4 className="text-xl font-bold text-white mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}