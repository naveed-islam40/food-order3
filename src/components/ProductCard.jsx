import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden py-5 space-x-2 pb-5 w-full flex 1200:justify-between justify-center gap-5 px-4 flex-col 1200:flex-row h-full">
      {product.image && (
        <div className="flex items-center">
          <Image
            src={product.image}
            alt=""
            width={300}
            height={300}
            className="object-cover w-full h-full 1200:w-[140px] 1200:h-[140px]  rounded-xl shrink-0"
          />
        </div>
      )}
      <div className="px-2">
        <h1 className="text-base sm:text-xl font-semibold 2xl:truncate w-full font-lexend">
          {product.title}
        </h1>
        <div className="flex items-center gap-4 py-4">
          <Image src={"/svg/vg.svg"} alt="" width={40} height={40} />
          <div className="flex gap-2 items-center text-[#542513] text-sm font-bold font-lexend">
            <Image src={"/svg/fire.svg"} alt="" width={20} height={20} />
            White
          </div>
        </div>
        <h1 className="text-[#2D2C2C] text-lg font-normal 1200:w-[70%]">
          {product.desc}
        </h1>
      </div>
      <div className="text-lg font-normal shrink-0 pl-2">
        Price: {product.price} €
      </div>
    </div>
  );
};

export default ProductCard;
