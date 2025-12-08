export default function VideoBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black animate-gradient-slow z-0" />

            {/* Video Element (if available) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
            >
                <source src="/background.mp4" type="video/mp4" />
            </video>

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
    )
}
