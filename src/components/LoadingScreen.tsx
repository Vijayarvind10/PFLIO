import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + Math.random() * 12 + 3))
    }, 80)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      const t1 = setTimeout(() => {
        setVisible(false)
        setTimeout(onComplete, 600)
      }, 400)
      return () => clearTimeout(t1)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#030014] flex flex-col items-center justify-center"
        >
          {/* Animated ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-24 h-24 mb-12"
          >
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-transparent border-t-purple-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/90 tracking-tighter">VA</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-neutral-500 uppercase tracking-[0.3em]"
          >
            Loading experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
