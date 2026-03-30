import basicPlanImg from "@/assets/basic-plan.png";
import midPlanImg from "@/assets/mid-plan.png";
import premiumPlanImg from "@/assets/premium-plan.png";

export const bowls = [
  {
    id: "basic",
    name: "Basic Fuel Bowl",
    description: "Simple, refreshing fruit bowl for daily hydration.",
    price: 69, // current price
    originalPrice: 99,
    image: basicPlanImg,
    tag: "Everyday Light",
    offer: "Limited Offer",
  },
  {
    id: "mid",
    name: "Mid Fuel Bowl",
    description: "More variety, more taste, perfect daily upgrade.",
    price: 89,
    originalPrice: 119,
    image: midPlanImg,
    tag: "Balanced Choice",
    offer: "Limited Offer",
  },
  {
    id: "premium",
    name: "Premium Fuel Bowl",
    description: "Rich, colorful, and packed with premium fruits.",
    price: 119,
    originalPrice: 149,
    image: premiumPlanImg,
    tag: "Energy Boost",
    offer: "Limited Offer",
  },
];
