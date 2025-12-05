import Hero3D from './components/Hero3D'
import HackathonSection from './components/HackathonSection'
import AwsSection from './components/AwsSection'
import SamsungSection from './components/SamsungSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import RiverBackground from './components/RiverBackground'

function App() {
    return (
        <main className="min-h-screen text-white selection:bg-blue-500 selection:text-white relative">
            <RiverBackground />
            <div className="relative z-10">
                <Hero3D />
                <HackathonSection />
                <AwsSection />
                <SamsungSection />
                <StatsSection />
                <ContactSection />
            </div>
        </main>
    )
}

export default App
