import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const panels = [
    {
        title: "What I like to build",
        content: [
            "I like building backend services and systems around databases and telemetry.",
            "I like infrastructure that helps other teams move faster.",
            "I like code that is easy to debug months later."
        ]
    },
    {
        title: "How I work",
        content: [
            "I prefer clear requirements and ownership of a problem from end to end.",
            "I care about correctness, observability, and performance.",
            "I document enough so that the next person can follow my changes."
        ]
    },
    {
        title: "Things I am proud of",
        content: [
            "Surfaced more than twenty engine defects in Amazon RDS PostgreSQL.",
            "Reduced environment setup time from about fifty minutes to less than five minutes.",
            "Deployed telemetry used across multiple engineering teams."
        ]
    }
]

function Panel({ data, index }: { data: any, index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? 100 : -100, 0])

    return (
        <section ref={ref} className="min-h-[80vh] flex items-center justify-center p-6 overflow-hidden">
            <motion.div
                style={{ opacity, x }}
                className="max-w-4xl w-full bg-neutral-900/30 border border-neutral-800 p-10 md:p-16 rounded-3xl backdrop-blur-sm"
            >
                <h3 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                    {data.title}
                </h3>
                <div className="space-y-6">
                    {data.content.map((text: string, i: number) => (
                        <p key={i} className="text-lg md:text-2xl text-neutral-300 leading-relaxed font-light">
                            {text}
                        </p>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default function StoryPanels() {
    return (
        <div id="experience" className="bg-black py-20">
            {panels.map((panel, i) => (
                <Panel key={i} data={panel} index={i} />
            ))}
        </div>
    )
}
