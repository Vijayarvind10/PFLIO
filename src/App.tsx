import { useState, useEffect } from 'react'
import Hero3D from './components/Hero3D'
import HackathonSection from './components/HackathonSection'
import AwsSection from './components/AwsSection'
import SamsungSection from './components/SamsungSection'
import ContactSection from './components/ContactSection'
import RiverBackground from './components/RiverBackground'

import OpenSourceSection from './components/OpenSourceSection'
import ResearchSection from './components/ResearchSection'
import StatsSection from './components/StatsSection'

function App() {
    const [activeColor, setActiveColor] = useState("#001e3c")

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'hero', color: '#001e3c' },       // Deep Blue
                { id: 'aws', color: '#1e293b' },        // Slate 800 (Lighter)
                { id: 'samsung', color: '#312e81' },    // Indigo 900 (More Purple)
                { id: 'opensource', color: '#0f172a' }, // Slate 900
                { id: 'research', color: '#4c1d95' },   // Violet 900
                { id: 'hackathons', color: '#581c87' }, // Purple 900
                { id: 'stats', color: '#000000' },      // Black
                { id: 'contact', color: '#000000' },    // Black
            ]

            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = document.getElementById(section.id)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveColor(section.color)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500/30">
            <RiverBackground targetColor={activeColor} />
            <div className="relative z-10">
                <div id="hero">
                    <Hero3D />
                </div>
                <AwsSection />
                <SamsungSection />
                <OpenSourceSection />
                <ResearchSection />
                <HackathonSection />
                <StatsSection />
                <ContactSection />
            </div>
        </main>
    )
}

export default App
