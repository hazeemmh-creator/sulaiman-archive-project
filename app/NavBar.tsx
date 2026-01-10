'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function NavBar() {
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [pillarsOpen, setPillarsOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)

  const archiveRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        archiveRef.current && !archiveRef.current.contains(event.target as Node) &&
        pillarsRef.current && !pillarsRef.current.contains(event.target as Node) &&
        experienceRef.current && !experienceRef.current.contains(event.target as Node)
      ) {
        setArchiveOpen(false)
        setPillarsOpen(false)
        setExperienceOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="border-b border-slate-800 bg-black/95 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-slate-300">
        
        {/* LOGO AREA */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black group-hover:bg-blue-500 transition-colors">S</div>
          <span className="font-bold text-white tracking-tighter text-lg group-hover:text-blue-400 transition-colors uppercase">The Sulaiman Standard</span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about/biography" className="hover:text-blue-400 transition-colors">About</Link>

          {/* THE VAULT */}
          <div className="relative" ref={archiveRef}>
            <button onClick={() => setArchiveOpen(!archiveOpen)} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              The Vault <FaChevronDown className={`text-[10px] transition-transform ${archiveOpen ? 'rotate-180' : ''}`} />
            </button>
            {archiveOpen && (
              <div className="absolute left-0 mt-4 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl overflow-hidden py-2">
                <DropdownLink href="/about/biography" title="The Life of Amana" subtitle="Biography & Background" />
                <DropdownLink href="/timeline" title="Institutional Milestones" subtitle="Leadership Timeline" />
                <DropdownLink href="/library" title="Intellectual Capital" subtitle="Publications & Papers" />
                <DropdownLink href="/speeches" title="The Public Voice" subtitle="Speeches & Civic Engagement" />
              </div>
            )}
          </div>

          {/* PILLARS OF IMPACT */}
          <div className="relative" ref={pillarsRef}>
            <button onClick={() => setPillarsOpen(!pillarsOpen)} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              Impact Pillars <FaChevronDown className={`text-[10px] transition-transform ${pillarsOpen ? 'rotate-180' : ''}`} />
            </button>
            {pillarsOpen && (
              <div className="absolute left-0 mt-4 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl overflow-hidden py-2">
                <DropdownLink href="/themes/visionary-reformer" title="Visionary Reformer" subtitle="Governance & Policy" />
                <DropdownLink href="/themes/academic-architect" title="Academic Architect" subtitle="UNIBEN & Education" />
                <DropdownLink href="/themes/inclusive-leader" title="Inclusive Leader" subtitle="Gender & Youth" />
                <DropdownLink href="/themes/institutional-builder" title="Institutional Builder" subtitle="NILDS & LeCeSA" />
                {/* ⬇️ THIS WAS MISSING! I ADDED IT NOW ⬇️ */}
                <DropdownLink href="/themes/global-connector" title="Global Connector" subtitle="Diplomacy & Partnerships" />
              </div>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="relative" ref={experienceRef}>
            <button onClick={() => setExperienceOpen(!experienceOpen)} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              Experience <FaChevronDown className={`text-[10px] transition-transform ${experienceOpen ? 'rotate-180' : ''}`} />
            </button>
            {experienceOpen && (
              <div className="absolute right-0 mt-4 w-64 bg-slate-900 border border-slate-800 shadow-2xl rounded-xl overflow-hidden py-2">
                <DropdownLink href="/library" title="Digital Library Hub" subtitle="The Knowledge Index" />
                <DropdownLink href="/testimonials" title="Voices of Amana" subtitle="Human Impact Mosaic" />
                <DropdownLink href="/legacy-wall" title="Legacy Wall" subtitle="Media & Recognition" />
                <DropdownLink href="/impact" title="Impact Dashboard" subtitle="Visualizing Change" />
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-blue-400 transition-colors text-blue-500 font-bold">Insights</Link>
        </div>
      </nav>
    </header>
  )
}

function DropdownLink({ href, title, subtitle }: { href: string, title: string, subtitle: string }) {
  return (
    <Link href={href} className="block px-4 py-3 hover:bg-slate-800 group transition-colors">
      <div className="text-white font-bold text-sm group-hover:text-blue-400">{title}</div>
      <div className="text-slate-500 text-[10px] uppercase tracking-widest font-black">{subtitle}</div>
    </Link>
  )
}