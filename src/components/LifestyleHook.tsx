import { useScrollReveal } from "@/hooks/useScrollReveal";

const LifestyleHook = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Transform Your Mornings</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Upgrade Your Daily Routine
          </h2>
        </div>
        <div className={`mt-8 space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-semibold text-foreground">Busy mornings? Skipping breakfast?</p>
          <p>Most of us start the day with tea, biscuits, or nothing at all.</p>
          <p>Replace that with something <span className="text-primary font-semibold">fresh, light, and energizing.</span></p>
          <p>A simple fruit bowl can improve your <span className="text-secondary font-semibold">energy, digestion, and focus</span> — without any extra effort.</p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleHook;
