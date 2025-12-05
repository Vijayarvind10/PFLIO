import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { samsungImages } from "../data/images";

export default function SamsungSection() {
    return (
        <section id="samsung" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div className="order-2 md:order-1 space-y-6">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Samsung R&D</h2>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl text-blue-400 font-medium">Software Engineer</h3>
                        <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                            <MapPin size={14} />
                            <span>Bengaluru, India</span>
                        </div>
                    </div>

                    <ul className="space-y-4 text-neutral-300 leading-relaxed">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Developed on-device AI features for Galaxy devices using C++ and Android.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Shipped to <span className="text-white font-medium">50M+ devices</span>, optimizing performance for low-power scenarios.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Improved CI/CD pipeline efficiency by <span className="text-white font-medium">15%</span> through parallel test execution.</span>
                        </li>
                    </ul>

                    <div className="pt-6 border-t border-white/5">
                        <div>
                            <div className="text-3xl font-bold text-white">50M<span className="text-blue-500">+</span></div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">Devices Impacted</div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 relative group">
                    <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                        {samsungImages[0] && <img src={samsungImages[0]} alt="Samsung" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
