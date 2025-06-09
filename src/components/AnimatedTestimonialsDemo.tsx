
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "The most relaxing spa experience I've ever had. The gold facial treatment left my skin glowing for weeks! The attention to detail is absolutely incredible.",
    name: "Sarah Chen",
    designation: "Marketing Executive",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    quote: "Professional service and luxurious atmosphere. The massage therapy was exactly what I needed after a stressful week. Highly recommend!",
    name: "Michael Rodriguez",
    designation: "Business Owner",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    quote: "Amazing attention to detail and personalized care. The staff truly understands how to make you feel pampered and valued.",
    name: "Emily Watson",
    designation: "Wellness Enthusiast",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    quote: "The manicure service was top-notch. Clean, professional, and the results lasted for weeks. This is my go-to spa now.",
    name: "James Kim",
    designation: "Fashion Designer",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    quote: "The hair treatment transformed my damaged hair into silk. The stylists are true artists and experts in their field.",
    name: "Lisa Thompson",
    designation: "Creative Director",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

function AnimatedTestimonialsDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover why our clients choose Gold-Meerah Spa for their wellness and beauty needs
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}

export { AnimatedTestimonialsDemo };
