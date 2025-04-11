
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // Here you would integrate with your newsletter service
      toast.success(`Thanks for subscribing! Check your email for a 5% discount code.`);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get 5% Off Your First Order</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter to receive exclusive offers, door care tips, and the latest trends for Nigerian homes.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-navy-800 border-navy-700 text-white placeholder:text-gray-400"
              required
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            By subscribing, you agree to receive marketing emails from Vintage Door.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
