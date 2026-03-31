import basicPlanImg from "@/assets/basic.png";
import midPlanImg from "@/assets/mid.png";
import premiumPlanImg from "@/assets/premium.png";

export const bowls = [
  {
    id: "premium",
    name: "Premium Fuel Bowl",
    description: "Rich, colorful, and packed with premium fruits.",
    fruits: [
      "Dragon Fruit",
      "Kiwi",
      "Grapes",
      "Pineapple",
      "Apple",
      "Watermelon",
    ],
    price: 119,
    originalPrice: 149,
    image: premiumPlanImg,
    tag: "Energy Boost",
    offer: "Most loved",
  },
  {
    id: "mid",
    name: "Mid Fuel Bowl",
    description: "More variety, more taste, perfect daily upgrade.",
    fruits: ["Watermelon", "Papaya", "Apple", "Banana", "Pineapple", "Grapes"],
    price: 89,
    originalPrice: 119,
    image: midPlanImg,
    tag: "Balanced Choice",
    offer: "Best value",
  },
  {
    id: "basic",
    name: "Basic Fuel Bowl",
    description: "Simple, refreshing fruit bowl for daily hydration.",
    fruits: ["Watermelon", "Papaya", "Banana", "Apple", "Muskmelon"],
    price: 69,
    originalPrice: 99,
    image: basicPlanImg,
    tag: "Everyday Light",
    offer: "Start healthy",
  },
];
