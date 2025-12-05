import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { label: "Hackathon Wins", value: 3, suffix: "", duration: 2 },
    { label: "Devices Impacted", value: 50, suffix: "M+", duration: 2.5 },
    { label: "Defects Found", value: 20, suffix: "+", duration: 2 },
    { label: "Metrics/Min", value: 1, suffix: "M+", duration: 2 },
    { label: "Startups", value: 7, suffix: "+", duration: 2 },
    { label: "Projects", value: 10, suffix: "+", duration: 2 },
];

function CountUp({ end, duration, suffix }: { end: number, duration: number, suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section id="stats" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                            <CountUp end={stat.value} duration={stat.duration} suffix={stat.suffix} />
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
