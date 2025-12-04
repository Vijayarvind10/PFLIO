import PerplexityLayout from './components/PerplexityLayout'
import HeroName from './components/HeroName'
import HackathonGallery from './components/HackathonGallery'
import ExperienceAndContact from './components/ExperienceAndContact'
import StatsGrid from './components/StatsGrid'

function App() {
    return (
        <PerplexityLayout>
            <div id="intro" className="pt-8 mb-12">
                <HeroName />
            </div>

            <div id="hackathons" className="scroll-mt-24 mb-12">
                <HackathonGallery />
            </div>

            <div id="experience" className="scroll-mt-24 mb-12">
                <ExperienceAndContact />
            </div>

            <div id="stats" className="scroll-mt-24 pb-20">
                <StatsGrid />
            </div>
        </PerplexityLayout>
    )
}

export default App
