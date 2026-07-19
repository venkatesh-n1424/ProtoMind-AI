"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Code2,
  Network,
  FileSearch,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Paper Analysis",
    description:
      "Extract methodology, datasets, objectives and contributions automatically.",
  },
  {
    icon: Brain,
    title: "Research Gap Detection",
    description:
      "Identify limitations, future scope and unexplored research opportunities.",
  },
  {
    icon: Database,
    title: "Dataset Recommendation",
    description:
      "Suggest public datasets perfectly matching the selected research paper.",
  },
  {
    icon: Network,
    title: "Architecture Generator",
    description:
      "Visualize AI pipelines and model architectures from the paper.",
  },
  {
    icon: Code2,
    title: "Prototype Generator",
    description:
      "Generate project folders, APIs and starter code within seconds.",
  },
  {
    icon: MessageSquare,
    title: "AI Paper Chat",
    description:
      "Ask questions about the paper and receive contextual answers instantly.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#09090B] py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-cyan-400 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            PaperForge AI transforms any research paper into an
            implementation-ready software project.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}