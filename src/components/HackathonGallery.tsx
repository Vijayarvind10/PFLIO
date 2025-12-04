import { hackathonImages, awsImages, samsungImages } from "../data/images";
import SourcesBlock from "./SourcesBlock";
import AnswerBlock from "./AnswerBlock";

export default function HackathonGallery() {
    const hackathonSources = hackathonImages.map((img, i) => ({
        image: img,
        title: `Hackathon Win ${i + 1}`,
        domain: "Hackathon"
    }));

    const workSources = [
        ...awsImages.map((img) => ({ image: img, title: "AWS RDS", domain: "Work" })),
        ...samsungImages.map((img) => ({ image: img, title: "Samsung R&D", domain: "Work" }))
    ];

    return (
        <div>
            <SourcesBlock items={[...hackathonSources, ...workSources]} />

            <AnswerBlock title="Hackathon Achievements">
                <p>
                    During my undergraduate studies, I competed in multiple national-level hackathons across India.
                    My teams secured top finishes in three major events:
                    <span className="text-white font-medium mx-1">KLEOS</span>,
                    <span className="text-white font-medium mx-1">HACKWHEEL</span>, and
                    <span className="text-white font-medium mx-1">HACKSUMMIT 3.0</span>.
                </p>
                <p>
                    We built real-time systems under strict 24-hour deadlines, including a weapon detection system
                    using computer vision and an automated vehicle number plate recognition pipeline. These projects
                    demonstrated our ability to ship functional, complex software under extreme time pressure.
                </p>
            </AnswerBlock>
        </div>
    );
}
