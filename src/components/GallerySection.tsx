import heroImg from "@/assets/hero-gym.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import cardioImg from "@/assets/facility-cardio.jpg";
import weightsImg from "@/assets/facility-weights.jpg";
import functionalImg from "@/assets/facility-functional.jpg";
import strengthImg from "@/assets/facility-strength.jpg";
import personalImg from "@/assets/facility-personal.jpg";
import benchImg from "@/assets/exercise-bench.jpg";
import deadliftImg from "@/assets/exercise-deadlift.jpg";
import squatImg from "@/assets/exercise-squat.jpg";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: heroImg, alt: "Gym interior at dawn" },
  { src: about1, alt: "Chalked hands on barbell" },
  { src: benchImg, alt: "Bench press" },
  { src: about2, alt: "Bench press station" },
  { src: cardioImg, alt: "Cardio equipment" },
  { src: deadliftImg, alt: "Deadlift" },
  { src: weightsImg, alt: "Weight plates" },
  { src: personalImg, alt: "Personal training" },
  { src: functionalImg, alt: "Cable machine" },
  { src: squatImg, alt: "Squat" },
  { src: strengthImg, alt: "Power rack" },
  { src: about3, alt: "Dumbbell rack" },
];

const GallerySection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Inside The Gym
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-16">
          PHOTO <span className="text-primary">GALLERY</span>
        </h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-1">
          {images.map((img, i) => (
            <div
              key={i}
              className={`mb-1 overflow-hidden transition-all duration-500 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
