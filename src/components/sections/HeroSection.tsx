import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!nameRef.current) return
    const letters = nameRef.current.querySelectorAll('.letter')
    gsap.fromTo(
      letters,
      { y: 80, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.03,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2,
      }
    )
  }, [])

  const name = 'Vijay Arvind Ramamoorthy'

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-5xl mx-auto">
        {/* Name with staggered letter animation */}
        <h1
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 overflow-hidden perspective-[1000px]"
        >
          {name.split('').map((char, i) => (
            <span
              key={i}
              className="letter inline-block"
              style={{ transformOrigin: 'bottom' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-2xl text-indigo-300/80 font-medium tracking-wide">
            Software Engineer & Researcher
          </p>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Hey there! I build software and do research. In my free time, I play guitar and mridangam
            (an Indian percussion instrument). I&apos;m a big FC Barcelona fan.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            Explore My Journey
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-3 text-neutral-500 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
