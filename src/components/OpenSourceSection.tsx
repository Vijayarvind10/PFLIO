import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const terminalSteps = [
    { type: "command", text: "$ pip install universeos", delay: 0 },
    { type: "output", text: "Successfully installed universeos-0.1.3", delay: 400 },
    { type: "command", text: "$ python", delay: 800 },
    { type: "python", text: ">>> from universeos import universe_shadow", delay: 1200 },
    { type: "python", text: ">>> @universe_shadow", delay: 1600 },
    { type: "python", text: '>>> def get_response(query): ...', delay: 2000 },
    { type: "python", text: '>>> result = get_response("Reset password?")', delay: 2400 },
    { type: "output", text: "→ PRIMARY: GPT-4 responding...", delay: 2900 },
    { type: "output", text: "→ SHADOW: Claude-3.5 (background)", delay: 3200 },
    { type: "output", text: "→ SHADOW: Custom model (background)", delay: 3500 },
    { type: "success", text: '✓ User sees: "Click Forgot Password..."', delay: 4000 },
    { type: "output", text: "📊 Logged: 3 responses, latency, cost", delay: 4500 },
    { type: "comment", text: "# Zero risk. Zero latency. Real data.", delay: 5200 },
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
                            A Python SDK for testing AI models with zero risk. Shadow production traffic to compare
                            GPT-4, Claude, and custom models. Used by <span className="text-white font-semibold">7 startups</span> to
                            optimize their AI costs and quality.
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
                                transition={{ duration: 0.2 }}
                                className={
                                    step.type === "command"
                                        ? "text-white"
                                        : step.type === "python"
                                            ? "text-white"
                                            : step.type === "success"
                                                ? "text-green-400 font-semibold"
                                                : step.type === "comment"
                                                    ? "text-blue-400 italic"
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
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-4 bg-white"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
