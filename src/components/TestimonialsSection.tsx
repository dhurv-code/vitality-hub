import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "RAHUL KUMAR",
    quote: "I WALKED IN WEIGHING 105 KG. ELEVEN MONTHS LATER, I DEADLIFT 105 KG. THE WEIGHT DIDN'T DISAPPEAR — IT MOVED TO THE BARBELL.",
    duration: "Member for 11 months",
  },
  {
    name: "PRIYA SINGH",
    quote: "THEY DIDN'T GIVE ME A DIET CHART AND SEND ME HOME. THEY TAUGHT ME TO LIFT. THAT CHANGED EVERYTHING.",
    duration: "Member for 2 years",
  },
  {
    name: "AMIT VERMA",
    quote: "AT 5 AM, THERE ARE NO SHORTCUTS. JUST THE IRON AND YOUR WILL. THIS GYM TAUGHT ME THAT.",
    duration: "Member for 3 years",
  },
];

const TestimonialsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Real Stories
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-16">
          MEMBER <span className="text-primary">VOICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`border-l-2 border-primary pl-6 md:pl-8 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <blockquote className="font-display text-xl md:text-2xl text-foreground leading-tight mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-display text-lg text-primary">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
