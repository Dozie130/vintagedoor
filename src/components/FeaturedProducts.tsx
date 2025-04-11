
import { Link } from "react-router-dom";
import { doors } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/store";
import { Star, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
  const featuredDoors = doors.filter(door => door.featured).slice(0, 4);
  const addItem = useCartStore(state => state.addItem);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-navy-900">Featured Doors</h2>
            <p className="text-muted-foreground mt-2">Our most popular picks for Nigerian homes</p>
          </div>
          <Link to="/catalog" className="text-primary hover:underline mt-2 md:mt-0">
            View all doors →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDoors.map((door) => (
            <Card key={door.id} className="card-hover">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                {door.discount && (
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    {door.discount}% OFF
                  </Badge>
                )}
                <img
                  src={door.images[0]}
                  alt={door.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(door.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    ({door.reviews})
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{door.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{door.material}, {door.size}</p>
                <div className="flex items-center">
                  {door.discount ? (
                    <>
                      <span className="text-lg font-bold text-primary">
                        ₦{(door.price * (1 - door.discount / 100)).toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ₦{door.price.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-primary">
                      ₦{door.price.toLocaleString()}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  asChild 
                  variant="outline"
                  className="flex-1"
                >
                  <Link to={`/product/${door.id}`}>Details</Link>
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => addItem(door)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
