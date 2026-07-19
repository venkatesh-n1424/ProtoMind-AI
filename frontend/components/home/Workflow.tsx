"use client";

import { motion } from "framer-motion";

const steps = [
  "Upload Research Paper",
  "AI Understands the Paper",
  "Extract Methodology",
  "Find Public Datasets",
  "Generate Architecture",
  "Create Code Skeleton",
  "Build Development Roadmap",
  "Chat with the Paper",
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-black py-28 px-6"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Workflow
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            How It Works
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl text-gray-200">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}