"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        <Icon size={20} className="text-cyan-400" />
      </div>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>
    </motion.div>
  );
}