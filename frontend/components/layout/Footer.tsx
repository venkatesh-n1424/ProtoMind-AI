import Link from "next/link";
import { Mail, Sparkles, Globe } from "lucide-react";
export default function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-white/10 bg-black px-6 py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">
              PaperForge AI
            </h2>
          </div>

          <p className="mt-4 max-w-md text-gray-400">
            Transforming research papers into production-ready AI projects
            using autonomous AI agents.
          </p>
        </div>

        <div className="flex gap-5">
  <Link
    href="#"
    className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400"
  >
    <Globe size={20} />
  </Link>

  <Link
    href="#"
    className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-400"
  >
    <Mail size={20} />
  </Link>
</div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        © 2026 PaperForge AI. Built with Next.js, FastAPI & AI.
      </div>
    </footer>
  );
}