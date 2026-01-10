"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaMicrophoneAlt, FaBullhorn, FaPodcast, FaUserFriends, FaArrowLeft, FaQuoteRight } from "react-icons/fa"

export default function SpeechesPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-red-500/30">
      
      {/* HERO SECTION - THE PODIUM */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-600 rounded-full text-white animate-pulse">
                <FaMicrophoneAlt />
              </div>
              <span className="text-red-500 font-bold tracking-[0.3em] text-xs uppercase">
                The Public Voice
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Speeches & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Civic Engagement</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8 border-l-4 border-red-900 pl-6">
              "The power of a leader is not just in the laws they draft, but in the values they communicate to the people."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-96 w-full rounded-[2rem] overflow-hidden border border-slate-800"
          >
            {/* Using the image you had in the old code */}
            <Image 
              src="/speeches-hero.jpg" 
              alt="Prof. Sulaiman Speaking" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
               <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                 <p className="text-white font-bold text-sm">Keynote Address</p>
                 <p className="text-slate-400 text-xs uppercase tracking-widest">National Assembly, 2024</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE ADVOCACY GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        
        {/* SECTION 1: GENDER & INCLUSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <FaQuoteRight className="text-4xl text-slate-800 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">The Case for Inclusion</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              At the <strong>2025 Africa Women Conference</strong>, he didn't just speak; he challenged the status quo. 
              Presenting his book <em>Women Representation in Governance</em>, he argued that Africa's modernization depends 
              on the "Special Seats Bill."
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm font-bold text-slate-300">#GenderParity</span>
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm font-bold text-slate-300">#SpecialSeats</span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-72 w-full rounded-[2rem] overflow-hidden border border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500">
             <Image src="/speeches-gender.jpg" alt="Gender Advocacy" fill className="object-cover" />
          </div>
        </div>

        {/* SECTION 2: DIGITAL ADVOCACY */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5"><FaBullhorn className="text-9xl text-white" /></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
               <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/50"><FaPodcast /></div>
               <h2 className="text-3xl font-bold text-white mb-4">Democracy Radio</h2>
               <p className="text-slate-400 leading-relaxed mb-6">
                 "We are breaking down the walls of the parliament." Through <strong>Democracy Radio 104.9 FM</strong>, 
                 he translates complex legislative jargon into the language of the street, ensuring every Nigerian understands their rights.
               </p>
               <a href="#" className="text-blue-400 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Listen to Broadcast →</a>
            </div>
            <div>
               <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-900/50"><FaMicrophoneAlt /></div>
               <h2 className="text-3xl font-bold text-white mb-4">AI & The Future</h2>
               <p className="text-slate-400 leading-relaxed">
                 A consistent voice for modernization, urging lawmakers to adopt <strong>AI-driven tools</strong>. 
                 His speeches emphasize that a 21st-century nation cannot be governed by 20th-century methods.
               </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: YOUTH MENTORSHIP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800 group">
             <Image src="/speeches-youth.jpg" alt="Youth Mentorship" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaUserFriends className="text-3xl text-green-500" />
              <span className="text-green-500 font-bold uppercase text-xs tracking-widest">The Next Generation</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">The "Raise Life" Class</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              "Leadership is not a title; it is a duty." In his mentorship sessions, he teaches the hard truths of civic responsibility 
              to Nigeria's emerging changemakers.
            </p>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <div className="text-center pb-10 px-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <FaArrowLeft /> Return Home
        </Link>
      </div>

    </div>
  )
}