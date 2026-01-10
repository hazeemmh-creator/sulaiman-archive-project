import Image from "next/image"
import Link from "next/link"

export default function StrategicPlanningMeetingPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      {/* Banner */}
      <div className="relative mb-10">
        <Image
          src="/library-meeting.jpg"
          alt="Strategic Planning Meeting Banner"
          width={1600}
          height={500}
          className="rounded-xl shadow-2xl object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-400 mb-4">
        NILDS Strategic Planning Meeting
      </h1>

      <p className="text-gray-300 text-lg mb-6">
        The engine room of NILDS’ policy direction, research priorities, and institutional strategy — 
        aligning the Institute’s mandate with the evolving needs of the National Assembly and Nigeria’s democracy.
      </p>

      {/* 1. Strategic Horizon */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        1. The Current Strategic Horizon (2024–2028)
      </h2>

      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          Following the conclusion of the 2019–2023 strategic cycle, NILDS is now operating under a 
          new <strong>Strategic Plan (2024–2028)</strong>. The plan focuses on strengthening institutional capacity, 
          deepening democratic consolidation, and accelerating digital transformation.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pillar 1 — Institutional Capacity Building:</strong> Enhancing the technical skills of lawmakers 
            and over 700 National Assembly staff undergoing digitized training.
          </li>
          <li>
            <strong>Pillar 2 — Democratic Consolidation:</strong> Expanding NILDS’ role beyond legislative research 
            to broader democratic advocacy, including the Elite Consensus Project.
          </li>
          <li>
            <strong>Pillar 3 — Digital Transformation:</strong> Establishing NILDS as a “Smart Institute” through 
            AI integration and expansion of the DSpace Digital Repository.
          </li>
        </ul>
      </div>

      {/* 2. Notable Meetings */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        2. Notable Meetings & Retreats (2025)
      </h2>

      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          Strategic Planning Meetings are held periodically to align NILDS’ research, training, and 
          institutional priorities with national democratic needs.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>The Elite Consensus Presentation (December 18, 2025):</strong>  
            A landmark session where NILDS presented its National Survey Report on Elite Consensus, 
            laying the groundwork for the 2026 National Summit.
          </li>
          <li>
            <strong>Internal Strategy Retreats:</strong>  
            Focused on refining NILDS’ research agenda, strengthening partnerships, and improving 
            institutional performance metrics.
          </li>
          <li>
            <strong>Legislative Harmonization Sessions:</strong>  
            Collaboration with State Assemblies to standardize parliamentary procedures nationwide.
          </li>
        </ul>
      </div>

      {/* 3. Strategic Importance */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        3. Strategic Importance of the Meetings
      </h2>

      <p className="text-gray-300 leading-relaxed mb-6">
        These meetings ensure that NILDS remains responsive, forward‑thinking, and aligned with 
        Nigeria’s democratic trajectory. They serve as the foundation for policy innovation, 
        institutional reforms, and evidence‑based legislative support.
      </p>

      {/* Summary Table */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        Summary of Strategic Priorities (2024–2028)
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left text-gray-300 border border-gray-700 rounded-lg">
          <thead className="bg-gray-800 text-blue-300">
            <tr>
              <th className="p-3">Priority Area</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr>
              <td className="p-3 font-semibold">Capacity Building</td>
              <td className="p-3">Training lawmakers & 700+ National Assembly staff</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Democratic Consolidation</td>
              <td className="p-3">Elite Consensus Project & national democratic reforms</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Digital Transformation</td>
              <td className="p-3">AI integration & expansion of the Digital Repository</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Gallery */}
      <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
        Meeting Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Image
          src="/library-meeting.jpg"
          alt="Strategic Meeting Photo"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        <Image
          src="/library-conference.jpg"
          alt="Planning Session"
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