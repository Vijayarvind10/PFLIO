import ZoomSlide from "./ZoomSlide";
import { hackathonImages } from "../data/images";

export default function HackathonGallery() {
    return (
        <div>
            {/* Hackathon Images */}
            {hackathonImages.map((img, index) => (
                <ZoomSlide key={index} image={img} />
            ))}

            {/* Final Text Slide */}
            <ZoomSlide>
                <div className="max-w-3xl text-center space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Hackathon Wins
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        During my undergrad I competed in national level hackathons across India.
                        My teams won three events (KLEOS, HACKWHEEL, HACKSUMMIT 3.0), finishing
                        in the top three out of more than one thousand teams. We built real systems
                        in a weekend, including real time weapon detection and vehicle number plate recognition.
                    </p>
                </div>
            </ZoomSlide>
        </div>
    );
}
