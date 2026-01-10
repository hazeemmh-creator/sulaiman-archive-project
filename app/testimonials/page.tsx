"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaQuoteLeft, FaArrowLeft, FaHeart, FaAward, FaUserCheck } from "react-icons/fa"

const testimonials = [
  {
    name: "National Assembly Staff Member",
    category: "Professionalism",
    quote: "Prof. Sulaiman transformed our capacity to serve the legislature. His leadership brought professionalism, clarity, and purpose to our work.",
  },
  {
    name: "Working Parent",
    category: "Humanity",
    quote: "The DG gave us more than a workplace; he gave us a home. Because of the crèche he established, I can work without ever worrying about my child’s safety. He is my hero for his focus on our humanity.",
  },
  {
    name: "Reinstated Professional",
    category: "Justice",
    quote: "I left out of frustration after seven years as a casual worker. Without even meeting me, he heard my story and welcomed me back as a permanent staff member. Today, I am the accountant I always trained to be.",
  },
  {
    name: "Institute Staff",
    category: "Spiritual Support",
    quote: "When my daughter was undergoing surgeries, the Professor didn't just offer generous financial support — he offered spiritual strength. He took away my fear and reminded me of the power of faith.",
  },
  {
    name: "PhD Recipient",
    category: "Mentorship",
    quote: "I had no intention of returning to school, but his presence inspired me to develop myself intellectually. Thanks to his encouragement, I have now earned my PhD.",
  },
  {
    name: "Promoted Staff",
    category: "Meritocracy",
    quote: "I was stuck in the same position for over five years. He came in and set the standards, making promotions annual and merit‑based. Now, we have a clear path forward.",
  },
  {
    name: "Youth Participant",
    category: "Future Leaders",
    quote: "The Quiz Competition opened my eyes to how democracy works. It made me believe I could contribute to Nigeria’s future.",
  }
  // ... You can add all the others here too!
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 pb-24 font-sans">
      
      {/* HEADER */}
      <section className="py-24 px-6 text-center border-b border-slate-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <FaHeart className="text-red-500 text-xs" />
            <span className="text-red-400 font-black text-[10px] uppercase tracking-widest">The Human Legacy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            Voices of <span className="text-blue-500">Amana</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            A mosaic of lived experiences from the people whose lives were 
            transformed by the leadership of <span className="text-white font-bold">Prof. Abubakar O. Sulaiman</span>.
          </p>
        </motion.div>
      </section>

      {/* MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:border-blue-500/50 transition-all group"
            >
              <FaQuoteLeft className="text-blue-500/30 text-4xl mb-4 group-hover:text-blue-500 transition-colors" />
              <p className="text-slate-200 text-lg leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
              <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <span className="text-[10px] text-blue-500 uppercase font-black tracking-widest">{item.category}</span>
                </div>
                <FaUserCheck className="text-slate-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="text-center">
        <Link
          href="/library"
          className="inline-flex items-center gap-3 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <FaArrowLeft /> Back to Archive
        </Link>
      </div>
    </div>
  )
}