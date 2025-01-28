import { Home, Cake, Coffee, ShoppingBag, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Cake, label: "Cakes", href: "/cakes" },
  { icon: Coffee, label: "Menu", href: "/menu" },
  { icon: ShoppingBag, label: "Order Now", href: "#order" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-sm rounded-full p-4 shadow-lg border border-primary/20">
        <ul className="space-y-6">
          {navItems.map((item) => {
            const isHash = item.href.startsWith('#');
            const Component = isHash ? 'a' : Link;
            const isActive = !isHash && location.pathname === item.href;
            
            return (
              <li key={item.label}>
                <Component
                  to={!isHash ? item.href : undefined}
                  href={isHash ? item.href : undefined}
                  className={cn(
                    "group flex flex-col items-center gap-1",
                    isActive && "text-primary"
                  )}
                >
                  <item.icon className={cn(
                    "w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors",
                    isActive && "text-primary"
                  )} />
                  <span className={cn(
                    "text-xs text-muted-foreground group-hover:text-primary transition-colors",
                    isActive && "text-primary"
                  )}>
                    {item.label}
                  </span>
                </Component>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};