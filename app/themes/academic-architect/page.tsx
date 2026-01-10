"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaUniversity, 
  FaBookReader, 
  FaChalkboardTeacher, 
  FaScroll, 
  FaArrowLeft, 
  FaGraduationCap 
} from "react-icons/fa"

export default function AcademicArchitectPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-indigo-500/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Impact Pillar II
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Architect</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              "The classroom is not just a place of learning; it is the incubator of national strategy. Scholarship without impact is merely theory."
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/theme-academic-hero.jpg" 
              alt="The Academic Architect" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* THE SCHOLARSHIP MATRIX */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1: The University of Abuja Legacy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-indigo-500 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaChalkboardTeacher className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Two Decades of Excellence</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Rising to the rank of <strong>Full Professor of Political Science</strong> at the University of Abuja, his classroom became a training ground for future diplomats and policymakers.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 font-mono border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Director of Academic Planning (2011)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Deputy Director, Remedial Studies (2008)</li>
            </ul>
          </motion.div>

          {/* CARD 2: The UNIBEN Alliance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-indigo-500 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaUniversity className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The UNIBEN Partnership</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              He revolutionized the <strong>NILDS-UNIBEN Postgraduate Programme</strong>, bridging the gap between the legislature and academia. This partnership produces technical experts specifically trained in legislative drafting.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 font-mono border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> 9th Convocation Ceremony (2025)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Professionalizing Governance</li>
            </ul>
          </motion.div>

          {/* CARD 3: Mentorship by the Numbers */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-indigo-500 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaGraduationCap className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Building Intellectual Capital</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              His legacy is best measured by the scholars he has raised. His mentorship has shaped the academic landscape of Nigeria.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div>
                <span className="text-3xl font-black text-white block">300+</span>
                <span className="text-xs text-indigo-400 uppercase tracking-wider">Undergraduates</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white block">33</span>
                <span className="text-xs text-indigo-400 uppercase tracking-wider">Postgraduates</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Research Powerhouse */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-10 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-colors"
          >
            <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-indigo-500 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xl">
              <FaBookReader className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Evidence-Based Policy</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Under his watch, NILDS transformed into a <strong>Research Powerhouse</strong>. He prioritized national surveys and policy analysis to ensure that every bill passed is backed by rigorous data.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 font-mono border-t border-slate-800 pt-6">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Patron, NILDS Journal of Democratic Studies</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* QUOTE FOOTER */}
      <section className="border-t border-slate-900 pt-20 pb-10 text-center px-6">
        <p className="text-indigo-500 font-black tracking-widest uppercase text-xs mb-6">The Scholar's Creed</p>
        <h2 className="text-3xl md:text-5xl font-serif italic text-slate-500 max-w-4xl mx-auto leading-tight mb-12">
          "We do not teach to fill minds with facts; we teach to spark the flames of inquiry that will light the path of our nation."
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