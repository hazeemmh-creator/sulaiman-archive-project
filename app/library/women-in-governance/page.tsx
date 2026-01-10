"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaBook, 
  FaQuoteLeft, 
  FaChartPie, 
  FaBalanceScale, 
  FaGlobeAfrica, 
  FaDownload, 
  FaArrowLeft,
  FaCopy
} from "react-icons/fa"

export default function WomenInGovernance() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 pb-20">
      
      {/* 1. HERO SECTION: THE AUTHORITY */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Book Cover Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/3 flex justify-center perspective-1000"
          >
            <div className="relative w-64 md:w-80 aspect-[2/3] rounded-r-2xl shadow-2xl shadow-blue-900/50 border-l-4 border-slate-800 bg-slate-900 overflow-hidden transform transition-transform hover:scale-105 duration-500">
               {/* Fallback color if image is missing, otherwise Image component goes here */}
              <Image
                src="/women-governance-cover.jpg"
                alt="Women in Governance Cover"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Title & Synopsis */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <FaBook /> Scientific Reader Series
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Women Representation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">
                in Governance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl border-l-2 border-blue-500 pl-6">
              The definitive 836-page evidence-based authority on gender inclusion in Nigerian and African democratic spaces. Edited by <span className="text-white font-semibold">Prof. Abubakar O. Sulaiman</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                <FaDownload /> Download Executive Summary
              </button>
              <div className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg">
                <span className="text-xs font-mono text-slate-500">ISBN:</span> 978-978-593-21-0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (DATA VISUALIZATION) */}
      <section className="bg-slate-900 border-y border-slate-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <FaChartPie className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-bold text-white">The 2023 Disparity Data</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard label="Senate Seats" value="2.7%" description="3 women out of 109 seats" />
            <StatCard label="House of Reps" value="3.8%" description="14 women out of 360 seats" />
            <StatCard label="State Assemblies" value="0%" description="15 States have NO female representation" warning />
          </div>
        </div>
      </section>

      {/* 3. CORE THEMES (GRID) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold text-white mb-2">Thematic Pillars</h2>
          <p className="text-slate-400 mb-12">The structural barriers interrogated within the volume.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ThemeCard 
            title="Socio-Cultural Barriers" 
            text="Analysis of patriarchy, restrictive gender norms, and the 'Aso-Ebi' phenomenon relegating women to peripheral roles."
          />
          <ThemeCard 
            title="Political Financing" 
            text="How high nomination fees and campaign costs systematically exclude women from the ballot."
          />
          <ThemeCard 
            title="Legal Frameworks" 
            text="Comparative review of quota systems in Rwanda & Kenya vs. Nigeria’s rejected 'Gender Bills'."
          />
          <ThemeCard 
            title="Intersectionality & Religion" 
            text="Critical exposition of Islamic Law compatibility with women’s leadership and disability inclusion."
          />
        </div>
      </section>

      {/* 4. THE SOLUTION (Global Benchmarks) */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FaGlobeAfrica className="text-2xl text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Non-Negotiable Reforms</h2>
          </div>
          
          <div className="space-y-4">
             <ReformItem title="35% Affirmative Action" desc="Legislated minimum representation in appointive and elective offices." />
             <ReformItem title="Reserved Seats Model" desc="Adoption of special seats for women, similar to the Kenyan model." />
             <ReformItem title="Party Democracy" desc="Mandatory quotas for women in party leadership and internal decision-making." />
             <ReformItem title="Gender Fund" desc="Dedicated financing mechanisms to level the playing field for female candidates." />
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CITATION */}
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Cite this work</h3>
          <div className="font-mono text-xs md:text-sm text-slate-300 bg-black/30 p-4 rounded border border-slate-800 flex items-center justify-between gap-4">
            <p>Sulaiman, A.O. (Ed.). (2025). <em>Women Representation in Governance in Nigeria: Issues, Challenges and Way Forward.</em> Abuja: NILDS Press.</p>
            <button className="text-blue-500 hover:text-white" title="Copy Citation">
              <FaCopy />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/library-index"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FaArrowLeft /> Back to Archive Index
          </Link>
        </div>
      </div>

    </div>
  )
}

// --- SUB COMPONENTS ---

function StatCard({ label, value, description, warning = false }: { label: string, value: string, description: string, warning?: boolean }) {
  return (
    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 ${warning ? 'bg-red-600' : 'bg-blue-600'}`} />
      <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{label}</h3>
      <div className={`text-4xl md:text-5xl font-black mb-2 ${warning ? 'text-red-500' : 'text-white'}`}>
        {value}
      </div>
      <p className="text-slate-500 text-sm">{description}</p>
      
      {/* Visual Progress Bar */}
      <div className="w-full h-1 bg-slate-800 mt-4 rounded-full overflow-hidden">
        <div className={`h-full ${warning ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: value === "0%" ? "2%" : value }} />
      </div>
    </div>
  )
}

function ThemeCard({ title, text }: { title: string, text: string }) {
  return (
    <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all">
      <h3 className="text-lg font-bold text-blue-200 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

function ReformItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-4 bg-slate-900 rounded-lg border border-slate-800/50 hover:border-slate-700 transition-all">
      <div className="mt-1">
        <FaBalanceScale className="text-blue-500" />
      </div>
      <div>
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  )
}