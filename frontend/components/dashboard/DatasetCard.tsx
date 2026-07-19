interface DatasetCardProps {
  datasets: any;
}

export default function DatasetCard({
  datasets,
}: DatasetCardProps) {
  if (!datasets) return null;

  // Handle Gemini/API errors
  if (datasets.status === "error") {
    return (
      <div className="rounded-2xl border border-red-500 bg-red-900/20 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-400">
          ⚠️ Unable to Generate Dataset Information
        </h2>

        <p className="text-gray-300">
          {datasets.message ||
            "Gemini API quota exceeded. Please wait a minute and try again."}
        </p>
      </div>
    );
  }

  const data = datasets.data;

  if (!data) return null;

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        📊 Dataset Analysis
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="font-semibold text-cyan-400">
            Dataset Name
          </h3>

          <p className="mt-2 text-gray-300">
            {data.dataset_name}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Source
          </h3>

          <p className="mt-2 text-gray-300 break-all">
            {data.source}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Description
          </h3>

          <p className="mt-2 text-gray-300 leading-7">
            {data.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Features
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.features?.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-cyan-400">
            Preprocessing
          </h3>

          <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-300">
            {data.preprocessing?.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}