"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  accent?: string;
  children: ReactNode;
}

export default function SectionCard({
  title,
  subtitle,
  icon: Icon,
  accent = "from-cyan-500 to-blue-500",
  children,
}: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl"
    >
      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${accent}`}
      />

      <div className="p-6">

        <div className="mb-6 flex items-center gap-4">

          <div
            className={`rounded-xl bg-gradient-to-br ${accent} p-3`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              {title}
            </h2>

            {subtitle && (
              <p className="text-sm text-slate-400">
                {subtitle}
              </p>
            )}

          </div>

        </div>

        <div className="space-y-4">
          {children}
        </div>

      </div>

    </motion.div>
  );
}