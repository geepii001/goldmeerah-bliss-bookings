
const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">GM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Gold-Meerah</h3>
                <p className="text-xs text-muted-foreground">Spa & Salon Services</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Experience luxury and rejuvenation at its finest. Where beauty meets wellness.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 123 Luxury Lane, Beauty District</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 info@goldmeerahspa.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Business Hours</h4>
            <div className="space-y-1 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Gold-Meerah Spa and Salon Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
