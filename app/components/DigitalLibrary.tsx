"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaBook, FaArrowRight, FaLightbulb, FaMicrochip } from "react-icons/fa"

export default function DigitalLibrary() {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl transition-all duration-300 hover:border-blue-500/50"
    >
      {/* Decorative Glow Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />

      <div className="relative z-10">
        {/* Icon with a more "Institutional" look */}
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <FaBook />
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
          The Intellectual <span className="text-blue-400 text-sm block uppercase tracking-widest mt-1">Repository</span>
        </h2>

        <p className="text-slate-400 text-base leading-relaxed mb-8">
          A comprehensive digital archive of publications, research, and policy outputs produced under{" "}
          <span className="text-blue-300 font-semibold italic">The Sulaiman Standard</span>. 
          Access landmark studies, civic education blueprints, and broadcast archives.
        </p>

        {/* Feature Tags - Makes it look more detailed */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter bg-slate-800 text-slate-400 px-2 py-1 rounded">
            <FaLightbulb className="text-amber-400" /> Research
          </span>
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter bg-slate-800 text-slate-400 px-2 py-1 rounded">
            <FaMicrochip className="text-blue-400" /> Digital Policy
          </span>
        </div>

        <Link
          href="/library-index"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
        >
          Enter Library <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}