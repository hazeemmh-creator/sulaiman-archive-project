import Image from "next/image"
import Link from "next/link"

export default function LegislativeConferencePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      {/* Banner */}
      <div className="relative mb-10">
        <Image
          src="/library-conference.jpg"
          alt="Legislative Conference Banner"
          width={1600}
          height={500}
          className="rounded-xl shadow-2xl object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        NILDS Legislative Conferences & Parliamentary Summits
      </h1>

      <p className="text-gray-300 text-lg mb-6">
        High-level convenings that shape national discourse, strengthen parliamentary diplomacy, 
        and drive legislative reforms across Nigeria and the African continent.
      </p>

      {/* 1. National Legislative Conference 2024 */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        1. The National Legislative Conference (2024)
      </h2>

      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          The most recent flagship conference was held on <strong>November 27, 2024</strong> at the 
          NILDS Auditorium in Abuja. It brought together lawmakers, policy experts, and 
          development partners to address critical national issues.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Theme:</strong> The role of the Legislature in national stability and power sector reforms.</li>
          <li><strong>Key Attendees:</strong> Senator Enyinnaya Abaribe, Prof. Abubakar O. Sulaiman, and other senior legislators.</li>
          <li><strong>Core Discussion:</strong> Bridging legislative committees with policy experts to resolve governance bottlenecks.</li>
        </ul>
      </div>

      {/* 2. International & Regional Summits */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        2. International & Regional Parliamentary Summits
      </h2>

      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          NILDS plays a leading role in strengthening parliamentary diplomacy across Africa through 
          major international conferences and summits.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Africa Legislative Summit (ALS):</strong> First held in 2013, bringing together delegates from 
            over 20 African countries to address conflict, insecurity, and underdevelopment.
          </li>
          <li>
            <strong>Women in Governance International Conference (2023):</strong> Focused on gender-sensitive legislation; 
            insights were integrated into the World Bank Gender Strategy (2024–2030).
          </li>
        </ul>
      </div>

      {/* 3. Strategic Reflection Conferences */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        3. Strategic “Reflection” Conferences (2025–2026)
      </h2>

      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          In late 2025, NILDS shifted its conference agenda toward national reflection and elite consensus-building.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Elite Consensus Summit (Q1 2026):</strong> Based on a national survey report presented in December 2025, 
            addressing State Police, Revenue Allocation, and Ethno-Federalism.
          </li>
          <li>
            <strong>Legislative Harmonization Workshop (March 2025):</strong> Standardizing Standing Orders across all 36 State Assemblies.
          </li>
        </ul>
      </div>

      {/* 4. Key Features of NILDS Conferences */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        4. Key Features of NILDS Legislative Conferences
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left text-gray-300 border border-gray-700 rounded-lg">
          <thead className="bg-gray-800 text-blue-300">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr>
              <td className="p-3 font-semibold">Evidence-Based</td>
              <td className="p-3">Conferences begin with commissioned papers or national survey reports.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Multilateral</td>
              <td className="p-3">Co-sponsored by partners like KAS, UNDP, and UN Women.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Legislative Induction</td>
              <td className="p-3">Massive induction conferences for newly elected lawmakers after general elections.</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Outputs</td>
              <td className="p-3">Each conference produces a Communiqué submitted to the National Assembly leadership.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Summary Table of Recent Events */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        5. Summary of Recent Major Events
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left text-gray-300 border border-gray-700 rounded-lg">
          <thead className="bg-gray-800 text-blue-300">
            <tr>
              <th className="p-3">Event Date</th>
              <th className="p-3">Conference Name</th>
              <th className="p-3">Key Focus</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr>
              <td className="p-3">Nov 2024</td>
              <td className="p-3">National Legislative Conference</td>
              <td className="p-3">Power sector & administrative efficiency</td>
            </tr>
            <tr>
              <td className="p-3">March 2025</td>
              <td className="p-3">State Legislatures Workshop</td>
              <td className="p-3">Harmonizing Standing Orders</td>
            </tr>
            <tr>
              <td className="p-3">Dec 2025</td>
              <td className="p-3">National Survey Presentation</td>
              <td className="p-3">Elite Consensus groundwork</td>
            </tr>
            <tr>
              <td className="p-3">Q1 2026</td>
              <td className="p-3">National Summit on Elite Consensus</td>
              <td className="p-3">Reforms on State Police & Revenue Allocation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Gallery */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        Conference Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Image
          src="/library-conference3.jpg"
          alt="Legislative Conference Photo"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/library-meeting.jpg"
          alt="Workshop Session"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <Link
          href="/library"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ← Back to Library
        </Link>
      </div>

    </div>
  )
}