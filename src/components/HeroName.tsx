import { motion } from "framer-motion";

export default function HeroName() {
    return (
        <section className="mb-16 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                    Vijay Arvind Ramamoorthy
                </h1>
                <div className="flex items-center gap-3 text-lg md:text-xl text-neutral-400 font-light mb-8">
                    <span>Backend & Systems Engineer</span>
                    <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                    <span>MS CS, UC Santa Cruz</span>
                </div>

                <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl backdrop-blur-sm">
                    <p className="text-neutral-300 leading-relaxed text-lg">
                        I build high-scale distributed systems and secure backend infrastructure.
                        With a focus on performance and reliability, I've engineered solutions for
                        <span className="text-white font-medium mx-1">AWS</span> and
                        <span className="text-white font-medium mx-1">Samsung</span>,
                        impacting millions of devices and users.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
