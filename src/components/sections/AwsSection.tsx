import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { awsImages } from '../../data/images'

gsap.registerPlugin(ScrollTrigger)

export default function AwsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.aws-content', {
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
      gsap.from('.aws-images', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="aws" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aws-content space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Experience
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Amazon Web Services
          </h2>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg text-indigo-400 font-medium">
              Software Development Engineer Intern
            </h3>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <MapPin size={13} />
              <span>East Palo Alto, USA</span>
            </div>
          </div>

          <ul className="space-y-4 text-neutral-300 leading-relaxed text-sm">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Built a <span className="text-white font-medium">chaos engineering framework</span> to
                test system resilience by injecting failures (crashed nodes, network delays, resource
                exhaustion) into distributed systems.{' '}
                <span className="text-indigo-400">Now in production.</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Identified <span className="text-white font-medium">20+ critical defects</span> in
                the database engine that only surfaced under failure conditions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Reduced cluster setup time by{' '}
                <span className="text-white font-medium">94%</span> (30 mins to 2 mins) by
                automating package installation and configuration.
              </span>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div>
              <div className="text-3xl font-bold text-white">
                20<span className="text-indigo-500">+</span>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Defects Found</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                1M<span className="text-indigo-500">+</span>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Metrics/Min</div>
            </div>
          </div>
        </div>

        <div className="aws-images space-y-4">
          {awsImages.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={image}
                  alt={`AWS ${index + 1}`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-xl bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
