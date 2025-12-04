import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SlideProps = {
    image?: string;
    children?: React.ReactNode;
};

function HackathonSlide({ image, children }: SlideProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Zoom out from 1.1 to 1.0
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);
    // Fade out as it leaves
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full relative overflow-hidden bg-black">
            <motion.div
                style={{ scale, opacity }}
                className="absolute inset-0"
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

export default function HackathonGallery() {
    return (
        <div>
            {/* Hackathon Images */}
            <HackathonSlide image={import.meta.env.BASE_URL + "hackathon_win_zoom_out.jpg"} />
            <HackathonSlide image={import.meta.env.BASE_URL + "kelos_hackathon.jpg"} />
            <HackathonSlide image={import.meta.env.BASE_URL + "hackathon_zoom_out.jpg"} />

            {/* Work Images (AWS, Samsung) as requested */}
            <HackathonSlide image={import.meta.env.BASE_URL + "samsung.jpg"} />
            <HackathonSlide image={import.meta.env.BASE_URL + "AWS.jpeg"} />
        </div>
    );
}
