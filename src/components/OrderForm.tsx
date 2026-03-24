import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const bowls = ["Basic Fuel Bowl (₹69)", "Mid Fuel Bowl (₹89)", "Premium Fuel Bowl (₹119)"];
const planOptions = ["No Plan – One Time", "5 Days Basic Plan (₹1,449/mo)", "5 Days Mid Plan (₹1,849/mo)", "5 Days Premium Plan (₹2,449/mo)"];

const OrderForm = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", address: "", bowl: bowls[0], plan: planOptions[0] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Morning Fuel! I'd like to place an order.\n\nName: ${form.name}\nAddress: ${form.address}\nBowl: ${form.bowl}\nPlan: ${form.plan}`;
    window.open(`https://wa.me/919106116932?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="order" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow max-w-xl mx-auto">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Place Order</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Order Your Bowl</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`glass-card rounded-2xl p-6 md:p-8 space-y-5 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Satish Dabhi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Delivery Address</label>
            <input
              type="text"
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="Office/Home address in Ahmedabad"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Select Bowl</label>
            <select
              value={form.bowl}
              onChange={(e) => setForm({ ...form, bowl: e.target.value })}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            >
              {bowls.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Select Plan</label>
            <select
              value={form.plan}
              onChange={(e) => setForm({ ...form, plan: e.target.value })}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            >
              {planOptions.map((p) => <option key={p}>{p}</option>)}
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
