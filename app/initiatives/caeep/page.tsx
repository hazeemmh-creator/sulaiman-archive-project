"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaUsers, FaVoteYea, FaHandshake, FaBullhorn, FaArrowLeft, FaCheckCircle } from "react-icons/fa"

export default function CAEEPPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-emerald-500/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-600 rounded-full text-white">
                <FaUsers />
              </div>
              <span className="text-emerald-500 font-bold tracking-[0.3em] text-xs uppercase">
                Grassroots Democracy
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Community Action for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Electoral Empowerment</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8 border-l-4 border-emerald-900 pl-6">
              "Reforms at the parliament only work when the people understand their power. CAEEP is the bridge between the law and the voter."
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-96 w-full rounded-[2rem] overflow-hidden border border-slate-800"
          >
             {/* Use your thumb image here */}
             <Image 
               src="/caeep-thumb.jpg" 
               alt="CAEEP Community Outreach" 
               fill 
               className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
             <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-emerald-950/80 backdrop-blur-md p-4 rounded-xl border border-emerald-800/50">
                  <p className="text-white font-bold text-sm">Active in 36 States</p>
                  <p className="text-emerald-400 text-xs uppercase tracking-widest">National Reach</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC OBJECTIVES */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-20">
        
        {/* The "Why CAEEP" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <FaVoteYea className="text-4xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Electoral Literacy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deepening citizens' understanding of electoral processes, rights, and responsibilities at the community level.
              </p>
            </div>
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <FaHandshake className="text-4xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Institutional Trust</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Translating complex parliamentary reforms into accessible language to build trust between the government and the governed.
              </p>
            </div>
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-emerald-500/50 transition-colors group">
              <FaBullhorn className="text-4xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Civic Voice</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Equipping youth and first-time voters with the tools to interrogate power and demand accountability.
              </p>
            </div>
        </div>

        {/* The Implementation Model (Detailed List) */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-[3rem] p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Implementation Model</h2>
              <p className="text-slate-400 text-lg mb-8">
                CAEEP is not just a campaign; it is a structured educational framework. We partner with schools, CSOs, and media houses to deliver content at scale.
              </p>
              <ul className="space-y-4">
                {[
                  "Curriculum design aligned with electoral laws",
                  "Town halls and civic clinics in underserved areas",
                  "Radio programs via Democracy Radio 104.9 FM",
                  "Continuous feedback loops from citizens to parliament"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50">
               <Image src="/caeep-thumb.jpg" alt="CAEEP Workshop" fill className="object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-black text-white">4</p>
                    <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Phased Approach</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <div className="text-center pb-10 px-6">
        <Link 
          href="/library" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <FaArrowLeft /> Return to Archive
        </Link>
      </div>

    </div>
  )
}