import { motion } from "framer-motion";

interface SourceItem {
    image: string;
    title: string;
    domain?: string;
}

export default function SourcesBlock({ items }: { items: SourceItem[] }) {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-white font-medium">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400">
                    <path d="M4 6H20M4 12H20M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Sources</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-40 md:w-48 group cursor-pointer"
                    >
                        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 relative mb-2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                        </div>
                        <div className="px-1">
                            <div className="text-xs text-neutral-300 font-medium truncate">{item.title}</div>
                            <div className="text-[10px] text-neutral-500 flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                                {item.domain || "Portfolio"}
                                <span className="text-neutral-600">·</span>
                                {i + 1}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
