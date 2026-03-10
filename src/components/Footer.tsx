import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Programs", href: "#programs" },
  { label: "Exercises", href: "#exercises" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              SHAHABAD <span className="text-primary">GYM</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Where discipline is forged and excuses come to die. Shahabad's most serious training facility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">CONTACT</h4>
            <div className="space-y-3">
              <a href="tel:07533018368" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                075330 18368
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground">
                  New, Tehsil Road, Shahabad,<br />
                  Bichpuri Shukal, UP 244922
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">HOURS</h4>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-body text-sm text-muted-foreground">
                Open Daily: 5:00 AM – 10:00 PM
              </span>
            </div>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              {["Facebook", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shahabad Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
