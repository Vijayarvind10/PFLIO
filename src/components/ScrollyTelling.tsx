import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stories = [
    {
        id: 1,
        title: "Hackathon Wins",
        description: "Competing and winning at the highest level. From Aarush to national stages.",
        image: import.meta.env.BASE_URL + "aarush_hackathon.jpg",
        color: "from-purple-900/90"
    },
    {
        id: 2,
        title: "Building at Samsung",
        description: "Shipped C++ phoneme framework to 50M+ devices. Engineering at scale.",
        image: import.meta.env.BASE_URL + "kelos.png", // Using kelos.png as placeholder if samsung image missing, or maybe kelos is the samsung one? User said "in mumbar add kelos hackcaton", so kelos is hackathon. Let's use it for now.
        color: "from-blue-900/90"
    },
    {
        id: 3,
        title: "AWS RDS",
        description: "East Palo Alto. Surfacing engine defects and building distributed test runners.",
        image: import.meta.env.BASE_URL + "AWS.jpeg",
        color: "from-orange-900/90"
    },
    {
        id: 4,
        title: "UC Santa Cruz",
        description: "Masters in Computer Science. 4.0 GPA. Teaching Analysis of Algorithms.",
        image: import.meta.env.BASE_URL + "IMG_0204.jpeg",
        color: "from-yellow-900/90"
    },
    {
        id: 5,
        title: "Kelos Hackathon",
        description: "Mumbai. Another win, another problem solved.",
        image: import.meta.env.BASE_URL + "kelos.jpg",
        color: "from-red-900/90"
    },
    {
        id: 6,
        title: "EtherWatch & UniverseOS",
        description: "Systems that scale. Handling 1M+ metrics per minute.",
        image: import.meta.env.BASE_URL + "AWS_.jpeg",
        color: "from-green-900/90"
    }
]

function StorySection({ story }: { story: any, index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

    return (
        <section ref={ref} className="h-screen w-full relative overflow-hidden flex items-center justify-center snap-center">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${story.image}')` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${story.color} via-black/50 to-black`} />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-10 max-w-4xl px-6 text-center"
            >
                <h2 className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tighter">
                    {story.title}
                </h2>
                <p className="text-xl md:text-3xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                    {story.description}
                </p>
            </motion.div>
        </section>
    )
}

export default function ScrollyTelling() {
    return (
        <div className="bg-black">
            {stories.map((story, i) => (
                <StorySection key={story.id} story={story} index={i} />
            ))}
        </div>
    )
}
