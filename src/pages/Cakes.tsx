import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, CakeSlice, Instagram } from "lucide-react";

const cakes = [
  {
    title: "Classic Cakes",
    description: "Timeless favorites that never go out of style",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    varieties: [
      { name: "Chocolate Truffle", price: "Contact us for pricing" },
      { name: "Black Forest", price: "Contact us for pricing" },
      { name: "Red Velvet", price: "Contact us for pricing" },
      { name: "Vanilla Bean", price: "Contact us for pricing" },
      { name: "Butterscotch", price: "Contact us for pricing" }
    ]
  },
  {
    title: "Custom Cakes",
    description: "Personalized creations for your special moments",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    varieties: [
      { name: "Wedding Cakes", price: "Contact us for quote" },
      { name: "Birthday Cakes", price: "Contact us for quote" },
      { name: "Anniversary Cakes", price: "Contact us for quote" },
      { name: "Theme Cakes", price: "Contact us for quote" },
      { name: "Photo Cakes", price: "Contact us for quote" }
    ]
  },
  {
    title: "Premium Desserts",
    description: "Indulge in our signature dessert collection",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    varieties: [
      { name: "Tiramisu", price: "Contact for pricing" },
      { name: "Chocolate Mousse", price: "Contact for pricing" },
      { name: "Cheesecake", price: "Contact for pricing" },
      { name: "Fruit Trifle", price: "Contact for pricing" },
      { name: "Panna Cotta", price: "Contact for pricing" }
    ]
  },
  {
    title: "Celebration Specials",
    description: "Make your special occasions memorable",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
    varieties: [
      { name: "Multi-Tier Cakes", price: "Contact for custom quote" },
      { name: "Dessert Tables", price: "Contact for custom quote" },
      { name: "Party Packages", price: "Contact for custom quote" },
      { name: "Corporate Events", price: "Contact for custom quote" },
      { name: "Bulk Orders", price: "Contact for custom quote" }
    ]
  }
];

const Cakes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-gradient">Our Cake Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite range of handcrafted cakes and desserts, made with love and premium ingredients
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="group"
              onClick={() => window.open("https://www.swiggy.com/city/hyderabad/dolce-vita-ground-dolce-vita-sy-n-9-road-number-5-kothapet-and-dilsukhnagar-rest859414", "_blank")}
            >
              Order on Swiggy
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="group"
              onClick={() => window.open("https://www.zomato.com/hyderabad/dolce-vita-kothapet/order", "_blank")}
            >
              Order on Zomato
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="group"
              onClick={() => window.open("https://www.instagram.com/dolce.vita_d/", "_blank")}
            >
              Contact on Instagram
              <Instagram className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cakes.map((category) => (
            <Card key={category.title} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-6 overflow-hidden rounded-md">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <ul className="space-y-3">
                  {category.varieties.map((variety) => (
                    <li key={variety.name} className="flex items-center justify-between gap-2 p-2 rounded-md hover:bg-accent/10 transition-colors">
                      <div className="flex items-center gap-2">
                        <CakeSlice className="w-4 h-4 text-primary" />
                        <span>{variety.name}</span>
                      </div>
                      <span className="text-primary font-medium text-sm">{variety.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cakes;