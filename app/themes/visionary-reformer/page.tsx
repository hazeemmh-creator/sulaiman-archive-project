"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaLandmark, FaChartLine, FaGavel, FaLightbulb, FaArrowLeft } from "react-icons/fa"

export default function VisionaryReformerPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-blue-500/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Impact Pillar I
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Visionary <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Reformer</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              "True reform is not just about changing policies; it is about building institutions that can outlive their builders."
            </p>
          </motion.div>

          {/* Hero Image Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/theme-visionary-hero (2).jpg" 
              alt="Visionary Reformer" 
              fill 
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* THE STRATEGIC MATRIX (The Upgrade) */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1: National Planning */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaChartLine className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Architect of National Strategy</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              As <strong>Minister of National Planning (2014-2015)</strong>, he brought academic rigor to the Federal Executive Council. 
              His tenure was marked by a data-driven approach, ensuring government policies were rooted in statistical reality.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 font-mono border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Deputy Chairman, National Planning Commission</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Chair, Transition Tech Sub-Committee (2015)</li>
            </ul>
          </motion.div>

          {/* CARD 2: The NILDS Transformation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaLandmark className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Institutional Builder</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              At <strong>NILDS (2019-Present)</strong>, he ended years of stagnation by completing the permanent site—a monument to legislative capacity.
              He transformed the institute into a world-class hub for democratic research.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 font-mono border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Commissioned Permanent Site (2023)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Established Security Analysis Centre (LeCeSA)</li>
            </ul>
          </motion.div>

          {/* CARD 3: Elite Consensus Theory */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaLightbulb className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Theory of Consensus</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              A scholar at heart, his reform agenda is deeply influenced by his academic work on <strong>Elite Consensus</strong>. 
              He argues that sustainable democracy in Nigeria requires a unified agreement among the political class on the 
              fundamental rules of governance.
            </p>
          </motion.div>

          {/* CARD 4: Legislative Capacity */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaGavel className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Legislative Capacity</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Recognizing that a strong parliament is the bedrock of democracy, he launched massive capacity-building initiatives, 
              including the <strong>NILDS Democracy Radio</strong> and digital training for over 700 National Assembly staff.
            </p>
          </motion.div>

        </div>
      </section>

      {/* QUOTE FOOTER */}
      <section className="border-t border-slate-900 pt-20 pb-10 text-center px-6">
        <p className="text-blue-500 font-black tracking-widest uppercase text-xs mb-6">The Amana Philosophy</p>
        <h2 className="text-3xl md:text-5xl font-serif italic text-slate-500 max-w-4xl mx-auto leading-tight mb-12">
          "We cannot build a modern nation with obsolete institutions. Reform is the bridge between our potential and our reality."
        </h2>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <FaArrowLeft /> Return Home
        </Link>
      </section>

    </div>
  )
}