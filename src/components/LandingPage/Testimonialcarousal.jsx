import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform helped me land my dream job in just two weeks!",
    role: "Software Engineer",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "A fantastic experience! The process was smooth and efficient.",
    role: "Marketing Manager",
    rating: 4,
  },
  {
    name: "David Johnson",
    feedback: "Highly recommended for anyone looking for career opportunities.",
    role: "Product Designer",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Card className="w-60 lg:w-200 shadow-xl border p-6 bg-purple-600">
                <CardContent className="flex flex-col items-center text-center space-y-3">
                  <p className="text-sm lg:text-lg font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs lg:text-sm text-white">{testimonial.role}</p>
                  <p className="text-sm lg:text-md italic text-white">{testimonial.feedback}</p>
                  {/* ⭐ Star Rating */}
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
