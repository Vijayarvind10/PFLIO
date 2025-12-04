import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
    return (
        <footer id="contact" className="bg-black border-t border-neutral-900 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                    <a href="mailto:vijayarvind27@gmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>vijayarvind27@gmail.com</span>
                    </a>

                    <div className="flex gap-6">
                        <a href="https://linkedin.com/in/vijayarvind" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/Vijayarvind10" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <p className="mt-16 text-neutral-600 text-sm">
                    © {new Date().getFullYear()} Vijay Arvind Ramamoorthy. Built with React, Three.js, and Tailwind.
                </p>
            </div>
        </footer>
    )
}
