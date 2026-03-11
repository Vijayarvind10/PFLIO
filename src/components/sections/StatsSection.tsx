import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'Internships', value: 3, suffix: '', duration: 2 },
  { label: 'Hackathons Won', value: 3, suffix: '', duration: 2 },
  { label: 'Research Papers', value: 3, suffix: '', duration: 2 },
  { label: 'Devices Impacted', value: 50, suffix: 'M+', duration: 2.5 },
  { label: 'Defects Found', value: 20, suffix: '+', duration: 2 },
  { label: 'Startups Using My OS', value: 7, suffix: '', duration: 2 },
]

function CountUp({ end, duration, suffix, started }: { end: number; duration: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [end, duration, started])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => setStarted(true),
      })
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="stats" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass-card rounded-2xl p-10 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <CountUp end={stat.value} duration={stat.duration} suffix={stat.suffix} started={started} />
              </div>
              <div className="text-xs text-neutral-500 font-medium uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
