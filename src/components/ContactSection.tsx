import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-12">Contact</h2>

            <div className="flex flex-wrap justify-center gap-8">
                <a href="mailto:vijayarvind27@gmail.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-lg">
                    <Mail size={24} />
                    <span>vijayarvind27@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/vijayarvind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-lg">
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Vijayarvind10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-lg">
                    <Github size={24} />
                    <span>GitHub</span>
                </a>
            </div>

            <div className="mt-16">
                <a
                    href={import.meta.env.BASE_URL + "resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-colors"
                >
                    <FileText size={20} />
                    Download Resume
                </a>
            </div>

            <footer className="mt-32 text-neutral-600 text-sm">
                © 2025 Vijay Arvind Ramamoorthy. Built with React & Three.js.
            </footer>
        </section>
    );
}
