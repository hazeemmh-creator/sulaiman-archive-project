"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FaPlay, 
  FaPause, 
  FaGraduationCap, 
  FaBriefcase, 
  FaUsers, 
  FaHandshake, 
  FaLeaf, 
  FaBookOpen, 
  FaChevronRight 
} from "react-icons/fa"

const phases = [
  {
    title: "Phase I — Academic Foundation",
    subtitle: "The Scholar Emerges (1990–2013)",
    date: "1990–2013",
    icon: <FaGraduationCap />,
    audio: "/audio/phase1.mp3",
    color: "bg-indigo-600",
    accent: "text-indigo-400",
    desc: "A journey of intellectual rigor at ABU and UniAbuja, shaping the mind that would eventually reform national institutions.",
    events: [
      { year: "1990", text: "B.Sc. Political Science, ABU, Zaria" },
      { year: "1995", text: "M.Sc. International & Strategic Studies, UniJos" },
      { year: "2003", text: "Ph.D. International Relations, UniAbuja" },
      { year: "2011", text: "Director of Academic Planning, UniAbuja" },
    ]
  },
  {
    title: "Phase II — National Executive Service",
    subtitle: "Scholarship Meets Governance (2014–2018)",
    date: "2014–2018",
    icon: <FaBriefcase />,
    audio: "/audio/phase2.mp3",
    color: "bg-amber-600",
    accent: "text-amber-400",
    desc: "Service at the highest levels of the Federal Executive, bringing academic discipline to national planning.",
    events: [
      { year: "2014", text: "Appointed Minister of National Planning" },
      { year: "2014–2015", text: "Deputy Chairman, National Planning Commission" },
      { year: "2015", text: "Chair, Technical Sub-Committee on Presidential Transition" },
    ]
  },
  {
    title: "Phase III — Institutional Transformation",
    subtitle: "The NILDS Revolution (2019–Present)",
    date: "2019–Present",
    icon: <FaUsers />,
    audio: "/audio/phase3.mp3",
    color: "bg-blue-600",
    accent: "text-blue-400",
    desc: "The era of turning a legislative institute into a world-class hub for research and democratic advocacy.",
    events: [
      { year: "2019", text: "Appointed Director General, NILDS" },
      { year: "2020", text: "Launch of NILDS Democracy Radio (104.9 FM)" },
      { year: "2023", text: "Establishment of LeCeSA (Security Analysis Centre)" },
      { year: "2023", text: "Commissioning of NILDS Permanent Site" },
      { year: "2024", text: "National Legislative Conference on Power Sector Reforms" },
      { year: "2025", text: "Digital transformation training for 700+ NASS staff" },
      { year: "2026", text: "Upcoming: National Summit on Elite Consensus" },
    ]
  },
  {
    title: "Phase IV — Civic Education & Engagement",
    subtitle: "Democracy for the Next Generation",
    date: "2016–2025",
    icon: <FaHandshake />,
    audio: "/audio/phase4.mp3",
    color: "bg-teal-600",
    accent: "text-teal-400",
    desc: "Bridging the gap between the parliament and the people through innovative youth and community programmes.",
    events: [
      { year: "2016", text: "Pilot National Secondary School Quiz (FCT)" },
      { year: "2022", text: "Quiz becomes nationwide (36 states + FCT)" },
      { year: "2025", text: "Launch of CAEEP (Community Action for Electoral Empowerment)" },
      { year: "2025", text: "MoUs with Rhizome Consulting & DOHS Cares" },
    ]
  },
  {
    title: "Phase V — Community & Social Impact",
    subtitle: "Leadership Beyond Office",
    date: "2010–Present",
    icon: <FaLeaf />,
    audio: "/audio/phase5.mp3",
    color: "bg-emerald-600",
    accent: "text-emerald-400",
    desc: "Driven by the Amana philosophy, impacting lives through education and food security.",
    events: [
      { year: "2015", text: "Payment of JAMB fees for indigent students" },
      { year: "2020", text: "Launch of #Farm2Feed Initiative supporting 2,000+ farmers" },
      { year: "2010+", text: "Amana Foundation community programmes" },
    ]
  },
  {
    title: "Phase VI — Intellectual Capital",
    subtitle: "The Scholar Who Never Stopped Teaching",
    date: "1998–Present",
    icon: <FaBookOpen />,
    audio: "/audio/phase6.mp3",
    color: "bg-purple-600",
    accent: "text-purple-400",
    desc: "A lifelong commitment to scholarship, supervising hundreds of researchers and publishing landmark readers.",
    events: [
      { year: "1998-23", text: "Supervision of 300+ undergraduate projects" },
      { year: "2019+", text: "Patron of the NILDS Journal of Democratic Studies" },
      { year: "2025", text: "Publication: Women Representation in Governance in Nigeria" },
    ]
  }
]

export default function TimelinePage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  const toggleAudio = (index: number) => {
    if (playingIndex === index) {
      audioRefs.current[index]?.pause()
      setPlayingIndex(null)
    } else {
      audioRefs.current.forEach((audio, i) => {
        if (i !== index) {
          audio?.pause()
          if (audio) audio.currentTime = 0
        }
      })
      audioRefs.current[index]?.play()
      setPlayingIndex(index)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      {/* Header Section */}
      <section className="py-24 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase italic"
        >
          The <span className="text-blue-500">Journey</span>
        </motion.h1>
        <p className="text-slate-500 max-w-xl mx-auto uppercase text-[10px] tracking-[0.4em] font-bold">
          The Living Archive of Prof. Abubakar O. Sulaiman
        </p>
      </section>

      {/* Timeline Content */}
      <div className="max-w-6xl mx-auto px-6 space-y-40">
        {phases.map((phase, index) => (
          <div key={index} className="relative group">
            {/* Background Accent */}
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-slate-900 group-hover:bg-blue-500/40 transition-all duration-700" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Context & Audio */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${phase.accent} mb-4 block`}>
                    {phase.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white group-hover:text-blue-400 transition-colors">
                    {phase.title}
                  </h2>
                  
                  {/* Audio Control Card */}
                  <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-[2rem] border border-slate-800 flex items-center gap-6 mb-10">
                    <button 
                      onClick={() => toggleAudio(index)}
                      className={`${phase.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 active:scale-95 transition-all shadow-xl shadow-black/40`}
                    >
                      {playingIndex === index ? <FaPause /> : <FaPlay className="ml-1" />}
                    </button>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Narration Mode</p>
                      <p className="text-sm text-slate-300 font-medium italic">Listen to Phase Details</p>
                    </div>
                    <audio 
                      ref={el => { audioRefs.current[index] = el }} 
                      src={phase.audio} 
                      onEnded={() => setPlayingIndex(null)} 
                    />
                  </div>

                  <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-slate-800 pl-6 italic">
                    {phase.desc}
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed Milestones */}
              <div className="lg:col-span-7 space-y-12 pt-6">
                {phase.events.map((event, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group/item"
                  >
                    <div className="text-blue-500 font-black text-sm pt-1 tracking-tighter tabular-nums">
                      {event.year}
                    </div>
                    <div className="flex-1 pb-10 border-b border-slate-900 group-last/item:border-0">
                      <p className="text-slate-200 text-xl font-medium leading-snug group-hover/item:text-white transition-colors">
                        {event.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}