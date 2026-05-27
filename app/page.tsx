"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaBroadcastTower,
  FaCalendarAlt,
  FaChartLine,
  FaGavel,
  FaGlobeAfrica,
  FaGraduationCap,
  FaHandshake,
  FaLandmark,
  FaMicrophone,
  FaNewspaper,
  FaShieldAlt,
  FaUniversity,
  FaUsers,
} from "react-icons/fa"

const achievements = [
  {
    value: "700+",
    label: "NASS staff trained",
    detail: "Digital transformation and paperless parliamentary capacity.",
    href: "/impact",
    icon: <FaChartLine />,
  },
  {
    value: "36+FCT",
    label: "Youth civic footprint",
    detail: "Legislature and democracy quiz expanded nationwide.",
    href: "/library/national-quiz-competition",
    icon: <FaUsers />,
  },
  {
    value: "104.9FM",
    label: "Democracy Radio",
    detail: "Civic education broadcast platform for public understanding.",
    href: "/library/democracy-radio-workshop",
    icon: <FaBroadcastTower />,
  },
  {
    value: "LeCeSA",
    label: "Security analysis centre",
    detail: "Evidence-led legislative support for national security reform.",
    href: "/library/security-analysis-centre",
    icon: <FaShieldAlt />,
  },
]

const pathways = [
  {
    title: "The Life of Amana",
    eyebrow: "Biography",
    desc: "Trace the academic, public service, family, and philanthropic foundations behind the archive.",
    href: "/about/biography",
    image: "/biography-hero.jpg",
    icon: <FaGraduationCap />,
  },
  {
    title: "Impact Pillars",
    eyebrow: "Leadership Themes",
    desc: "Explore the five clear pillars: reform, academia, inclusion, institution-building, and global partnership.",
    href: "/themes/visionary-reformer",
    image: "/theme-institutional-hero.jpg",
    icon: <FaLandmark />,
  },
  {
    title: "Knowledge Vault",
    eyebrow: "Library",
    desc: "Browse programmes, publications, media, partnerships, research, and institutional milestones.",
    href: "/library",
    image: "/library-group.jpg",
    icon: <FaBookOpen />,
  },
  {
    title: "Living Timeline",
    eyebrow: "Journey",
    desc: "Follow the phases of scholarship, governance, NILDS transformation, and civic impact.",
    href: "/timeline",
    image: "/timeline-banner.jpg",
    icon: <FaCalendarAlt />,
  },
]

const spotlights = [
  {
    title: "Director-General's Social and Sports Day",
    tag: "Workers' Day 2026",
    date: "1 May 2026",
    image: "/spotlight/workers-day-aerobics.jpeg",
    href: "/testimonials",
  },
  {
    title: "Build and Secure the Future Today",
    tag: "Children's Day 2026",
    date: "25 May 2026",
    image: "/spotlight/children-day-bsft.jpeg",
    href: "/themes/inclusive-leader",
    fit: "contain",
  },
  {
    title: "CAEEP Virtual Open Day",
    tag: "Executive Education",
    date: "13 May 2026",
    image: "/spotlight/caeep-virtual-open-day-retouched.png",
    href: "/news/caeep-2026",
    fit: "contain",
  },
  {
    title: "Menstrual Hygiene Day Outreach",
    tag: "Community Development",
    date: "21 May 2026",
    image: "/spotlight/menstrual-hygiene-retouched.png",
    href: "/themes/inclusive-leader",
    fit: "contain",
  },
  {
    title: "Security Sector Financing Lecture",
    tag: "Sabbatical Valedictory Lecture",
    date: "14 May 2026",
    image: "/spotlight/security-financing-lecture.jpeg",
    href: "/news/federalism-lecture",
    fit: "contain",
  },
]

const cultureMoments = [
  {
    title: "Wellness as institutional strength",
    image: "/spotlight/workers-day-aerobics.jpeg",
    desc: "Workers' Day became a visible statement that public institutions are powered by people, morale, and shared purpose.",
  },
  {
    title: "Leadership without distance",
    image: "/spotlight/workers-day-prize-presentation.jpeg",
    desc: "The DG's presence in staff activities turned recognition into a culture-building instrument.",
  },
  {
    title: "Teams beyond departments",
    image: "/spotlight/workers-day-board-games.jpeg",
    desc: "Recreation, board games, and friendly competition created informal bonds across professional lines.",
  },
]

const caeepHighlights = [
  "16 short executive courses",
  "6 professional certifications",
  "3-4 day leadership intensives",
  "4 months to 3 years certification pathways",
]

const briefings = [
  {
    title: "AfCFTA Capacity Building",
    category: "Global",
    location: "Abuja",
    image: "/news/afcfta-2026.jpg",
    href: "/news/afcfta-2026",
    desc: "Translating Africa's economic integration into practical legislative readiness.",
  },
  {
    title: "Oxford Strategy Session",
    category: "Global",
    location: "United Kingdom",
    image: "/news/oxford-group.jpg",
    href: "/news/oxford-2026",
    desc: "Positioning NILDS in world-class governance and executive education conversations.",
  },
  {
    title: "Federalism and Reform Dialogue",
    category: "National",
    location: "Abuja",
    image: "/news/federalism-lecture.jpg",
    href: "/news/federalism-lecture",
    desc: "Interrogating Nigeria's federal structure through scholarship and public policy.",
  },
  {
    title: "Executive Education Pathway",
    category: "Training",
    location: "NILDS",
    image: "/news/caeep-2026.jpg",
    href: "/news/caeep-2026",
    desc: "Strengthening leadership capacity through advanced certification and civic learning.",
  },
]

const filters = ["All", "Global", "National", "Training"]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filteredBriefings =
    activeFilter === "All" ? briefings : briefings.filter((item) => item.category === activeFilter)

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt="Prof. Abubakar O. Sulaiman"
            fill
            priority
            className="object-cover opacity-45 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl pt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-blue-400 font-black tracking-[0.36em] uppercase text-xs mb-5">
              The Digital Legacy Archive
            </h2>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.92] max-w-5xl mx-auto">
              Prof. Abubakar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-200 to-white">
                O. Sulaiman
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
              Academic architect. Legislative reformer. Institutional builder. A living record of the Amana standard in
              Nigerian governance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/timeline" className="btn-primary group">
                Explore The Journey <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/impact" className="btn-secondary">
                View Impact Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {achievements.map((item) => (
            <Link key={item.label} href={item.href} className="group bg-slate-950/90 border border-slate-800 p-5 md:p-6 hover:border-blue-500/50 hover:bg-slate-900 transition-all">
              <div className="flex items-center justify-between mb-5">
                <span className="text-blue-400 text-xl">{item.icon}</span>
                <FaArrowRight className="text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-2xl md:text-4xl font-black tracking-tighter text-white">{item.value}</div>
              <div className="text-sm font-bold text-slate-200 mt-1">{item.label}</div>
              <p className="hidden md:block text-xs text-slate-500 leading-relaxed mt-3">{item.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader
          kicker="Start Here"
          title="Browse the Archive by Purpose"
          desc="The archive now gives visitors direct routes into biography, institutional impact, the knowledge library, and the chronological story."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {pathways.map((path) => (
            <Link key={path.title} href={path.href} className="group block bg-slate-950 border border-slate-900 hover:border-blue-500/50 transition-all">
              <div className="relative h-56 overflow-hidden">
                <Image src={path.image} alt={path.title} fill className="object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/20 to-transparent" />
                <div className="absolute left-5 bottom-5 w-12 h-12 bg-blue-600 text-white flex items-center justify-center text-xl">
                  {path.icon}
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.24em] mb-2">{path.eyebrow}</p>
                <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors">{path.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{path.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white">
                  Open Section <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950/70 border-y border-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeader
              kicker="May 2026 Spotlight"
              title="Recent Programmes and Signals"
              desc="Newly supplied materials are placed as visual shortcuts, giving the homepage a stronger sense of currency without turning it into a cluttered news feed."
              compact
            />
            <Link href="/blog" className="btn-secondary mt-4 inline-flex">
              See Insights
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {spotlights.map((item, index) => (
              <Link key={item.title} href={item.href} className={`group relative min-h-[310px] overflow-hidden border border-slate-800 bg-black ${index === 0 ? "md:row-span-2 md:min-h-[645px]" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`${item.fit === "contain" ? "object-contain p-3" : "object-cover"} opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-blue-300 mb-3">
                    <FaNewspaper /> {item.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              kicker="Executive Education"
              title="CAEEP as a continental leadership pathway"
              desc="The Centre for Advanced Executive Education Programme deserves front-page visibility because it translates the archive from remembrance into active institutional capacity building."
              compact
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {caeepHighlights.map((item) => (
                <div key={item} className="border border-slate-800 bg-slate-950 px-5 py-4">
                  <p className="text-sm font-bold text-white leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/initiatives/caeep" className="btn-primary">
                Explore CAEEP <FaArrowRight />
              </Link>
              <Link href="/news/caeep-2026" className="btn-secondary">
                View 2026 Update
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative min-h-[520px] border border-slate-800 overflow-hidden bg-slate-950 md:row-span-2">
              <Image src="/spotlight/caeep-programme-retouched.png" alt="CAEEP courses and certifications" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="relative min-h-[250px] border border-slate-800 overflow-hidden bg-slate-950">
              <Image src="/spotlight/caeep-virtual-open-day-retouched.png" alt="CAEEP virtual open day" fill className="object-cover object-top" />
            </div>
            <div className="relative min-h-[250px] border border-slate-800 overflow-hidden bg-slate-950">
              <Image src="/spotlight/caeep-fees-overview.jpeg" alt="CAEEP fees and registration overview" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 border-y border-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <SectionHeader
                kicker="Human-Centred Leadership"
                title="Workers' Day as institutional culture"
                desc="A world-class archive should not only record policy achievements. It should show the leadership texture behind them: staff morale, cohesion, dignity of labour, and a workplace culture where people feel seen."
                compact
              />
            </div>
            <div className="lg:col-span-5">
              <div className="border border-slate-800 bg-black p-6">
                <p className="text-slate-400 leading-relaxed">
                  The May 2026 Workers' Day activities add a rare and valuable layer to the archive: Prof. Sulaiman as a culture-builder who connects institutional performance with staff wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cultureMoments.map((item) => (
              <div key={item.title} className="group border border-slate-800 bg-black overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-500 font-bold uppercase text-xs tracking-widest">Institutional Milestone</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-6">
              Bridging democracy through media, research, and executive education.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              From Democracy Radio 104.9 FM to LeCeSA and CAEEP, the archive should show permanent structures, not isolated events.
              This section connects visitors to the achievements that best explain the DG's institutional legacy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <MilestoneLink href="/library/democracy-radio-workshop" icon={<FaMicrophone />} title="Radio Archive" />
              <MilestoneLink href="/library/security-analysis-centre" icon={<FaGavel />} title="LeCeSA Hub" />
              <MilestoneLink href="/initiatives/caeep" icon={<FaHandshake />} title="CAEEP Initiative" />
              <MilestoneLink href="/library/women-in-governance" icon={<FaAward />} title="Women in Governance" />
            </div>
          </div>
          <div className="relative min-h-[440px] border border-slate-800 overflow-hidden bg-slate-950">
            <Image src="/1library-radio.jpg" alt="Democracy Radio archive" fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[10px] text-blue-300 uppercase tracking-[0.25em] font-black mb-2">Featured Legacy</p>
              <h3 className="text-3xl font-black text-white">Democracy Radio 104.9 FM</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionHeader
            kicker="Current Archive"
            title="Executive Briefings"
            desc="A cleaner briefing wall for latest programmes, global engagements, and national policy moments."
            compact
          />
          <div className="flex flex-wrap gap-3">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setActiveFilter(filterOption)}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all border ${
                  activeFilter === filterOption
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-800">
          {filteredBriefings.map((item) => (
            <Link key={item.title} href={item.href} className="group block border border-slate-800 p-6 hover:bg-slate-950 transition-colors">
              <div className="text-[10px] text-slate-500 tracking-[0.2em] mb-4 flex justify-between border-b border-slate-800 pb-2 uppercase">
                <span>{item.location}</span>
                <span className="text-blue-400">{item.category}</span>
              </div>
              <div className="relative h-44 w-full mb-6 border border-slate-800 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-6 text-slate-500 text-[10px] uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                Read briefing <span className="ml-2">-&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function SectionHeader({
  kicker,
  title,
  desc,
  compact = false,
}: {
  kicker: string
  title: string
  desc: string
  compact?: boolean
}) {
  return (
    <div className={compact ? "max-w-2xl" : "max-w-3xl mb-12"}>
      <p className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">{kicker}</p>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5">{title}</h2>
      <p className="text-slate-500 leading-relaxed text-lg">{desc}</p>
    </div>
  )
}

function MilestoneLink({ href, icon, title }: { href: string; icon: React.ReactNode; title: string }) {
  return (
    <Link href={href} className="group flex items-center justify-between gap-4 border border-slate-800 bg-slate-950 px-5 py-4 hover:border-blue-500/50 transition-all">
      <span className="flex items-center gap-3 text-sm font-bold text-slate-200">
        <span className="text-blue-400">{icon}</span>
        {title}
      </span>
      <FaArrowRight className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
    </Link>
  )
}
