"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaFemale, FaHandsHelping, FaSeedling, FaUsers, FaArrowLeft, FaBullhorn } from "react-icons/fa"

export default function InclusiveLeaderPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-teal-500/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Impact Pillar III
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Inclusive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Leader</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              "Democracy is incomplete if it leaves behind the voices of our mothers, our daughters, and our youth. Representation is not a privilege; it is a right."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/theme-inclusive-hero.jpg" 
              alt="Inclusive Leadership" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* THE INCLUSION MATRIX */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        
        {/* PILLAR 1: GENDER ADVOCACY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500"><FaFemale className="text-3xl" /></div>
              <h2 className="text-3xl font-bold text-white">Champion of Women</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              At the <strong>2025 Africa Women Conference</strong>, he delivered a keynote demanding the passage of the 
              <em> Special Seats for Women Bill</em>. His advocacy is not just rhetorical; he commissioned the 
              landmark scientific reader on Women in Governance to provide the data needed to force legislative change.
            </p>
            <div className="p-6 bg-slate-900 border-l-4 border-pink-500 rounded-r-xl">
              <p className="text-slate-300 italic">"Africa's development is driven by women who blend cultural heritage with modern innovation."</p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800">
             <Image src="/theme-inclusive-gender.jpg" alt="Gender Advocacy" fill className="object-cover" />
          </div>
        </div>

        {/* PILLAR 2: YOUTH EMPOWERMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800">
             <Image src="/theme-inclusive-youth1.jpg" alt="Youth Empowerment" fill className="object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-teal-500/10 rounded-xl text-teal-500"><FaBullhorn className="text-3xl" /></div>
              <h2 className="text-3xl font-bold text-white">Voice of the Youth</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Through the <strong>"Raise Life Class"</strong> and the National Quiz Competition, he has created platforms where 
              young Nigerians can speak directly to power. He believes youth leadership is not for "tomorrow"—it starts today.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300"><FaUsers className="text-teal-500" /> Mentorship of 5,000+ Students</li>
              <li className="flex items-center gap-3 text-slate-300"><FaHandsHelping className="text-teal-500" /> Civic Responsibility Training</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 3: COMMUNITY IMPACT */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-10 md:p-16 text-center">
          <FaSeedling className="text-6xl text-emerald-500 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-6">Grassroots & The Amana Foundation</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Leadership must be felt at home. Through the <strong>#Farm2Feed</strong> initiative and the Amana Foundation, 
            he supports education, food security, and community empowerment for the most vulnerable.
          </p>
          <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
             <StatBox label="Beneficiaries" value="2,000+" />
             <StatBox label="Scholarships" value="Annual" />
             <StatBox label="Food Security" value="#Farm2Feed" />
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <div className="text-center pb-10">
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

function StatBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-black/40 border border-slate-800 p-6 rounded-2xl">
      <div className="text-white font-bold text-2xl">{value}</div>
      <div className="text-emerald-500 text-xs font-black uppercase tracking-widest">{label}</div>
    </div>
  )
}