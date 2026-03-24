import { useScrollReveal } from "@/hooks/useScrollReveal";

const MapSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Location</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">We Deliver Across Ahmedabad</h2>
        </div>
        <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <iframe
            title="Morning Fuel Ahmedabad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117238.26584680999!2d72.4396543!3d23.0204737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
