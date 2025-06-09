
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The most relaxing spa experience I've ever had. The gold facial treatment left my skin glowing for weeks!",
    service: "Gold Facial Treatment"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Professional service and luxurious atmosphere. The massage therapy was exactly what I needed after a stressful week.",
    service: "Deep Tissue Massage"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Amazing attention to detail and personalized care. The staff truly understands how to make you feel pampered and valued.",
    service: "Spa Package"
  },
  {
    id: 4,
    name: "David Park",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The manicure service was top-notch. Clean, professional, and the results lasted for weeks. Highly recommend!",
    service: "Premium Manicure"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The hair treatment transformed my damaged hair into silk. The stylists are true artists and experts in their field.",
    service: "Hair Restoration Treatment"
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-gold-400 text-gold-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why our clients choose Gold-Meerah Spa for their wellness and beauty needs
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
