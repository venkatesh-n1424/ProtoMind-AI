interface MethodologyCardProps {
  methodology: any;
}

export default function MethodologyCard({
  methodology,
}: MethodologyCardProps) {
  if (!methodology) return null;

  // Handle Gemini/API errors
  if (methodology.status === "error") {
    return (
      <div className="rounded-2xl border border-red-500 bg-red-900/20 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          ⚠️ Unable to Generate Methodology
        </h2>

        <p className="text-gray-300">
          {methodology.message ||
            "Gemini API quota exceeded. Please wait a minute and try again."}
        </p>
      </div>
    );
  }

  const data = methodology.data;

  if (!data) return null;

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        🔬 Methodology
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="font-semibold text-cyan-400">
            Overview
          </h3>

          <p className="mt-2 text-gray-300 leading-7">
            {data.methodology}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Workflow
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.workflow?.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Algorithms
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.algorithms?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Neural Networks
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.neural_networks?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Loss Functions
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.loss_functions?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Training Strategy
          </h3>

          <p className="mt-2 text-gray-300 leading-7">
            {data.training_strategy}
          </p>
        </div>

      </div>
    </div>
  );
}