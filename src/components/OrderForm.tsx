import { bowls } from "@/data/bowls";
import { newPlans } from "@/data/plans";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import React from "react";

interface OrderFormProps {
  selectedBowl: string;
  selectedPlan: string;
  setSelectedBowl: (bowlId: string) => void;
  setSelectedPlan: (planId: string) => void;
}

const OrderForm = ({
  selectedBowl,
  selectedPlan,
  setSelectedBowl,
  setSelectedPlan,
}: OrderFormProps) => {
  const { ref, isVisible } = useScrollReveal();
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bowlObj = bowls.find((b) => b.id === selectedBowl);
    const planObj = newPlans.find((p) => p.id === selectedPlan);

    const msg = `Hi Morning Fuel! I'd like to place an order.
    
Name: ${name}
Address: ${address}
Bowl: ${bowlObj?.name ?? selectedBowl}
Plan: ${planObj?.name ?? selectedPlan}`;

    window.open(
      `https://wa.me/919106116932?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  // Get available plans for selected bowl
  const availablePlans = newPlans.map((plan) => ({
    ...plan,
    price: plan.prices[selectedBowl as keyof typeof plan.prices],
  }));

  return (
    <section id="order" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow max-w-xl mx-auto">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Place Order
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Order Your Bowl
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`glass-card rounded-2xl p-6 md:p-8 space-y-5 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="What should we call you?"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Delivery Address
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Office/Home address in Ahmedabad"
            />
          </div>

          {/* Select Bowl */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Select Bowl
            </label>
            <select
              value={selectedBowl}
              onChange={(e) => setSelectedBowl(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            >
              {bowls.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} (₹{b.price})
                </option>
              ))}
            </select>
          </div>

          {/* Select Plan */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Select Plan
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            >
              {availablePlans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} – ₹{p.price} {p.period}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-full hover:opacity-90 active:scale-[0.97] transition-all"
          >
            Send Order via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
