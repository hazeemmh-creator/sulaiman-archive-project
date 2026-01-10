"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaBookReader, 
  FaAward, 
  FaChartLine, 
  FaArrowLeft,
  FaQuoteLeft,
  FaCheckCircle
} from "react-icons/fa"

export default function UnibenPartnershipPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24">

      {/* 1. HERO: THE ACADEMIC VISION */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/library-uniben.jpg"
            alt="NILDS-UNIBEN Partnership"
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
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 text-blue-400">
              <FaAward className="animate-pulse" />
              <span className="font-bold tracking-widest text-xs uppercase">Postgraduate Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter">
              The <span className="text-blue-500">Uniben</span> <br /> Partnership
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed border-l-2 border-blue-500 pl-6 text-left md:text-center italic">
              "Our goal is to produce the intellectual workforce that will sustain Nigeria's democracy for generations." 
              <span className="block mt-2 font-bold text-white not-italic">— Prof. Abubakar O. Sulaiman</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SULAIMAN REFORM PILLARS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">Professionalizing Governance</h2>
            <p className="text-slate-400 leading-relaxed">
              Since taking the helm, <span className="text-white font-semibold">Prof. Abubakar O. Sulaiman</span> has transformed the NILDS–UNIBEN collaboration from a quiet academic agreement into a vibrant, high-impact postgraduate school. 
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                <FaChartLine className="text-blue-500 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-bold">Exponential Growth</h4>
                  <p className="text-sm text-slate-500">Enrollment surged to 244 students in 2024, nearly doubling the Institute's previous academic footprint.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                <FaUniversity className="text-blue-500 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-bold">PhD Roadmap</h4>
                  <p className="text-sm text-slate-500">Expanding the legacy through new doctoral partnerships with Federal University Lokoja and UniAbuja.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 rounded-2xl p-6 flex flex-col justify-between h-48 shadow-xl shadow-blue-900/20">
              <FaGraduationCap className="text-4xl text-blue-200" />
              <span className="text-white font-black text-3xl">9th</span>
              <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">Convocation Ceremony</span>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-48">
              <FaBookReader className="text-4xl text-blue-500" />
              <span className="text-white font-black text-3xl">5</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Master's Streams</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME DIRECTORY (The Curriculum) */}
      <section className="bg-[#08101f] py-24 px-6 border-y border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-4">The Academic Blueprint</h3>
            <h2 className="text-4xl font-bold text-white">Postgraduate Catalog</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white border-b border-blue-500/30 pb-2">Master's Degrees (24 Months)</h4>
              <ul className="grid grid-cols-1 gap-4">
                <ProgramItem title="Legislative Studies (MLS)" />
                <ProgramItem title="Legislative Drafting (MLD)" />
                <ProgramItem title="Parliamentary Administration (MPAD)" />
                <ProgramItem title="Elections & Party Politics (MEPP)" />
                <ProgramItem title="Constitutional Law & Development" />
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white border-b border-blue-500/30 pb-2">Postgraduate Diplomas</h4>
              <ul className="grid grid-cols-1 gap-4">
                <ProgramItem title="PGD in Parliamentary Administration" />
                <ProgramItem title="PGD in Legislative Drafting" />
                <ProgramItem title="PGD in Elections & Political Party Mgmt" />
                <ProgramItem title="Professional Governance (ICSAN)" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADMISSION & QUALITY ASSURANCE */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900/10 p-8 md:p-12 rounded-[3rem] border border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">NUC-Regulated Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h5 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Master's Criteria</h5>
              <p className="text-sm leading-relaxed">Minimum 2:2 in a relevant field. Third Class candidates require a PGD for entry.</p>
            </div>
            <div className="space-y-4">
              <h5 className="text-blue-400 font-bold uppercase text-xs tracking-widest">PGD Criteria</h5>
              <p className="text-sm leading-relaxed">Minimum 3rd Class or HND (Upper Credit). 5 O'Level credits including English & Maths.</p>
            </div>
          </div>
          <div className="mt-10 pt-10 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm italic">
              All academic activities take place at the NILDS Permanent Site, Abuja, utilizing a blend of UNIBEN faculty and National Assembly practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BACK LINK */}
      <div className="text-center pt-4">
         <Link
            href="/library"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Archive Index
          </Link>
      </div>

    </div>
  )
}

function ProgramItem({ title }: { title: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-300 bg-slate-900/80 p-4 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all">
      <FaCheckCircle className="text-blue-500 flex-shrink-0" />
      <span className="text-sm font-semibold">{title}</span>
    </li>
  )
}