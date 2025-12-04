import HeroName from './components/HeroName'
import HackathonGallery from './components/HackathonGallery'
import StatsGrid from './components/StatsGrid'
import HackathonSummary from './components/HackathonSummary'
import ExperienceAndContact from './components/ExperienceAndContact'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <HeroName />
            <HackathonGallery />
            <StatsGrid />
            <HackathonSummary />
            <ExperienceAndContact />
        </main>
    )
}

export default App
