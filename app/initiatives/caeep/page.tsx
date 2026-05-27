"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FaArrowLeft,
  FaArrowRight,
  FaAward,
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa"

const offer = [
  "Flexible 3-4 day executive courses",
  "Professional certifications from 4 months to 3 years",
  "Designed for chief executives and high-profile professionals",
  "Leadership education for policy influence and institutional transformation",
]

const materials = [
  {
    title: "Programme Overview",
    desc: "A concise public-facing flyer introducing CAEEP's course and certification offer.",
    image: "/spotlight/caeep-programme-retouched.png",
    href: "/news/caeep-2026",
  },
  {
    title: "Virtual Open Day",
    desc: "High-level open day featuring Prof. Abubakar O. Sulaiman and distinguished governance scholars.",
    image: "/spotlight/caeep-virtual-open-day-retouched.png",
    href: "/news/caeep-2026",
  },
  {
    title: "Fees and Registration",
    desc: "Fee details and contact pathways for Nigerian and foreign candidates.",
    image: "/spotlight/caeep-fees-overview.jpeg",
    href: "mailto:caeep@nils.gov.ng",
  },
]

export default function CAEEPPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-blue-500/30">
      <section className="relative px-6 pt-28 pb-20 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/spotlight/caeep-virtual-open-day-retouched.png" alt="CAEEP virtual open day" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase mb-6">
              <FaGraduationCap /> Executive Education
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-8">
              Centre for Advanced Executive Education Programme
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              CAEEP strengthens leaders who influence policy, manage institutions, and shape the future through high-level courses and professional certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a href="mailto:caeep@nils.gov.ng" className="btn-primary">
                Contact Admissions <FaEnvelope />
              </a>
              <Link href="/news/caeep-2026" className="btn-secondary">
                View 2026 Open Day
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon={<FaBriefcase />} value="16" label="Courses Available" />
              <StatCard icon={<FaCertificate />} value="6" label="Professional Certifications" />
              <StatCard icon={<FaCalendarAlt />} value="3-4" label="Day Short Courses" />
              <StatCard icon={<FaAward />} value="3 yrs" label="Certification Pathways" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Programme Standard</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Built for leaders who carry public responsibility.</h2>
          <p className="text-slate-500 leading-relaxed text-lg">
            These materials are now presented as institutional records, not loose flyers. Each visual is preserved, framed, captioned, and linked to the section where it belongs.
          </p>
        </div>

        <div className="lg:col-span-7 grid gap-4">
          {offer.map((item) => (
            <div key={item} className="flex gap-4 border border-slate-800 bg-slate-950 p-5">
              <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
              <p className="text-slate-200 font-semibold leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-10">
          <p className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Linked Materials</p>
          <h2 className="text-4xl font-black text-white tracking-tight">CAEEP visual archive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {materials.map((item) => (
            <Link key={item.title} href={item.href} className="group border border-slate-800 bg-slate-950 overflow-hidden hover:border-blue-500/50 transition-all">
              <div className="relative h-96 bg-black overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="p-6 border-t border-slate-800">
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-blue-300">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                  Open related page <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="text-center pb-10 px-6">
        <Link href="/library" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
          <FaArrowLeft /> Return to Archive
        </Link>
      </div>
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="border border-slate-800 bg-black/70 p-6 min-h-40">
      <div className="text-blue-400 text-2xl mb-6">{icon}</div>
      <div className="text-4xl font-black text-white tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-widest text-slate-500 font-black mt-2">{label}</div>
    </div>
  )
}
