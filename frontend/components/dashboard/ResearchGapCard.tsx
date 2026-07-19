interface ResearchGapCardProps {
  gap: any;
}

export default function ResearchGapCard({
  gap,
}: ResearchGapCardProps) {
  if (!gap) return null;

  // Handle Gemini/API errors
  if (gap.status === "error") {
    return (
      <div className="rounded-2xl border border-red-500 bg-red-900/20 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          ⚠️ Unable to Generate Research Gap
        </h2>

        <p className="text-gray-300">
          {gap.message ||
            "Gemini API quota exceeded. Please wait a minute and try again."}
        </p>
      </div>
    );
  }

  const data = gap.data;

  if (!data) return null;

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        🔍 Research Gap Analysis
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-cyan-400">
            Identified Research Gaps
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.research_gaps?.map((gap: string, index: number) => (
              <li key={index}>{gap}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Limitations
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.limitations?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Future Work
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.future_work?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Novel Ideas
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.novel_ideas?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}