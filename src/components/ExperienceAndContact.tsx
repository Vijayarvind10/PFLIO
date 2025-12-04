import { Mail, Linkedin, Github, FileText } from 'lucide-react';

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-neutral-800 pb-4">{title}</h3>
            <div className="space-y-8">
                {children}
            </div>
        </div>
    );
}

function Card({ title, subtitle, items, link }: { title: string, subtitle?: string, items?: string[], link?: string }) {
    return (
        <div className="group">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {link ? <a href={link} target="_blank" rel="noopener noreferrer">{title} ↗</a> : title}
                </h4>
                {subtitle && <span className="text-neutral-500 text-sm">{subtitle}</span>}
            </div>
            {items && (
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ExperienceAndContact() {
    return (
        <section className="py-20 bg-black text-neutral-300 px-6">
            <div className="max-w-3xl mx-auto">

                <Section title="Experience">
                    <Card
                        title="Amazon Web Services (AWS)"
                        subtitle="SDE Intern · RDS PostgreSQL"
                        items={[
                            "Built a Java fuzzer and distributed test runner for RDS PostgreSQL.",
                            "Surfaced 20+ engine defects in a distributed environment."
                        ]}
                    />
                    <Card
                        title="Samsung R&D"
                        subtitle="Software Engineering Intern"
                        items={[
                            "Shipped C++ phoneme framework to 50M+ devices.",
                            "Optimized on-device speech recognition performance."
                        ]}
                    />
                    <Card
                        title="UC Santa Cruz"
                        subtitle="Teaching Assistant"
                        items={[
                            "TA for Analysis of Algorithms and Computer Systems.",
                            "Mentored 100+ graduate students."
                        ]}
                    />
                </Section>

                <Section title="Selected Projects">
                    <Card
                        title="EtherWatch"
                        subtitle="High-Scale Metrics System"
                        items={["Handling 1M+ metrics per minute with distributed aggregation."]}
                        link="https://github.com/Vijayarvind10"
                    />
                    <Card
                        title="UniverseOS"
                        subtitle="Distributed Operating System"
                        items={["Microkernel architecture for distributed computing nodes."]}
                        link="https://github.com/Vijayarvind10"
                    />
                    <Card
                        title="Secure Notes Vault 2.0"
                        subtitle="Encrypted Storage"
                        items={["End-to-end encrypted notes with zero-knowledge architecture."]}
                        link="https://github.com/Vijayarvind10"
                    />
                </Section>

                <Section title="Contact">
                    <div className="flex flex-wrap gap-6">
                        <a href="mailto:vijayarvind27@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={20} /> vijayarvind27@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/vijayarvind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a href="https://github.com/Vijayarvind10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Github size={20} /> GitHub
                        </a>
                        <a href={import.meta.env.BASE_URL + "resume.pdf"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <FileText size={20} /> Resume
                        </a>
                    </div>
                </Section>

            </div>
        </section>
    );
}
