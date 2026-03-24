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

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <LifestyleHook />
    <Comparison />
    <Menu />
    <Benefits />
    <Habit />
    <SubscriptionPlans />
    <OrderForm />
    <WhyChooseUs />
    <Tracking />
    <MapSection />
    <Trust />
    <Footer />
  </div>
);

export default Index;
