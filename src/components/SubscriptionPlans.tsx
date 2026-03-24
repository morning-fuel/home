import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Basic Plan",
    price: "₹1,449",
    period: "/month",
    features: [
      "Mon–Fri delivery",
      "Basic fruit bowl",
      "Fresh seasonal fruits",
      "Free delivery",
    ],
  },
  {
    name: "Mid Plan",
    price: "₹1,849",
    period: "/month",
    features: [
      "Mon–Fri delivery",
      "Balanced fruit bowl",
      "More variety & quantity",
      "Free delivery",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "₹2,449",
    period: "/month",
    features: [
      "Mon–Fri delivery",
      "Premium fruit bowl",
      "Includes grapes, dragon fruit, strawberries",
      "Free delivery",
    ],
  },
];

const benefits = [
  { icon: "💰", label: "Save More Monthly" },
  { icon: "📦", label: "Daily Fresh Delivery" },
  { icon: "🥗", label: "Build Healthy Habit" },
];

const SubscriptionPlans = () => {
  const { ref, isVisible } = useScrollReveal();

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
            Monthly Plans for Your Daily Fuel
          </h2>
        </div>

        {/* Benefits */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="text-xl">{b.icon}</span> {b.label}
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card-hover rounded-2xl p-7 relative transition-all duration-700 ${
                plan.popular ? "ring-2 ring-primary scale-[1.02]" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="font-bold text-xl text-foreground mb-1">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-extrabold text-primary">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="text-secondary">✓</span> {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#order"
                className={`block text-center font-semibold py-3 rounded-full transition-all active:scale-[0.97] ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
