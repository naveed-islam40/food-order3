export default function LocationBanner() {
  return (
    <div className="sticky top-0 z-50">
      <div className="w-full bg-[#DE4362] px-4 py-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:text-left">
            <div className="flex items-center justify-center gap-2 text-white">
              <span className="text-lg font-normal 425:text-lg sm:text-base lg:text-lg w-[80%] sm:w-full">
                Special offers for Christmas.{" "}
                <span className="font-bold">Buy 2 get one FREE!</span>
              </span>
            </div>
            <button className="underline  text-white  font-semibold">
              Shop Christmas boxes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
