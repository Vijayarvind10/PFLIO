import { motion } from "framer-motion";
import { ExternalLink, MapPin, FileText } from "lucide-react";

const publications = [
    {
        title: "End-to-End Optimized Pipeline for Prediction of Protein Folding Kinetics",
        authors: "Vijay Arvind R.",
        publisher: "IEEE",
        location: "Miami, Florida",
        link: "https://ieeexplore.ieee.org/document/10459799",
        description: "A deep learning approach to predict protein folding kinetics, crucial for understanding neuro-degenerative disorders."
    },
    {
        title: "Imbalanced Data Stream Classification using Dynamic Ensemble Selection",
        authors: "Vijay Arvind R.",
        publisher: "IEEE",
        location: "Canary Islands, Spain",
        link: "https://ieeexplore.ieee.org/document/10253212",
        description: "A novel framework integrating data pre-processing and dynamic ensemble selection for nonstationary drifting data streams."
    },
    {
        title: "Novel Deep Learning Pipeline for Automatic Weapon Detection",
        authors: "Vijay Arvind R.",
        publisher: "IEEE",
        location: "Fuji, Japan",
        link: "https://ieeexplore.ieee.org/abstract/document/10487762",
        description: "Real-time automatic weapon detection system using an ensemble of convolutional neural networks."
    }
];

export default function ResearchSection() {
    return (
        <section id="research" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <h2 className="text-4xl font-bold text-white tracking-tight">Research Publications</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {publications.map((pub, index) => (
                        <a
                            key={index}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 rounded-full">
                                    {pub.publisher}
                                </span>
                                <ExternalLink size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                {pub.title}
                            </h3>

                            <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
                                {pub.description}
                            </p>

                            <div className="space-y-2 text-xs text-neutral-500">
                                <div className="flex items-center gap-2">
                                    <FileText size={12} />
                                    <span className="truncate">{pub.authors}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={12} />
                                    <span>{pub.location}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
