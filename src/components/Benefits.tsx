import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, Droplets, Brain, Leaf, Apple } from "lucide-react";

const benefits = [
  { icon: Apple, label: "Improves digestion" },
  { icon: Zap, label: "Boosts natural energy" },
  { icon: Droplets, label: "Keeps you hydrated in summer" },
  { icon: Brain, label: "Helps you stay focused" },
  { icon: Leaf, label: "Light on stomach, easy to eat anytime" },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">🍃 Daily Nutrition</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Why Fruits Every Day?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.label}
              className={`glass-card-hover rounded-2xl p-6 flex items-start gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-foreground font-medium text-sm">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
