import { Clock } from "lucide-react";

const HoursSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
          OPEN <span className="text-primary">DAILY</span>
        </h2>
        <p className="font-display text-4xl sm:text-5xl md:text-6xl text-muted-foreground mb-6">
          5:00 AM — 10:00 PM
        </p>
        <p className="font-body text-lg text-muted-foreground">
          7 days a week. No excuses. No off days.
        </p>
      </div>
    </section>
  );
};

export default HoursSection;
