
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-vintage-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-navy-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 text-vintage-600" />
                <div>
                  <p className="font-medium text-navy-800">Email</p>
                  <a 
                    href="mailto:dozie.ebuka@gmail.com" 
                    className="text-gray-600 hover:text-vintage-700"
                  >
                    dozie.ebuka@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 text-vintage-600" />
                <div>
                  <p className="font-medium text-navy-800">Phone</p>
                  <a 
                    href="tel:+2348129576142" 
                    className="text-gray-600 hover:text-vintage-700"
                  >
                    +234 8129 5761 42
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4 text-vintage-600" />
                <div>
                  <p className="font-medium text-navy-800">Address</p>
                  <p className="text-gray-600">
                    15B Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-navy-800">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-navy-800">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-navy-800">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  rows={5} 
                  required 
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
