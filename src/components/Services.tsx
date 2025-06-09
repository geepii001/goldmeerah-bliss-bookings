
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    category: "Spa Treatments",
    description: "Relax and rejuvenate with our premium spa services",
    services: [
      "Body Polishing",
      "Body Scrub", 
      "Massage",
      "Aromatherapy Massage",
      "Hot Steam",
      "Body Steaming",
      "Bridal Spa",
      "Cupping",
      "Exfoliation",
      "Facial Spa",
      "Lymphatic Drainage Massage",
      "Vacuum Massage",
      "Vagina Steaming",
      "Vajacials / Vagicials"
    ]
  },
  {
    category: "Beauty Treatments",
    description: "Enhance your natural beauty with expert care",
    services: [
      "Body Waxing",
      "Eyebrow Threading",
      "Eyelash Extensions",
      "Facial",
      "Manicure",
      "Pedicure",
      "Skin Treatments",
      "Microblading",
      "Eye Lash Lamination",
      "Eye Lash Tinting",
      "Eyebrow Lamination",
      "Eyebrow Tinting"
    ]
  },
  {
    category: "Hair Services",
    description: "Professional hair styling and treatments",
    services: [
      "Hairstyling",
      "Laser Hair Removal",
      "Hair Growth Treatment"
    ]
  },
  {
    category: "Advanced Therapies",
    description: "Modern technology meets traditional wellness",
    services: [
      "Cavitation (Body Fat Reduction)",
      "High Frequency Therapy",
      "LED Light Therapy",
      "RF Therapy"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of luxury spa and beauty treatments designed to pamper and rejuvenate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((category, index) => (
            <Card 
              key={category.category} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-gradient transition-all duration-300">
                  {category.category}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.services.map((service) => (
                    <div 
                      key={service}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300 group/service"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover/service:bg-gold-500 transition-colors duration-300" />
                      <span className="text-sm font-medium text-foreground group-hover/service:text-primary transition-colors duration-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
