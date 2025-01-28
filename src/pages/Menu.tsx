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
        image: "/lovable-uploads/be67eff4-9d8f-4988-8c1f-74ef100f8637.png"
      },
      { 
        name: "Chocolate Dream Cake", 
        price: 249,
        image: "/lovable-uploads/3b5661d9-52f5-413e-98ae-b7099d2a101c.png"
      },
      { 
        name: "Passion Delight", 
        price: 249,
        image: "/lovable-uploads/eda170b8-175d-48dc-ade3-879100189cfd.png"
      },
    ]
  },
  {
    title: "Cheese Cake Tubs",
    items: [
      { 
        name: "Blueberry Cheese Cake Tub", 
        price: 249,
        image: "/lovable-uploads/49836021-05a6-46c5-8fa6-44ba4cd72a25.png"
      },
      { 
        name: "Nutella Cheese Cake Tub", 
        price: 249,
        image: "/lovable-uploads/847c85d8-b578-4b3b-80ca-f7629eb9c890.png"
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
        image: "/lovable-uploads/98e13d02-0a1b-474a-977b-58fb3ebfd0e5.png"
      },
      { 
        name: "Chocolate Fudge Jar Cake", 
        price: 239, 
        description: "A decadent dessert that features three layers of rich chocolate cake, creamy chocolate",
        image: "/lovable-uploads/8b36bfca-a88f-47b5-956b-c8325fef98c1.png"
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
        image: "/lovable-uploads/3b5661d9-52f5-413e-98ae-b7099d2a101c.png"
      },
      { 
        name: "Choco Lava", 
        price: 149,
        image: "/lovable-uploads/be67eff4-9d8f-4988-8c1f-74ef100f8637.png"
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
        image: "/lovable-uploads/9607bfeb-bf16-48e2-a5be-69d350b7835a.png"
      },
      { 
        name: "Cookies & Cream", 
        price: 229, 
        isBestseller: true, 
        description: "Indulge in a creamy and delightful treat with our Cookies n Cream Bubble",
        image: "/lovable-uploads/43b79337-03e0-4ae6-ac41-1be7af806864.png"
      },
      { 
        name: "Green Melon", 
        price: 229,
        image: "/lovable-uploads/e8edd06b-c5d7-4fce-bf37-fd44de98095b.png"
      },
      { 
        name: "Irish Cream", 
        price: 229,
        image: "/lovable-uploads/c7811e23-ec25-4b17-806b-ddc67c73e935.png"
      },
      { 
        name: "Nutty Taro", 
        price: 229, 
        description: "Indulge in the creamy and nutty delight of this tantalizing bubble tea.",
        image: "/lovable-uploads/2294fa48-a11b-45de-90dd-b22eda7c51f5.png"
      },
    ]
  },
];

const showcaseItems = [
  {
    image: "/lovable-uploads/8e0436c5-6b41-4e3f-932b-fad856248279.png",
    title: "Birthday Theme Cake",
    description: "Perfect for your special day"
  },
  {
    image: "/lovable-uploads/4663abdd-1c83-4677-b1e8-ba9567a850c5.png",
    title: "Halloween Theme Cake",
    description: "Spooky and delicious"
  },
  {
    image: "/lovable-uploads/812a8a53-6184-469b-a2b4-2cf847a0ff67.png",
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
