import Hero3D from './components/Hero3D'
import HackathonSection from './components/HackathonSection'
import AwsSection from './components/AwsSection'
import SamsungSection from './components/SamsungSection'
import ContactSection from './components/ContactSection'
import VideoBackground from './components/VideoBackground'

import OpenSourceSection from './components/OpenSourceSection'
import ResearchSection from './components/ResearchSection'
import StatsSection from './components/StatsSection'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500/30">
            <VideoBackground />
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
