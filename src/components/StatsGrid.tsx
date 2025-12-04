import { motion } from 'framer-motion'

const stats = [
    { label: 'National Hackathon Wins', value: '3' },
    { label: 'Devices Running Phoneme Framework', value: '50M+' },
    { label: 'Engine Defects Surfaced in RDS', value: '20+' },
    { label: 'Metrics/Min Handled by EtherWatch', value: '1M+' },
    { label: 'Startups Using UniverseOS', value: '7+' },
    { label: 'Backend & Systems Projects Shipped', value: '10+' },
]

export default function StatsGrid() {
    return (
        <section className="py-20 bg-black text-white border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-neutral-400 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
