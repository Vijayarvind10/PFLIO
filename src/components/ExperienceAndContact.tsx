import { ExternalLink } from 'lucide-react';

function ExperienceCard({ title, role, date, items, link }: { title: string, role: string, date?: string, items: string[], link?: string }) {
    return (
        <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        {title}
                        {link && <ExternalLink size={16} className="text-neutral-500" />}
                    </h3>
                    <div className="text-blue-400 font-medium text-sm mt-1">{role}</div>
                </div>
                {date && <span className="text-neutral-500 text-sm font-mono">{date}</span>}
            </div>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ExperienceAndContact() {
    return (
        <div className="space-y-16">
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 font-bold text-sm">3</div>
                    <h2 className="text-2xl font-bold text-white">Experience</h2>
                </div>

                <div className="space-y-4">
                    <ExperienceCard
                        title="Amazon Web Services (AWS)"
                        role="SDE Intern · RDS PostgreSQL"
                        items={[
                            "Built a Java fuzzer and distributed test runner for RDS PostgreSQL engine.",
                            "Surfaced 20+ engine defects in a distributed environment, improving system reliability."
                        ]}
                    />
                    <ExperienceCard
                        title="Samsung R&D"
                        role="Software Engineering Intern"
                        items={[
                            "Shipped C++ phoneme framework to 50M+ devices.",
                            "Optimized on-device speech recognition performance for low-power scenarios."
                        ]}
                    />
                    <ExperienceCard
                        title="UC Santa Cruz"
                        role="Teaching Assistant"
                        items={[
                            "TA for Analysis of Algorithms and Computer Systems.",
                            "Mentored 100+ graduate students in complex system design concepts."
                        ]}
                    />
                </div>
            </section>

            <section id="projects">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold text-sm">4</div>
                    <h2 className="text-2xl font-bold text-white">Selected Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ExperienceCard
                        title="EtherWatch"
                        role="High-Scale Metrics System"
                        items={["Handling 1M+ metrics per minute with distributed aggregation."]}
                        link="https://github.com/Vijayarvind10"
                    />
                    <ExperienceCard
                        title="UniverseOS"
                        role="Distributed Operating System"
                        items={["Microkernel architecture for distributed computing nodes."]}
                        link="https://github.com/Vijayarvind10"
                    />
                    <ExperienceCard
                        title="Secure Notes Vault 2.0"
                        role="Encrypted Storage"
                        items={["End-to-end encrypted notes with zero-knowledge architecture."]}
                        link="https://github.com/Vijayarvind10"
                    />
                </div>
            </section>
        </div>
    );
}
