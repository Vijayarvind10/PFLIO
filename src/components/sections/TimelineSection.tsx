import { useEffect, useRef } from 'react'
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timelineEvents = [
  {
    year: '2024 - 2026',
    title: 'MS in Computer Science',
    institution: 'University of California, Santa Cruz',
    type: 'education' as const,
    details: [
      {
        role: 'Software Development Engineer Intern',
        company: 'Amazon Web Services (AWS)',
        period: 'June 2025 - Sept 2025',
        location: 'East Palo Alto, USA',
      },
    ],
  },
  {
    year: '2020 - 2024',
    title: 'B.Tech in Computer Science',
    institution: 'SRM University',
    type: 'education' as const,
    details: [
      {
        role: 'Software Engineer Intern',
        company: 'Samsung Research',
        period: 'Nov 2022 - Sep 2023',
        location: 'Bengaluru, India',
      },
      {
        role: 'Research Intern',
        company: 'IIT Indore',
        period: 'Feb 2023 - Aug 2023',
        location: 'Indore, India',
      },
    ],
  },
]

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.timeline-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      })
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="timeline" className="py-32 px-6 md:px-12 max-w-5xl mx-auto relative">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-20 tracking-tight">
        My <span className="text-indigo-400">Journey</span>
      </h2>

      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-40 bottom-20 w-px">
        <div className="timeline-line w-full h-full bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent" />
      </div>

      <div className="space-y-20">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`timeline-card relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Node */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#030014] shadow-[0_0_20px_rgba(99,102,241,0.6)] z-10" />

            {/* Card */}
            <div className="ml-16 md:ml-0 md:w-1/2">
              <div
                className={`glass-card p-8 rounded-2xl ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}
              >
                <div
                  className={`flex items-center gap-3 text-indigo-400 mb-3 ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <GraduationCap size={18} />
                  <span className="font-bold text-sm">{event.year}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-neutral-400 mb-6 text-sm">{event.institution}</p>

                <div className="space-y-3">
                  {event.details.map((detail, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl bg-white/[0.02] border border-white/5 ${
                        index % 2 === 0 ? 'text-left' : 'text-right'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-2 text-white font-semibold text-sm mb-1 ${
                          index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <Briefcase size={13} className="text-indigo-400" />
                        {detail.company}
                      </div>
                      <div className="text-xs text-neutral-300 mb-2">{detail.role}</div>
                      <div
                        className={`flex items-center gap-4 text-[11px] text-neutral-500 ${
                          index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}
                      >
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

            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </section>
  )
}
