import { hackathonImages, awsImages, samsungImages } from "../data/images";


function ImageCard({ src, caption, subcaption }: { src: string, caption: string, subcaption?: string }) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 aspect-video">
            <img
                src={src}
                alt={caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-medium text-lg">{caption}</h3>
                {subcaption && <p className="text-neutral-400 text-sm">{subcaption}</p>}
            </div>
        </div>
    );
}

export default function HackathonGallery() {
    return (
        <div className="space-y-12 mb-20">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">1</div>
                    <h2 className="text-2xl font-bold text-white">Hackathon Wins</h2>
                </div>

                <p className="text-neutral-400 mb-8 leading-relaxed">
                    Competing in national level hackathons across India, my teams secured top finishes in three major events:
                    <span className="text-white mx-1">KLEOS</span>,
                    <span className="text-white mx-1">HACKWHEEL</span>, and
                    <span className="text-white mx-1">HACKSUMMIT 3.0</span>.
                    We built real-time systems for weapon detection and vehicle recognition under strict 24-hour deadlines.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hackathonImages.map((img, i) => (
                        <ImageCard key={i} src={img} caption={`Hackathon Highlight ${i + 1}`} subcaption="National Level Win" />
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-sm">2</div>
                    <h2 className="text-2xl font-bold text-white">Professional Work</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {awsImages.map((img, i) => (
                        <ImageCard key={`aws-${i}`} src={img} caption="Amazon Web Services" subcaption="RDS PostgreSQL Team" />
                    ))}
                    {samsungImages.map((img, i) => (
                        <ImageCard key={`samsung-${i}`} src={img} caption="Samsung R&D" subcaption="On-Device AI" />
                    ))}
                </div>
            </div>
        </div>
    );
}
