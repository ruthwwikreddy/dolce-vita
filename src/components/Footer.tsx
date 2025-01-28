import { Instagram, MapPin, Phone, Mail, Truck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Hyderabad Location</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@dolcevita.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/dolce.vita_d/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@dolce.vita_d</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Delivery</h3>
            <p className="text-muted-foreground flex items-start gap-2">
              <Truck className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>We deliver all over Hyderabad through our own delivery service, Swiggy, and Zomato.</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dolce Vita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};