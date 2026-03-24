import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, Check } from "lucide-react";

const before = [
  "Skipping breakfast",
  "Tea + biscuits",
  "Oily or heavy food",
  "Feeling low energy",
];

const after = [
  "Fresh fruit bowl",
  "Natural energy",
  "Light & refreshing",
  "Feel active & fresh",
];

const Comparison = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/40" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">🔁 See The Difference</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Your Usual Morning vs Morning Fuel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Before */}
          <div className={`glass-card-hover rounded-2xl p-7 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="font-bold text-lg text-destructive mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Before
            </h3>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className={`glass-card-hover rounded-2xl p-7 ring-2 ring-secondary transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="font-bold text-lg text-secondary mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> After
            </h3>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
