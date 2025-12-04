import ZoomSlide from "./ZoomSlide";
import { samsungImages } from "../data/images";

export default function SamsungSection() {
    return (
        <div>
            {samsungImages.map((img, index) => (
                <ZoomSlide key={index} image={img} />
            ))}
        </div>
    );
}
