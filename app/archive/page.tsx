import Image from "next/image"
import Link from "next/link"

export default function ArchiveLandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

      {/* HEADER */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-300">
          The Digital Archive of Professor Abubakar Olanrewaju Sulaiman
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          A curated record of leadership, scholarship, reform, and institutional innovation.
        </p>
      </section>

      {/* --- YOUR EXISTING SECTIONS REMAIN HERE --- */}

      {/* KEY INNOVATIONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-200">Key Innovations</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* CAEEP CARD */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 space-y-3">
            <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/caeep-thumb.jpg"
                alt="CAEEP Thumbnail"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-blue-300">
              Centre for Advanced Executive Education Programme (CAEEP)
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              A flagship executive education programme strengthening leadership capacity across Africa.
            </p>

            <Link
              href="/initiatives/caeep"
              className="inline-block mt-1 text-blue-400 hover:text-blue-300 text-sm"
            >
              Learn more →
            </Link>
          </div>

          {/* --- YOUR OTHER INNOVATION CARDS REMAIN HERE --- */}

        </div>
      </section>

    </div>
  )
}
