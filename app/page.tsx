"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaUniversity, FaGavel, FaUsers, FaMicrophone, FaGlobe, FaBookOpen, FaAward } from "react-icons/fa"

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* 1. HERO SECTION: THE VISIONARY (UNCHANGED) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-background.jpg" 
            alt="Prof. Abubakar O. Sulaiman"
            fill
            className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase text-xs mb-4">
              The Digital Legacy Archive
            </h2>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Honouring <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">
                Prof. Abubakar O. Sulaiman
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-10">
              Academic Architect. Legislative Reformer. Institutional Builder. <br />
              Defining the <span className="text-white italic">"Amana"</span> standard in Nigerian governance.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/timeline" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all flex items-center gap-2 group">
                Explore The Journey <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all">
                The Philosophy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS (NARRATIVE PATHS) (UNCHANGED) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PillarCard 
            icon={<FaUniversity />}
            title="The Vault"
            desc="Access intellectual capital, policy papers, and the publications that shaped legislative thought."
            link="/library"
          />
          <PillarCard 
            icon={<FaGavel />}
            title="Impact Pillars"
            desc="Explore transformative reforms in security, gender representation, and institutional building."
            link="/themes/visionary-reformer"
          />
          <PillarCard 
            icon={<FaUsers />}
            title="Voices of Amana"
            desc="Lived experiences and testimonials from those touched by a legacy of compassion and excellence."
            link="/testimonials"
          />
        </div>
      </section>

      {/* 3. FEATURED LEGACY (Radio & LeCeSA) (UNCHANGED) */}
      <section className="bg-slate-900/30 py-24 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-500 font-bold uppercase text-xs tracking-widest">Institutional Milestone</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">Bridging Democracy through Media & Research</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              From the launch of <span className="text-white font-bold">Democracy Radio 104.9 FM</span> to the establishment of the <span className="text-white font-bold">Security Analysis Centre (LeCeSA)</span>, 
              Prof. Sulaiman's tenure created permanent structures for civic enlightenment.
            </p>
            <div className="flex gap-4">
               <Link href="/library/democracy-radio-workshop" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors">
                 <FaMicrophone /> Radio Archive
               </Link>
               <span className="text-slate-800">|</span>
               <Link href="/library/security-analysis-centre" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors">
                 <FaGavel /> LeCeSA Hub
               </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-800">
            <Image 
              src="/1library-radio.jpg" 
              alt="Legacy Projects" 
              fill 
              className="object-cover opacity-60"
            />
          </div>
        </div>
      </section>

      {/* 4. RECENT ENGAGEMENTS (NEW ADDITION - Placed at Bottom) */}
      {/* Designed to complement, not compete with, the Legacy section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-10 bg-blue-600"></div>
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              Current Intelligence & Global Engagements (Q1 2026)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Oxford */}
            <Link href="/news/oxford-2026" className="group block">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                <Image 
                  src="/news/oxford-group.jpg" 
                  alt="Oxford University" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest mb-3">
                 <FaGlobe /> GLOBAL • UK
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Oxford Strategy Session</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Integrating world-class governance at Saïd Business School.</p>
            </Link>

            {/* Federalism */}
            <Link href="/news/federalism-lecture" className="group block">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                <Image 
                  src="/news/federalism-lecture.jpg" 
                  alt="Federalism Lecture" 
                  fill 
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-widest mb-3">
                 <FaBookOpen /> NATIONAL • ABUJA
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">70 Years of Federalism</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Interrogating Nigeria's structural integrity with Prof. Rotimi Suberu.</p>
            </Link>

            {/* CAEEP */}
            <Link href="/news/caeep-2026" className="group block">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                <Image 
                  src="/news/caeep-2026.jpg" 
                  alt="CAEEP 2026" 
                  fill 
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest mb-3">
                 <FaAward /> INSTITUTIONAL • TRAINING
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Executive Education 2026</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Applications open for the 2026 Legislative Certification.</p>
            </Link>

          </div>
      </section>

    </div>
  )
}

// Helper Component (UNCHANGED)
function PillarCard({ icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) {
  return (
    <Link href={link} className="group p-10 bg-slate-950 border border-slate-900 rounded-[2.5rem] hover:border-blue-500/50 transition-all block">
      <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter uppercase">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
        Enter Path <FaArrowRight />
      </div>
    </Link>
  )
}