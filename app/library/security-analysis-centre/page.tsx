"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaShieldAlt, 
  FaSearch, 
  FaFileContract, 
  FaGlobeAfrica, 
  FaArrowLeft,
  FaChartBar,
  FaBalanceScale,
  FaUserShield
} from "react-icons/fa"

export default function LeCeSAPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24">

      {/* 1. HERO: THE SECURITY THINK-TANK */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/library-security.jpg" 
            alt="LeCeSA Security Hub"
            fill
            className="object-cover opacity-20 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 text-blue-400">
              <FaShieldAlt className="text-sm" />
              <span className="font-bold tracking-[0.3em] text-[10px] uppercase">Policy & Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              LeCe<span className="text-blue-600">SA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The Legislative Centre for Security Analysis: Empowering the National Assembly with <span className="text-white font-bold">Independent Oversight</span> and Security Research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE MISSION: DATA-DRIVEN OVERSIGHT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Evidence-Based <br /> <span className="text-blue-600">National Security.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Under the leadership of <span className="text-white">Prof. Abubakar O. Sulaiman</span>, LeCeSA was revitalized to serve as a bridge between legislative power and technical security expertise. The centre focuses on critical areas:
            </p>

            <div className="space-y-4">
               <SkillBar label="Defense Budget Oversight" percentage="95%" />
               <SkillBar label="Conflict Mapping & Analysis" percentage="88%" />
               <SkillBar label="Legislative Policy Drafting" percentage="92%" />
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem]">
              <FaGlobeAfrica className="text-6xl text-blue-500 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Mandate</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                LeCeSA provides real-time analysis on the security sector, ensuring that lawmakers have the data needed to exercise their constitutional power of oversight over Nigeria’s security agencies.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Terrorism Trends
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Border Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE GRID */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaSearch />}
              title="Intelligence Analysis"
              desc="Daily monitoring of national security threats and legislative implications."
            />
            <ServiceCard 
              icon={<FaFileContract />}
              title="Bill Review"
              desc="Technical vetting of security-related bills before they reach the floor."
            />
            <ServiceCard 
              icon={<FaUserShield />}
              title="Oversight Training"
              desc="Capacity building for members of Senate and House Committees on Security."
            />
          </div>
        </div>
      </section>

      {/* 4. THE DOCUMENTATION HUB */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Recent Research Outputs</h2>
          <p className="text-slate-500 mt-2">Classified and Public-facing Policy Briefs</p>
        </div>

        <div className="space-y-4">
           <ReportLink title="2024 Security Sector Oversight Manual" date="Oct 2024" />
           <ReportLink title="Legislative Framework for Cyber-Security" date="Aug 2024" />
           <ReportLink title="Border Management & Regional Stability Paper" date="June 2024" />
        </div>
      </section>

      {/* 5. RETURN NAVIGATION */}
      <div className="text-center py-10">
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

// --- SUB COMPONENTS ---

function SkillBar({ label, percentage }: { label: string, percentage: string }) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-bold text-white uppercase tracking-wider">{label}</span>
        <span className="text-xs text-blue-500">{percentage}</span>
      </div>
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: percentage }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-blue-600 h-full" 
        />
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all group">
      <div className="text-3xl text-slate-700 group-hover:text-blue-500 transition-colors mb-6">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function ReportLink({ title, date }: { title: string, date: string }) {
  return (
    <div className="flex items-center justify-between p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <FaChartBar className="text-blue-500" />
        <span className="text-white font-medium group-hover:text-blue-400">{title}</span>
      </div>
      <span className="text-xs text-slate-500 font-mono">{date}</span>
    </div>
  )
}