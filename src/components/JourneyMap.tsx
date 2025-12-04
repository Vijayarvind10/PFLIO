import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'

const journeyData = [
    {
        id: 'chennai',
        city: 'Chennai',
        title: 'BTech in CSE',
        place: 'SRM Institute',
        points: [
            'Three national hackathon wins',
            'Graduated with distinction'
        ]
    },
    {
        id: 'bangalore',
        city: 'Bangalore',
        title: 'Software Engineer Intern',
        place: 'Samsung R&D',
        points: [
            'Shipped C++ phoneme framework',
            'Deployed on 50M+ devices'
        ]
    },
    {
        id: 'santacruz',
        city: 'Santa Cruz',
        title: 'MS in CSE',
        place: 'UC Santa Cruz',
        points: [
            'TA for Analysis of Algorithms',
            'GPA 4.0'
        ]
    },
    {
        id: 'epa',
        city: 'East Palo Alto',
        title: 'SDE Intern',
        place: 'AWS RDS',
        points: [
            'Built SQL fuzzing framework',
            'Reduced setup time by 90%'
        ]
    }
]

export default function JourneyMap() {
    const [selected, setSelected] = useState(journeyData[0])

    return (
        <section id="journey" className="min-h-screen bg-neutral-950 py-20 px-4 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-16 text-center">My Journey</h2>

            {/* Desktop Map View */}
            <div className="hidden md:flex w-full max-w-5xl relative h-[400px] items-center justify-between px-10">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-neutral-800 -z-0" />

                {journeyData.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelected(item)}
                        className={`relative z-10 flex flex-col items-center group transition-all duration-300 ${selected.id === item.id ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-6 h-6 rounded-full border-4 ${selected.id === item.id ? 'bg-white border-blue-500' : 'bg-neutral-900 border-neutral-600'} mb-4 transition-colors`} />
                        <span className="text-sm font-medium tracking-wider">{item.city}</span>
                    </button>
                ))}
            </div>

            {/* Selected Item Details */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="hidden md:block w-full max-w-2xl bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl backdrop-blur-sm mt-8"
                >
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{selected.title}</h3>
                            <p className="text-blue-400 font-medium">{selected.place}</p>
                        </div>
                        <MapPin className="text-neutral-600" />
                    </div>
                    <ul className="space-y-3">
                        {selected.points.map((point, i) => (
                            <li key={i} className="flex items-center text-neutral-300">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </AnimatePresence>

            {/* Mobile Vertical List */}
            <div className="md:hidden w-full max-w-md space-y-6">
                {journeyData.map((item) => (
                    <div key={item.id} className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                            <span className="text-sm text-neutral-400 uppercase tracking-wider">{item.city}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-blue-400 text-sm mb-4">{item.place}</p>
                        <ul className="space-y-2">
                            {item.points.map((point, i) => (
                                <li key={i} className="text-sm text-neutral-300 flex items-start">
                                    <span className="mr-2">•</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
