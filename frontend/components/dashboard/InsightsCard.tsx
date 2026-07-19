"use client";

import SectionCard from "./SectionCard";
import { Brain } from "lucide-react";

const metrics = [
  ["Innovation Score", "91%"],
  ["Implementation Difficulty", "Medium"],
  ["Dataset Availability", "Excellent"],
  ["Reproducibility", "High"],
  ["Deployment Ready", "87%"],
];

export default function InsightsCard() {
  return (
    <SectionCard
      title="AI Insights"
      subtitle="Implementation Assessment"
      icon={Brain}
      accent="from-violet-500 to-fuchsia-500"
    >
      <div className="space-y-4">
        {metrics.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-slate-800 pb-3"
          >
            <span className="text-slate-300">
              {label}
            </span>

            <span className="font-semibold text-cyan-400">
              {value}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}