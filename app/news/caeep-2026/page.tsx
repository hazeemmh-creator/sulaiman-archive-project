"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft, FaAward, FaCalendarAlt, FaCheckCircle, FaUserTie } from "react-icons/fa"

export default function CAEEPNewsPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 1. NAVIGATION HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-white transition-colors uppercase tracking-widest">
            <FaArrowLeft /> Return to Archive
          </Link>
          <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">
            Institutional Update
          </div>
        </div>
      </nav>

      {/* 2. ARTICLE HERO IMAGE */}
      <header className="relative pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[50vh] w-full rounded-3xl overflow-hidden border border-white/10 mb-10 shadow-2xl shadow-blue-900/20">
             <Image 
               src="/news/caeep-2026.jpg" 
               alt="CAEEP 2026 Flyer" 
               fill 
               className="object-cover object-top"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
             
             {/* Floating Badge */}
             <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                <div className="flex items-center gap-3 text-blue-400 text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur px-3 py-1 rounded-full w-fit border border-blue-500/30">
                  <FaAward /> Professional Certification
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl">
                  2026 Executive Education Programme
                </h1>
             </div>
          </div>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-b border-white/10 pb-8 mb-8">
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-blue-500" /> Applications Open Now</span>
            <span className="hidden md:inline">•</span>
            <span>NILDS Academy</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2"><FaUserTie /> For Legislators & Executives</span>
          </div>
        </div>
      </header>

      {/* 3. ARTICLE CONTENT */}
      <article className="max-w-3xl mx-auto px-6 pb-24 leading-loose text-lg text-slate-300">
        
        <p className="mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
          The Centre for Advanced Executive Education Programme (CAEEP) at NILDS has officially opened applications for the 2026 Academic Session. This programme offers bespoke certification for Nigeria's top-tier leadership.
        </p>

        <p className="mb-8">
          Designed for Legislators, Heads of Ministries, and Industry Leaders, the 2026 curriculum is tailored to address the unique challenges of modern governance in Nigeria.
        </p>

        <div className="my-12 p-8 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl">
          <h3 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-3">Target Audience</h3>
          <ul className="space-y-2 text-sm text-slate-300 font-medium">
             <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500"/> Legislators and Political Appointees</li>
             <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500"/> Heads of Ministries, Departments & Parastatals</li>
             <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500"/> Political Party Executives</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">2026 Professional Certifications</h3>
        <p className="mb-6 text-slate-400">The Centre is offering specialized tracks including:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
                "Certified Energy Governance (CEGSDP)",
                "Certified Leadership Strategy (CLSMP)",
                "Legislative Governance (CLGPLP)",
                "Public Policy Development (CPPDLP)",
                "Social Transformation (CLSRP)",
                "Technology & Risk Management (CTIRMP)"
            ].map((course, i) => (
                <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-200">{course}</span>
                </div>
            ))}
        </div>

        <p className="mb-8">
            <strong>Delivery Mode:</strong> The programme offers flexible options including On-Site training at NILDS, Online interactive classes, and Hybrid combinations to suit the schedules of busy executives.
        </p>

        <div className="flex justify-center mt-10">
            <a href="mailto:caeep@nilds.gov.ng" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50">
                Contact for Admission
            </a>
        </div>

      </article>

      {/* 4. FOOTER */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <Link href="/" className="inline-block px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all font-bold text-sm uppercase tracking-widest">
          Return to Home
        </Link>
      </footer>

    </div>
  )
}