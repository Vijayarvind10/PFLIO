import HeroName from './components/HeroName'
import HackathonGallery from './components/HackathonGallery'
import AwsSection from './components/AwsSection'
import SamsungSection from './components/SamsungSection'
import StatsGrid from './components/StatsGrid'
import ExperienceAndContact from './components/ExperienceAndContact'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <HeroName />
            <HackathonGallery />
            <AwsSection />
            <SamsungSection />
            <StatsGrid />
            <ExperienceAndContact />
        </main>
    )
}

export default App
