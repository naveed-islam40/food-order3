import { Button } from "@/components/ui/button";

export default function FoodDelivery() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/png/delivery_hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="mb-4 text-lg  font-bold opacity-90">
            Smaller additional title
          </p>
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-6xl font-medium leading-tight">
            Explore Diverse Menus &<br />
            Order Food Delivery
          </h1>
          <p className="mb-8 text-lg opacity-90 lg:max-w-2xl lg:mx-auto font-normal">
            Spread feel-good, taste-good holiday cheer! From Limited Edition
            cans to gift cards, we&apos;ve got festive and fizzy fun for
            everyone on your list.
          </p>
          <Button
            size="lg"
            className="bg-transparent hover:bg-transparent border border-[#E6EFFD] text-white px-8 text-lg font-semibold rounded-full py-6"
          >
            Order your food now
          </Button>
        </div>
      </div>
    </div>
  );
}
