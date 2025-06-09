
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, User, Briefcase, FileText } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const navItems = [
    { 
      name: 'Home', 
      url: '/', 
      icon: Home,
      onClick: () => navigate('/')
    },
    { 
      name: 'Services', 
      url: '#services', 
      icon: Briefcase,
      onClick: () => {
        if (isHomePage) {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        } else {
          navigate('/')
          setTimeout(() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    },
    { 
      name: 'About', 
      url: '#about', 
      icon: User,
      onClick: () => {
        // Add scroll to about section if it exists
        console.log('About clicked')
      }
    },
    { 
      name: 'Contact', 
      url: '#contact', 
      icon: FileText,
      onClick: () => {
        if (isHomePage) {
          document.querySelector('[id*="contact"]')?.scrollIntoView({ behavior: 'smooth' })
        } else {
          navigate('/')
          setTimeout(() => {
            document.querySelector('[id*="contact"]')?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" className="w-full h-full">
              <rect width="500" height="100" rx="50" fill="#698B69" />
              <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="white" className="text-lg font-serif">gold-meerah spa and salon</text>
              <g transform="translate(225, 120)">
                <path d="M25 0 L50 40 L0 40 Z" fill="#698B69" />
                <path d="M20 30 Q25 35 30 30" fill="none" stroke="white" strokeWidth="2" />
              </g>
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-foreground">Gold-Meerah</h1>
            <p className="text-xs text-muted-foreground">Spa & Salon Services</p>
          </div>
        </div>

        {/* Navigation - Using TubeLight NavBar */}
        <div className="hidden md:block">
          <NavBar items={navItems} className="relative top-0 left-0 transform-none mb-0 pt-0" />
        </div>

        {/* CTA Button */}
        <ShimmerButton
          onClick={() => navigate(location.pathname === '/booking' ? '/' : '/booking')}
          className="px-6 py-2 text-sm font-semibold"
          shimmerColor="#f59e0b"
          background="linear-gradient(135deg, #d4af37, #f4e4bc)"
        >
          {location.pathname === '/booking' ? 'Home' : 'Book Now'}
        </ShimmerButton>
      </div>
    </header>
  );
};

export default Header;
