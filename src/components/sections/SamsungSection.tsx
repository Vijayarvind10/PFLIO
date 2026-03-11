import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { samsungImages } from '../../data/images'

gsap.registerPlugin(ScrollTrigger)

export default function SamsungSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.samsung-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.samsung-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="samsung" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="samsung-image order-2 md:order-1 relative group">
          <div className="aspect-video rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] transition-transform duration-500 group-hover:scale-[1.02]">
            {samsungImages[0] && (
              <img
                src={samsungImages[0]}
                alt="Samsung"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}
          </div>
          <div className="absolute -inset-1 rounded-xl bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>

        {/* Content */}
        <div className="samsung-content order-1 md:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Experience
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Samsung R&D
          </h2>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg text-indigo-400 font-medium">Software Engineer</h3>
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              <MapPin size={13} />
              <span>Bengaluru, India</span>
            </div>
          </div>

          <ul className="space-y-4 text-neutral-300 leading-relaxed text-sm">
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Developed on-device AI features for Galaxy devices using C++ and Android.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Shipped to <span className="text-white font-medium">50M+ devices</span>, optimizing
                performance for low-power scenarios.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
              <span>
                Improved CI/CD pipeline efficiency by{' '}
                <span className="text-white font-medium">15%</span> through parallel test execution.
              </span>
            </li>
          </ul>

          <div className="pt-6 border-t border-white/5">
            <div className="text-3xl font-bold text-white">
              50M<span className="text-indigo-500">+</span>
            </div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider">
              Devices Impacted
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
