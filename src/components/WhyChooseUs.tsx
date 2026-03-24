import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scissors, ShieldCheck, Sun, Ban, Package } from "lucide-react";

const points = [
  { icon: Scissors, label: "Freshly cut daily" },
  { icon: ShieldCheck, label: "Hygienic preparation" },
  { icon: Sun, label: "Seasonal, quality fruits" },
  { icon: Ban, label: "No preservatives" },
  { icon: Package, label: "Premium transparent packaging" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/40" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">🌿 Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Why Morning Fuel?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {points.map((p, i) => (
            <div
              key={p.label}
              className={`glass-card-hover rounded-2xl px-6 py-5 flex items-center gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-foreground font-semibold text-sm">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
