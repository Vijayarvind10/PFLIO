import { Suspense, useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene3D from './components/Scene3D'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import HeroSection from './components/sections/HeroSection'
import TimelineSection from './components/sections/TimelineSection'
import AwsSection from './components/sections/AwsSection'
import SamsungSection from './components/sections/SamsungSection'
import OpenSourceSection from './components/sections/OpenSourceSection'
import ResearchSection from './components/sections/ResearchSection'
import HackathonSection from './components/sections/HackathonSection'
import StatsSection from './components/sections/StatsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  const [loaded, setLoaded] = useState(false)
  const handleLoadComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />

      {loaded && (
        <>
          <Navigation />

          {/* Fixed 3D Canvas Background */}
          <div className="fixed inset-0 z-0">
            <Canvas
              camera={{ position: [0, 0, 6], fov: 75 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </Canvas>
          </div>

          {/* Scrollable Content Overlay */}
          <main className="relative z-10">
            <HeroSection />
            <div className="section-divider" />
            <TimelineSection />
            <div className="section-divider" />
            <AwsSection />
            <div className="section-divider" />
            <SamsungSection />
            <div className="section-divider" />
            <OpenSourceSection />
            <div className="section-divider" />
            <ResearchSection />
            <div className="section-divider" />
            <HackathonSection />
            <div className="section-divider" />
            <StatsSection />
            <div className="section-divider" />
            <ContactSection />
          </main>
        </>
      )}
    </>
  )
}

export default App
