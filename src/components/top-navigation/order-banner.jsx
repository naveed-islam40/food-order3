export default function OrderBanner() {
  return (
    <div className="w-full bg-[#0061EF] px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center 390:flex-row justify-between sm:justify-center sm:text-left">
          <div className="flex items-center gap-2 text-white">
            <span className="text-base 425:text-lg md:font-medium sm:text-base lg:text-lg">
              Lets order for pick uo or delivery
            </span>
          </div>
          <button className="px-3 border py-2 rounded-full border-white bg-[#F0EFEF] text-[#18304C] hover:text-[#18304C] font-semibold">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
