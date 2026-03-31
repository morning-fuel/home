import heroImg from "@/assets/hero-fruite-dish.png";
import { Leaf } from "lucide-react";

const Hero = () => {
  const handleOrderClick = () => {
    const msg = `Hi Morning Fuel! 👋

I’d like to start the 3-Day FREE Trial (₹199):

Order Details:
• Plan: 3-Day Trial Pack

Looking forward to your confirmation. Thank you! ✨`;

    window.open(
      `https://wa.me/919106116932?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-bg-hero overflow-hidden">
      {/* Decorative floating icons */}
      <div className="absolute top-28 right-8 md:right-16 animate-float opacity-80">
        <Leaf className="w-8 h-8 text-white/60" />
      </div>
      <div
        className="absolute bottom-20 left-6 animate-float opacity-60"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-4xl">🍊</span>
      </div>

      <div className="container-narrow w-full px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p
            className="text-white/80 text-sm font-medium tracking-wide uppercase mb-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Limited Time Offer • New Customers Only
          </p>

          {/* 🔥 MAIN HEADLINE */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5 opacity-0 animate-fade-up text-balance"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl">
              FREE Trial
            </span>
            Premium Fruit Bowls <br />
            3-Days at JUST ₹199
          </h1>

          {/* 🔥 SUBTEXT */}
          <p
            className="text-white/90 text-base md:text-lg max-w-md mx-auto md:mx-0 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Get fresh fruit bowls delivered every morning in Ahmedabad 🥭🍓
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={handleOrderClick}
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.97] opacity-0 animate-slide-right"
              style={{ animationDelay: "0.55s" }}
            >
              <span>🟢</span> Start FREE Trial
            </button>

            <a
              href="#menu"
              className="inline-flex items-center justify-center bg-white/15 backdrop-blur text-white border border-white/30 font-semibold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all duration-300 active:scale-[0.97] opacity-0 animate-slide-left"
              style={{ animationDelay: "0.65s" }}
            >
              <span>🥗</span> View Menu
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="order-1 md:order-2 flex justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <img
            src={heroImg}
            alt="Fresh fruit bowl from Morning Fuel"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
