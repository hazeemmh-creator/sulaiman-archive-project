"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaTrophy, 
  FaUsers, 
  FaBookOpen, 
  FaVideo, 
  FaQuoteLeft, 
  FaArrowLeft, 
  FaStar,
  FaChalkboardTeacher
} from "react-icons/fa"

export default function NationalQuizCompetitionPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24">

      {/* 1. HERO: DECADE OF EXCELLENCE */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/library-quiz3.jpg"
            alt="National Quiz Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 text-amber-500">
              <FaStar className="text-xs" />
              <span className="font-bold tracking-widest text-[10px] uppercase">10th Anniversary Edition</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
              Inspiring the <span className="text-blue-500">Next Generation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed border-b border-slate-800 pb-8">
              A flagship initiative of <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span> to deepen democratic awareness and legislative understanding among Nigeria's youth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. IMPACT STATS */}
      <section className="py-12 px-6 max-w-6xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ImpactCard icon={<FaUsers />} count="36 States + FCT" label="National Reach" />
          <ImpactCard icon={<FaChalkboardTeacher />} count="10 Editions" label="Consistent Impact" />
          <ImpactCard icon={<FaTrophy />} count="5,000+ Students" label="Direct Participants" />
        </div>
      </section>

      {/* 3. THE HALL OF FAME (Year-by-Year) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">The Hall of Fame</h2>
          <div className="hidden md:block h-[1px] flex-1 bg-slate-800 mx-8" />
          <span className="text-blue-500 font-black text-xs uppercase tracking-widest">2016 – 2025</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50 text-blue-400 text-xs uppercase tracking-widest font-bold">
                <th className="p-6">Year</th>
                <th className="p-6">National Winner</th>
                <th className="p-6">Scope & Innovation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <WinnerRow year="2025" winner="School of the Gifted, Gwagwalada (FCT)" highlight="10th Anniversary: Focus on Girl-Child Leadership." />
              <WinnerRow year="2024" winner="Enitona High School, Port Harcourt" highlight="First South-South winner in history." />
              <WinnerRow year="2023" winner="St. Teresa's College, Nsukka (Enugu)" highlight="Integration with 10th NASS Leadership." />
              <WinnerRow year="2022" winner="State High School, Akwa Ibom" highlight="Expanded to all 36 states nationwide." />
              <WinnerRow year="2016" winner="Pilot FCT Schools" highlight="Launched by NILDS to test civic curriculum." />
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. THE EMOTIONAL CORE: QUOTES & GIRL-CHILD FOCUS */}
      <section className="py-20 px-6 bg-blue-600/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
            <FaQuoteLeft className="absolute -top-4 -left-4 text-9xl text-slate-800/30" />
            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl text-white italic font-light leading-relaxed mb-8">
                “Education is the path, not marriage.”
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-2xl mb-4">YB</div>
                <h4 className="text-white font-bold text-lg">Yusuf Bushra</h4>
                <p className="text-blue-500 text-sm uppercase tracking-widest font-black">2025 National Winner</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Under Professor Sulaiman, the quiz has become a platform for advocacy, using the 2025 edition to specifically tackle the girl-child education crisis in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MULTIMEDIA & RESOURCES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaVideo className="text-blue-500" /> Video Archives
            </h3>
            <div className="space-y-4">
              <MediaLink title="2025 Grand Finale (10th Edition)" source="KAFTAN TV" />
              <MediaLink title="2024 Full Network Broadcast" source="NTA Network" />
              <MediaLink title="2023 Competition Highlights" source="TVC News" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <FaBookOpen className="text-blue-500" /> Practice Resources
            </h3>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
               <ul className="space-y-4 text-sm">
                 <li className="flex items-center gap-3 text-slate-300">
                   <div className="w-2 h-2 bg-blue-500 rounded-full" /> 30+ Constitution Practice Questions
                 </li>
                 <li className="flex items-center gap-3 text-slate-300">
                   <div className="w-2 h-2 bg-blue-500 rounded-full" /> Official Legislative Practice Handbook
                 </li>
                 <li className="flex items-center gap-3 text-slate-300">
                   <div className="w-2 h-2 bg-blue-500 rounded-full" /> 2025 NILDS Issue Brief on Education
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BACK LINK */}
      <div className="text-center pt-10">
         <Link
            href="/library"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
          >
            <FaArrowLeft /> Exit to Library Archive
          </Link>
      </div>

    </div>
  )
}

// --- COMPONENTS ---

function ImpactCard({ icon, count, label }: { icon: any, count: string, label: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center hover:border-blue-500 transition-colors">
      <div className="text-3xl text-blue-500 flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-black text-white mb-1">{count}</div>
      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{label}</div>
    </div>
  )
}

function WinnerRow({ year, winner, highlight }: { year: string, winner: string, highlight: string }) {
  return (
    <tr className="hover:bg-blue-500/5 transition-colors group">
      <td className="p-6 font-black text-slate-500 group-hover:text-blue-500">{year}</td>
      <td className="p-6 font-bold text-white text-sm md:text-base">{winner}</td>
      <td className="p-6 text-xs text-slate-400 font-medium leading-relaxed italic">{highlight}</td>
    </tr>
  )
}

function MediaLink({ title, source }: { title: string, source: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
      <div>
        <h4 className="text-sm font-bold text-slate-200">{title}</h4>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">{source}</p>
      </div>
      <button className="text-blue-500 hover:text-white"><FaVideo /></button>
    </div>
  )
}