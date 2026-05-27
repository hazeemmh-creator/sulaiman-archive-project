"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaUsers } from "react-icons/fa"

const speakers = [
  "Prof. Abubakar O. Sulaiman, DG NILDS",
  "Prof. Attahiru M. Jega, Consultant, CAEEP",
  "Prof. Tijjani Mohammed Bande",
  "Prof. Adele Jinadu",
]

export default function CAEEPNewsPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-blue-500 selection:text-white pb-24">
      <section className="px-6 pt-28 pb-16 border-b border-slate-900">
        <div className="max-w-6xl mx-auto">
          <Link href="/initiatives/caeep" className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-blue-400 transition-colors uppercase tracking-[0.2em] mb-10">
            <FaArrowLeft /> Back to CAEEP
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-4">2026 Programme Update</p>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-8">
                CAEEP Virtual Open Day
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Enhancing leadership capacity for sustainable development through executive education, policy competence, and professional certification.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[620px] max-h-[78vh] border border-slate-800 bg-slate-950 overflow-hidden">
                <Image src="/spotlight/caeep-virtual-open-day-retouched.png" alt="CAEEP virtual open day flyer" fill priority className="object-contain p-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="border border-slate-800 bg-slate-950 p-8">
            <h2 className="text-3xl font-black text-white mb-5">Open day brief</h2>
            <p className="text-slate-400 leading-relaxed">
              The Centre for Advanced Executive Education Programme convened a virtual open day to introduce leaders, public officials, and professionals to CAEEP's leadership education model. The session positioned executive learning as a practical route to stronger policy judgement, institutional performance, and sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoCard icon={<FaCalendarAlt />} label="Date" value="13 May 2026" />
            <InfoCard icon={<FaUsers />} label="Format" value="Virtual Open Day" />
            <InfoCard icon={<FaMapMarkerAlt />} label="Venue" value="Zoom" />
          </div>

          <div className="border border-slate-800 bg-black p-8">
            <h2 className="text-2xl font-black text-white mb-6">Featured speakers</h2>
            <div className="grid gap-3">
              {speakers.map((speaker) => (
                <div key={speaker} className="border border-slate-800 bg-slate-950 px-5 py-4 text-slate-300 font-semibold">
                  {speaker}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-5">
          <Link href="/initiatives/caeep" className="group block border border-blue-500/30 bg-blue-600/10 p-8 hover:bg-blue-600 hover:border-blue-500 transition-all">
            <h3 className="text-2xl font-black text-white mb-3">Explore full CAEEP programme</h3>
            <p className="text-slate-400 group-hover:text-blue-50 leading-relaxed mb-6">
              View the complete executive education pathway, course structure, certifications, and linked visual materials.
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-300 group-hover:text-white">
              Open programme page <FaArrowRight />
            </span>
          </Link>

          <a href="mailto:caeep@nils.gov.ng" className="group block border border-slate-800 bg-slate-950 p-8 hover:border-blue-500/40 transition-all">
            <FaEnvelope className="text-blue-400 text-2xl mb-5" />
            <h3 className="text-xl font-black text-white mb-2">Admissions contact</h3>
            <p className="text-slate-500">caeep@nils.gov.ng</p>
          </a>
        </aside>
      </article>
    </div>
  )
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="border border-slate-800 bg-slate-950 p-5">
      <div className="text-blue-400 mb-4">{icon}</div>
      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500 font-black mb-2">{label}</p>
      <p className="text-white font-bold">{value}</p>
    </div>
  )
}
