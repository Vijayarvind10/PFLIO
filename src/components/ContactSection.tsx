

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-12">Contact</h2>

            <div className="flex flex-wrap justify-center gap-8">
                <a href="mailto:vijayarvind10@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                    Email
                </a>
                <a href="https://www.linkedin.com/in/vijayarvind/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    LinkedIn
                </a>
                <a href="https://github.com/Vijayarvind10" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    GitHub
                </a>
            </div>

            <div className="mt-24 pt-8 border-t border-white/5 text-center text-neutral-600 text-sm">
                &copy; {new Date().getFullYear()} Vijay Arvind Ramamoorthy.
            </div>
        </section>
    );
}
