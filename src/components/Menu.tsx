import { useScrollReveal } from "@/hooks/useScrollReveal";
import { bowls } from "@/data/bowls";

interface MenuProps {
  selectedBowl: string | null;
  setSelectedBowl: (id: string) => void;
  selectedPlan?: string | null;
  setSelectedPlan?: (id: string) => void;
}

const Menu = ({ selectedBowl, setSelectedBowl }: MenuProps) => {
  const { ref, isVisible } = useScrollReveal();

  const handleOrderClick = (bowlId: string) => {
    setSelectedBowl(bowlId);
    const orderSection = document.getElementById("order");
    orderSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Choose Your Fuel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bowls.map((item, i) => {
            const isSelected = selectedBowl === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl overflow-hidden group transition-all duration-700 border ${
                  isSelected
                    ? "border-primary shadow-lg scale-[1.02]"
                    : "border-transparent glass-card-hover"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>

                  {/* Offer Badge */}
                  <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {item.offer}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-full">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {item.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mt-1 mb-3">
                      {item.description}
                    </p>

                    {/* Fruits List */}
                    <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                      {item.fruits.map((fruit, idx) => (
                        <li key={idx}>• {fruit}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-extrabold text-primary">
                        ₹{item.price}
                      </span>

                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleOrderClick(item.id)}
                      className={`text-sm font-semibold px-5 py-2 rounded-full transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/90 text-primary-foreground hover:bg-primary"
                      } active:scale-[0.97]`}
                    >
                      {isSelected ? "Selected" : "Order"}
                    </button>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    Limited time offer
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
