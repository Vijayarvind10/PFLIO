import { ScrollRevealSection } from "./ScrollRevealSection";

const stories = [
    {
        id: 1,
        image: import.meta.env.BASE_URL + "hackathon_win_zoom_out.jpg",
    },
    {
        id: 2,
        image: import.meta.env.BASE_URL + "samsung.jpg",
    },
    {
        id: 3,
        image: import.meta.env.BASE_URL + "AWS.jpeg",
    },
    {
        id: 5,
        image: import.meta.env.BASE_URL + "kelos_hackathon.jpg",
    }
]

export default function ScrollyTelling() {
    return (
        <div className="bg-black">
            {stories.map((story) => (
                <ScrollRevealSection key={story.id} className="relative h-screen overflow-hidden">
                    {/* Hero Image - Full Screen, No Text Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${story.image}')` }}
                    />
                </ScrollRevealSection>
            ))}

            {/* Final Text Section */}
            <ScrollRevealSection className="h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                        Hackathon Wins
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400">
                        & Global Impact
                    </p>
                </div>
            </ScrollRevealSection>
        </div>
    )
}
