import { hackathonImages } from "../data/images";

export default function HackathonSection() {
    return (
        <section id="hackathons" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-sm bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Hackathons</h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        During my undergraduate studies, I competed in national-level hackathons across India.
                        My teams secured top finishes in three major events:
                        <span className="text-white font-medium mx-1">KLEOS</span>,
                        <span className="text-white font-medium mx-1">HACKWHEEL</span>, and
                        <span className="text-white font-medium mx-1">HACKSUMMIT 3.0</span>.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        We built real-time systems under strict 24-hour deadlines, finishing in the top three out of more than one thousand teams.
                        Projects included real-time weapon detection and vehicle number plate recognition.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {hackathonImages.slice(0, 4).map((img, i) => (
                        <div key={i} className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center">
                            <img src={img} alt="Hackathon" className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
