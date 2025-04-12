
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { doors } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredDoors, setFilteredDoors] = useState(doors);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    let result = [...doors];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(door => 
        door.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        door.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        door.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Apply category filter
    if (category !== "all") {
      result = result.filter(door => door.category === category);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredDoors(result);
  }, [searchQuery, category, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(params => {
      if (searchQuery) {
        params.set("search", searchQuery);
      } else {
        params.delete("search");
      }
      return params;
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Door Collection</h1>
          <p className="text-muted-foreground">Browse our extensive selection of premium doors for your Nigerian home</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="search"
              placeholder="Search doors..."
              className="max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </form>
          
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            
            <Select
              value={category}
              onValueChange={setCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="wooden">Wooden</SelectItem>
                <SelectItem value="glass">Glass</SelectItem>
                <SelectItem value="panel">Panel</SelectItem>
                <SelectItem value="flush">Flush</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={sortBy}
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                <SelectItem value="nameAsc">Name: A to Z</SelectItem>
                <SelectItem value="nameDesc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredDoors.length} {filteredDoors.length === 1 ? 'result' : 'results'}
        </p>

        {/* Product grid */}
        {filteredDoors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoors.map((door) => (
              <Card key={door.id} className="card-hover">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  {door.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {door.discount}% OFF
                    </Badge>
                  )}
                  <img
                    src={door.id === "door-001" 
                      ? "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074" 
                      : door.id === "door-002"
                      ? "https://images.unsplash.com/photo-1509644851169-2acc08aa16cd?q=80&w=1974"
                      : door.id === "door-003"
                      ? "https://images.unsplash.com/photo-1596162955779-9308c161a271?q=80&w=1974" 
                      : door.id === "door-004"
                      ? "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1974"
                      : door.id === "door-005"
                      ? "https://images.unsplash.com/photo-1596394723269-b2cbca4e6e33?q=80&w=2070"
                      : door.id === "door-006"
                      ? "https://images.unsplash.com/photo-1558345634-e0d64a61ef85?q=80&w=1974"
                      : door.id === "door-007" 
                      ? "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070"
                      : "https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?q=80&w=1974"
                    }
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No doors found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <Button onClick={() => { setSearchQuery(""); setCategory("all"); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Catalog;
