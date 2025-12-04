import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ZoomSlideProps = {
    image?: string;
    children?: React.ReactNode;
};

export default function ZoomSlide({ image, children }: ZoomSlideProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Zoom out from 1.1 to 1.0
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);
    // Fade out as it leaves (starts fading at 80% scroll)
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full relative overflow-hidden bg-black sticky top-0">
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                {image ? (
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black text-white px-6">
                        {children}
                    </div>
                )}
            </motion.div>
        </section>
    );
}
