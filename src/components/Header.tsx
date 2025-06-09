
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-white">GM</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-foreground">Gold-Meerah</h1>
            <p className="text-xs text-muted-foreground">Spa & Salon Services</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isHomePage && (
            <>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => document.querySelector('[id*="contact"]')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </>
          )}
        </nav>

        {/* CTA Button */}
        <Button
          onClick={() => navigate('/booking')}
          className="bg-gradient-to-r from-primary to-gold-500 hover:from-gold-500 hover:to-primary transition-all duration-300 font-semibold"
        >
          {location.pathname === '/booking' ? 'Home' : 'Book Now'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
