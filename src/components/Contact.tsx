
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "+2348096242296";
    const message = "Hi! I'd like to book an appointment at Gold-Meerah Spa and Salon Services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience luxury and professional care at Gold-Meerah Spa and Salon. Contact us to schedule your visit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-2xl"></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Call Us</h3>
              <p className="text-muted-foreground mb-4">Book your appointment today</p>
              <p className="font-semibold text-primary">+234 809 624 2296</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-2xl"></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Email Us</h3>
              <p className="text-muted-foreground mb-4">Send us your inquiries anytime</p>
              <p className="font-semibold text-primary">goldmeerah@gmail.com</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="px-8 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span className="mr-2"></span>
            Chat on WhatsApp
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>📍 Sabon Layin, Gombe, Nigeria</p>
            <p className="mt-1"> Open: Monday - Saturday, 9:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
