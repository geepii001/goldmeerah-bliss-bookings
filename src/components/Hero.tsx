
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 spa-gradient opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-rose-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-3xl font-bold text-white">GM</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-gradient">Gold-Meerah</span>
          <br />
          <span className="text-foreground">Spa & Salon Services</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Experience luxury and rejuvenation at its finest
          <br />
          <span className="text-primary font-medium">Where beauty meets wellness</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-gold-500 hover:from-gold-500 hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            onClick={() => navigate('/booking')}
          >
            Book Your Appointment
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Premium Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
            <div className="text-muted-foreground">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
