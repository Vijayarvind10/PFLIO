import { motion } from "framer-motion";

export default function HeroText() {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-black text-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6">
                    Vijay Arvind<br />Ramamoorthy
                </h1>
                <p className="text-xl md:text-3xl text-gray-400 font-light tracking-wide">
                    Backend & Systems Engineer
                </p>
                <p className="text-sm md:text-base text-gray-500 mt-4">
                    MS CS at UC Santa Cruz
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 text-xs text-gray-600 uppercase tracking-widest"
            >
                Scroll to Explore
            </motion.div>
        </section>
    );
}
