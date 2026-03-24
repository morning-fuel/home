import heroImg from "@/assets/hero-fruite-dish.png";
import { Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg-hero overflow-hidden pt-16">
      {/* Decorative floating fruit icon */}
      <div className="absolute top-28 right-8 md:right-16 animate-float opacity-80">
        <Leaf className="w-8 h-8 text-white/60" />
      </div>
      <div className="absolute bottom-20 left-6 animate-float opacity-60" style={{ animationDelay: "1.5s" }}>
        <span className="text-4xl">🍊</span>
      </div>

      <div className="container-narrow w-full px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-white/80 text-sm font-medium tracking-wide uppercase mb-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fresh • Healthy • Delivered by 9 AM
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5 opacity-0 animate-fade-up text-balance" style={{ animationDelay: "0.25s" }}>
            Fuel Your Day with Fresh Fruits
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-md mx-auto md:mx-0 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {/* Premium fruit bowls delivered to your office in Ahmedabad before your workday begins. */}
            Freshly cut fruit bowls delivered daily in Ahmedabad.
Light, energizing, and ready when you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.97] opacity-0 animate-slide-right"
              style={{ animationDelay: "0.55s" }}
            >
              <span>🟢</span> Order Now
            </a>
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
        <div className="order-1 md:order-2 flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
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
