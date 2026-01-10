import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* Banner */}
      <div className="relative mb-8">
        <Image
          src="/projects-banner-v2.jpg"
          alt="Ribbon-cutting ceremony banner for Projects page"
          width={1600}
          height={600}
          className="rounded-xl shadow-2xl object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-400 mb-6">
        Major Projects & Initiatives
      </h1>

      {/* Projects List */}
      <ul className="list-disc pl-6 text-gray-200 space-y-4">
        <li><strong>Democracy Radio:</strong> A civic education platform broadcasting legislative insights and democratic values nationwide.</li>
        <li><strong>Security Analysis Centre:</strong> A research hub for policy development on national and regional security challenges.</li>
        <li><strong>Youth Parliament Initiative:</strong> Empowering young Nigerians through legislative simulations and civic training.</li>
        <li><strong>Legislative Internship Scheme:</strong> Providing hands-on experience for students in parliamentary processes and governance.</li>
        <li><strong>Digital Legislative Library:</strong> A centralized repository of bills, motions, and research for lawmakers and scholars.</li>
        <li><strong>Regional Parliamentary Exchange:</strong> Strengthening ECOWAS legislative cooperation and democratic capacity building.</li>
        <li><strong>GovTech Engagement Award:</strong> Recognized as Best Federal MDA in Digital Engagement by the Presidency in 2024.</li>
      </ul>

    </div>
  )
}
