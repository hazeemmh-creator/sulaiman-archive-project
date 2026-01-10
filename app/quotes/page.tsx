import { FaQuoteLeft } from "react-icons/fa"
import Link from "next/link"

export default function QuotesPage() {
  const quotes = [
    {
      text: "True leadership is not merely holding office; it is the relentless pursuit of building institutions that outlast the individual.",
    },
    {
      text: "Leadership must be guided by service and trust, not self-interest.",
    },
    {
      text: "Democracy without legislative capacity is democracy without substance.",
    },
    {
      text: "Inclusion is not a favor — it is a necessity for national development.",
    },
    {
      text: "Policy must be research-driven and evidence-based.",
    },
    {
      text: "Human capital is the ultimate national asset.",
    },
    {
      text: "Institutions must outlive individuals.",
    },
    {
      text: "Democracy thrives when citizens understand the institutions that serve them.",
    },
    {
      text: "Security sector reform requires evidence, not assumptions.",
    },
    {
      text: "We will not renege on fishing out young talents for roles in nation-building.",
    },
    {
      text: "A nation’s progress is measured not only by its economy, but by the strength of its institutions.",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-8">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
        Leadership Reflections & Quotations
      </h1>
      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
        A curated collection of the guiding thoughts, principles, and philosophical anchors 
        that define <span className="text-blue-300 font-semibold">The Sulaiman Standard</span>.  
        These quotations reflect a lifetime of scholarship, public service, and institutional stewardship.
      </p>

      {/* QUOTES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-blue-400 transition-all"
          >
            <FaQuoteLeft className="text-blue-400 text-3xl mb-4" />
            <p className="text-gray-200 text-lg italic leading-relaxed">
              “{quote.text}”
            </p>
          </div>
        ))}
      </div>

      {/* BACK BUTTON */}
      <div className="mt-16 text-center">
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
