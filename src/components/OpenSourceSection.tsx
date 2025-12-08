import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const terminalSteps = [
    { type: "command", text: "$ pip install universeos", delay: 0 },
    { type: "output", text: "Downloading universeos-0.1.0...", delay: 800 },
    { type: "output", text: "Successfully installed universeos-0.1.0", delay: 1200 },
    { type: "command", text: "$ python", delay: 2000 },
    { type: "python", text: ">>> import universeos", delay: 2800 },
    { type: "python", text: ">>> agent = universeos.Agent()", delay: 3400 },
    { type: "python", text: '>>> result = agent.run("Analyze sales data")', delay: 4200 },
    { type: "output", text: "🤖 Agent analyzing sales data...", delay: 5000 },
    { type: "output", text: "✓ Loaded 10,000 records", delay: 5800 },
    { type: "output", text: "✓ Computed metrics: Revenue +23%, Users +45%", delay: 6600 },
    { type: "output", text: "✓ Generated insights and visualization", delay: 7400 },
    { type: "success", text: "✨ Task completed in 2.3s", delay: 8200 },
];

export default function OpenSourceSection() {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        if (visibleLines < terminalSteps.length) {
            const nextStep = terminalSteps[visibleLines];
            const timer = setTimeout(() => {
                setVisibleLines((prev) => prev + 1);
            }, nextStep.delay);
            return () => clearTimeout(timer);
        }
    }, [visibleLines]);

    return (
        <section id="opensource" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Open Source</h2>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">UniverseOS</h3>
                        <p className="text-lg text-neutral-300 leading-relaxed">
                            A powerful Python SDK for building AI agents. Currently used by <span className="text-white font-semibold">7 startups</span> to power their autonomous workflows.
                        </p>

                        <a
                            href="https://pypi.org/project/universeos/0.1.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        >
                            View on PyPI <ExternalLink size={16} />
                        </a>
                    </div>
                </div>

                <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-8 font-mono text-sm text-neutral-400">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-xs">bash</span>
                    </div>
                    <div className="space-y-2 min-h-[300px]">
                        {terminalSteps.slice(0, visibleLines).map((step, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className={
                                    step.type === "command"
                                        ? "text-white"
                                        : step.type === "python"
                                            ? "text-white"
                                            : step.type === "success"
                                                ? "text-green-400 font-semibold"
                                                : "text-neutral-500"
                                }
                            >
                                {step.type === "command" && <span className="text-green-400">$</span>}
                                {step.type === "python" && <span className="text-blue-400">&gt;&gt;&gt;</span>}
                                {step.type === "command" || step.type === "python" ? ` ${step.text.split(" ").slice(1).join(" ")}` : step.text}
                            </motion.p>
                        ))}
                        {visibleLines < terminalSteps.length && (
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="inline-block w-2 h-4 bg-white"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
