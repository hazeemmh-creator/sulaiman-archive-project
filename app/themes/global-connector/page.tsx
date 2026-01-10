"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaGlobeAfrica, FaHandshake, FaPassport, FaMapMarkedAlt, FaArrowLeft, FaPlaneDeparture } from "react-icons/fa"

export default function GlobalConnectorPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-cyan-500/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Impact Pillar V
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              The Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Connector</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
              "Democracy is a global conversation. By building bridges across Africa, we are not just sharing knowledge; we are defining the future of the continent."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/theme-global-hero.jpg" 
              alt="Global Connector" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* THE DIPLOMATIC NETWORK */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        
        {/* SECTION 1: THE MAP OF INFLUENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-80 w-full rounded-[2rem] overflow-hidden border border-slate-800">
             <Image src="/theme-global-partnerships.jpg" alt="Strategic Partnerships" fill className="object-cover" />
          </div>
          
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400"><FaMapMarkedAlt className="text-3xl" /></div>
              <h2 className="text-3xl font-bold text-white">The Pan-African Network</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Under his leadership, NILDS has forged strategic alliances to export legislative excellence. By partnering with key nations, he has positioned Nigeria as the <strong>"Big Brother"</strong> of democratic development in Africa.
            </p>
            
            {/* The Country Tags - Like a Flight Board */}
            <div className="flex flex-wrap gap-3">
              {['Benin Republic', 'Malawi', 'Uganda', 'Somalia', 'Namibia', 'ECOWAS Parliament'].map((country, i) => (
                <span key={i} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-default">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: DIPLOMATIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card A: Homegrown Solutions */}
          <div className="md:col-span-2 p-10 bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-4 right-6 opacity-20"><FaGlobeAfrica className="text-9xl text-cyan-600" /></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Homegrown Solutions</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg relative z-10">
              He has reduced Africa’s dependence on Western-led training. By promoting <strong>South-South Cooperation</strong>, he ensures that legislative solutions are rooted in African realities, not imported theories.
            </p>
          </div>

          {/* Card B: The Diplomat */}
          <div className="md:col-span-1 p-8 bg-slate-900/30 border border-slate-800 rounded-3xl flex flex-col justify-between hover:border-cyan-500/50 transition-colors">
            <FaPassport className="text-5xl text-cyan-500 mb-6" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Diplomatic Presence</h3>
              <p className="text-slate-400 text-sm">
                A respected voice at international policy forums, creating cross-border collaboration for NILDS.
              </p>
            </div>
          </div>
          
        </div>

        {/* SECTION 3: KNOWLEDGE EXCHANGE */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          
          <FaPlaneDeparture className="text-5xl text-slate-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Study Tours & Technical Missions</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            "We are no longer just consumers of knowledge; we are exporters of it. Legislators from across the continent now come to Abuja to learn the art of governance."
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-black uppercase tracking-widest border border-cyan-500/20">
            Status: Active Global Engagement
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