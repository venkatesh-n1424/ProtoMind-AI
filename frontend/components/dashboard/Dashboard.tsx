"use client";

import { motion } from "framer-motion";

import SummaryCard from "./SummaryCard";
import MethodologyCard from "./MethodologyCard";
import ResearchGapCard from "./ResearchGapCard";
import DatasetCard from "./DatasetCard";
import RoadmapCard from "./RoadmapCard";

interface DashboardProps {
  analysis: any;
}

export default function Dashboard({ analysis }: DashboardProps) {
  if (!analysis) return null;

  const ai = analysis.ai_analysis ?? {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Paper Analysis
          </h1>

          <p className="mt-2 text-lg text-gray-400">
            AI-generated implementation insights.
          </p>
        </div>

        <div className="space-y-8">

          <SummaryCard summary={ai.summary} />

          <MethodologyCard methodology={ai.methodology} />

          <ResearchGapCard gap={ai.research_gap} />

          <DatasetCard datasets={ai.datasets} />

          {/* <RoadmapCard roadmap={ai.roadmap} /> */}

        </div>

      </div>
    </motion.div>
  );
}