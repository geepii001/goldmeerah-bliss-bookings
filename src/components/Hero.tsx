
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search functionality or navigate to services
    navigate('/booking');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle search input change
    console.log("Search input:", e.target.value);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/80" />
      
      <div className="relative z-10 text-center text-background px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-200 via-cream-200 to-rose-200 bg-clip-text text-transparent">
            Gold-Meerah Spa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gold-100 font-light">
            Where Luxury Meets Wellness
          </p>
          <p className="text-lg mb-12 text-cream-100/90 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate in relaxation and rejuvenation with our premium spa services. 
            Indulge in treatments designed to restore your inner glow and outer radiance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <ShimmerButton
            onClick={() => navigate('/booking')}
            className="text-lg font-semibold shadow-2xl"
            shimmerColor="#f59e0b"
            background="linear-gradient(135deg, #d4af37, #f4e4bc)"
          >
            Book Your Appointment
          </ShimmerButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <PlaceholdersAndVanishInput
            placeholders={[
              "Search for facial treatments...",
              "Find massage services...",
              "Explore nail care options...",
              "Discover hair treatments...",
              "Browse spa packages..."
            ]}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-300/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
