export default function VideoBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Fallback Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0" />

            {/* Video Element */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source src="/background.mp4" type="video/mp4" />
            </video>

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
    )
}
