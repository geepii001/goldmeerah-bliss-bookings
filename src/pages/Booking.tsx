
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const allServices = [
  "Body Polishing", "Body Scrub", "Body Waxing", "Eyebrow Threading", "Eyelash Extensions",
  "Facial", "Hairstyling", "Manicure", "Massage", "Microblading", "Pedicure", "Skin Treatments",
  "Aromatherapy Massage", "Hot Steam", "Body Steaming", "Bridal Spa", "Cavitation (Body Fat Reduction)",
  "Cupping", "Exfoliation", "Eye Lash Lamination", "Eye Lash Tinting", "Eyebrow Lamination",
  "Eyebrow Tinting", "Facial Spa", "High Frequency Therapy", "LED Light Therapy",
  "Lymphatic Drainage Massage", "RF Therapy", "Vacuum Massage", "Vagina Steaming",
  "Vajacials / Vagicials", "Laser Hair Removal", "Hair Growth Treatment"
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
];

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedServices: [] as string[],
    preferredDate: undefined as Date | undefined,
    preferredTime: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || 
        formData.selectedServices.length === 0 || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    console.log("Booking data:", {
      ...formData,
      timestamp: new Date().toISOString(),
      preferredDate: formData.preferredDate ? format(formData.preferredDate, 'PPP') : null
    });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Booking Confirmed! ✨",
        description: "We'll contact you shortly to confirm your appointment details.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        selectedServices: [],
        preferredDate: undefined,
        preferredTime: "",
        notes: ""
      });

    } catch (error) {
      toast({
        title: "Booking Error",
        description: "There was an issue submitting your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-primary"
          >
            ← Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-gradient">Appointment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards your perfect spa experience
          </p>
        </div>

        {/* Booking Form */}
        <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Appointment Details</CardTitle>
            <CardDescription className="text-center">
              Please fill in your information and we'll contact you to confirm your booking
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base font-semibold">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="Enter your full name"
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email address"
                  className="h-12"
                  required
                />
              </div>

              {/* Services Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Select Services *</Label>
                <p className="text-sm text-muted-foreground">Choose one or more services</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto p-4 border rounded-lg bg-background/50">
                  {allServices.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={formData.selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <Label htmlFor={service} className="text-sm cursor-pointer">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
                {formData.selectedServices.length > 0 && (
                  <p className="text-sm text-primary font-medium">
                    Selected: {formData.selectedServices.join(", ")}
                  </p>
                )}
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-base font-semibold">Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start text-left font-normal",
                          !formData.preferredDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.preferredDate}
                        onSelect={(date) => setFormData(prev => ({ ...prev, preferredDate: date }))}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-base font-semibold">Preferred Time *</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-base font-semibold">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any special requests or additional information..."
                  className="min-h-24"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-gold-500 hover:from-gold-500 hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
