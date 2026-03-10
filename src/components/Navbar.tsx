import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Programs", href: "#programs" },
  { label: "Exercises", href: "#exercises" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-neon/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-display text-3xl tracking-tight text-foreground">
          SHAHABAD <span className="text-primary">GYM</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:07533018368"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 font-display text-lg tracking-wide hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            CALL NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto py-6 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-display text-2xl text-foreground text-left hover:text-primary transition-colors"
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <a
              href="tel:07533018368"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-display text-xl tracking-wide mt-4 justify-center"
            >
              <Phone className="w-5 h-5" />
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
