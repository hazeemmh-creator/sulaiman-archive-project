"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import {
  FaUsers,
  FaBook,
  FaBroadcastTower,
  FaUniversity,
  FaGlobeAfrica,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaLandmark,
  FaGavel,
  FaAward
} from "react-icons/fa"

// --- UTILITY: ANIMATED COUNTER ---
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} className="tabular-nums" />
}

// --- DATASET: METRICS ---
const metrics = [
  {
    id: 1,
    value: 700,
    suffix: "+",
    label: "Legislative Staff Trained",
    sub: "Institutional Renewal",
    icon: <FaGavel />,
    color: "text-blue-400",
    glow: "shadow-blue-500/20"
  },
  {
    id: 2,
    value: 36,
    suffix: " States + FCT",
    label: "National Footprint",
    sub: "National Coverage",
    icon: <FaGlobeAfrica />,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20"
  },
  {
    id: 3,
    value: 800,
    suffix: "+",
    label: "Research Publications",
    sub: "Intellectual Capital",
    icon: <FaBook />,
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20"
  },
  {
    id: 4,
    value: 5000,
    suffix: "+",
    label: "Mentees & Students",
    sub: "Future Leaders",
    icon: <FaAward />,
    color: "text-purple-400",
    glow: "shadow-purple-500/20"
  },
]

// --- DATASET: HIGHLIGHTS (UPDATED WITH LINKS) ---
const highlights = [
  {
    title: "LeCeSA Establishment",
    category: "Security & Intelligence",
    icon: <FaLandmark />,
    description: "Africa’s premier legislative security analysis centre. Transitioning from reactive policy to intelligence-led governance for regional stability.",
    stat: "Continental First",
    href: "/blog/security-analysis-lecesa", // 🔗 LINK ADDED
  },
  {
    title: "Democracy Radio 104.9FM",
    category: "Media & Civic Education",
    icon: <FaBroadcastTower />,
    description: "The first of its kind in West Africa. Operationalizing a 24/7 frequency to translate parliamentary complexity into citizen empowerment.",
    stat: "100% Operational",
    href: "/blog/democracy-radio-launch", // 🔗 LINK ADDED
  },
  {
    title: "CAEEP Initiative",
    category: "Grassroots Empowerment",
    icon: <FaHandshake />,
    description: "The Community Action for Electoral Empowerment Programme. Moving democracy from the halls of power to the heart of the community.",
    stat: "Grassroots Focus",
    href: "/initiatives/caeep", // 🔗 LINK EXISTING
  },
  {
    title: "UNIBEN Partnership",
    category: "Academic Architecture",
    icon: <FaUniversity />,
    description: "A landmark decade-long postgraduate alliance producing the next generation of legislative drafters and policy architects.",
    stat: "10th Convocation",
    href: "/themes/academic-architect", // 🔗 LINK EXISTING
  },
]

export default function ImpactDashboard() {
  return (
    <div className="min-h-screen bg-black text-slate-200 py-24 px-6 relative overflow-hidden">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
              The Quantitative Legacy
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter italic uppercase">
              Impact <span className="text-blue-600">Radius</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Tracking the physical and intellectual transformation of democratic institutions 
              under <span className="text-white border-b border-blue-900">The Sulaiman Standard</span>.
            </p>
          </motion.div>
        </div>

        {/* METRICS HUD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {metrics.map((metric, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={metric.id}
              className={`bg-slate-900/20 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 ${metric.glow}`}
            >
              <div className={`absolute -top-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-8xl ${metric.color}`}>
                {metric.icon}
              </div>
              <div className="relative z-10">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                  {metric.sub}
                </p>
                <div className={`text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter ${metric.color}`}>
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-slate-400 text-sm font-medium italic">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HIGHLIGHTS SECTION */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-12">
          <div>
             <h2 className="text-3xl font-bold text-white uppercase tracking-tighter italic">Strategic Benchmarks</h2>
             <p className="text-slate-500 text-sm">Qualitative milestones in institutional growth.</p>
          </div>
          <div className="px-6 py-2 bg-slate-900/50 rounded-full border border-slate-800 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
            Verified Performance Data
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              key={index}
              className="group"
            >
              {item.href ? (
                 <Link href={item.href} className="block h-full">
                    <HighlightCard item={item} isLink />
                 </Link>
              ) : (
                <HighlightCard item={item} />
              )}
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-32 text-center border-t border-slate-900 pt-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-4 text-slate-500 hover:text-white transition-all duration-300"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em]">← Return to Home Portal</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function HighlightCard({ item, isLink = false }: { item: any, isLink?: boolean }) {
  return (
    <div className={`h-full bg-slate-900/10 backdrop-blur-md p-10 rounded-[3rem] border border-slate-900 relative overflow-hidden transition-all duration-700 ${isLink ? 'hover:border-blue-500/40 hover:bg-blue-600/[0.02]' : ''}`}>
      
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-500 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
          {item.icon}
        </div>
        <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-500/20">
          {item.stat}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
        {item.title}
      </h3>
      
      <p className="text-slate-500 leading-relaxed mb-8 text-lg font-light italic">
        "{item.description}"
      </p>

      {isLink && (
        <div className="flex items-center text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
          Access Documentation <FaArrowRight className="ml-2 text-xs" />
        </div>
      )}
    </div>
  )
}