import Hero3D from './components/Hero3D'
import HackathonSection from './components/HackathonSection'
import AwsSection from './components/AwsSection'
import SamsungSection from './components/SamsungSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Hero3D />
            <HackathonSection />
            <AwsSection />
            <SamsungSection />
            <StatsSection />
            <ContactSection />
        </main>
    )
}

export default App
