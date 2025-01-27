import { Home, Cake, Coffee, ShoppingBag, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Cake, label: "Cakes", href: "/cakes" },
  { icon: Coffee, label: "Menu", href: "/menu" },
  { icon: ShoppingBag, label: "Order Now", href: "#order" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-primary/20">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group flex flex-col items-center gap-1"
              >
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};