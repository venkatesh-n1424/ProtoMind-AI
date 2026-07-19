interface SummaryCardProps {
  summary: any;
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  if (!summary) return null;

  // Handle Gemini/API errors
  if (summary.status === "error") {
    return (
      <div className="rounded-2xl border border-red-500 bg-red-900/20 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          ⚠️ Unable to Generate Summary
        </h2>

        <p className="text-gray-300">
          {summary.message ||
            "Gemini API quota exceeded. Please wait a minute and try again."}
        </p>
      </div>
    );
  }

  const data = summary.data;

  if (!data) return null;

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        📄 Paper Summary
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="font-semibold text-cyan-400">
            Summary
          </h3>

          <p className="mt-2 text-gray-300 leading-7">
            {data.summary}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Objective
          </h3>

          <p className="mt-2 text-gray-300 leading-7">
            {data.objective}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Key Contributions
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.contributions?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Applications
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.applications?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}