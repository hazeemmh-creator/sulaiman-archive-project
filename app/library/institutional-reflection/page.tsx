"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaCity, 
  FaHardHat, 
  FaDraftingCompass, 
  FaSolarPanel, 
  FaArrowLeft,
  FaAward,
  FaMapMarkerAlt,
  FaDatabase, // Fixed: Added FaDatabase to the import list
  FaUniversity
} from "react-icons/fa"

export default function PermanentSitePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24">

      {/* 1. HERO: THE MONUMENTAL ACHIEVEMENT */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/library-site.jpg" 
            alt="NILDS Permanent Site"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/30 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 text-emerald-400">
              <FaCity className="text-sm" />
              <span className="font-bold tracking-[0.3em] text-[10px] uppercase">Architectural Legacy</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
              A <span className="text-emerald-500">World-Class</span> <br /> Landmark
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed border-b border-slate-800 pb-8">
              The completion and commissioning of the NILDS Permanent Site—Nigeria's premier center for legislative research and democratic strengthening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE VISIONARY COMPLETION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
              From Concept <br /> to <span className="text-emerald-500">Concrete.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              For years, the Institute operated across multiple temporary locations. Under the focused leadership of <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span>, the permanent site was transformed from a stalled project into a state-of-the-art campus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                 <FaMapMarkerAlt className="text-emerald-500 mb-2" />
                 <h4 className="text-white font-bold text-sm">Location</h4>
                 <p className="text-xs text-slate-500">Airport Road, Abuja, Nigeria</p>
               </div>
               <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
                 <FaSolarPanel className="text-emerald-500 mb-2" />
                 <h4 className="text-white font-bold text-sm">Smart Tech</h4>
                 <p className="text-xs text-slate-500">Solar-integrated power systems</p>
               </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-slate-800">
              <Image 
                src="/library-arch.jpg" 
                alt="Architecture" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS FEATURES GRID */}
      <section className="py-20 bg-[#06100c] border-y border-emerald-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <h3 className="text-emerald-500 font-black text-xs uppercase tracking-[0.4em] mb-2">Campus Overview</h3>
             <h2 className="text-3xl font-bold text-white">Infrastructure Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatBox icon={<FaUniversity />} label="Auditorium" value="500+ Seats" />
            <StatBox icon={<FaDraftingCompass />} label="Lecture Rooms" value="12 Modern Halls" />
            <StatBox icon={<FaDatabase />} label="Library" value="High-Tech Hub" />
            <StatBox icon={<FaAward />} label="Hostels" value="Executive Wings" />
          </div>
        </div>
      </section>

      {/* 4. HISTORIC MILESTONES */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-950" />
            <h4 className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-2">The Culmination</h4>
            <h3 className="text-xl font-bold text-white mb-2">Official Commissioning</h3>
            <p className="text-slate-400 text-sm">The site was officially commissioned in a high-profile ceremony, attended by the leadership of the National Assembly, marking the end of the Institute's "nomadic" era.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950" />
            <h4 className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">Operational Shift</h4>
            <h3 className="text-xl font-bold text-white mb-2">Full Migration</h3>
            <p className="text-slate-400 text-sm">NILDS fully moved all academic and administrative activities to the site, providing staff and students with a world-class working environment.</p>
          </div>
        </div>
      </section>

      {/* 5. BACK LINK */}
      <div className="text-center">
         <Link
            href="/library"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <FaArrowLeft /> Exit to Main Archive
          </Link>
      </div>

    </div>
  )
}

// Helper Component for the Feature Grid
function StatBox({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center hover:border-emerald-500/50 transition-colors">
      <div className="text-emerald-500 text-xl flex justify-center mb-3">{icon}</div>
      <div className="text-white font-bold text-lg">{value}</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{label}</div>
    </div>
  )
}