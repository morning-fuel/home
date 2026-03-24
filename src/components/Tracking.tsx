import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bell, Calendar, MessageCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Daily Updates", desc: "Get WhatsApp messages with delivery status every morning." },
  { icon: Calendar, title: "Plan Tracker", desc: "Know how many days are left in your plan at a glance." },
  { icon: Bell, title: "Renewal Reminders", desc: "We'll remind you before your plan expires so you never miss a bowl." },
];

const Tracking = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/40" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Subscription Tracking</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">We keep you in the loop through WhatsApp so you always know what's happening.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`glass-card-hover rounded-2xl p-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracking;
