import basicPlanImg from "@/assets/basic-plan.png";
import midPlanImg from "@/assets/mid-plan.png";
import premiumPlanImg from "@/assets/premium-plan.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { name: "Basic Fuel Bowl", price: "₹69", desc: "Simple, refreshing fruit bowl for daily hydration.", img: basicPlanImg, tag: "Everyday Light" },
  { name: "Mid Fuel Bowl", price: "₹89", desc: "More variety, more taste, perfect daily upgrade.", img: midPlanImg, tag: "Balanced Choice" },
  { name: "Premium Fuel Bowl", price: "₹119", desc: "Rich, colorful, and packed with premium fruits.", img: premiumPlanImg, tag: "Energy Boost" },
];

const Menu = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Menu</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Choose Your Fuel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.name}
              className={`glass-card-hover rounded-2xl overflow-hidden group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-primary">{item.price}</span>
                  <a
                    href={`https://wa.me/919106116932?text=Hi!%20I'd%20like%20to%20order%20a%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 active:scale-[0.97] transition-all"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
