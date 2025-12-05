import { motion } from "framer-motion";
import { hackathonImages } from "../data/images";

export default function HackathonSection() {
    return (
        <section id="hackathons" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Hackathons</h2>

                    <p className="text-lg text-neutral-300 leading-relaxed">
                        During my undergraduate studies, I competed in several <span className="text-white font-semibold">National Level Hackathons</span> across India.
                        My teams consistently secured top finishes in these intense <span className="text-white font-semibold">36-hour</span> coding marathons.
                    </p>

                    <p className="text-lg text-neutral-300 leading-relaxed">
                        We built real-time systems under strict deadlines, finishing in the <span className="text-white font-semibold">top three</span> out of more than <span className="text-white font-semibold">one thousand teams</span>.
                        Projects included <span className="text-white font-medium">real-time weapon detection</span> and <span className="text-white font-medium">vehicle number plate recognition</span>.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {hackathonImages.slice(0, 4).map((img, i) => (
                        <div key={i} className="aspect-square bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 group">
                            <img
                                src={img}
                                alt={`Hackathon ${i + 1} `}
                                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
