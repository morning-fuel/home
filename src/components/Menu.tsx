import { useScrollReveal } from "@/hooks/useScrollReveal";
import { bowls } from "@/data/bowls";

interface MenuProps {
  selectedBowl: string | null;
  setSelectedBowl: (id: string) => void;
  selectedPlan?: string | null;
  setSelectedPlan?: (id: string) => void;
}

const Menu = ({
  selectedBowl,
  setSelectedBowl,
  selectedPlan,
  setSelectedPlan,
}: MenuProps) => {
  const { ref, isVisible } = useScrollReveal();

  const handleOrderClick = (bowlId: string) => {
    setSelectedBowl(bowlId);

    // Scroll smoothly to the order form
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
          {bowls.map((item, i) => (
            <div
              key={item.id}
              className={`glass-card-hover rounded-2xl overflow-hidden group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
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
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-primary">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleOrderClick(item.id)}
                    className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 active:scale-[0.97] transition-all"
                  >
                    Order
                  </button>
                </div>
              </div>

              {/* <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-extrabold text-primary">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleOrderClick(item.id)}
                    className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 active:scale-[0.97] transition-all"
                  >
                    Order
                  </button>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
