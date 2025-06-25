import useActiveSubcategory from "@/hooks/useActiveSubcategory";
import {
  burgers,
  Chief_Burgurs,
  Chief_specials,
  mainsTypes,
  mealsTypes,
} from "@/static/menu-items";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const menuSections = [
  { label: "Mains", id: "mains" },
  { label: "Chief specials", id: "chief-specials" },
  { label: "Starters", id: "starters" },
];

const ProductList = () => {
  const [active, setActive] = useState(mealsTypes[0]);
  const [isOpenMeals, setIsOpenMeals] = useState(false);

  const handleMenuClick = (type) => {
    setActive(type);

    const section = menuSections.find((item) => item.label === type);
    if (section) {
      const element = document.getElementById(section.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpenMeals(false);
  };

  // [track categories]
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 100;

      for (let i = menuSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuSections[i].id);
        if (section && scrollY + buffer >= section.offsetTop) {
          setActive(menuSections[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allSubCategories = [...mainsTypes, ...Chief_specials];
  const activeSubCategory = useActiveSubcategory(allSubCategories, 100);

  return (
    <div>
      <div className="my-10 space-y-10 max-w-7xl mx-auto">
        <div className="flex justify-start sm:justify-center items-center gap-3 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-[#002254] font-normal font-lexend">
            Menu
          </h1>
        </div>
        <div className="sm:sticky top-[180px] sm:top-[115px] z-20 bg-white py-4 px-4 sm:px-8">
          {/* Desktop Top Navigation  */}
          <div className="flex-wrap gap-4 justify-start sm:justify-center flex">
            {mealsTypes.map((type) => (
              <div
                key={type}
                className={`${
                  type === active
                    ? "bg-[#B93852] text-white"
                    : "bg-[#FEEDF0] text-[#561A26]"
                } p-2 rounded-full px-4 cursor-pointer`}
                onClick={() => handleMenuClick(type)}
              >
                <h1 className="text-lg font-bold">{type}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {/* body  card 1 */}
          <div
            className="space-y-4 bg-[#FEF0EB] rounded-[16px] px-6 py-6"
            id="mains"
          >
            {/* body (top)  */}
            <div className="space-y-4 py-5">
              <h1 className="text-3xl font-medium text-[#002254] text-center">
                Mains
              </h1>
            </div>
            {/* burgers  */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {burgers.map((burger, index) => (
                  <ProductCard product={burger} key={index} />
                ))}
              </div>
            </div>
            {/* Pizza  */}

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {burgers.map((burger, index) => (
                  <ProductCard product={burger} key={index} />
                ))}
              </div>
            </div>
          </div>

          {/* body card 2  */}
          <div
            className="space-y-4 bg-[#FEF0EB] rounded-[16px] px-6 py-6"
            id="chief-specials"
          >
            <div className="space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-medium font-lexend text-[#002254] text-center py-5">
                  Chief specials
                </h1>
              </div>
              {/* Rice  */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Chief_Burgurs.map((burger, index) => (
                    <ProductCard product={burger} key={index} />
                  ))}
                </div>
              </div>
              {/* noodles  */}
              <div className="space-y-4">
                {/* burgers  */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Chief_Burgurs.map((burger, index) => (
                      <ProductCard product={burger} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* body card 3 */}
          <div
            className="space-y-4 bg-[#FEF0EB] rounded-[16px] px-4 py-6"
            id="starters"
          >
            <div className="space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-medium font-lexend text-[#002254] text-center py-5">
                  Starters
                </h1>
              </div>
              {/* Rice  */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Chief_Burgurs.map((burger, index) => (
                    <ProductCard product={burger} key={index} />
                  ))}
                </div>
              </div>
              {/* noodles  */}
              <div className="space-y-4">
                {/* burgers  */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Chief_Burgurs.map((burger, index) => (
                      <ProductCard product={burger} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
