"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaQuoteLeft, 
  FaGlobeAfrica, 
  FaUsers, 
  FaUniversity, 
  FaLightbulb, 
  FaScroll, 
  FaBalanceScale, 
  FaPenNib 
} from "react-icons/fa"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen">
      
      {/* 1. HERO: THE ARCHITECT'S VISTA */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/hero-nilds.jpg"
          alt="About The Sulaiman Standard"
          fill
          className="object-cover brightness-[0.4] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.div {...fadeInUp}>
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              The Genesis of a Standard
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              The Architect of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-100">
                Institutional Trust
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Bridging the gap between academic rigor and national service to build 
              a legacy that survives the individual.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-32">
        
        {/* 2. THE PHILOSOPHY: AMANA (Trust as Leadership) */}
        <motion.section 
          {...fadeInUp}
          className="relative -mt-24 z-20 bg-slate-900 border border-slate-800 p-8 md:p-16 rounded-[2rem] shadow-3xl text-center"
        >
          <FaQuoteLeft className="text-blue-500/20 text-7xl absolute top-10 left-10" />
          <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-8">The Core Philosophy</h2>
          <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-100 leading-tight mb-8">
            “True leadership is not merely holding office; it is the relentless pursuit of 
            building institutions that outlast the individual.”
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="h-1 w-20 bg-blue-600 mb-4" />
            <p className="text-white font-bold text-lg tracking-wide uppercase">
              Prof. Abubakar Olanrewaju Sulaiman
            </p>
            <p className="text-blue-400 text-sm italic">The Visionary Behind The Standard</p>
          </div>
        </motion.section>

        {/* 3. THE TRINITY: SCHOLAR, STATESMAN, REFORMER */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Multi-Dimensional Legacy</h2>
            <p className="text-slate-400">The three pillars that define Professor Sulaiman’s contribution to Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PersonaCard 
              icon={<FaPenNib />}
              title="The Scholar"
              desc="Bringing the precision of political science to the chaos of governance. A decade of academic excellence that shaped thousands of minds."
            />
            <PersonaCard 
              icon={<FaBalanceScale />}
              title="The Statesman"
              desc="Navigating the highest levels of national executive service with an unwavering compass of integrity and diplomatic foresight."
            />
            <PersonaCard 
              icon={<FaLightbulb />}
              title="The Reformer"
              desc="The architect of NILDS' transformation. A leader who digitizes, modernizes, and professionalizes the democratic machinery."
            />
          </div>
        </section>

        {/* 4. THE MASTERCLASS: WHAT THIS ARCHIVE REPRESENTS */}
        <motion.section 
          {...fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 border-y border-slate-800"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              An Archive for the <br /> <span className="text-blue-500">Mentorship of a Nation</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                <span className="text-white font-semibold italic">The Sulaiman Standard</span> is not a museum of the past; it is a blueprint for the future. It is a curated masterclass on how to move from "office-holding" to "institution-building."
              </p>
              <p>
                This digital home for his legacy captures the essence of <strong>Amana</strong>—stewardship. It documents how Professor Sulaiman bridged the divide between deep scholarship and practical, high-stakes democratic execution.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <StatBox icon={<FaUsers />} title="Institutional Governance" />
            <StatBox icon={<FaUniversity />} title="Legislative Capacity" />
            <StatBox icon={<FaScroll />} title="Academic Rigor" />
            <StatBox icon={<FaGlobeAfrica />} title="Inclusive Democracy" />
          </div>
        </motion.section>

        {/* 5. THE IMPACT: WHY IT MATTERS */}
        <section className="py-24">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-40 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-8">Serving the Future</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Future Policy Architects",
                  "Scholars of Governance",
                  "Development Partners",
                  "Civic Educators",
                  "Students of Leadership",
                  "Citizens of Democracy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION: CONTINUING THE LEGACY */}
        <motion.section {...fadeInUp} className="text-center pt-10">
          <p className="text-slate-400 mb-8 max-w-xl mx-auto italic">
            "His work stands as a blueprint for future leaders — demonstrating that integrity, research, and human investment can transform public institutions into enduring pillars of national development."
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl shadow-blue-500/10"
          >
            Explore the Living Legacy
          </Link>
        </motion.section>

      </div>
    </div>
  )
}

// --- SUB-COMPONENTS ---

function PersonaCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group">
      <div className="text-blue-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  )
}

function StatBox({ icon, title }: { icon: any, title: string }) {
  return (
    <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 text-center flex flex-col items-center justify-center gap-3">
      <div className="text-blue-500 text-2xl">{icon}</div>
      <span className="text-slate-200 text-xs font-bold uppercase tracking-wider">{title}</span>
    </div>
  )
}