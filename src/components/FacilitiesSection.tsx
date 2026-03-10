import cardioImg from "@/assets/facility-cardio.jpg";
import weightsImg from "@/assets/facility-weights.jpg";
import personalImg from "@/assets/facility-personal.jpg";
import functionalImg from "@/assets/facility-functional.jpg";
import strengthImg from "@/assets/facility-strength.jpg";
import { useEffect, useRef, useState } from "react";

const facilities = [
  {
    title: "CARDIO MACHINES",
    desc: "Treadmills, ellipticals, and stationary bikes with performance tracking displays. Built for endurance.",
    img: cardioImg,
    alt: "Treadmill digital display",
  },
  {
    title: "WEIGHT TRAINING",
    desc: "Free weights from 2.5kg to 50kg dumbbells, Olympic barbells, and plate-loaded machines for serious lifters.",
    img: weightsImg,
    alt: "Heavy weight plates on barbell",
  },
  {
    title: "PERSONAL TRAINING",
    desc: "One-on-one coaching with certified trainers who design programs around your goals, not generic templates.",
    img: personalImg,
    alt: "Trainer spotting a lifter",
  },
  {
    title: "FUNCTIONAL ZONE",
    desc: "Cable machines, battle ropes, kettlebells, and TRX systems for athletic, real-world movement training.",
    img: functionalImg,
    alt: "Cable machine pulley and chains",
  },
  {
    title: "STRENGTH EQUIPMENT",
    desc: "Power racks, Smith machines, and competition benches. The foundation of serious strength training.",
    img: strengthImg,
    alt: "Power rack with loaded barbell",
  },
];

const FacilitiesSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="facilities" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          What We Offer
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-16">
          OUR <span className="text-primary">FACILITIES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {facilities.map((f, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden aspect-square transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={f.img}
                alt={f.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/70 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
