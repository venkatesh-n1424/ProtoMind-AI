"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Dashboard from "@/components/dashboard/Dashboard";
import { ArrowRight, Sparkles } from "lucide-react";
import UploadArea from "@/components/upload/UploadArea";

export default function Hero() {
  const [analysis, setAnalysis] = useState<any>(null);

  // Once analysis is ready, replace the landing page with the dashboard
  if (analysis) {
    return (
      <main className="min-h-screen bg-[#09090B] pt-24">
        <Dashboard analysis={analysis} />
      </main>
    );
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] px-6 pt-24">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            AI Powered Research Engineer
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Turn Research Papers
            <br />
            Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Production AI Projects
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Upload any research paper and instantly generate implementation
            guidance using AI.
          </p>

          <button className="mt-10 flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400">
            Start Building
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <UploadArea onAnalysisComplete={setAnalysis} />
        </motion.div>

      </div>
    </section>
  );
}