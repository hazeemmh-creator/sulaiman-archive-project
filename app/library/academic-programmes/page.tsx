"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaScroll, 
  FaArrowLeft, 
  FaQuoteLeft,
  FaAward
} from "react-icons/fa"

export default function AcademicProgrammesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-20">

      {/* 1. HERO SECTION: THE LEGACY OF LEARNING */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/library-academics.jpg"
            alt="NILDS Academic Hall"
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full mb-6 text-blue-400">
              <FaAward />
              <span className="font-bold tracking-wider text-xs uppercase text-white">A Legacy of Intellectual Reform</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
              The <span className="text-blue-500 italic">Academic</span> <br /> 
              Revolution
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Under the stewardship of <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">Prof. Abubakar O. Sulaiman</span>, 
              NILDS has evolved into a global center of excellence for postgraduate legislative studies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE LEADERSHIP PILLAR (New Section) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3">
             <div className="relative group">
                <div className="absolute -inset-2 bg-blue-600 rounded-2xl opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
                  {/* Swap with an actual image of the Professor in Academic Gown or at a Podium */}
                  <Image 
                    src="/prof-academic-leadership.jpg" 
                    alt="Prof. Abubakar O. Sulaiman" 
                    fill 
                    className="object-cover"
                  />
                </div>
             </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-6">
            <FaQuoteLeft className="text-5xl text-blue-500/30" />
            <h2 className="text-3xl font-bold text-white">Institutionalizing Greatness</h2>
            <p className="text-slate-400 text-lg leading-relaxed italic">
              "Our goal was never just to teach; it was to build a workforce for democracy. We have transformed NILDS into an intellectual powerhouse where theory meets the practical realities of governance."
            </p>
            <div className="space-y-4 pt-4 text-slate-300">
              <p>
                Professor Sulaiman’s leadership saw the **NILDS–UNIBEN partnership** transition from a mere collaboration to a nationally recognized academic benchmark. 
                His relentless focus on NUC standards has ensured that every degree—from Legislative Studies to Constitutional Law—is a symbol of professional authority.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-slate-950 rounded-xl border-l-4 border-blue-500">
                  <span className="block text-white font-bold">8+ Masters Programmes</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Visionary Expansion</span>
                </div>
                <div className="p-4 bg-slate-950 rounded-xl border-l-4 border-blue-500">
                  <span className="block text-white font-bold">PhD Roadmap</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">The Next Frontier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMME GRID & ACADEMIC RECOGNITION */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-[0.2em] text-sm text-blue-400">The Curriculum of Reform</h2>
          <h3 className="text-4xl font-bold text-white">Postgraduate Credentials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DegreeCategory 
            title="Master’s Degrees" 
            icon={<FaGraduationCap />}
            color="blue"
            programs={[
              "Masters in Legislative Studies (MLS)",
              "Masters in Legislative Drafting (MLD)",
              "Masters in Parliamentary Administration (MPAD)",
              "Masters in Elections & Party Politics (MEPP)",
              "Masters in Constitutional Law & Development (MCLCD)"
            ]} 
          />

          <DegreeCategory 
            title="Postgraduate Diplomas" 
            icon={<FaScroll />}
            color="amber"
            programs={[
              "PGD in Parliamentary Administration (PGDPALAD)",
              "PGD in Legislative Drafting (PGDLDFT)",
              "PGD in Elections & Political Party Management (PGDEPP)"
            ]} 
          />
        </div>
      </section>

      {/* 4. ACADEMIC CALENDAR & MILESTONES */}
      <section className="bg-slate-900/30 border-y border-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <FaCalendarAlt className="text-3xl text-blue-500" />
            <h2 className="text-2xl font-bold text-white tracking-tight italic">The 2024/2025 Calendar of Excellence</h2>
          </div>

          <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-10">
            <TimelineItem date="Aug 12 - Jan 31" title="Admissions Cycle" desc="Vetted through the UNIBEN Waeup Portal" />
            <TimelineItem date="Feb 24, 2025" title="Academic Resumption" desc="Lectures commence at the NILDS Permanent Site" active />
            <TimelineItem date="Mar 19, 2025" title="The Matriculation" desc="Inducting the next generation of democratic leaders" />
            <TimelineItem date="Nov 29, 2025" title="The Convocation Ceremony" desc="Theme: 'Reforms for a Shared Prosperity'" highlight />
          </div>
        </div>
      </section>

      {/* 5. BACK LINK */}
      <div className="pt-20 text-center">
         <Link
            href="/library"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors uppercase text-xs font-black tracking-widest"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Archive Index
          </Link>
      </div>

    </div>
  )
}

// --- SUB COMPONENTS (Reuse the same as before) ---
function DegreeCategory({ title, icon, color, programs }: { title: string, icon: any, color: string, programs: string[] }) {
  const isBlue = color === 'blue';
  return (
    <div className={`p-8 rounded-3xl border-t-8 shadow-2xl ${isBlue ? 'bg-slate-900/80 border-blue-600' : 'bg-slate-900/80 border-amber-500'}`}>
      <div className={`text-4xl mb-6 ${isBlue ? 'text-blue-500' : 'text-amber-500'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{title}</h3>
      <ul className="space-y-4">
        {programs.map((prog, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-400 text-sm border-b border-slate-800 pb-3 last:border-0">
            <FaCheckCircle className={`mt-1 flex-shrink-0 ${isBlue ? 'text-blue-500' : 'text-amber-500'}`} />
            {prog}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TimelineItem({ date, title, desc, active = false, highlight = false }: { date: string, title: string, desc: string, active?: boolean, highlight?: boolean }) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      <div className={`absolute -left-[5px] md:-left-[9px] top-1 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-slate-950 shadow-lg ${
        highlight ? 'bg-amber-500 shadow-amber-500/50' : active ? 'bg-blue-500 shadow-blue-500/50' : 'bg-slate-700'
      }`} />
      <div className={`transition-all ${active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
        <span className={`text-xs font-black uppercase tracking-widest ${highlight ? 'text-amber-400' : 'text-blue-400'}`}>
          {date}
        </span>
        <h4 className={`text-lg font-bold text-white mt-1`}>
          {title}
        </h4>
        <p className="text-slate-400 text-sm font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}