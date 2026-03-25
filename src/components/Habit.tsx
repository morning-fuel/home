import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RefreshCw } from "lucide-react";

const Habit = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/40" ref={ref}>
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest flex items-center justify-center gap-1">
            <RefreshCw className="w-4 h-4" /> Build Consistency
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Make It a Daily Habit
          </h2>
        </div>
        <div className={`mt-8 space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p>Eating healthy once doesn't change anything.</p>
          <p className="text-foreground font-semibold text-xl">Doing it every day does.</p>
          <p>Morning Fuel helps you build a simple habit —</p>
          <p className="text-primary font-semibold">fresh fruits, every day, without thinking.</p>
        </div>
        <div className={`mt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="#order"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 active:scale-[0.97] transition-all"
          >
            Start Your Plan Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Habit;
