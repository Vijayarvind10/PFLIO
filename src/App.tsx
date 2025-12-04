import HeroText from './components/HeroText'
import ScrollyTelling from './components/ScrollyTelling'
import StatsGrid from './components/StatsGrid'
import Contact from './components/Contact'

function App() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <HeroText />
            <ScrollyTelling />
            <StatsGrid />
            <Contact />
        </main>
    )
}

export default App
