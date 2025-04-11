
import { useState } from "react";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navigate = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveIndex((activeIndex + 1) % testimonials.length);
    } else {
      setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="section-padding bg-vintage-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Hear from satisfied customers across Nigeria
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="pt-6 px-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg italic mb-6">
                          "{testimonial.comment}"
                        </blockquote>
                        
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md md:-translate-x-6"
            onClick={() => navigate('prev')}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md md:translate-x-6"
            onClick={() => navigate('next')}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? 'w-4 bg-primary' : 'w-2 bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
