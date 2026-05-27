"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"

const menus = [
  {
    label: "About",
    items: [
      { href: "/about/biography", title: "Biography", subtitle: "Life, scholarship, and service" },
      { href: "/timeline", title: "Timeline", subtitle: "Milestones by era" },
      { href: "/quotes", title: "Quotes", subtitle: "The Amana philosophy" },
    ],
  },
  {
    label: "Impact",
    items: [
      { href: "/impact", title: "Impact Dashboard", subtitle: "Metrics and major achievements" },
      { href: "/themes/visionary-reformer", title: "Visionary Reformer", subtitle: "Governance and policy" },
      { href: "/themes/institutional-builder", title: "Institutional Builder", subtitle: "NILDS and LeCeSA" },
      { href: "/themes/academic-architect", title: "Academic Architect", subtitle: "Education and mentorship" },
      { href: "/themes/inclusive-leader", title: "Inclusive Leader", subtitle: "Gender, youth, and community" },
      { href: "/themes/global-connector", title: "Global Connector", subtitle: "Partnerships and diplomacy" },
    ],
  },
  {
    label: "Archive",
    items: [
      { href: "/library", title: "Knowledge Vault", subtitle: "Programmes and documents" },
      { href: "/speeches", title: "Speeches", subtitle: "Public voice and civic engagement" },
      { href: "/legacy-wall", title: "Legacy Wall", subtitle: "Recognition and historic moments" },
      { href: "/testimonials", title: "Voices of Amana", subtitle: "Human impact stories" },
    ],
  },
  {
    label: "Updates",
    items: [
      { href: "/blog", title: "Insights", subtitle: "Commentary and reflections" },
      { href: "/news/caeep-2026", title: "CAEEP 2026", subtitle: "Executive education pathway" },
      { href: "/news/afcfta-2026", title: "AfCFTA", subtitle: "Regional capacity building" },
      { href: "/contact", title: "Contact", subtitle: "Connect with the archive team" },
    ],
  },
]

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black/90 backdrop-blur-xl">
      <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between text-slate-300">
        <Link href="/" className="group flex items-center gap-3 min-w-0" onClick={() => setMobileOpen(false)}>
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-black group-hover:bg-blue-500 transition-colors">
            S
          </div>
          <div className="min-w-0">
            <span className="block font-black text-white tracking-tight text-sm sm:text-lg group-hover:text-blue-300 transition-colors uppercase truncate">
              The Sulaiman Standard
            </span>
            <span className="hidden sm:block text-[10px] text-slate-500 uppercase tracking-[0.22em] font-bold">
              Digital Legacy Archive
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
          <Link href="/" className="px-3 py-3 hover:text-blue-400 transition-colors">
            Home
          </Link>
          {menus.map((menu) => (
            <div key={menu.label} className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                className="px-3 py-3 flex items-center gap-2 hover:text-blue-400 transition-colors"
                aria-expanded={openMenu === menu.label}
              >
                {menu.label}
                <FaChevronDown className={`text-[10px] transition-transform ${openMenu === menu.label ? "rotate-180" : ""}`} />
              </button>
              {openMenu === menu.label && (
                <div className="absolute left-0 mt-2 w-80 bg-slate-950 border border-slate-800 shadow-2xl py-2">
                  {menu.items.map((item) => (
                    <DropdownLink key={item.href} {...item} onClick={() => setOpenMenu(null)} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <Link href="/library" className="px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-300 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all">
            Explore Vault
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-11 h-11 border border-slate-800 flex items-center justify-center text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-black border-t border-slate-800 overflow-y-auto">
          <div className="px-5 py-6 space-y-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block border border-slate-800 bg-slate-950 px-5 py-4 text-white font-bold"
            >
              Home
            </Link>
            {menus.map((menu) => (
              <div key={menu.label}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-black mb-3">{menu.label}</p>
                <div className="grid gap-2">
                  {menu.items.map((item) => (
                    <DropdownLink key={item.href} {...item} onClick={() => setMobileOpen(false)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function DropdownLink({
  href,
  title,
  subtitle,
  onClick,
}: {
  href: string
  title: string
  subtitle: string
  onClick?: () => void
}) {
  return (
    <Link href={href} onClick={onClick} className="block px-5 py-4 hover:bg-slate-900 group transition-colors border border-transparent hover:border-slate-800">
      <div className="text-white font-bold text-sm group-hover:text-blue-400">{title}</div>
      <div className="text-slate-500 text-[10px] uppercase tracking-widest font-black mt-1">{subtitle}</div>
    </Link>
  )
}
