import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const menuCategories = [
  {
    title: "Desserts",
    items: [
      { 
        name: "Apricot Delight", 
        price: 249, 
        isBestseller: true,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      { 
        name: "Chocolate Dream Cake", 
        price: 249,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      { 
        name: "Passion Delight", 
        price: 249,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
    ]
  },
  {
    title: "Cheese Cake Tubs",
    items: [
      { 
        name: "Blueberry Cheese Cake Tub", 
        price: 249,
        image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      },
      { 
        name: "Nutella Cheese Cake Tub", 
        price: 249,
        image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      },
    ]
  },
  {
    title: "Jar Cakes",
    items: [
      { 
        name: "Biscoff Jar Cake", 
        price: 239, 
        description: "A decadent dessert that features layers of rich cake and creamy filling",
        image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
      },
      { 
        name: "Chocolate Fudge Jar Cake", 
        price: 239, 
        description: "A decadent dessert that features three layers of rich chocolate cake, creamy chocolate",
        image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
      },
    ]
  },
  {
    title: "Brownie & Choco Lava",
    items: [
      { 
        name: "Brownie", 
        price: 129, 
        description: "Indulge in a rich and decadent delight that satisfies your sweet tooth",
        image: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
      },
      { 
        name: "Choco Lava", 
        price: 149,
        image: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
      },
    ]
  },
  {
    title: "Bubble Teas",
    items: [
      { 
        name: "Blue Hawaii", 
        price: 229, 
        description: "Indulge in the refreshing and tropical flavors of this vibrant Blue Bubble Tea",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      { 
        name: "Cookies & Cream", 
        price: 229, 
        isBestseller: true, 
        description: "Indulge in a creamy and delightful treat with our Cookies n Cream Bubble",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      { 
        name: "Green Melon", 
        price: 229,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      { 
        name: "Irish Cream", 
        price: 229,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
      { 
        name: "Nutty Taro", 
        price: 229, 
        description: "Indulge in the creamy and nutty delight of this tantalizing bubble tea.",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
      },
    ]
  },
  {
    title: "Pastries",
    items: [
      { name: "Croissant", price: 89 },
      { name: "Danish", price: 79 },
      { name: "Muffin", price: 69 }
    ]
  },
  {
    title: "Hot Beverages",
    items: [
      { name: "Espresso", price: 129 },
      { name: "Cappuccino", price: 149 },
      { name: "Hot Chocolate", price: 139 }
    ]
  },
  {
    title: "Cold Beverages",
    items: [
      { name: "Iced Latte", price: 159 },
      { name: "Cold Brew", price: 169 },
      { name: "Frappe", price: 179 }
    ]
  }
];

const showcaseItems = [
  {
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    title: "Birthday Theme Cake",
    description: "Perfect for your special day"
  },
  {
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    title: "Halloween Theme Cake",
    description: "Spooky and delicious"
  },
  {
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    title: "Butterfly Theme Cake",
    description: "Elegant and beautiful"
  }
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-gradient">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our delightful selection of desserts, drinks, and treats
          </p>
          <div className="flex justify-center gap-4">
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
          </div>
        </div>

        {/* Showcase Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center text-gradient">Featured Items</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {showcaseItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="aspect-square relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </section>

        <div className="space-y-12">
          {menuCategories.map((category) => (
            <section key={category.title} className="animate-fade-in">
              <h2 className="text-3xl font-serif mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Card key={item.name} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">
                          {item.name}
                          {item.isBestseller && (
                            <Badge variant="secondary" className="ml-2">
                              BESTSELLER
                            </Badge>
                          )}
                        </CardTitle>
                        <span className="text-primary font-medium">₹{item.price}</span>
                      </div>
                    </CardHeader>
                    {item.image && (
                      <div className="px-6">
                        <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                    {item.description && (
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Menu;

