

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-12">Contact</h2>

            <div className="flex flex-wrap justify-center gap-8">
                <a
                    href="mailto:vijayarvind27@gmail.com"
                    className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/vijay-arvind-ramamoorthy-b04b561b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/Vijayarvind10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                    GitHub
                </a>
            </div>

            <div className="mt-24 pt-8 border-t border-white/5 text-center text-neutral-600 text-sm">
                &copy; {new Date().getFullYear()} Vijay Arvind Ramamoorthy.
            </div>
        </section>
    );
}
