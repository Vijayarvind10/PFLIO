import { Plus } from 'lucide-react';

const stats = [
    { label: "Hackathon Wins", value: "3", suffix: "" },
    { label: "Devices Impacted", value: "50", suffix: "M+" },
    { label: "Defects Found", value: "20", suffix: "+" },
    { label: "Metrics/Min", value: "1", suffix: "M+" },
    { label: "Startups", value: "7", suffix: "+" },
    { label: "Projects", value: "10", suffix: "+" },
];

export default function StatsGrid() {
    return (
        <section className="mt-8 pt-8 border-t border-neutral-800">
            <div className="flex items-center gap-2 mb-4 text-white font-medium">
                <Plus size={20} className="text-neutral-400" />
                <span>Related</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 cursor-pointer transition-colors group">
                        <span className="text-neutral-300 text-sm font-medium group-hover:text-blue-400 transition-colors">{stat.label}</span>
                        <span className="text-neutral-500 text-sm">{stat.value}{stat.suffix}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
