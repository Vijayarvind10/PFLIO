import { motion } from "framer-motion";

export default function HeroName() {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center z-10"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                    Vijay Arvind<br />Ramamoorthy
                </h1>
                <p className="text-xl md:text-3xl text-neutral-400 font-light tracking-wide">
                    Backend and systems engineer <span className="mx-2 text-neutral-600">·</span> MS CS, UC Santa Cruz
                </p>
            </motion.div>
        </section>
    );
}
