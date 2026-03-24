import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart } from "lucide-react";

const Trust = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <span className="text-sm font-semibold text-destructive uppercase tracking-widest flex items-center justify-center gap-1">
            <Heart className="w-4 h-4" /> Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Made With Care
          </h2>
        </div>
        <div
          className={`mt-8 glass-card rounded-2xl p-8 md:p-10 space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p>Every bowl is prepared fresh with proper hygiene and attention.</p>
          <p className="text-foreground font-semibold">
            We don't store cut fruits.
          </p>
          <p className="text-foreground font-semibold">
            We don't compromise on quality.
          </p>
          <p>
            Just{" "}
            <span className="text-primary font-semibold">
              clean, fresh, and real food.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
