"use client"
import { motion } from "framer-motion"
import { FaGraduationCap, FaUserTie } from "react-icons/fa"

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* HEADER SECTION */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter italic">
              THE LIFE OF <span className="text-blue-600 uppercase">AMANA</span>
            </h1>
            
            {/* The Translation 'Badge' of Honor */}
            <div className="flex items-center gap-4 text-xl font-serif text-slate-500">
              <span className="text-blue-800/80 font-bold" style={{ fontFamily: 'Times New Roman' }}>أمانة</span>
              <span className="w-12 h-[1px] bg-slate-800"></span>
              <span className="italic tracking-widest text-sm uppercase">The Sacred Trust</span>
            </div>
          </div>

          <p className="text-blue-400 uppercase text-xs font-bold tracking-[0.4em] mb-12">
            Prof. Abubakar Olanrewaju Sulaiman
          </p>
          
          <div className="prose prose-invert prose-blue max-w-none space-y-10 text-xl leading-relaxed font-light">
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-white first-letter:mr-4 first-letter:float-left first-letter:leading-none">
              Born into a lineage defined by integrity and service, Prof. Abubakar Olanrewaju Sulaiman has spent decades at the 
              forefront of Nigeria’s intellectual and political evolution. His journey is one of bridge-building—connecting 
              the rigorous world of academia with the complex realities of national governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
              <div className="p-10 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 transition-colors group">
                <FaGraduationCap className="text-blue-500 text-4xl mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-2xl mb-3 uppercase tracking-tight">The Academic</h3>
                <p className="text-base text-slate-400 leading-relaxed">
                  A Professor of Political Science with a Ph.D. from the University of Abuja, specialized in International Relations 
                  and the dynamics of elite consensus.
                </p>
              </div>
              <div className="p-10 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 transition-colors group">
                <FaUserTie className="text-blue-500 text-4xl mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-2xl mb-3 uppercase tracking-tight">The Statesman</h3>
                <p className="text-base text-slate-400 leading-relaxed">
                  Serving as Minister of National Planning and currently as DG of NILDS, he has translated scholarly theories 
                  into transformative national policies.
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-black text-white mt-20 mb-8 tracking-tight uppercase italic border-l-4 border-blue-500 pl-6">
              Institutional Legacy
            </h2>
            <p className="text-slate-300">
              As the Director-General of the National Institute for Legislative and Democratic Studies (NILDS), he has 
              spearheaded a digital and physical revolution. From the commissioning of the Institute’s permanent site 
              to the launch of the pioneering Democracy Radio, his leadership serves as a blueprint for institutional 
              excellence in West Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}