import { motion } from "framer-motion";

export default function HackathonSummary() {
    return (
        <section className="py-20 bg-neutral-950 text-white flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl text-center space-y-6"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Hackathon Wins
                </h2>
                <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                    During my undergrad I competed in national level hackathons across India.
                    My teams won three events (KLEOS, HACKWHEEL, HACKSUMMIT 3.0), finishing
                    in the top three out of more than one thousand teams. We built live systems
                    in a weekend, including real time weapon detection and vehicle number plate recognition.
                </p>
            </motion.div>
        </section>
    );
}
