import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { awsImages } from "../data/images";

export default function AwsSection() {
    return (
        <section id="aws" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Amazon Web Services</h2>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl text-blue-400 font-medium">Software Development Engineer Intern</h3>
                        <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                            <MapPin size={14} />
                            <span>East Palo Alto, USA</span>
                        </div>
                    </div>

                    <ul className="space-y-4 text-neutral-300 leading-relaxed">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Designed and implemented a <span className="text-white font-medium">Chaos Engineering</span> framework to test system resilience.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Surfaced <span className="text-white font-medium">20+ engine defects</span> in a distributed environment.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Reduced setup time by <span className="text-white font-medium">94%</span> (30 mins to 2 mins) by automating package installation.</span>
                        </li>
                    </ul>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                        <div>
                            <div className="text-3xl font-bold text-white">20<span className="text-blue-500">+</span></div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">Defects Found</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">1M<span className="text-blue-500">+</span></div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">Metrics/Min</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    {awsImages.map((image, index) => (
                        <div key={index} className="relative group">
                            <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                                <img src={image} alt={`AWS ${index + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
