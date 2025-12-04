import ZoomSlide from "./ZoomSlide";
import { awsImages } from "../data/images";

export default function AwsSection() {
    return (
        <div>
            {/* Optional Title Slide or Overlay could go here if requested, but user said "image-only slides OR have a light text overlay". 
          I will stick to image-only for now to match the "ZoomSlide" pattern cleanly, 
          but maybe add a text slide at the end if it feels right? 
          User said "The AWS and Samsung sections can either be image-only slides... but they must also use the same scroll-driven zoom-out behavior."
          I'll just render the images for now.
      */}
            {awsImages.map((img, index) => (
                <ZoomSlide key={index} image={img} />
            ))}
        </div>
    );
}
