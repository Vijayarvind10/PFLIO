import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const terminalSteps = [
  { type: 'command', text: '$ pip install universeos', delay: 0 },
  { type: 'output', text: 'Successfully installed universeos-0.1.3', delay: 400 },
  { type: 'command', text: '$ python', delay: 800 },
  { type: 'python', text: '>>> from universeos import universe_shadow', delay: 1200 },
  { type: 'python', text: '>>> @universe_shadow', delay: 1600 },
  { type: 'python', text: '>>> def get_response(query): ...', delay: 2000 },
  { type: 'python', text: '>>> result = get_response("Reset password?")', delay: 2400 },
  { type: 'output', text: '\u2192 PRIMARY: GPT-4 responding...', delay: 2900 },
  { type: 'output', text: '\u2192 SHADOW: Claude-3.5 (background)', delay: 3200 },
  { type: 'output', text: '\u2192 SHADOW: Custom model (background)', delay: 3500 },
  { type: 'success', text: '\u2713 User sees: "Click Forgot Password..."', delay: 4000 },
  { type: 'output', text: '\uD83D\uDCCA Logged: 3 responses, latency, cost', delay: 4500 },
  { type: 'comment', text: '# Zero risk. Zero latency. Real data.', delay: 5200 },
]

export default function OpenSourceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleLines, setVisibleLines] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => setStarted(true),
      })
      gsap.from('.os-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.os-terminal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!started) return
    if (visibleLines < terminalSteps.length) {
      const nextDelay = visibleLines === 0 ? 300 : terminalSteps[visibleLines].delay - terminalSteps[visibleLines - 1].delay
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, nextDelay)
      return () => clearTimeout(timer)
    }
  }, [started, visibleLines])

  return (
    <section ref={sectionRef} id="opensource" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="os-content space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Open Source
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">UniverseOS</h2>

          <p className="text-neutral-300 leading-relaxed">
            A Python SDK for testing AI models with zero risk. Shadow production traffic to compare
            GPT-4, Claude, and custom models. Used by{' '}
            <span className="text-white font-semibold">7 startups</span> to optimize their AI costs
            and quality.
          </p>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-indigo-400">Systems Engineering</p>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span>
                  <span className="text-white">C++17 gateway</span> with async I/O for
                  high-throughput HTTP proxying
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span>
                  <span className="text-white">Distributed control plane</span> (registry, policy
                  engine, metrics pipeline)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span>
                  <span className="text-white">Zero-latency shadowing</span> via fire-and-forget
                  async requests
                </span>
              </li>
            </ul>
          </div>

          <a
            href="https://pypi.org/project/universeos/0.1.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-sm"
          >
            View on PyPI <ExternalLink size={14} />
          </a>
        </div>

        {/* Terminal */}
        <div className="os-terminal glass-card rounded-xl p-6 font-mono text-sm text-neutral-400">
          <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[10px] text-neutral-600">bash</span>
          </div>
          <div className="space-y-1.5 min-h-[280px]">
            {terminalSteps.slice(0, visibleLines).map((step, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={
                  step.type === 'command'
                    ? 'text-white'
                    : step.type === 'python'
                      ? 'text-white'
                      : step.type === 'success'
                        ? 'text-green-400 font-semibold'
                        : step.type === 'comment'
                          ? 'text-indigo-400 italic'
                          : 'text-neutral-500'
                }
              >
                {step.type === 'command' && <span className="text-green-400">$</span>}
                {step.type === 'python' && <span className="text-indigo-400">&gt;&gt;&gt;</span>}
                {step.type === 'command' || step.type === 'python'
                  ? ` ${step.text.split(' ').slice(1).join(' ')}`
                  : step.text}
              </motion.p>
            ))}
            {visibleLines < terminalSteps.length && started && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 h-3.5 bg-white/80"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
