import ScrollyTelling from './components/ScrollyTelling'
import WorldMap from './components/WorldMap'
import StatsGrid from './components/StatsGrid'
import Contact from './components/Contact'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            {/* Starting with ScrollyTelling as the main experience */}
            <ScrollyTelling />
            <WorldMap />
            <StatsGrid />
            <Contact />
        </main>
    )
}

export default App
