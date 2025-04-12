
import Layout from "@/components/Layout";
import { Leaf, Clock, Star, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">
            About Vintage Door
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to Vintage Door, where timeless craftsmanship meets unparalleled quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-soft rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              With nearly 15 years of expertise in the industry, we specialize in offering the finest vintage and high-quality doors that bring charm, elegance, and durability to any space.
            </p>
            <p className="text-gray-700">
              Each door is carefully curated or crafted to blend classic style with modern functionality, ensuring a perfect fit for your home or project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Clock,
                title: "15 Years of Experience",
                description: "Decades of expertise in door craftsmanship and design."
              },
              {
                icon: Leaf,
                title: "Sustainable Materials",
                description: "Commitment to using high-quality, responsibly sourced materials."
              },
              {
                icon: Star,
                title: "Unparalleled Quality",
                description: "Every door meets our rigorous standards of excellence."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-center bg-vintage-50 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-vintage-600 mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Trust Vintage Door to deliver exceptional products and service, backed by our passion for excellence and deep-rooted experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a href="mailto:dozie.ebuka@gmail.com" className="flex items-center space-x-2 text-vintage-600 hover:text-vintage-700">
              <Button variant="outline" className="gap-2">
                <Mail className="h-5 w-5" />
                <span>dozie.ebuka@gmail.com</span>
              </Button>
            </a>
            <a href="tel:+2348129576142" className="flex items-center space-x-2 text-vintage-600 hover:text-vintage-700">
              <Button variant="outline" className="gap-2">
                <Phone className="h-5 w-5" />
                <span>+234 8129576142</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
