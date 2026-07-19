interface RoadmapCardProps {
  roadmap: any;
}

export default function RoadmapCard({
  roadmap,
}: RoadmapCardProps) {
  if (!roadmap) return null;

  const data = roadmap.data;

  if (data?.status === "error") {
    return (
      <div className="rounded-2xl border border-red-700 bg-red-950 p-6">
        <h2 className="text-2xl font-bold text-red-300">
          🛣 Implementation Roadmap
        </h2>

        <p className="mt-4 text-red-200">
          {data.message}
        </p>
      </div>
    );
  }

  const phases =
    data?.roadmap ??
    data?.steps ??
    data?.phases ??
    [];

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        🛣 Implementation Roadmap
      </h2>

      <div className="space-y-4">
        {phases.map((step: any, index: number) => (
          <div
            key={index}
            className="rounded-xl bg-zinc-800 p-4"
          >
            <h3 className="font-semibold text-cyan-400">
              Phase {index + 1}
            </h3>

            <p className="mt-2 text-gray-300">
              {typeof step === "string"
                ? step
                : step.title ?? JSON.stringify(step)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}