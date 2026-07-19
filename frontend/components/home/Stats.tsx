"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "100K+",
    label: "Research Papers",
  },
  {
    value: "6",
    label: "AI Agents",
  },
  {
    value: "<30s",
    label: "Average Analysis",
  },
  {
    value: "95%",
    label: "Automation",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] py-28 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Why PaperForge
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Built for AI Engineers
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent">
                {item.value}
              </h3>

              <p className="mt-4 text-lg text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}