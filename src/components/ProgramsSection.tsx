import { useState, useEffect, useRef } from "react";

const programs = [
  {
    title: "STRENGTH TRAINING",
    desc: "Progressive overload programs designed to build raw power. Compound lifts, periodization, and measurable gains.",
    benefits: ["Increased muscle mass", "Stronger joints & bones", "Boosted metabolism"],
    exercises: ["Deadlift", "Squat", "Bench Press", "Overhead Press"],
  },
  {
    title: "WEIGHT LOSS",
    desc: "High-intensity circuits combined with structured nutrition guidance. Burn fat, keep muscle.",
    benefits: ["Accelerated fat burning", "Improved cardiovascular health", "Sustainable results"],
    exercises: ["HIIT Intervals", "Kettlebell Swings", "Burpees", "Jump Rope"],
  },
  {
    title: "BODYBUILDING",
    desc: "Hypertrophy-focused training with volume protocols. Sculpt every muscle group with precision.",
    benefits: ["Maximum muscle definition", "Symmetrical physique", "Mind-muscle connection"],
    exercises: ["Cable Flyes", "Leg Press", "Lat Pulldowns", "Bicep Curls"],
  },
  {
    title: "CARDIO TRAINING",
    desc: "Endurance and conditioning programs that push your limits. From steady-state to sprint intervals.",
    benefits: ["Improved stamina", "Heart health", "Mental clarity"],
    exercises: ["Treadmill Sprints", "Rowing", "Cycling", "Stair Climbing"],
  },
  {
    title: "PERSONAL TRAINING",
    desc: "One-on-one sessions with certified coaches. Every rep counted, every set purposeful.",
    benefits: ["Custom programming", "Accountability", "Faster results"],
    exercises: ["Assessment-based", "Progressive plans", "Form correction", "Goal tracking"],
  },
  {
    title: "BEGINNER FITNESS",
    desc: "Start your journey right. Learn proper form, build a foundation, and develop consistency.",
    benefits: ["Safe introduction to training", "Build confidence", "Establish habits"],
    exercises: ["Bodyweight Squats", "Push-ups", "Planks", "Dumbbell Rows"],
  },
];

const ProgramsSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
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
    <section id="programs" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Train With Purpose
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-16">
          TRAINING <span className="text-primary">PROGRAMS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((p, i) => {
            const isActive = activeIdx === i;
            const isBlurred = activeIdx !== null && !isActive;

            return (
              <div
                key={i}
                onClick={() => setActiveIdx(isActive ? null : i)}
                className={`relative cursor-pointer border border-border bg-card p-6 md:p-8 transition-all duration-400 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isActive ? "neon-glow animate-pulse-glow -translate-y-1 shadow-2xl" : "hover:-translate-y-1 hover:shadow-lg"} ${
                  isBlurred ? "card-focus-blur" : "card-focus-active"
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-5xl text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mb-4">
                    <h4 className="font-display text-lg text-primary mb-2">BENEFITS</h4>
                    <ul className="space-y-1">
                      {p.benefits.map((b, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-primary mb-2">EXERCISES</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.exercises.map((e, j) => (
                        <span key={j} className="font-body text-xs uppercase tracking-wide bg-secondary text-secondary-foreground px-3 py-1">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 font-body text-xs uppercase tracking-widest text-primary">
                  {isActive ? "Click to close" : "Click to explore"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
