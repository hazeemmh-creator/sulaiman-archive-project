"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaRobot, 
  FaDatabase, 
  FaPenNib, 
  FaLaptopCode, 
  FaMicrochip, 
  FaArrowLeft,
  FaLightbulb,
  FaCogs
} from "react-icons/fa"

export default function InnovationShowcasePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24">

      {/* 1. HERO: THE DIGITAL LEAP */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/library-innovation.jpg"
            alt="NILDS Innovation Showcase"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/20 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 text-cyan-400">
              <FaMicrochip className="text-sm" />
              <span className="font-bold tracking-[0.3em] text-[10px] uppercase">Legislative Tech 2.0</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              Innovation <span className="text-cyan-500">Showcase</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Driving the <span className="text-white font-bold">Paperless Parliament</span> initiative—a bold digital transformation led by <span className="text-white">Prof. Abubakar O. Sulaiman</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE AI REVOLUTION SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] relative group">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              <FaRobot className="text-5xl text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">AI-Integrated Lawmaking</h3>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                In November 2025, NILDS launched its first AI-driven legislative module. By scanning for legal redundancies and automating debate transcriptions, we are reducing human error in the drafting of national laws.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Automated Motion Tracking
                </li>
                <li className="flex items-center gap-3 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Intelligent Bill Analysis
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">Integrating Intelligence.</h2>
            <p className="text-slate-400">Under the Director General’s vision, innovation isn't just a tool; it's the core methodology. From training 700 staff in digital literacy to deploying DSpace repositories, the transition is absolute.</p>
            
          </div>
        </div>
      </section>

      {/* 3. CORE INNOVATION PILLARS (Grid) */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaDatabase />}
              title="Digital Repository"
              stat="12,000+ Books"
              desc="Full transition to DSpace, creating a virtual library for African lawmakers."
            />
            <FeatureCard 
              icon={<FaPenNib />}
              title="Education 5.0"
              stat="Drafting Tools"
              desc="Innovation-led drafting for Armed Forces and Police legal officers."
            />
            <FeatureCard 
              icon={<FaLaptopCode />}
              title="E-Governance"
              stat="700+ Staff"
              desc="Intensive 2-month digital literacy program for NASS administrative staff."
            />
          </div>
        </div>
      </section>

      {/* 4. DATA TABLE: THE STATUS REPORT */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Innovation Output Index</h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-cyan-500 text-[10px] uppercase tracking-[0.2em] font-black">
                <th className="p-6">Component</th>
                <th className="p-6">Milestone / 2025 Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              <tr className="hover:bg-cyan-500/[0.02] transition-colors">
                <td className="p-6 text-white font-bold">Institutional AI</td>
                <td className="p-6 text-sm text-slate-400">Live: Integrated into parliamentary training modules.</td>
              </tr>
              <tr className="hover:bg-cyan-500/[0.02] transition-colors">
                <td className="p-6 text-white font-bold">Paperless Workflow</td>
                <td className="p-6 text-sm text-slate-400">In Progress: Automated approvals and digitized NASS workflows.</td>
              </tr>
              <tr className="hover:bg-cyan-500/[0.02] transition-colors">
                <td className="p-6 text-white font-bold">Democratic Quiz</td>
                <td className="p-6 text-sm text-slate-400">Operational: Fully digitized preliminary rounds across 36 states.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-[2rem] overflow-hidden border border-slate-800 group">
            <Image src="/library-innovation.jpg" alt="Exhibition" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 px-8 pb-8 flex flex-end items-end">
              <p className="text-white font-bold text-sm">Showcasing the NILDS E-Library Terminal</p>
            </div>
          </div>
          <div className="relative h-80 rounded-[2rem] overflow-hidden border border-slate-800 group">
            <Image src="/library-exhibition.jpg" alt="Innovation" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 px-8 pb-8 flex flex-end items-end">
              <p className="text-white font-bold text-sm">2025 Innovation Lecture Series Highlights</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RETURN LINK */}
      <div className="text-center">
         <Link
            href="/library"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <FaArrowLeft /> Return to Knowledge Base
          </Link>
      </div>

    </div>
  )
}

function FeatureCard({ icon, title, stat, desc }: { icon: any, title: string, stat: string, desc: string }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all group">
      <div className="text-3xl text-slate-700 group-hover:text-cyan-500 transition-colors mb-6">{icon}</div>
      <div className="text-cyan-500 font-black text-xs uppercase tracking-widest mb-2">{stat}</div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}