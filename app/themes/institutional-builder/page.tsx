"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBuilding, FaCogs, FaShieldAlt, FaArrowLeft, FaNetworkWired, FaUserTie } from "react-icons/fa"

export default function InstitutionalBuilderPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-blue-600/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Impact Pillar IV
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Institutional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-400">Builder</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              "Nations grow when institutions grow. My mission is to build systems that survive political transitions and serve the people permanently."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/theme-institutional-hero.jpg" 
              alt="Institutional Builder" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* THE INFRASTRUCTURE GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        
        {/* SECTION 1: GOVERNANCE STRUCTURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="group p-8 bg-slate-900/20 border border-slate-800 rounded-3xl hover:border-blue-600/50 transition-colors">
            <FaBuilding className="text-5xl text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Governance Renaissance</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Under his stewardship, NILDS has undergone a renaissance. He moved governance away from "personality-driven" leadership to **systems-driven** operations. 
              This ensures continuity, transparency, and accountability long after any single leader leaves office.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-bold uppercase rounded-full">Oversight</span>
              <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-bold uppercase rounded-full">Drafting</span>
            </div>
          </div>
          <div className="relative h-72 w-full rounded-[2rem] overflow-hidden border border-slate-800">
             <Image src="/theme-institutional-governance1.jpg" alt="Governance Structures" fill className="object-cover" />
          </div>
        </div>

        {/* SECTION 2: CAPACITY & INNOVATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card A: Capacity */}
          <div className="md:col-span-1 p-8 bg-slate-900/20 border border-slate-800 rounded-3xl hover:border-blue-600/50 transition-colors">
            <FaNetworkWired className="text-4xl text-slate-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Capacity Building</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reducing Africa’s dependence on foreign training by establishing NILDS as a regional hub for legislative excellence.
            </p>
          </div>
          
          {/* Card B: Innovation */}
          <div className="md:col-span-2 p-8 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><FaCogs className="text-9xl text-white" /></div>
            <h3 className="text-3xl font-bold text-white mb-4">Modernization & AI</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              From digital governance advocacy to <strong>Democracy Radio</strong>, he is future-proofing Nigeria’s institutions. 
              His push for AI-driven legislative tools ensures NILDS remains globally competitive.
            </p>
          </div>
        </div>

        {/* SECTION 3: THE CAEEP FLAGSHIP */}
        <div className="relative rounded-[3rem] overflow-hidden border border-blue-900/30">
          <div className="absolute inset-0 bg-blue-900/10 z-0" />
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <FaUserTie className="text-blue-500 text-2xl" />
                <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Flagship Programme</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-6">CAEEP</h2>
              <h3 className="text-xl text-blue-200 mb-6">Centre for Advanced Executive Education Programme</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                A high-level executive finishing school for Commissioners, DGs, and Senior Legislators. 
                CAEEP blends academic rigor with practical crisis management and ethical governance strategies.
              </p>
              
              <Link 
                href="/initiatives/caeep" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all w-fit"
              >
                Explore CAEEP <FaArrowLeft className="rotate-180" />
              </Link>
            </div>
            <div className="relative h-80 lg:h-auto min-h-[400px] border-l border-slate-800">
               <Image src="/caeep-thumb.jpg" alt="CAEEP Executive Session" fill className="object-cover" />
            </div>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <div className="text-center pb-10 px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <FaArrowLeft /> Return Home
        </Link>
      </div>

    </div>
  )
}