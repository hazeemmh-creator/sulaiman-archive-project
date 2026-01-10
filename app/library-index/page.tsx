"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaFileAlt, FaBook, FaMicrophone, FaSearch, FaFilter, FaArrowRight } from "react-icons/fa"

export default function DigitalLibraryIndex() {
  const [filter, setFilter] = useState("All")

  const resources = [
    {
      title: "Women in Governance Scientific Reader",
      category: "Publication",
      icon: <FaBook />,
      description: "An 836-page landmark publication advancing gender inclusion and democratic representation.",
      year: "2025",
      link: "/library/women-in-governance",
      featured: true,
    },
    {
      title: "National Survey on Elite Consensus",
      category: "Research",
      icon: <FaFileAlt />,
      description: "A groundbreaking national study shaping reform dialogue and elite agreement on national priorities.",
      year: "2025",
      link: "/library/national-elite-survey",
      featured: true,
    },
    {
      title: "Democracy Radio Broadcast Archive",
      category: "Media",
      icon: <FaMicrophone />,
      description: "A curated collection of civic education broadcasts aired nationwide on 104.9 FM.",
      year: "2020–2025",
      link: "/library/democracy-radio-workshop",
      featured: false,
    },
    {
      title: "Legislative Security Reform Briefs",
      category: "Research",
      icon: <FaFileAlt />,
      description: "Evidence-based briefs from LeCeSA on national and regional security sector reform.",
      year: "2023–2025",
      link: "/library/security-analysis-centre",
      featured: false,
    },
    {
      title: "NILDS–UNIBEN Postgraduate Theses",
      category: "Academic",
      icon: <FaBook />,
      description: "A growing repository of postgraduate research focused on governance and legislative studies.",
      year: "2015–2025",
      link: "/library/uniben-partnership",
      featured: false,
    },
  ]

  const categories = ["All", "Publication", "Research", "Media", "Academic"]
  const filteredResources = filter === "All" ? resources : resources.filter(r => r.category === filter)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pb-20">
      
      {/* HEADER SECTION */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-transparent border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            The Knowledge <span className="text-blue-500 font-serif italic text-4xl md:text-5xl">Vault</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated master-repository of intellectual contributions and institutional reforms 
            under <span className="text-blue-400 font-semibold">The Sulaiman Standard</span>.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-20 z-30 bg-slate-950/80 backdrop-blur-md border-y border-slate-800 py-4 mb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                : "bg-slate-900 text-slate-400 hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredResources.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group"
              >
                <Link href={item.link}>
                  <div className={`relative h-full p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
                    item.featured 
                    ? "bg-gradient-to-br from-slate-900 to-blue-900/20 border-blue-500/30 ring-1 ring-blue-500/20" 
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-600"
                  }`}>
                    
                    {/* Featured Glow */}
                    {item.featured && (
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
                    )}

                    <div className="flex justify-between items-start mb-6">
                      <div className="text-blue-400 text-3xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      {item.featured && (
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-600 px-3 py-1 rounded-full text-white">
                          Landmark
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/50">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {item.category} • {item.year}
                      </span>
                      <FaArrowRight className="text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
