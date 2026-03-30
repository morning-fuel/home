import { useScrollReveal } from "@/hooks/useScrollReveal";
import { bowls } from "@/data/bowls";
import { newPlans } from "@/data/plans";
import { useState } from "react";

interface SubscriptionPlansProps {
  selectedBowl: string;
  setSelectedBowl: (id: string) => void;
  selectedPlan: string;
  setSelectedPlan: (id: string) => void;
}

const benefits = [
  { icon: "💰", label: "Save More Monthly" },
  { icon: "📦", label: "Daily Fresh Delivery" },
  { icon: "🥗", label: "Build Healthy Habit" },
];

const SubscriptionPlans = ({
  selectedBowl,
  setSelectedBowl,
  selectedPlan,
  setSelectedPlan,
}: SubscriptionPlansProps) => {
  const { ref, isVisible } = useScrollReveal();

  // First bowl open by default
  const [openBowl, setOpenBowl] = useState<string>(bowls[0]?.id ?? "");

  const handleAccordionToggle = (bowlId: string) => {
    setOpenBowl((prev) => (prev === bowlId ? "" : bowlId));
  };

  const handleSelect = (bowlId: string, planId: string) => {
    setSelectedBowl(bowlId);
    setSelectedPlan(planId);

    // Scroll to order form
    const section = document.getElementById("order");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="plans" className="section-padding bg-muted/40" ref={ref}>
      <div className="container-narrow">
        {/* Heading */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Subscribe & Save
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Choose Your Bowl & Plan
          </h2>
        </div>
        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="text-xl">{b.icon}</span> {b.label}
            </div>
          ))}
        </div>
        {/* Accordion for Bowls */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {bowls.map((bowl) => {
            const isOpen = openBowl === bowl.id;
            return (
              <div
                key={bowl.id}
                className="border rounded-2xl bg-background overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleAccordionToggle(bowl.id)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={bowl.image}
                      alt={bowl.name}
                      className="w-16 h-16 rounded-xl object-cover border"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {bowl.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {bowl.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                </button>

                {/* Accordion Content: Plans */}
                {isOpen && (
                  <div className="px-6 pb-6 space-y-4 md:grid md:grid-cols-3 md:gap-6">
                    {newPlans.map((plan) => {
                      const price = plan.prices[bowl.id];
                      const isPopular = plan.popular;
                      const isSelected =
                        selectedBowl === bowl.id && selectedPlan === plan.id;

                      return (
                        <div
                          key={`${bowl.id}-${plan.id}`}
                          className={`p-4 rounded-2xl border transition-all hover:shadow-lg ${
                            isPopular
                              ? "ring-2 ring-primary scale-[1.02]"
                              : "border-border"
                          } ${isSelected ? "bg-primary/10" : ""}`}
                        >
                          {isPopular && (
                            <div className="mb-2 text-xs font-bold text-primary text-center">
                              ⭐ Most Popular
                            </div>
                          )}
                          <h4 className="font-semibold text-lg mb-1 text-center">
                            {plan.name}
                          </h4>
                          <div className="flex items-baseline justify-center gap-1 mb-3">
                            <span className="text-2xl font-extrabold text-primary">
                              ₹{price}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {plan.period}
                            </span>
                          </div>
                          <ul className="space-y-1 mb-4 text-sm text-foreground">
                            {plan.features.map((f) => (
                              <li key={f} className="flex items-center gap-1">
                                <span className="text-secondary">✓</span> {f}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => handleSelect(bowl.id, plan.id)}
                            className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all active:scale-[0.97] ${
                              isPopular
                                ? "bg-primary text-primary-foreground hover:opacity-90"
                                : "bg-muted text-foreground hover:bg-muted/80"
                            }`}
                          >
                            Choose Plan
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
