

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
        <section className="py-8 border-t border-neutral-800 mt-12">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">By the numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50 text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                            {stat.value}<span className="text-blue-400 text-lg">{stat.suffix}</span>
                        </div>
                        <div className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
