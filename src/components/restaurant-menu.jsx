import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuImages = [
  { src: "/png/resturent_menu_1.png", alt: "Colorful macarons and desserts" },
  { src: "/png/resturent_menu_2.png", alt: "Fresh salad" },
  { src: "/png/resturent_menu_3.png", alt: "Delicious sushi" },
  { src: "/png/resturent_menu_4.png", alt: "Dessert stand" },
];

export default function RestaurantMenu() {
  return (
    <div className="bg-pink-50 min-h-screen p-8 text-[#232222] font-lexend">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-5 sm:py-[100px]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[20px] font-semibold mb-4">Small subtitle</p>
              <h1 className="text-[30px] sm:text-5xl font-medium  leading-tight mb-6 font-lexend">
                Lorenzo&apos;s innovative menu at Seraphina&apos;s
              </h1>
              <p className="text-lg leading-relaxed mb-8">
                From intimate candlelit dinners to lively group gatherings,
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
              </p>
            </div>

            {/* List Items */}
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-4 flex-col sm:flex-row"
                >
                  <div className="w-6 h-6 bg-[#F74A6D] rounded-full mt-2 flex-shrink-0 ml-3 sm:ml-0"></div>
                  <div>
                    <h3 className="font-semibold text-[#1D242D] text-[20px] mb-1">
                      List item
                    </h3>
                    <p className="text-[#2D2C2C]">
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Button
              variant="outline"
              className=" text-[#002254] hover:text-[#002254] border border-[#0049B3] hover:bg-transparent px-6 py-3 rounded-full"
            >
              Search our restaurants location
            </Button>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-x-6 h-fit">
            {/* Left Column */}
            <div className="flex flex-col space-y-6 sm:mt-28">
              <div className="w-full">
                <Image
                  src={menuImages[1].src}
                  alt={menuImages[1].alt}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full mt-12">
                <Image
                  src={menuImages[3].src}
                  alt={menuImages[3].alt}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-6">
              <div className="w-full">
                <Image
                  src={menuImages[0].src}
                  alt={menuImages[0].alt}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full">
                <Image
                  src={menuImages[2].src}
                  alt={menuImages[2].alt}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
