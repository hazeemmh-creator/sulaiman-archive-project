import Image from "next/image"
import Link from "next/link"
import { FaQuoteLeft, FaGlobeAfrica, FaUsers, FaUniversity, FaLightbulb } from "react-icons/fa"

export default function LeadershipRetrospectivePage() {
  return (
    <div className="max-w-5xl mx-auto p-8">

      {/* HERO */}
      <div className="relative mb-16 h-[60vh] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="/hero-nilds.jpg"
          alt="Leadership Retrospective Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Leadership Retrospective
          </h1>
          <p className="text-gray-200 text-lg mt-4 max-w-3xl drop-shadow-lg">
            A journey through the vision, philosophy, and institutional transformation 
            shaped by Prof. Abubakar Olanrewaju Sulaiman.
          </p>
        </div>
      </div>

      {/* EXECUTIVE VISION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Executive Vision</h2>

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <FaQuoteLeft className="text-blue-400 text-4xl mb-4" />
          <p className="text-gray-200 text-xl italic leading-relaxed">
            “True leadership is not merely holding office; it is the relentless pursuit of 
            building institutions that outlast the individual.”
          </p>
          <p className="text-blue-300 font-semibold mt-4">
            — Prof. Abubakar Olanrewaju Sulaiman
          </p>
        </div>

        <p className="text-gray-300 mt-8 leading-relaxed text-lg">
          This retrospective captures the intellectual depth, moral philosophy, and 
          institutional reforms that define <span className="text-blue-300 font-semibold">The Sulaiman Standard</span>.  
          Rooted in the principle of <span className="font-semibold text-blue-300">Amana (Trust)</span>, 
          his leadership emphasizes stewardship, integrity, and the belief that strong 
          institutions—not personalities—are the foundation of democratic stability.
        </p>
      </section>

      {/* PROFILE */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Profile of a Scholar–Statesman</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Core Identity</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Scholar–Statesman</li>
              <li>• Institution Builder</li>
              <li>• Policy Strategist</li>
              <li>• Democratic Reformer</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-200 mt-8 mb-3">Education</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Ph.D. International Relations — University of Abuja (2003)</li>
              <li>• M.Sc. Strategic Studies — University of Jos (1995)</li>
              <li>• B.Sc. Political Science — ABU Zaria (1990)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Professional Trajectory</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Nigeria Customs Service</li>
              <li>• Lecturer, University of Abuja</li>
              <li>• Minister of National Planning (2014–2015)</li>
              <li>• Director General, NILDS (2019–Present)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Leadership Philosophy: Amana</h2>

        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          At the heart of Prof. Sulaiman’s leadership is <span className="text-blue-300 font-semibold">Amana</span> — 
          the belief that public office is a sacred trust. His philosophy prioritizes institutional 
          continuity, ethical stewardship, and service-driven governance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaUsers className="text-blue-400 text-4xl mx-auto mb-3" />
            <h3 className="text-gray-200 font-semibold">Institutions Over Individuals</h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaLightbulb className="text-blue-400 text-4xl mx-auto mb-3" />
            <h3 className="text-gray-200 font-semibold">Evidence-Based Policy</h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaUniversity className="text-blue-400 text-4xl mx-auto mb-3" />
            <h3 className="text-gray-200 font-semibold">Human Capital First</h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaGlobeAfrica className="text-blue-400 text-4xl mx-auto mb-3" />
            <h3 className="text-gray-200 font-semibold">Inclusive Democracy</h3>
          </div>

        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Career Timeline (1990–2025)</h2>

        <div className="border-l border-gray-700 ml-4">
          {[
            { year: "1990", text: "B.Sc. Political Science, ABU Zaria" },
            { year: "1995", text: "M.Sc. Strategic Studies, University of Jos" },
            { year: "2003", text: "Ph.D. International Relations, University of Abuja" },
            { year: "2014", text: "Appointed Minister of National Planning" },
            { year: "2015", text: "Chair, Presidential Transition Technical Sub-Committee" },
            { year: "2019", text: "Appointed Director General, NILDS" },
            { year: "2020", text: "Launch of Democracy Radio" },
            { year: "2023", text: "Establishment of LeCeSA" },
            { year: "2025", text: "Publication of Women Representation in Governance" },
          ].map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 mt-1.5"></div>
              <h3 className="text-xl font-semibold text-blue-300">{item.year}</h3>
              <p className="text-gray-300 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEGACY STATEMENT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Legacy Statement</h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Prof. Abubakar O. Sulaiman’s legacy is the institutionalization of excellence.  
          By embedding academic rigor into governance and professionalizing legislative support,  
          he has redefined how democratic institutions can function in Nigeria and beyond.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mt-4">
          His work stands as a blueprint for future leaders — demonstrating that integrity, research,  
          and human investment can transform public institutions into enduring pillars of national development.
        </p>
      </section>

      {/* BACK BUTTON */}
      <div className="mt-12">
        <Link
          href="/"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ← Back to Home
        </Link>
      </div>

    </div>
  )
}
