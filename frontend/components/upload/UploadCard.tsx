"use client";

import { UploadCloud } from "lucide-react";

interface UploadCardProps {
  onClick: () => void;
}

export default function UploadCard({
  onClick,
}: UploadCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex h-72 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cyan-500/30 bg-white/5 transition hover:border-cyan-400 hover:bg-white/10"
    >
      <UploadCloud
        size={70}
        className="mb-6 text-cyan-400 transition group-hover:scale-110"
      />

      <h2 className="text-2xl font-bold">
        Upload Research Paper
      </h2>

      <p className="mt-3 text-gray-400">
        Drag & Drop PDF here
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Maximum size 50 MB
      </p>
    </button>
  );
}