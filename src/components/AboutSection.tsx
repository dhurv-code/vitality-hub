import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import { useEffect, useRef, useState } from "react";

const statements = [
  { text: "WE DON'T SELL MEMBERSHIPS. WE BUILD DISCIPLINE.", img: about1, alt: "Chalked hands gripping barbell" },
  { text: "THIS IS WHERE EXCUSES COME TO DIE.", img: about2, alt: "Bench press station under single light" },
  { text: "5 AM. THE IRON IS WAITING. ARE YOU?", img: about3, alt: "Row of heavy dumbbells on rack" },
];

const AboutSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.4 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      {statements.map((s, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          data-idx={i}
          className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
        >
          <img
            src={s.img}
            alt={s.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/70" />
          <h2
            className={`relative z-10 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4 max-w-4xl transition-all duration-700 ${
              visibleItems.has(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {s.text}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
