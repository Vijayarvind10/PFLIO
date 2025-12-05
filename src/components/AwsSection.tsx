import { awsImages } from "../data/images";

export default function AwsSection() {
    return (
        <section id="aws" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 backdrop-blur-sm bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
                        {awsImages[0] && <img src={awsImages[0]} alt="AWS" className="w-full h-full object-cover opacity-80" />}
                    </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Amazon Web Services</h2>
                    <h3 className="text-xl text-blue-400 font-medium">RDS PostgreSQL Team</h3>
                    <ul className="space-y-4 text-lg text-neutral-400">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0"></span>
                            <span>Built a Java-based SQL fuzzer and distributed test runner for the RDS PostgreSQL engine.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0"></span>
                            <span>Surfaced 20+ engine defects in a distributed environment.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span>Reduced setup time by <span className="text-white font-medium">94%</span> (30 mins to 2 mins) by automating package installation.</span>
                        </li>
                    </ul>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                        <div>
                            <div className="text-3xl font-bold text-white">20<span className="text-blue-500">+</span></div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">Defects Found</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">1M<span className="text-blue-500">+</span></div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wider">Metrics/Min</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
