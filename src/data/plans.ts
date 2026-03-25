export const plans = [
  {
    id: "onetime",
    name: "One-Time Order",
    price: 0, // dynamic based on bowl
    period: "",
    description: "Try a single bowl anytime",
    features: [
      "One-time delivery",
      "Choose any bowl",
      "Pay per order",
    ],
  },
  {
    id: "weekly",
    name: "Weekly Plan",
    price: 499,
    period: "/week",
    description: "Perfect for trying consistency",
    features: [
      "5 days delivery (Mon–Fri)",
      "Fresh bowls daily",
      "Better value than one-time",
    ],
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: 1849,
    period: "/month",
    description: "Best value for daily routine",
    features: [
      "20–22 days delivery",
      "Maximum savings",
      "Priority service",
    ],
    popular: true,
  },
];

export const newPlans = [
  {
    id: "onetime",
    name: "One-Time",
    period: "",
    prices: {
      basic: 69,
      mid: 89,
      premium: 119,
    },
    features: ["One-time delivery", "Choose any bowl"],
  },
  {
    id: "weekly",
    name: "Weekly",
    period: "/week",
    prices: {
      basic: 320,    // less than 5*69=345 → discount
      mid: 410,      // less than 5*89=445
      premium: 550,  // less than 5*119=595
    },
    features: ["5 days delivery (Mon–Fri)", "Fresh bowls daily", "Discounted price"],
  },
  {
    id: "monthly",
    name: "Monthly",
    period: "/month",
    prices: {
      basic: 1200,   // less than 20*69=1380
      mid: 1500,     // less than 20*89=1780
      premium: 2000, // less than 20*119=2380
    },
    features: ["20–22 days delivery", "Max savings", "Priority service"],
    popular: true,
  },
];