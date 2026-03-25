import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import OrderForm from "@/components/OrderForm";
import Tracking from "@/components/Tracking";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import LifestyleHook from "@/components/LifestyleHook";
import Comparison from "@/components/Comparison";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Trust from "@/components/Trust";
import Habit from "@/components/Habit";

const Index = () => {
  // Common state for bowl & plan
  const [selectedBowl, setSelectedBowl] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LifestyleHook />
      <Comparison />
      <Menu
        selectedBowl={selectedBowl}
        setSelectedBowl={setSelectedBowl}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <Benefits />
      <Habit />
      <SubscriptionPlans
        selectedBowl={selectedBowl}
        setSelectedBowl={setSelectedBowl}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <OrderForm
        selectedBowl={selectedBowl}
        setSelectedBowl={setSelectedBowl}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <WhyChooseUs />
      <Tracking />
      <MapSection />
      <Trust />
      <Footer />
    </div>
  );
};

export default Index;
