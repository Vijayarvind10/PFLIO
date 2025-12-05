import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function OpenSourceSection() {
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
                    <div className="space-y-2">
                        <p><span className="text-green-400">$</span> pip install universeos</p>
                        <p className="text-neutral-500">Downloading universeos-0.1.0...</p>
                        <p className="text-neutral-500">Successfully installed universeos-0.1.0</p>
                        <p><span className="text-green-400">$</span> python</p>
                        <p><span className="text-blue-400">&gt;&gt;&gt;</span> import universeos</p>
                        <p><span className="text-blue-400">&gt;&gt;&gt;</span> agent = universeos.Agent()</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
