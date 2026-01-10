"use client"
import Link from "next/link"
import Image from "next/image"
import { use } from "react" // New import for Next.js 15 compatibility
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaClock } from "react-icons/fa"

// THE DATA DICTIONARY
const posts = {
  // --- 1. EXISTING POSTS ---
  "nilds-anniversary-reflection": {
    title: "Reflecting on the NILDS Anniversary: A Journey of Growth",
    date: "March 15, 2025",
    category: "Institutional",
    author: "Prof. A.O. Sulaiman",
    readTime: "5 min read",
    image: "/blog-anniversary.jpg",
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        As we mark another year of institutional excellence, we must look back at the milestones that have defined our trajectory. 
        NILDS has evolved from a simple capacity-building unit into a continental powerhouse of legislative research.
      </p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">The Expansion of Mandate</h3>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        Our mandate has expanded beyond mere training. Today, we are the primary data resource for the National Assembly. 
        Through our new Department of Security Analysis (LeCeSA), we are providing real-time intelligence to lawmakers.
      </p>
      <div class="my-10 p-8 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl">
        <p class="italic text-xl text-blue-200 font-serif">
          "An institution that does not evolve is destined to become a monument to the past. NILDS is built for the future."
        </p>
      </div>
    `
  },
  "democracy-radio-launch": {
    title: "Why Democracy Radio Matters for Civic Engagement",
    date: "February 10, 2025",
    category: "Media & Tech",
    author: "Prof. A.O. Sulaiman",
    readTime: "4 min read",
    image: "/blog-radio.jpg",
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        Bridging the gap between the parliament and the people requires innovative platforms. Democracy Radio 104.9 FM is that bridge.
        For too long, legislative processes have felt distant to the average Nigerian.
      </p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">A Voice for the People</h3>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        This station is not just about broadcasting news; it is about education. We are breaking down complex bills into 
        language that the market woman, the student, and the driver can understand.
      </p>
    `
  },
  "security-analysis-lecesa": {
    title: "LeCeSA: Redefining Security Analysis in Nigeria",
    date: "January 22, 2025",
    category: "Security",
    author: "Dr. Adewale",
    readTime: "6 min read",
    image: "/blog-security.jpg",
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        Security is not just about boots on the ground; it is about intelligence and policy. The Legislative Centre for Security Analysis (LeCeSA) 
        was established to plug the knowledge gap in our security architecture.
      </p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">Data-Driven Oversight</h3>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        By providing data-driven insights, we ensure that legislative committees have the facts they need to appropriate funds correctly.
      </p>
    `
  },

  // --- 2. NEW LEGACY WALL POSTS (Fixes the 404s) ---
  
  "national-legislative-conference": {
    title: "The National Legislative Conference: Setting the Agenda",
    date: "October 12, 2024",
    category: "Policy Dialogue",
    author: "NILDS Press",
    readTime: "5 min read",
    image: "/theme-visionary-hero.jpg", // Uses existing hero as fallback
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        The National Legislative Conference stands as the premier gathering of legislative minds in West Africa. 
        Under the leadership of Prof. Sulaiman, it has evolved from a talk shop into a policy incubator.
      </p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">Key Outcomes</h3>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        This year's conference focused on 'Judicial and Legislative Synergy.' The resulting communiqué has already influenced three major amendment bills currently on the floor of the National Assembly.
      </p>
    `
  },

  "digital-transformation": {
    title: "The Paperless Parliament: Digitizing NASS",
    date: "November 05, 2025",
    category: "Infrastructure",
    author: "ICT Dept.",
    readTime: "4 min read",
    image: "/library-innovation.jpg", 
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        In the 21st century, a parliament cannot run on paper alone. The Digital Transformation initiative is retraining 700+ staff members in modern data management.
      </p>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        From e-voting systems to digital hansards, NILDS is leading the technical revolution that ensures our lawmakers have information at the speed of light.
      </p>
    `
  },

  "reappointment-dg": {
    title: "A Mandate Renewed: Reappointment as Director General",
    date: "May 20, 2023",
    category: "Leadership",
    author: "Office of the Senate President",
    readTime: "3 min read",
    image: "/bio-hero.jpg", 
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        The reappointment of Prof. Abubakar O. Sulaiman is a vote of confidence in his transformative leadership. 
        It signals a continuity of the 'Sulaiman Standard'—a commitment to academic rigor and institutional discipline.
      </p>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        "He has not just managed the Institute; he has reimagined it," stated the Senate President during the confirmation.
      </p>
    `
  },

  "uniben-convocation": {
    title: "9th NILDS-UNIBEN Convocation: Decade of Excellence",
    date: "December 10, 2025",
    category: "Academic",
    author: "Academic Division",
    readTime: "6 min read",
    image: "/library-uniben.jpg", 
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        For ten years, the NILDS-UNIBEN partnership has produced the technical backbone of the National Assembly. 
        The 9th Convocation celebrated over 100 postgraduates in Legislative Studies and Drafting.
      </p>
      <h3 class="text-2xl font-bold text-white mb-4 mt-10">Building Human Capital</h3>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        These graduates are not just degree holders; they are the drafters, analysts, and clerks who ensure the machinery of government runs smoothly.
      </p>
    `
  },
  
  "women-in-governance": {
    title: "Women in Governance: The Scientific Reader",
    date: "August 15, 2025",
    category: "Academic",
    author: "Research Unit",
    readTime: "8 min read",
    image: "/theme-visionary-hero.jpg", 
    content: `
      <p class="mb-6 text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left">
        This 800-page volume is the definitive text on gender inclusion in Nigerian politics. It moves beyond rhetoric to provide statistical analysis of the barriers women face.
      </p>
      <p class="mb-6 text-lg leading-relaxed text-slate-400">
        It has since become a reference material for the Committee on Women Affairs and Social Development.
      </p>
    `
  }
}

// Next.js 15 Fix: Types for params
type Params = Promise<{ slug: string }>

export default function BlogPost(props: { params: Params }) {
  // UNWRAP THE PARAMS (This fixes the error!)
  const params = use(props.params)
  const post = posts[params.slug as keyof typeof posts]

  // CUSTOM 404 IF POST NOT FOUND
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-800">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-white">Insight Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          The article you are looking for might have been moved or does not exist in the archives.
        </p>
        <p className="text-slate-600 text-xs mb-8 font-mono">
           Debug ID: {params.slug}
        </p>
        <Link href="/blog" className="px-8 py-3 bg-blue-600 rounded-full text-white font-bold hover:bg-blue-500 transition-colors">
          Return to Hub
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-slate-300 pb-20 selection:bg-blue-600/30">
      
      {/* NAV BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-blue-500 transition-all text-xs font-bold uppercase tracking-widest">
            <FaArrowLeft /> Back to Insights
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-6 text-xs text-blue-400 mb-8 font-mono uppercase tracking-wider">
            <span className="flex items-center gap-2 text-slate-400"><FaCalendarAlt /> {post.date}</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full"><FaTag /> {post.category}</span>
            <span className="flex items-center gap-2 text-slate-500"><FaClock /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 border-t border-slate-800 pt-8 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-lg">
              <FaUser />
            </div>
            <div>
              <p className="text-white text-sm font-bold">{post.author}</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black">Author</p>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-5xl mx-auto relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/10">
           <Image 
             src={post.image || "/theme-visionary-hero.jpg"} 
             alt={post.title} 
             fill 
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 pt-10">
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-500"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

    </div>
  )
}