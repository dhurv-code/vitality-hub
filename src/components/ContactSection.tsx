import { Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Get In Touch
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-16">
          CONTACT <span className="text-primary">US</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info + Map */}
          <div>
            <div className="space-y-6 mb-10">
              <a href="tel:07533018368" className="flex items-start gap-4 group">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    075330 18368
                  </p>
                  <p className="font-body text-sm text-muted-foreground">Call anytime during opening hours</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-foreground leading-relaxed">
                    New, Tehsil Road, Shahabad,<br />
                    Bichpuri Shukal, Uttar Pradesh 244922, India
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video w-full border border-border overflow-hidden">
              <iframe
                title="Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d79.96!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSDI2Nis4NSBCaWNocHVyaSBTaHVrYWwsIFV0dGFyIFByYWRlc2g!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-display text-lg text-foreground block mb-2">NAME</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary py-3 font-body text-foreground outline-none transition-colors placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-display text-lg text-foreground block mb-2">PHONE</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={15}
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary py-3 font-body text-foreground outline-none transition-colors placeholder:text-muted-foreground"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="font-display text-lg text-foreground block mb-2">MESSAGE</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary py-3 font-body text-foreground outline-none transition-colors resize-none placeholder:text-muted-foreground"
                  placeholder="Tell us about your fitness goals"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-10 py-4 font-display text-2xl tracking-wide hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
