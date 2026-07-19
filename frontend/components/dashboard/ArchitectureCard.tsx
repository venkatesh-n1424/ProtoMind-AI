"use client";

import SectionCard from "./SectionCard";
import {
    Network,
    Cpu,
    Database,
    Globe,
    ArrowDown
} from "lucide-react";

export default function ArchitectureCard() {

    return (

        <SectionCard
            title="AI Suggested Architecture"
            subtitle="Recommended system design"
            icon={Network}
            accent="from-cyan-500 to-blue-500"
        >

            <div className="space-y-4">

                <ArchitectureNode
                    icon={<Globe size={18} />}
                    title="Frontend"
                    tech="Next.js + Tailwind"
                />

                <Arrow />

                <ArchitectureNode
                    icon={<Cpu size={18} />}
                    title="Backend"
                    tech="FastAPI"
                />

                <Arrow />

                <ArchitectureNode
                    icon={<Database size={18} />}
                    title="AI Engine"
                    tech="Gemini API"
                />

                <Arrow />

                <ArchitectureNode
                    icon={<Network size={18} />}
                    title="Output"
                    tech="Dashboard + Prototype"
                />

            </div>

        </SectionCard>

    );

}

function Arrow() {

    return (
        <div className="flex justify-center">
            <ArrowDown className="text-slate-500" />
        </div>
    );

}

function ArchitectureNode({
    icon,
    title,
    tech
}: any) {

    return (

        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">

            <div className="flex items-center gap-3">

                <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                    {icon}
                </div>

                <div>

                    <h3 className="font-semibold text-white">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-400">
                        {tech}
                    </p>

                </div>

            </div>

        </div>

    );

}