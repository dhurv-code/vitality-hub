import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Gym interior at dawn with barbells and dramatic lighting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Shahabad's Premier Fitness Center
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-none mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          TRANSFORM YOUR
          <br />
          <span className="text-primary">BODY</span>, TRANSFORM
          <br />
          YOUR <span className="text-primary">LIFE</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Open Daily · 5:00 AM – 10:00 PM
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground px-10 py-4 font-display text-2xl tracking-wide hover:bg-primary/90 transition-colors"
          >
            JOIN NOW
          </button>
          <button
            onClick={() => scrollTo("#programs")}
            className="border border-foreground/30 text-foreground px-10 py-4 font-display text-2xl tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            VIEW PROGRAMS
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-muted-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
