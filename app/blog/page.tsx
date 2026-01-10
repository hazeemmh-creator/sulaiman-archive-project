"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaSearch, FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa"
import { useState } from "react"

// Dummy data based on the folders I saw in your sidebar
const posts = [
  {
    slug: "nilds-anniversary-reflection",
    title: "Reflecting on the NILDS Anniversary: A Journey of Growth",
    excerpt: "As we mark another year of institutional excellence, we must look back at the milestones that have defined our trajectory...",
    date: "March 15, 2025",
    category: "Institutional",
    image: "/blog-anniversary.jpg" // Make sure to add images or use placeholders
  },
  {
    slug: "democracy-radio-launch",
    title: "Why Democracy Radio Matters for Civic Engagement",
    excerpt: "Bridging the gap between the parliament and the people requires innovative platforms. Democracy Radio is that bridge...",
    date: "February 10, 2025",
    category: "Media & Tech",
    image: "/blog-radio.jpg"
  },
  {
    slug: "security-analysis-lecesa",
    title: "LeCeSA: Redefining Security Analysis in Nigeria",
    excerpt: "Security is not just about boots on the ground; it is about intelligence and policy. How LeCeSA is changing the narrative...",
    date: "January 22, 2025",
    category: "Security",
    image: "/blog-security.jpg"
  }
]

export default function BlogPage() {
  const [filter, setFilter] = useState("")

  // Simple filter logic
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(filter.toLowerCase()) || 
    post.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-blue-600/30">
      
      {/* HEADER & SEARCH */}
      <section className="pt-32 pb-12 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              The Intellectual Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Perspectives</span>
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search articles (e.g., Security, Democracy)..." 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-blue-500 transition-colors"
                onChange={(e) => setFilter(e.target.value)}
              />
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-slate-900/20 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-600/40 transition-all hover:-translate-y-2"
              >
                {/* Image Area (Placeholder logic) */}
                <div className="relative h-48 w-full bg-slate-800">
                   {/* If you have images, uncomment the Image component below */}
                   {/* <Image src={post.image} alt={post.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" /> */}
                   <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                      <FaTag className="text-4xl opacity-20" />
                   </div>
                   <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase text-blue-400 border border-slate-700">
                     {post.category}
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <FaCalendarAlt /> {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    Read Insight <FaArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl text-slate-500 font-bold mb-2">No insights found.</h3>
            <p className="text-slate-600">Try searching for a different keyword.</p>
          </div>
        )}
      </section>

    </div>
  )
}