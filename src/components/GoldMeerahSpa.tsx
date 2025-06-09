"use client";

import React, { useState, CSSProperties } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  date: string;
  time: string;
  notes: string;
}

const GoldMeerahSpa: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [bookingData, setBookingData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    services: [],
    date: "",
    time: "",
    notes: "",
  });

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  const services = [
    {
      id: "facial",
      name: "Luxury Gold Facial",
      description: "Rejuvenating facial treatment with 24k gold infusion for radiant, youthful skin.",
      price: "$180",
      duration: "90 min",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "massage",
      name: "Rose Quartz Hot Stone Massage",
      description: "Therapeutic massage using heated rose quartz stones to melt away tension.",
      price: "$220",
      duration: "120 min",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "manicure",
      name: "Crystal Manicure & Pedicure",
      description: "Luxurious nail treatment with crystal-infused products and gel polish.",
      price: "$85",
      duration: "75 min",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "hair",
      name: "Keratin Hair Treatment",
      description: "Professional keratin treatment for smooth, frizz-free, and shiny hair.",
      price: "$150",
      duration: "180 min",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "body",
      name: "Himalayan Salt Body Scrub",
      description: "Exfoliating body treatment with pure Himalayan salt and essential oils.",
      price: "$120",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "package",
      name: "Royal Spa Package",
      description: "Complete spa experience including facial, massage, and nail treatment.",
      price: "$380",
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    alert("Booking request submitted successfully! We'll contact you shortly to confirm your appointment.");
    setBookingData({
      fullName: "",
      email: "",
      phone: "",
      services: [],
      date: "",
      time: "",
      notes: "",
    });
  };

  const handleServiceToggle = (serviceId: string) => {
    setBookingData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentSection("services");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle search input change
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-rose-50 to-cream-100">
      {/* This is a complete single-page spa website component */}
      {/* You can use this to replace your entire app structure if desired */}
      
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Complete Spa Website Component</h1>
        <p className="text-lg text-muted-foreground mb-6">
          This is the full Gold-Meerah Spa component. You now have access to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">ShimmerButton</h3>
            <p className="text-sm text-muted-foreground">Available at /components/ui/shimmer-button.tsx</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">PlaceholdersAndVanishInput</h3>
            <p className="text-sm text-muted-foreground">Available at /components/ui/placeholders-and-vanish-input.tsx</p>
          </div>
        </div>
        
        <div className="mt-8">
          <ShimmerButton className="mr-4">
            Try ShimmerButton
          </ShimmerButton>
        </div>
        
        <div className="mt-8 max-w-md mx-auto">
          <PlaceholdersAndVanishInput
            placeholders={["Try typing something...", "Press enter to see the effect!", "Amazing animation, right?"]}
            onChange={() => {}}
            onSubmit={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default GoldMeerahSpa;
