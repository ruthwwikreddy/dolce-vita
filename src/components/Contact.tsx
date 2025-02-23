
import { Instagram, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 bg-background/80 backdrop-blur-sm" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-8 text-center text-gradient">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-xl border border-primary/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15430.875703372883!2d78.53688540044833!3d17.357291136393663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999d4dbb7c9d%3A0x51d3f02194abaa01!2sDolce%20Vita!5e1!3m2!1sen!2sin!4v1737875756541!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-4">
                We'd love to hear from you! Reach out to us for custom orders, feedback, or any questions.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Hyderabad Location</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+91 9346403033</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">info@dolcevita.com</span>
                </p>
                <a
                  href="https://www.instagram.com/dolce.vita_d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow us on Instagram</span>
                </a>
                <div className="pt-4 border-t">
                  <a
                    href="https://ruthwikreddy.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Made by Ruthwik Reddy <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
