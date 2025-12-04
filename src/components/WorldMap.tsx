import { motion } from 'framer-motion'

const locations = [
    { name: 'Santa Cruz', x: 18, y: 38, label: 'UCSC' },      // Approx US West
    { name: 'East Palo Alto', x: 20, y: 40, label: 'AWS' },   // Approx US West
    { name: 'Mumbai', x: 68, y: 52, label: 'Kelos' },         // Approx India West
    { name: 'Bangalore', x: 70, y: 58, label: 'Samsung' },    // Approx India South
    { name: 'Chennai', x: 72, y: 56, label: 'SRM' },          // Approx India East
]

export default function WorldMap() {
    return (
        <section className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center py-20 relative overflow-hidden">
            <div className="text-center mb-12 z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Global Footprint</h2>
                <p className="text-neutral-400">From India to California</p>
            </div>

            <div className="relative w-full max-w-6xl aspect-[2/1] bg-neutral-900/30 rounded-3xl border border-neutral-800 p-4 md:p-10 backdrop-blur-sm">
                {/* Abstract World Map Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {/* Simple SVG World Map Silhouette */}
                    <svg viewBox="0 0 100 60" className="w-full h-full fill-neutral-600">
                        {/* Simplified continents shapes */}
                        <path d="M15,10 Q25,5 35,15 T50,15 T65,10 T80,15 T90,25 T80,45 T60,50 T40,45 T20,40 T10,25 Z" />
                        {/* Note: Real world map SVG path is very long. Using a placeholder shape or external SVG is better. 
                 For now, I will use a simple grid and dots to represent the "Systems" aesthetic the user likes.
             */}
                    </svg>
                </div>

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Map Container */}
                <div className="relative w-full h-full">
                    {/* We need a real map image or SVG. Since I cannot fetch external assets easily without risk, 
               I will use a high-quality dotted grid representation where the user can imagine the map, 
               OR I will use the locations to draw lines.
               
               Better approach: Use a background image of a world map if available, or just render the points 
               on a relative 0-100 coordinate system which I have approximated above.
           */}

                    {/* World Map Image (External URL for now, user can replace) */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                        alt="World Map"
                        className="absolute inset-0 w-full h-full object-contain opacity-30 invert"
                    />

                    {/* Location Markers */}
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="absolute flex flex-col items-center group cursor-pointer"
                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                        >
                            <div className="relative">
                                <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute inset-0 opacity-75" />
                                <div className="w-4 h-4 bg-blue-500 rounded-full relative border-2 border-black shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                            </div>

                            <div className="mt-4 bg-black/80 border border-neutral-800 px-3 py-1 rounded text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute top-full">
                                <span className="text-blue-400 font-bold">{loc.name}</span>
                                <span className="text-neutral-400 mx-1">·</span>
                                <span className="text-white">{loc.label}</span>
                            </div>

                            {/* Always visible label on mobile? */}
                            <span className="mt-2 text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                {loc.name}
                            </span>
                        </motion.div>
                    ))}

                    {/* Connecting Lines (Simple Arcs) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            transition={{ duration: 2, delay: 1 }}
                            d="M 20 40 Q 45 20 70 58" // Curve from US to Bangalore
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            transition={{ duration: 2, delay: 1.5 }}
                            d="M 70 58 L 72 56" // Bangalore to Chennai
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}
