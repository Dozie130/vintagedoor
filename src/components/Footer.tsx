
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    toast.success("You've been subscribed! Check your email for 5% discount code");
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vintage Door</h3>
            <p className="text-gray-300 mb-4">
              Premium interior doors for Nigerian homes and businesses.
              Quality craftsmanship delivered nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/catalog" className="text-gray-300 hover:text-white">Shop</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              <Link to="/faq" className="text-gray-300 hover:text-white">FAQs</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  15B Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+2348012345678" className="text-gray-300 hover:text-white">
                  +234 801 234 5678
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@vintagedoor.ng" className="text-gray-300 hover:text-white">
                  info@vintagedoor.ng
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for 5% off your first order and updates on new arrivals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-900 border-navy-800 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vintage Door Nigeria. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
