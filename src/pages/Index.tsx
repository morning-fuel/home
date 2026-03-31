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
import InfoBanner from "@/components/InfoBanner";

const Index = () => {
  // Common state for bowl & plan
  const [selectedBowl, setSelectedBowl] = useState<string | null>("premium");
  const [selectedPlan, setSelectedPlan] = useState<string | null>("monthly");

  return (
    <div className="min-h-screen">
      <Navbar />
      <InfoBanner />
      <Hero />
      <Menu
        selectedBowl={selectedBowl}
        setSelectedBowl={setSelectedBowl}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <SubscriptionPlans
        selectedBowl={selectedBowl}
        setSelectedBowl={setSelectedBowl}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <LifestyleHook />

      {/* <Comparison /> */}

      <Benefits />
      {/* <Habit /> */}

      <OrderForm
        selectedBowl={selectedBowl}
        setSelectedBowl={setSelectedBowl}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      <WhyChooseUs />
      {/* <Tracking /> */}
      {/* <MapSection /> */}
      <Trust />
      <Footer />
    </div>
  );
};

export default Index;
