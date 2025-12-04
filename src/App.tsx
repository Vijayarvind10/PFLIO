import Hero3D from './components/Hero3D'
import JourneyMap from './components/JourneyMap'
import StoryPanels from './components/StoryPanels'
import StatsGrid from './components/StatsGrid'
import Contact from './components/Contact'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Hero3D />
            <JourneyMap />
            <StoryPanels />
            <StatsGrid />
            <Contact />
        </main>
    )
}

export default App
