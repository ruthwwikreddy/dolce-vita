import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <a
                  href="https://g.co/kgs/BTbYKAF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Hyderabad Location
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@dolcevita.com"
                  className="hover:text-primary transition-colors"
                >
                  info@dolcevita.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-4 text-primary">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-4 text-primary">Delivery</h3>
            <p className="text-muted-foreground">
              We deliver all over Hyderabad through our own delivery service,
              Swiggy, and Zomato.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
          <p>© 2024 DOLCE VITA DESSERTS & MORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};