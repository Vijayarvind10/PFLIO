import Hero3D from './components/Hero3D'
import Globe from './components/Globe'
import StoryPanels from './components/StoryPanels'
import StatsGrid from './components/StatsGrid'
import Contact from './components/Contact'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Hero3D />
            <Globe />
            <StoryPanels />
            <StatsGrid />
            <Contact />
        </main>
    )
}

export default App
