import { useEffect, useRef } from 'react'
import { ExternalLink, MapPin, FileText } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const publications = [
  {
    title: 'End-to-End Optimized Pipeline for Prediction of Protein Folding Kinetics',
    authors: 'Vijay Arvind R.',
    publisher: 'IEEE',
    location: 'Miami, Florida',
    link: 'https://ieeexplore.ieee.org/document/10459799',
    description:
      'A deep learning approach to predict protein folding kinetics, crucial for understanding neuro-degenerative disorders.',
  },
  {
    title: 'Imbalanced Data Stream Classification using Dynamic Ensemble Selection',
    authors: 'Vijay Arvind R.',
    publisher: 'IEEE',
    location: 'Canary Islands, Spain',
    link: 'https://ieeexplore.ieee.org/document/10253212',
    description:
      'A novel framework integrating data pre-processing and dynamic ensemble selection for nonstationary drifting data streams.',
  },
  {
    title: 'Novel Deep Learning Pipeline for Automatic Weapon Detection',
    authors: 'Vijay Arvind R.',
    publisher: 'IEEE',
    location: 'Fuji, Japan',
    link: 'https://ieeexplore.ieee.org/abstract/document/10487762',
    description:
      'Real-time automatic weapon detection system using an ensemble of convolutional neural networks.',
  },
]

export default function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.research-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.from('.research-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="research" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="research-title space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Publications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Research Publications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="research-card group block glass-card rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-2.5 py-1 text-[10px] font-bold bg-indigo-500/20 text-indigo-400 rounded-full uppercase tracking-wider">
                  {pub.publisher}
                </span>
                <ExternalLink
                  size={14}
                  className="text-neutral-600 group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-base font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                {pub.title}
              </h3>

              <p className="text-sm text-neutral-400 mb-4 line-clamp-3 leading-relaxed">
                {pub.description}
              </p>

              <div className="space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <FileText size={11} />
                  <span>{pub.authors}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={11} />
                  <span>{pub.location}</span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500 -z-10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
