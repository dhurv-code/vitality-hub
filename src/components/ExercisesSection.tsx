import benchImg from "@/assets/exercise-bench.jpg";
import deadliftImg from "@/assets/exercise-deadlift.jpg";
import squatImg from "@/assets/exercise-squat.jpg";
import pullupImg from "@/assets/exercise-pullup.jpg";
import treadmillImg from "@/assets/exercise-treadmill.jpg";
import dumbbellImg from "@/assets/exercise-dumbbell.jpg";
import { useEffect, useRef, useState } from "react";

const exercises = [
  { title: "BENCH PRESS", desc: "The king of upper body pressing. Builds chest, shoulders, and triceps. Foundation of any strength program.", img: benchImg, alt: "Person performing bench press" },
  { title: "DEADLIFT", desc: "The ultimate full-body exercise. Builds posterior chain power — back, glutes, and hamstrings. Nothing builds raw strength faster.", img: deadliftImg, alt: "Person performing heavy deadlift" },
  { title: "SQUATS", desc: "The foundation of leg development. Builds quads, glutes, and core stability. The movement your body was designed for.", img: squatImg, alt: "Person performing barbell squat" },
  { title: "PULL-UPS", desc: "Bodyweight mastery. Builds lats, biceps, and grip strength. The true test of relative strength.", img: pullupImg, alt: "Person performing pull-ups" },
  { title: "TREADMILL", desc: "Cardiovascular conditioning with precise control. From steady-state fat burning to all-out sprint intervals.", img: treadmillImg, alt: "Person running on treadmill" },
  { title: "DUMBBELL WORK", desc: "Unilateral training for balanced development. Builds stabilizers, corrects imbalances, and sculpts definition.", img: dumbbellImg, alt: "Person doing dumbbell curls" },
];

const ExercisesSection = () => {
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
    <section id="exercises" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Master The Basics
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-16">
          CORE <span className="text-primary">EXERCISES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {exercises.map((ex, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={ex.img}
                  alt={ex.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/60 transition-colors duration-300" />
              </div>
              <div className="bg-card p-6">
                <h3 className="font-display text-2xl text-foreground mb-2">{ex.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExercisesSection;
