import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { hackathonImages } from '../../data/images'

gsap.registerPlugin(ScrollTrigger)

export default function HackathonSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hack-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.hack-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hackathons" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hack-content space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Competitions
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Hackathons</h2>

          <p className="text-neutral-300 leading-relaxed">
            During my undergraduate studies, I competed in several{' '}
            <span className="text-white font-semibold">National Level Hackathons</span> across India.
            My teams consistently secured top finishes in these intense{' '}
            <span className="text-white font-semibold">36-hour</span> coding marathons.
          </p>

          <p className="text-neutral-300 leading-relaxed">
            We built real-time systems under strict deadlines, finishing in the{' '}
            <span className="text-white font-semibold">top three</span> out of more than{' '}
            <span className="text-white font-semibold">one thousand teams</span>. Projects included{' '}
            <span className="text-white font-medium">real-time weapon detection</span> and{' '}
            <span className="text-white font-medium">vehicle number plate recognition</span>.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div>
              <div className="text-3xl font-bold text-white">
                3<span className="text-amber-500">x</span>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">
                National Wins
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                1000<span className="text-amber-500">+</span>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">
                Teams Competed
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {hackathonImages.slice(0, 4).map((img, i) => (
            <div
              key={i}
              className="hack-image aspect-square rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] group relative"
            >
              <img
                src={img}
                alt={`Hackathon ${i + 1}`}
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
