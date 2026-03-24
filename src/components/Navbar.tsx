import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow flex items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Morning Fuel" className="h-10 w-10 rounded-lg object-cover" />
          <span className="font-bold text-lg text-foreground">Morning Fuel</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#plans" className="hover:text-primary transition-colors">Plans</a>
          <a href="#order" className="hover:text-primary transition-colors">Order</a>
          <a href="#footer" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a
          href="#order"
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
