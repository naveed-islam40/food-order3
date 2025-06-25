import { X, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Image from "next/image";
// import LanguageSelector from "./language-selector";
import Link from "next/link";

export default function MobileMenu({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  navItems,
  setLanguageSelectorOpen,
  selectedLanguage,
}) {
  if (!isOpen) return null;

  const categories = [
    {
      name: "Categories name",
      image: "/png/resturent_menu_2.png",
      color: "bg-blue-100",
    },
    {
      name: "Starters",
      image: "/png/resturent_menu_3.png",
      color: "bg-amber-50",
    },
    {
      name: "Drinks",
      image: "/png/resturent_menu_4.png",
      color: "bg-red-50",
    },
    {
      name: "Main coursers",
      image: "/png/resturent_menu_3.png",
      color: "bg-green-50",
    },
    {
      name: "Set menu",
      image: "/png/resturent_menu_4.png",
      color: "bg-orange-100",
    },
    {
      name: "Deals",
      image: "/png/resturent_menu_3.png",
      color: "bg-pink-100",
    },
    {
      name: "Vegetrian",
      image: "/png/resturent_menu_2.png",
      color: "bg-yellow-50",
    },
    {
      name: "Deserts",
      image: "/png/resturent_menu_3.png",
      color: "bg-cyan-100",
    },
  ];

  const resturentCategories = [
    {
      name: "Harrington",
      image: "/png/restu_1.png",
      color: "bg-cyan-100",
    },
    {
      name: "London",
      image: "/png/restu_2.png",
      color: "bg-cyan-100",
    },
    {
      name: "Amsterdam",
      image: "/png/restu_3.png",
      color: "bg-cyan-100",
    },
    {
      name: "Budapest",
      image: "/png/restu_4.png",
      color: "bg-cyan-100",
    },
  ];

  const handleNavClick = (item) => {
    if (activeTab === item) {
      // If clicking the same item, collapse it
      setActiveTab("");
    } else {
      // Set new active tab
      setActiveTab(item);
    }
  };

  const renderExpandedContent = (item) => {
    if (item === "Menu") {
      return (
        <div className="sm:px-4 py-3">
          <div className="">
            {categories.map((category, index) => (
              <div key={index} className={`sm:p-3 flex flex-col`}>
                <div className="mb-2 bg-white flex items-center">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 flex items-center gap-2 pb-2">
                  {category.name}
                  <ArrowRight className="w-6 h-6 bg-[#FDC7D2] p-1 rounded-full" />
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (item === "Restaurants") {
      return (
        <div className="sm:px-4 py-3">
          <div className="">
            {resturentCategories.map((restaurant, index) => (
              <div key={index} className={`sm:p-3 flex flex-col text-center`}>
                <div className="mb-2 overflow-hidden">
                  <img
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 flex items-center gap-2 pb-2">
                  {restaurant.name}
                  <ArrowRight className="w-6 h-6 bg-[#FDC7D2] p-1 rounded-full" />
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (item === "Deals") {
      return (
        <div className="px-4 py-3 bg-gray-50">
          <div className="space-y-2">
            <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
              <h4 className="font-medium text-sm text-red-800">
                Special Offer
              </h4>
              <p className="text-xs text-red-600">
                Buy 2 Get 1 Free on all pizzas
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
              <h4 className="font-medium text-sm text-green-800">
                Weekend Deal
              </h4>
              <p className="text-xs text-green-600">20% off on family meals</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <h4 className="font-medium text-sm text-blue-800">Happy Hour</h4>
              <p className="text-xs text-blue-600">50% off on drinks 4-6 PM</p>
            </div>
          </div>
        </div>
      );
    }

    if (item === "About") {
      return (
        <div className="px-4 py-3 bg-gray-50">
          <div className="space-y-3">
            <div className="text-center">
              <h4 className="font-medium text-sm text-gray-800 mb-2">
                About Us
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We are passionate about serving delicious food with the finest
                ingredients. Our mission is to bring you authentic flavors from
                around the world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white rounded p-2 text-center">
                <span className="font-medium text-gray-700">Founded</span>
                <p className="text-gray-600">2015</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="font-medium text-gray-700">Locations</span>
                <p className="text-gray-600">25+</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item === "Help") {
      return (
        <div className="px-4 py-3 bg-gray-50">
          <div className="space-y-2">
            <button className="w-full text-left bg-white rounded-lg p-3 text-sm">
              <span className="font-medium text-gray-700">FAQ</span>
              <p className="text-xs text-gray-500">
                Frequently asked questions
              </p>
            </button>
            <button className="w-full text-left bg-white rounded-lg p-3 text-sm">
              <span className="font-medium text-gray-700">Contact Support</span>
              <p className="text-xs text-gray-500">Get help from our team</p>
            </button>
            <button className="w-full text-left bg-white rounded-lg p-3 text-sm">
              <span className="font-medium text-gray-700">Order Issues</span>
              <p className="text-xs text-gray-500">
                Report problems with orders
              </p>
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto md:hidden">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mt-2">
          <button onClick={onClose} className="p-1 cursor-pointer">
            <X size={20} className="cursor-pointer" />
          </button>

          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-blue-500 mr-1"></div>
            <span className="text-sm">logoname</span>
          </div>

          <div
            className="flex items-center border border-gray-300 rounded-full px-2 py-0.5"
            onClick={() => setLanguageSelectorOpen(true)}
          >
            <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center mr-1">
              <span className="text-[10px]">🌐</span>
            </div>
            <span className="text-xs uppercase">{selectedLanguage}</span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-4">
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <div key={item}>
              <button
                className="flex items-center justify-between py-3 cursor-pointer border-b border-gray-300 w-full"
                onClick={() => handleNavClick(item)}
              >
                <span
                  className={`${
                    activeTab === item ? "font-medium" : ""
                  } text-3xl font-normal font-lexend text-[#1D242D]`}
                >
                  {item}
                </span>
                <div className="flex items-center">
                  {activeTab === item ? (
                    <ChevronUp
                      size={30}
                      className="text-gray-400"
                      color="#656161"
                    />
                  ) : (
                    <ChevronDown
                      size={30}
                      className="text-gray-400"
                      color="#656161"
                    />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {activeTab === item && (
                <div className="mb-4">{renderExpandedContent(item)}</div>
              )}
            </div>
          ))}

          {/* Additional Links */}
          <div className="mt-6 ml-5">
            <ul className="flex flex-col space-y-3 font-medium text-gray-700">
              <Link href={"#"} className="py-2">
                Log in | Sign Up
              </Link>
              <Link href={"#"} className="py-2">
                Basket
              </Link>
              <Link href={"#"} className="py-2">
                Check Order Status
              </Link>
              <Link href={"#"} className="py-2">
                Blog
              </Link>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom Buttons */}
      <div className="p-4 space-y-3 mt-auto bg-[#FEEDF0] py-10">
        <button className="bg-[#B93852] text-white rounded-full py-3 font-medium text-sm flex gap-4 w-full justify-center">
          <Image src="/svg/bike.svg" alt="phone" width={20} height={20} />
          ORDER NOW
        </button>
        <button className="w-full bg-[#FFFFFF] rounded-full py-3 font-medium text-sm flex justify-center gap-4">
          <Image src="/svg/spon_blue.svg" alt="phone" width={20} height={20} />
          BOOK A TABLE
        </button>
      </div>

      {/* <LanguageSelector isOpen={isLanguageOpen} onClose={onLanguageClose} /> */}
    </div>
  );
}
