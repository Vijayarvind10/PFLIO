import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
    {
        year: "2024 - 2026",
        title: "MS in Computer Science",
        institution: "University of California, Santa Cruz",
        type: "education",
        details: [
            {
                role: "Software Development Engineer Intern",
                company: "Amazon Web Services (AWS)",
                period: "June 2025 - Sept 2025",
                location: "East Palo Alto, USA"
            }
        ]
    },
    {
        year: "2020 - 2024",
        title: "B.Tech in Computer Science",
        institution: "SRM University",
        type: "education",
        details: [
            {
                role: "Software Engineer Intern",
                company: "Samsung Research",
                period: "Nov 2022 - Sep 2023",
                location: "Bengaluru, India"
            },
            {
                role: "Research Intern",
                company: "IIT Indore",
                period: "Feb 2023 - Aug 2023",
                location: "Indore, India"
            }
        ]
    }
];

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />

            <div className="space-y-24">
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10" />

                        {/* Content Card */}
                        <div className="ml-12 md:ml-0 md:w-1/2">
                            <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                }`}>
                                <div className={`flex items-center gap-3 text-blue-400 mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                    }`}>
                                    <GraduationCap size={20} />
                                    <span className="font-bold">{event.year}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                                <p className="text-neutral-400 mb-6">{event.institution}</p>

                                {/* Nested Internships */}
                                <div className="space-y-4">
                                    {event.details.map((detail, i) => (
                                        <div key={i} className={`p-4 rounded-xl bg-black/40 border border-white/5 ${index % 2 === 0 ? "text-left" : "text-right"
                                            }`}>
                                            <div className={`flex items-center gap-2 text-white font-semibold mb-1 ${index % 2 === 0 ? "justify-start" : "justify-end"
                                                }`}>
                                                <Briefcase size={14} className="text-blue-400" />
                                                {detail.company}
                                            </div>
                                            <div className="text-sm text-neutral-300 mb-2">{detail.role}</div>
                                            <div className={`flex items-center gap-4 text-xs text-neutral-500 ${index % 2 === 0 ? "justify-start" : "justify-end"
                                                }`}>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={10} />
                                                    {detail.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={10} />
                                                    {detail.location}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Spacer for the other side */}
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
