import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Heart, Award, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  const navigate = useNavigate();

  const featuredDesserts = [
    {
      name: "Birthday Theme Cake",
      image: "/lovable-uploads/8e0436c5-6b41-4e3f-932b-fad856248279.png",
    },
    {
      name: "Halloween Theme Cake",
      image: "/lovable-uploads/4663abdd-1c83-4677-b1e8-ba9567a850c5.png",
    },
    {
      name: "Butterfly Theme Cake",
      image: "/lovable-uploads/812a8a53-6184-469b-a2b4-2cf847a0ff67.png",
    },
    {
      name: "Birthday Theme Cake",
      image: "/lovable-uploads/5c90e92e-2281-4ceb-9f1f-f616f264b9f8.png",
    },
    {
      name: "Traditional Theme Cake",
      image: "/lovable-uploads/3627ffc2-1920-4989-9e52-e4fffdc44836.png",
    },
    {
      name: "Gender Reveal Cake",
      image: "/lovable-uploads/c75e589d-1899-4e80-891e-d77969d47e8e.png",
    },
    {
      name: "Macaron Theme Cake",
      image: "/lovable-uploads/de25b59a-b5fe-4464-b763-e37f7f411f7e.png",
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "Premium Ingredients",
      description: "We use only the finest ingredients for exceptional taste"
    },
    {
      icon: Award,
      title: "Custom Designs",
      description: "Personalized creations for every occasion"
    },
    {
      icon: Truck,
      title: "City-wide Delivery",
      description: "Fast delivery across Hyderabad"
    }
  ];

  return (
    <>
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6 text-gradient">
            DOLCE VITA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Best Customised Cakes & Desserts for All Occasions - Delivery All Over Hyderabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              onClick={() => navigate('/cakes')}
            >
              Explore Our Creations
              <ArrowRight className="ml-2" />
            </Button>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="group flex-1 sm:flex-initial"
                onClick={() => window.open("https://www.swiggy.com/city/hyderabad/dolce-vita-ground-dolce-vita-sy-n-9-road-number-5-kothapet-and-dilsukhnagar-rest859414", "_blank")}
              >
                Order on Swiggy
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group flex-1 sm:flex-initial"
                onClick={() => window.open("https://www.zomato.com/hyderabad/dolce-vita-kothapet/order", "_blank")}
              >
                Order on Zomato
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12 text-center text-gradient">Custom Cake Gallery</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredDesserts.map((dessert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <div 
                      className="overflow-hidden rounded-lg group cursor-pointer relative aspect-square" 
                      onClick={() => navigate('/cakes')}
                    >
                      <img
                        src={dessert.image}
                        alt={dessert.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-lg font-medium text-white mb-2">{dessert.name}</h3>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="bg-background/20 backdrop-blur-sm border-primary/50 hover:border-primary"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open("https://www.instagram.com/dolce.vita_d/", "_blank");
                            }}
                          >
                            Contact for Details
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12 text-center text-gradient">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-8 text-gradient">Follow Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community and stay updated with our latest creations
          </p>
          <a
            href="https://www.instagram.com/dolce.vita_d/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Follow our creations on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
};