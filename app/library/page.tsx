"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  FaUniversity, 
  FaMicrochip, 
  FaCity, 
  FaBook, 
  FaGraduationCap, 
  FaBroadcastTower,
  FaShieldAlt
} from "react-icons/fa"

const modules = [
  // 🌟 NEW: CAEEP takes the top spot
  {
    title: "CAEEP Executive Education",
    desc: "Advanced executive courses and professional certifications for leaders who influence policy and institutions.",
    image: "/spotlight/caeep-programme-retouched.png",
    link: "/initiatives/caeep",
    icon: <FaGraduationCap />,
    tag: "Executive Education"
  },
  {
    title: "National Quiz Competition",
    desc: "Empowering youth through the 10th edition of our legislative & civic competition.",
    image: "/library-quiz.jpg",
    link: "/library/national-quiz-competition",
    icon: <FaUniversity />,
    tag: "Youth Engagement"
  },
  {
    title: "Democracy Radio Workshop",
    desc: "Citizen journalism and storytelling training via Democracy Radio 104.9 FM.",
    image: "/library-radio.jpg",
    link: "/library/democracy-radio-workshop",
    icon: <FaBroadcastTower />,
    tag: "Media"
  },
  {
    title: "Security Analysis (LeCeSA)",
    desc: "Cutting-edge research on national security, oversight, and policy governance.",
    image: "/library-security.jpg",
    link: "/library/security-analysis-centre",
    icon: <FaShieldAlt />,
    tag: "Policy"
  },
  {
    title: "UNIBEN Partnership",
    desc: "A decade of professionalizing legislative governance through postgraduate studies.",
    image: "/library-uniben.jpg",
    link: "/library/uniben-partnership",
    icon: <FaGraduationCap />,
    tag: "Academic"
  },
  {
    title: "Permanent Site",
    desc: "The architectural legacy and world-class campus of the Institute in Abuja.",
    image: "/library-site.jpg",
    link: "/library/nilds-permanent-site",
    icon: <FaCity />,
    tag: "Infrastructure"
  },
  {
    title: "Innovation Showcase",
    desc: "Digital transformation, AI-integrated lawmaking, and paperless parliamentary tools.",
    image: "/library-innovation.jpg",
    link: "/library/innovation-showcase",
    icon: <FaMicrochip />,
    tag: "Modernization"
  }
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-24 selection:bg-blue-500/30">
      
      {/* HEADER SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-slate-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Knowledge <span className="text-blue-500">Archive</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Explore key publications, civic events, and institutional documentation 
            led by <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span>.
          </p>
        </motion.div>
      </section>

      {/* DYNAMIC GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
                
                {/* Image Container */}
                <Link href={module.link} className="block relative h-56 overflow-hidden">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-950/80 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/30">
                      {module.tag}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Floating Icon Overlap */}
                  <div className="absolute -top-8 left-8 bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-black/50 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                    {module.icon}
                  </div>

                  <div className="mt-6">
                    <Link href={module.link}>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                        {module.title}
                      </h2>
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-800 pl-4 group-hover:border-blue-500 transition-colors">
                      {module.desc}
                    </p>
                    <Link 
                      href={module.link}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors"
                    >
                      Enter Archive <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER METRICS */}
      <div className="mt-12 text-center pb-12">
        <div className="inline-block p-1 bg-slate-900 border border-slate-800 rounded-full px-6 py-3">
           <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
             Total Archives: <span className="text-white">12,400+ Digital Assets</span>
           </p>
        </div>
      </div>
    </div>
  )
}
