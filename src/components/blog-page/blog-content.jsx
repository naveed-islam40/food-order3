import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogContent() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-[#232222] font-lexend">
      {/* Header Section */}
      <div className="mb-8 space-y-8">
        <p className="text-lg font-bold  mb-2">Smaller additional title</p>
        <h1 className="text-4xl sm:text-5xl font-medium  mb-4">
          Explore Menus & Order Food
        </h1>
        <p className=" leading-relaxed text-lg font-normal">
          From intimate candlelit dinners to lively group gatherings,
          Seraphina&apos;s provides impeccable service and an unforgettable
          dining experience that caters to every occasion. From intimate
          candlelit dinners to lively group gatherings, Seraphina&apos;s
          provides impeccable service and an unforgettable dining experience
          that caters to every occasion.
        </p>
        <Link
          href="/food-delivery"
          className="text-[#0049B3] text-base font-medium underline"
        >
          Link text
        </Link>
      </div>

      {/* Testimonial Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-medium  mb-4">Testimonial subtitle 1</h2>
        <blockquote className="italic  mb-4 text-lg">
          &quot;Overall, we had a pleasant experience at The Spice Merchant. The
          food was delicious, especially the Moroccan&apos;s Feast. The service
          was a little slow at times, but the food was friendly and apologetic.
          We would definitely give them another try.&quot;
        </blockquote>
      </div>

      {/* Subtitle 2 Section */}
      <div className="mb-8 text-[#2D2C2C]">
        <h2 className="text-3xl font-medium  mb-6">Subtitle 2</h2>

        {/* List Items */}
        <div className="pl-4 sm:pl-8 space-y-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-medium text-[#1D242D] mb-2">
                List Item
              </h3>
              <p>
                Supporting the text lorem ipsum dolor sit amet, consectetur.{" "}
                <Link href="#" className="text-[#0049B3] underline">
                  Link inside the text.
                </Link>{" "}
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
                From intimate candlelit.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-[#1D242D] mb-2">
                List Item
              </h3>
              <p>
                Supporting the text lorem ipsum dolor sit amet, consectetur
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
                From intimate candlelit dinners to lively group gatherings,
                Seraphina&apos;s provides impeccable service and an
                unforgettable.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-[#1D242D] mb-2">
                List Item
              </h3>
              <p>
                Supporting the text lorem ipsum dolor sit amet, consectetur
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
                From intimate candlelit.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-[#1D242D] mb-2">
                List Item
              </h3>
              <p>
                Supporting the text lorem ipsum dolor sit amet, consectetur
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
                From intimate candlelit.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-[#1D242D] mb-2">
                List Item
              </h3>
              <p>
                Supporting the text lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          {/* Kitchen Image */}
          <div className="mb-8">
            <img
              src="/png/blog_2.png"
              alt="Kitchen cooking scene"
              className="w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* Bullet Point List */}
          <div className="mb-8">
            <h2 className="text-3xl font-medium  mb-4">Bullet point list</h2>
            <ul className="list-disc list-inside space-y-2 ">
              <li>
                From intimate candlelit dinners to lively group gatherings.
              </li>
              <li>
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
                From intimate candlelit dinners to lively group gatherings.
              </li>
              <li>
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
              </li>
            </ul>
          </div>

          {/* Numbered List */}
          <div className="mb-8">
            <h2 className="text-3xl font-medium mb-4">Numbered list</h2>
            <ol className="list-decimal list-inside space-y-2 ">
              <li>
                From intimate candlelit dinners to lively group gatherings.
              </li>
              <li>
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
                From intimate candlelit dinners to lively group gatherings.
              </li>
              <li>
                Seraphina&apos;s provides impeccable service and an
                unforgettable dining experience that caters to every occasion.
              </li>
            </ol>
          </div>

          {/* Video Section */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/RBcLWgcdlp8?si=2sAiyAbkwKR9IGHq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          {/* Final Paragraph */}
          <div className="sm:mb-8 py-5 sm:py-10">
            <p className=" leading-relaxed mb-6">
              From intimate candlelit dinners to lively group gatherings,
              Seraphina&apos;s provides impeccable service and an unforgettable
              dining experience that caters to every occasion. From intimate
              candlelit dinners to lively group gatherings, Seraphina&apos;s
              provides impeccable service and an unforgettable dining experience
              that caters to every occasion.
            </p>
            <div className="flex justify-center">
              <Button className="bg-[#0049B3] hover:bg-[#0049B3] rounded-full text-white px-6 py-6">
                Search our restaurant&apos;s location
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
