import { motion } from 'framer-motion'

export default function Hero3D() {
    const handleScroll = () => {
        const nextSection = document.getElementById('timeline')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="h-screen w-full relative overflow-hidden flex items-center justify-center">
            <div className="text-center z-10 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
                >
                    Vijay Arvind
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-400"
                >
                    Software Engineer & Researcher
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
                onClick={handleScroll}
            >
                <div className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-widest">Explore Journey</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-px h-12 bg-gradient-to-b from-transparent via-current to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    )
}
