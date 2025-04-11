
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  Phone,
  Home
} from "lucide-react";
import { useCartStore } from "@/lib/store";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import Info from "@/components/Info";
import Minus from "@/components/Minus";
import Plus from "@/components/Plus";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const totalItems = useCartStore(state => state.totalItems);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-navy-800">
              Vintage <span className="text-vintage-700">Door</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-navy-800 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/catalog" className="text-navy-800 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-navy-800 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-navy-800 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search, Cart and Menu buttons */}
          <div className="flex items-center space-x-2">
            {/* Search on desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search doors..."
                className="w-36 lg:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon"
                className="absolute right-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems()}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                  <SheetDescription>
                    Review the items in your cart before checkout
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  {totalItems() === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
                  ) : (
                    <CartItems />
                  )}
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button 
                      className="w-full" 
                      disabled={totalItems() === 0}
                      onClick={() => navigate('/checkout')}
                    >
                      Checkout
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Vintage Door</SheetTitle>
                </SheetHeader>
                <div className="py-6 flex flex-col space-y-4">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="flex items-center relative">
                    <Input
                      type="search"
                      placeholder="Search doors..."
                      className="w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button 
                      type="submit" 
                      variant="ghost" 
                      size="icon"
                      className="absolute right-0"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                  
                  <SheetClose asChild>
                    <Link to="/" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      <Home className="mr-2 h-5 w-5" />
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/catalog" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Shop
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/about" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      <Info className="mr-2 h-5 w-5" />
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/contact" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const CartItems = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.door.id} className="flex items-center space-x-4 pb-4 border-b">
          <div className="h-16 w-16 bg-muted rounded overflow-hidden">
            <img 
              src={item.door.images[0]} 
              alt={item.door.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{item.door.name}</h4>
            <div className="flex items-center justify-between mt-1">
              <p className="text-sm font-medium">
                ₦{item.door.discount 
                  ? (item.door.price * (1 - item.door.discount / 100)).toLocaleString()
                  : item.door.price.toLocaleString()}
              </p>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.door.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.door.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8"
            onClick={() => removeItem(item.door.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      
      {items.length > 0 && (
        <div className="pt-4 border-t">
          <div className="flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-bold">₦{totalPrice().toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
