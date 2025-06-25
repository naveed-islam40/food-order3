import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    subtitle: "Smaller additional title",
    title: "Explore Diverse Menus & Order Food Delivery",
    description:
      "Spread feel-good, taste-good holiday cheer! From Limited Edition cans to gift cards, we've got festive and fizzy fun for everyone on your list.",
    primaryButton: "Look at the menu",
    secondaryButton: "Order your food now",
  },
  {
    subtitle: "Fresh & Fast",
    title: "Delicious Meals Delivered to Your Door",
    description:
      "Experience the convenience of having restaurant-quality meals delivered straight to your home. Quick, fresh, and always satisfying.",
    primaryButton: "Browse restaurants",
    secondaryButton: "Start ordering",
  },
  {
    subtitle: "Special Offers",
    title: "Save More on Your Favorite Foods",
    description:
      "Discover amazing deals and discounts on top-rated restaurants. Get more value with every order and enjoy premium dining at home.",
    primaryButton: "View deals",
    secondaryButton: "Order with discount",
  },
];

export default function FoodDeliveryHero() {
  return (
    <div className="w-full bg-[#547D71] text-white px-6 py-16 md:px-12 lg:px-20 font-lexend">
      <Carousel className="w-full">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="flex min-h-[400px] items-center justify-center">
                <div className="mx-auto max-w-4xl text-center">
                  {/* top text  */}
                  <div className="sm:px-20">
                    <p className="mb-4 text-lg font-bold opacity-90">
                      {slide.subtitle}
                    </p>
                    <h1 className="mb-6 text-3xl sm:text-4xl md:text-6xl font-medium leading-tight lg:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-lg opacity-90 md:text-xl lg:max-w-3xl lg:mx-auto">
                      {slide.description}
                    </p>
                  </div>
                  {/* buttons  */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="py-6 bg-white text-[#002254] hover:text-[#002254] hover:bg-gray-100 border-white rounded-full"
                    >
                      {slide.primaryButton}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="py-6 bg-transparent text-white hover:text-white border-white hover:bg-transparent rounded-full"
                    >
                      {slide.secondaryButton}
                    </Button>
                  </div>
                  {/* small screen crousal buttons  */}
                  <div className="flex justify-center mt-6 sm:hidden gap-6">
                    <CarouselPrevious className="relative mt-10 bg-[#F4FAF8] border-white/30 text-black hover:bg-[#F4FAF8] w-12 h-12" />
                    <CarouselNext className="relative mt-10 bg-[#F4FAF8] border-white/30 text-black hover:bg-[#F4FAF8] w-12 h-12" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-4 bg-[#F4FAF8] border-white/30 text-black hover:bg-[#F4FAF8] w-12 h-12" />
        <CarouselNext className="hidden sm:flex right-4 bg-[#F4FAF8] border-white/30 text-black hover:bg-[#F4FAF8] w-12 h-12" />
      </Carousel>
    </div>
  );
}
