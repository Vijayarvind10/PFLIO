import { motion } from "framer-motion";

export default function HeroName() {
    return (
        <section className="relative">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <img src="https://www.perplexity.ai/favicon.ico" alt="Perplexity" className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-neutral-400">Page</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                    Vijay Arvind Ramamoorthy
                </h1>

                <div className="flex items-center gap-3 text-sm text-neutral-400 mb-8 border-b border-neutral-800 pb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">V</div>
                        <span className="text-neutral-300 font-medium">Curated by Vijay</span>
                    </div>
                    <span>·</span>
                    <span>Backend & Systems Engineer</span>
                    <span>·</span>
                    <span>MS CS, UC Santa Cruz</span>
                </div>

                <div className="text-lg text-neutral-300 leading-relaxed font-light">
                    I build high-scale distributed systems and secure backend infrastructure.
                    With a focus on performance and reliability, I've engineered solutions for
                    <span className="text-white font-medium mx-1">AWS</span> and
                    <span className="text-white font-medium mx-1">Samsung</span>,
                    impacting millions of devices and users.
                </div>
            </motion.div>
        </section>
    );
}
