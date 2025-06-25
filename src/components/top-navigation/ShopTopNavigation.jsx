import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobile-nav";

export default function FoodDeliveryNavbar({ cartItemCount = 5 }) {
  const [activeTab, setActiveTab] = useState("Menu");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const categories = [
    "Starters",
    "Main courses",
    "Desserts",
    "Deals",
    "Drinks",
    "Vegetarian",
    "Set menu",
    "Restaurants",
  ];

  const mainNavItems = [
    "Menu",
    "Shop",
    "Deals",
    "Restaurants",
    "About",
    "Help",
  ];

  const onLanguageChange = (e) => {};

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full sticky top-[128px] sm:top-[55px]  z-50">
      {/* Main Navbar */}
      <div className="bg-white border-b shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            {/* Logo */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0061EF]">
                  <div className="h-3 w-3 rounded-full"></div>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  logoname
                </span>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-8 lg:flex relative h-full">
                {mainNavItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleTabClick(item)}
                    className={`relative text-sm font-normal transition-colors text-[#232222]`}
                  >
                    {item}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#F74A6D] rounded-full transform origin-left transition-all duration-300 ease-in-out ${
                        activeTab === item
                          ? "scale-x-100 translate-y-[calc(100%+15px)]"
                          : "scale-x-0 translate-y-[calc(100%+15px)]"
                      }`}
                    ></div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-5">
              {/* Book Table Button */}
              <Button
                variant="outline"
                className="hidden border-[#0049B3] text-sm font-medium md:inline-flex text-[#002254] rounded-full"
              >
                BOOK A TABLE
              </Button>
              <Button
                variant="outline"
                className="hidden border-[#0049B3] bg-[#0049B3] text-sm font-medium md:inline-flex text-[#fff] rounded-full"
              >
                ODER NOW
              </Button>

              {/* Language Selector */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => onLanguageChange?.("EN")}
                className=" border-0 shadow-none text-sm font-medium lg:inline-flex text-[#0049B3]"
              >
                <img src="/svg/location.svg" alt="" />
                EN
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isMobileMenuOpen}
          navItems={mainNavItems}
          onClose={() => setIsMobileMenuOpen(false)}
          onLanguageClose={() => setIsLanguageOpen(false)}
          selectedLanguage={selectedLanguage}
          setLanguageSelectorOpen={setIsLanguageSelectorOpen}
        />
      )}
    </div>
  );
}
