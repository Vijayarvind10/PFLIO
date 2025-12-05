import { samsungImages } from "../data/images";

export default function SamsungSection() {
    return (
        <section id="samsung" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-sm bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Samsung R&D</h2>
                    <h3 className="text-xl text-blue-400 font-medium">On-Device AI</h3>
                    <ul className="space-y-4 text-lg text-neutral-400">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0"></span>
                            <span>Developed an on-device phoneme framework in C++ for speech recognition.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0"></span>
                            <span>Shipped to 50M+ devices, optimizing performance for low-power scenarios.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Improved CI/CD pipeline efficiency by <span className="text-white font-medium">15%</span> through parallel test execution.</span>
                        </li>
                    </ul>

                    <div className="pt-6 border-t border-white/5">
                        <div>
                            <div className="text-3xl font-bold text-white">50M<span className="text-blue-500">+</span></div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">Devices Impacted</div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center">
                        {samsungImages[0] && <img src={samsungImages[0]} alt="Samsung" className="w-full h-full object-cover opacity-80" />}
                    </div>
                </div>
            </div>
        </section>
    );
}
