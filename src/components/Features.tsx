
import { 
  Truck, 
  CreditCard, 
  RotateCcw, 
  Shield, 
  PhoneCall
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Free Delivery",
      description: "Free delivery within Lagos & Abuja on orders over ₦100,000"
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Cash on Delivery",
      description: "Pay when your doors arrive at your doorstep"
    },
    {
      icon: <RotateCcw className="h-10 w-10" />,
      title: "7-Day Returns",
      description: "Easy returns within 7 days for non-customized doors"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "1-Year Warranty",
      description: "All doors come with our quality guarantee"
    },
    {
      icon: <PhoneCall className="h-10 w-10" />,
      title: "Customer Support",
      description: "Available 7 days a week to assist you"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
