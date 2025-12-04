import { Sparkles } from 'lucide-react';

interface AnswerBlockProps {
    title?: string;
    children: React.ReactNode;
}

export default function AnswerBlock({ title = "Answer", children }: AnswerBlockProps) {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="pl-11 text-neutral-300 leading-relaxed space-y-4 text-lg font-light">
                {children}
            </div>
        </div>
    );
}
