import { ScrollRevealSection } from "./ScrollRevealSection";

const stories = [
    {
        id: 1,
        title: "Hackathon Wins",
        description: "Competing and winning at the highest level. From Aarush to national stages.",
        image: import.meta.env.BASE_URL + "hackathon_win_zoom_out.jpg",
    },
    {
        id: 2,
        title: "Building at Samsung",
        description: "Shipped C++ phoneme framework to 50M+ devices. Engineering at scale.",
        image: import.meta.env.BASE_URL + "samsung.jpg",
    },
    {
        id: 3,
        title: "AWS RDS",
        description: "East Palo Alto. Surfacing engine defects and building distributed test runners.",
        image: import.meta.env.BASE_URL + "AWS.jpeg",
    },
    {
        id: 5,
        title: "Kelos Hackathon",
        description: "Mumbai. Another win, another problem solved.",
        image: import.meta.env.BASE_URL + "kelos_hackathon.jpg",
    },
    {
        id: 6,
        title: "EtherWatch & UniverseOS",
        description: "Systems that scale. Handling 1M+ metrics per minute.",
        image: import.meta.env.BASE_URL + "AWS_.jpeg",
    }
]

export default function ScrollyTelling() {
    return (
        <div className="bg-black">
            {stories.map((story) => (
                <ScrollRevealSection key={story.id} className="relative h-screen overflow-hidden">
                    {/* Hero Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center brightness-[0.6]"
                        style={{ backgroundImage: `url('${story.image}')` }}
                    />

                    {/* Hero Text */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
                        <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
                            {story.title}
                        </h2>
                        <p className="text-xl md:text-3xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                            {story.description}
                        </p>
                    </div>
                </ScrollRevealSection>
            ))}
        </div>
    )
}
