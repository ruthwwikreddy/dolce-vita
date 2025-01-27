import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    title: "Desserts",
    items: [
      { name: "Apricot Delight", price: 249, isBestseller: true },
      { name: "Chocolate Dream Cake", price: 249 },
      { name: "Passion Delight", price: 249 },
    ]
  },
  {
    title: "Cheese Cake Tubs",
    items: [
      { name: "Blueberry Cheese Cake Tub", price: 249 },
      { name: "Nutella Cheese Cake Tub", price: 249 },
    ]
  },
  {
    title: "Jar Cakes",
    items: [
      { name: "Biscoff Jar Cake", price: 239, description: "A decadent dessert that features layers of rich cake and creamy filling" },
      { name: "Chocolate Fudge Jar Cake", price: 239, description: "A decadent dessert that features three layers of rich chocolate cake, creamy chocolate" },
    ]
  },
  {
    title: "Brownie & Choco Lava",
    items: [
      { name: "Brownie", price: 129, description: "Indulge in a rich and decadent delight that satisfies your sweet tooth" },
      { name: "Choco Lava", price: 149 },
    ]
  },
  {
    title: "Donuts",
    items: [
      { name: "Chocolate Caramel Donut", price: 129 },
      { name: "White Chocolate Donut", price: 129 },
    ]
  },
  {
    title: "Bubble Teas",
    items: [
      { name: "Blue Hawaii", price: 229, description: "Indulge in the refreshing and tropical flavors of this vibrant Blue Bubble Tea" },
      { name: "Cookies & Cream", price: 229, isBestseller: true, description: "Indulge in a creamy and delightful treat with our Cookies n Cream Bubble" },
      { name: "Green Melon", price: 229 },
      { name: "Irish Cream", price: 229 },
      { name: "Nutty Taro", price: 229, description: "Indulge in the creamy and nutty delight of this tantalizing bubble tea." },
    ]
  },
  {
    title: "Mocktails",
    items: [
      { name: "Blue Lagoon", price: 199, description: "A refreshing and vibrant mocktail that transports you to the tropical shores" },
      { name: "Cranberry Fizz", price: 199, description: "A refreshing and effervescent cranberry-infused delight that will tickle your taste buds" },
      { name: "Peach Paradise", price: 199 },
      { name: "Pink Passion", price: 199, description: "Indulge in a delightful burst of flavors like Cranberry, Lemon and Orange" },
      { name: "Virgin Mojito", price: 199, description: "[Non Alcoholic] A refreshing and zesty blend of citrus and mint, perfect for those" },
      { name: "Watermelon", price: 199, description: "A refreshing and fruity twist of watermelon on the classic mojito" },
      { name: "Wild Strawberry", price: 199, description: "A refreshing and fruity mojito bursting with the vibrant flavors of fresh wild" },
    ]
  },
  {
    title: "Shakes",
    items: [
      { name: "Black Currant Shake", price: 159 },
      { name: "Blueberry Shake", price: 189 },
      { name: "Caramel Butterscotch Shake", price: 159 },
      { name: "Choco Brownie Shake", price: 199, description: "Indulge in the rich and creamy delight of a velvety Choco Brownie Milk" },
      { name: "Chocolate Strawberry Shake", price: 159 },
      { name: "Dairy Milk Shake", price: 189 },
      { name: "Gems Shake", price: 189 },
      { name: "Kit Kat Shake", price: 189, description: "Indulge in a creamy, velvety delight that perfectly blends the iconic Kit Kat" },
      { name: "Munch Shake", price: 189 },
      { name: "Nutella Oreo Shake", price: 199 },
      { name: "Nutella Shake", price: 199, description: "Indulge in a creamy and irresistible blend of rich flavors with our Nutella" },
      { name: "Oreo Shake", price: 189, description: "A delectable and creamy indulgence that combines the iconic flavors of Oreo cookies" },
      { name: "Red Velvet Nutella Shake", price: 199 },
      { name: "Strawberry Shake", price: 159, description: "A refreshing and creamy blend of luscious strawberries, perfect for a delightful indulgence" },
      { name: "Vanilla Shake", price: 159, description: "Indulge in a smooth and creamy vanilla shake that will satisfy your sweet" },
    ]
  },
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
      <Footer />
    </div>
  );
};

export default Menu;