import { motion } from 'framer-motion'

const stats = [
    { value: "3", label: "National Hackathon Wins" },
    { value: "50M+", label: "Devices running my code" },
    { value: "7+", label: "Startups using UniverseOS" },
    { value: "20+", label: "Engine defects surfaced in RDS" },
    { value: "1M+", label: "Metrics/min handled" },
    { value: "10+", label: "Major projects shipped" }
]

export default function StatsGrid() {
    return (
        <section id="projects" className="py-32 px-4 bg-neutral-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">Impact by the Numbers</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors"
                        >
                            <span className="text-4xl md:text-6xl font-bold text-white mb-2 block">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base text-neutral-400 uppercase tracking-wider font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
