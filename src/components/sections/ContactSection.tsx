import { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [
  {
    label: 'Email',
    href: 'mailto:vijayarvind27@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vijay-arvind-ramamoorthy-b04b561b8/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Vijayarvind10',
    icon: Github,
    external: true,
  },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
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
      gsap.from('.contact-link', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <div className="contact-content space-y-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Let&apos;s <span className="text-indigo-400">Connect</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-md mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="contact-link group flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              <Icon size={16} className="group-hover:text-indigo-400 transition-colors" />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-28 pt-8 border-t border-white/5 text-neutral-600 text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Vijay Arvind Ramamoorthy. Built with React, Three.js & GSAP.
      </div>
    </section>
  )
}
