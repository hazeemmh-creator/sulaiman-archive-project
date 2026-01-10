"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaAward,
  FaBuilding,
  FaUsers,
  FaBroadcastTower,
  FaBookOpen,
  FaUniversity,
  FaGlobeAfrica,
  FaHandshake,
  FaArrowRight,
  FaArrowLeft,
  FaFilter,
  FaCrown,
  FaScroll
} from "react-icons/fa"

// --- 1. DATA: MILESTONES (Updated Links to /blog/) ---
const milestones = [
  {
    id: "nilds-site",
    title: "Commissioning of NILDS Permanent Site",
    category: "Infrastructure",
    icon: <FaBuilding />,
    description: "A landmark achievement in institutional permanence, providing a world-class hub for legislative learning.",
    year: "2023",
    href: "/library/nilds-permanent-site", // Existing working link
    featured: true, 
  },
  {
    id: "democracy-radio",
    title: "Launch of Democracy Radio 104.9 FM",
    category: "Media",
    icon: <FaBroadcastTower />,
    description: "Nigeria’s first democracy-focused broadcast outlet, bridging the gap between parliament and the people.",
    year: "2020",
    href: "/blog/democracy-radio-launch", // ✅ Pointing to Blog
  },
  {
    id: "lecesa",
    title: "Establishment of LeCeSA",
    category: "Policy",
    icon: <FaUsers />,
    description: "Africa’s first Legislative Centre for Security Analysis, driving evidence-based security reforms.",
    year: "2023",
    href: "/blog/security-analysis-lecesa", // ✅ Pointing to Blog
  },
  {
    id: "women-governance",
    title: "Women in Governance Scientific Reader",
    category: "Academic",
    icon: <FaBookOpen />,
    description: "An 800+ page magnum opus advancing gender inclusion and democratic representation.",
    year: "2025",
    href: "/blog/women-in-governance", // ✅ Pointing to Blog
  },
  {
    id: "legis-conf",
    title: "National Legislative Conference",
    category: "Policy",
    icon: <FaAward />,
    description: "A flagship policy dialogue platform focused on reform, clarity, and institutional strengthening.",
    year: "2024",
    href: "/blog/national-legislative-conference", // ✅ Pointing to Blog
  },
  {
    id: "digital-trans",
    title: "Digital Transformation of NASS",
    category: "Infrastructure",
    icon: <FaGlobeAfrica />,
    description: "Training 700+ staff and launching the 'Paperless Parliament' initiative to modernize operations.",
    year: "2025",
    href: "/blog/digital-transformation", // ✅ Pointing to Blog
    featured: true,
  },
  {
    id: "reappointment",
    title: "Reappointment as DG, NILDS",
    category: "Leadership",
    icon: <FaCrown />,
    description: "A testament to leadership, trust, and a mandate to consolidate institutional excellence.",
    year: "2023",
    href: "/blog/reappointment-dg", // ✅ Pointing to Blog
  },
  {
    id: "convocation",
    title: "9th NILDS–UNIBEN Convocation",
    category: "Academic",
    icon: <FaUniversity />,
    description: "Celebrating a decade of academic partnership and substantial human capital development.",
    year: "2025",
    href: "/blog/uniben-convocation", // ✅ Pointing to Blog
  },
  {
    id: "caeep",
    title: "Launch of CAEEP",
    category: "Civic",
    icon: <FaHandshake />,
    description: "Advancing electoral empowerment and democratic literacy through community engagement.",
    year: "2025",
    href: "/initiatives/caeep", // Keep this one pointing to its special page
  },
]

// --- 2. DATA: GALLERY ---
const gallery = [
  { src: "/legacy-pres1.jpg", caption: "With Deputy Senate President, Sen. Barau Jibrin,CON" },
  { src: "/legacy-uniben.jpg", caption: "University of Benin Convocation" },
  { src: "/legacy-nass.jpg", caption: "Addressing the National Assembly" },
  { src: "/legacy-award.jpg", caption: "Receiving the NPOM Award" }
]

const categories = ["All", "Infrastructure", "Policy", "Academic", "Media", "Leadership", "Civic"]

export default function LegacyWall() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredMilestones =
    activeCategory === "All"
      ? milestones
      : milestones.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-amber-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 border-b border-slate-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-900/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <FaCrown className="text-sm" /> Hall of Fame
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
              The Legacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600">Wall</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              A curation of honors, historic moments, and the seal of excellence that defines the career of <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER TABS --- */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 mr-4 text-amber-500/60 text-sm font-bold uppercase tracking-widest">
             <FaFilter /> Filter Archives:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-amber-500 text-black border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105"
                  : "bg-transparent text-slate-500 border-slate-800 hover:border-amber-500/50 hover:text-amber-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- MILESTONES GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMilestones.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`${
                  item.featured && activeCategory === "All" ? "md:col-span-2" : ""
                } group relative`}
              >
                <Link href={item.href} className="block h-full">
                  <div className="h-full bg-gradient-to-br from-slate-900 to-black border border-slate-800 p-8 rounded-[2rem] hover:border-amber-500/40 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-900/10">
                    
                    <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header */}
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="p-3 bg-slate-800/50 rounded-xl text-amber-500 text-2xl border border-slate-700 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-all duration-500">
                        {item.icon}
                      </div>
                      <span className="text-slate-500 font-mono text-xs font-bold border border-slate-800 px-3 py-1 rounded-full group-hover:text-amber-500 group-hover:border-amber-500/30 transition-colors">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm mb-6 font-light">
                        {item.description}
                      </p>
                      
                      {/* Tag */}
                      <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-md bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-all">
                        {item.category}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-300 border border-slate-700 group-hover:border-amber-400">
                       <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- CORRIDOR OF HISTORY --- */}
      <section className="mt-32 border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FaScroll className="text-4xl text-amber-700 mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl font-bold text-white mb-2">The Corridor of History</h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Moments that shaped the narrative</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((photo, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900"
              >
                <Image 
                  src={photo.src} 
                  alt={photo.caption} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-1 w-8 bg-amber-500 mb-3 rounded-full" />
                  <p className="text-white font-bold text-sm leading-tight">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center pt-20 px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors text-xs font-black uppercase tracking-[0.2em]"
        >
          <FaArrowLeft /> Return to Home Portal
        </Link>
      </div>

    </div>
  )
}