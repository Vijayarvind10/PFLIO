import AnswerBlock from "./AnswerBlock";
import { ExternalLink } from 'lucide-react';

function ExperienceItem({ title, role, date, items, link }: { title: string, role: string, date?: string, items: string[], link?: string }) {
    return (
        <div className="mb-6 last:mb-0">
            <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-bold text-neutral-200 flex items-center gap-2">
                    {title}
                    {link && <a href={link} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} className="text-neutral-500 hover:text-blue-400" /></a>}
                </h3>
                {date && <span className="text-xs text-neutral-500 font-mono">{date}</span>}
            </div>
            <div className="text-blue-400 text-sm font-medium mb-2">{role}</div>
            <ul className="space-y-1">
                {items.map((item, i) => (
                    <li key={i} className="text-neutral-300 text-base leading-relaxed pl-4 border-l-2 border-neutral-800">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ExperienceAndContact() {
    return (
        <div className="space-y-8">
            <AnswerBlock title="Professional Experience">
                <ExperienceItem
                    title="Amazon Web Services (AWS)"
                    role="SDE Intern · RDS PostgreSQL"
                    items={[
                        "Built a Java fuzzer and distributed test runner for RDS PostgreSQL engine.",
                        "Surfaced 20+ engine defects in a distributed environment, improving system reliability."
                    ]}
                />
                <ExperienceItem
                    title="Samsung R&D"
                    role="Software Engineering Intern"
                    items={[
                        "Shipped C++ phoneme framework to 50M+ devices.",
                        "Optimized on-device speech recognition performance for low-power scenarios."
                    ]}
                />
                <ExperienceItem
                    title="UC Santa Cruz"
                    role="Teaching Assistant"
                    items={[
                        "TA for Analysis of Algorithms and Computer Systems.",
                        "Mentored 100+ graduate students in complex system design concepts."
                    ]}
                />
            </AnswerBlock>

            <AnswerBlock title="Selected Projects">
                <div className="grid grid-cols-1 gap-6">
                    <ExperienceItem
                        title="EtherWatch"
                        role="High-Scale Metrics System"
                        items={["Handling 1M+ metrics per minute with distributed aggregation."]}
                        link="https://github.com/Vijayarvind10"
                    />
                    <ExperienceItem
                        title="UniverseOS"
                        role="Distributed Operating System"
                        items={["Microkernel architecture for distributed computing nodes."]}
                        link="https://github.com/Vijayarvind10"
                    />
                    <ExperienceItem
                        title="Secure Notes Vault 2.0"
                        role="Encrypted Storage"
                        items={["End-to-end encrypted notes with zero-knowledge architecture."]}
                        link="https://github.com/Vijayarvind10"
                    />
                </div>
            </AnswerBlock>
        </div>
    );
}
