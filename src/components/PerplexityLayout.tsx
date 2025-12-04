import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Plus, Library, Globe } from 'lucide-react';

interface Section {
    id: string;
    label: string;
}

const sections: Section[] = [
    { id: 'intro', label: 'Introduction' },
    { id: 'hackathons', label: 'Hackathon Wins' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'stats', label: 'Key Metrics' },
];

export default function PerplexityLayout({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState('intro');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200; // Offset

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-blue-500/30">
            {/* Top Navigation Bar (Mobile/Tablet) */}
            <nav className="fixed top-0 left-0 right-0 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 z-50 flex items-center justify-between px-4 lg:hidden">
                <div className="flex items-center gap-2 text-white font-bold text-xl">
                    <Sparkles className="text-blue-400 w-5 h-5" />
                    <span>PFLIO</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-neutral-400 hover:text-white">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-neutral-950 z-40 pt-20 px-6 lg:hidden">
                    <div className="flex flex-col gap-4">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => scrollTo(section.id)}
                                className={`text-left text-lg py-2 ${activeSection === section.id ? 'text-blue-400 font-medium' : 'text-neutral-400'}`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="max-w-[1400px] mx-auto flex pt-20 lg:pt-10">
                {/* Left Sidebar (Desktop) */}
                <aside className="hidden lg:flex w-64 fixed h-[calc(100vh-40px)] flex-col justify-between pl-8 pr-4 border-r border-neutral-800/50">
                    <div>
                        <div className="mb-8 flex items-center gap-2 text-white font-bold text-2xl">
                            <Sparkles className="text-blue-400 w-6 h-6" />
                            <span>PFLIO</span>
                        </div>

                        <button className="w-full flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 px-4 py-2.5 rounded-full border border-neutral-800 transition-colors mb-8">
                            <Plus size={18} />
                            <span className="text-sm font-medium">New Thread</span>
                        </button>

                        <div className="space-y-1">
                            <div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-lg cursor-pointer transition-colors">
                                <Globe size={18} />
                                <span className="text-sm font-medium">Discover</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900/50 rounded-lg cursor-pointer transition-colors">
                                <Library size={18} />
                                <span className="text-sm font-medium">Library</span>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <div className="text-xs text-neutral-600 px-3">
                            © 2025 Vijay Arvind
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-64 px-4 md:px-8 lg:px-16 pb-20 max-w-3xl mx-auto">
                    {children}
                </main>

                {/* Right Sidebar (Desktop - Related) */}
                <aside className="hidden xl:block w-80 fixed right-0 h-screen p-8 border-l border-neutral-800/50 overflow-y-auto">
                    {/* This area will be populated by the page content's "Related" section if we portal it, 
                 but for now we can keep the static links or leave it empty for the "Page" feel. 
                 The Perplexity Page view often has "Related" questions here. 
                 I'll keep the social links but style them as "Related" items.
             */}
                </aside>
            </div>
        </div>
    );
}
