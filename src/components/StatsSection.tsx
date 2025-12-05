import { motion } from "framer-motion";

const stats = [
    { label: "Hackathon Wins", value: "3", suffix: "" },
    { label: "Devices Impacted", value: "50", suffix: "M+" },
    { label: "Defects Found", value: "20", suffix: "+" },
    { label: "Metrics/Min", value: "1", suffix: "M+" },
    { label: "Startups", value: "7", suffix: "+" },
    { label: "Projects", value: "10", suffix: "+" },
];

export default function StatsSection() {
    return (
        <section id="stats" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-sm bg-black/20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {stat.value}<span className="text-blue-500 text-2xl">{stat.suffix}</span>
                        </div>
                        <div className="text-sm text-neutral-500 font-medium uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
