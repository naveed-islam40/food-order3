import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { List } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";

const SearchRestuentMap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list" | "map");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const isMobile = useIsMobile(640);

  return (
    <div>
      <div className="bg-[#FDC7D2] px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-[#002254]">
                  Our locations
                </p>
                <h1 className="text-5xl sm:text-6xl font-medium text-[#002254]">
                  Find a restaurant
                </h1>
                <p className="text-[#232222] text-lg font-normal">
                  We have over 30 Restaurants in France
                </p>
              </div>

              <div className="relative max-w-md">
                <Image
                  src={"/svg/search.svg"}
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="absolute top-4 left-4"
                />
                <Input
                  type="text"
                  placeholder="Enter a place or postcode"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-12 py-6 rounded-full bg-white shadow-sm border border-[#4C4949]"
                />
                <Image
                  src={"/svg/shot.svg"}
                  alt="Search Icon"
                  width={20}
                  height={20}
                  className="absolute top-4 right-4"
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/png/location.png"
                alt="Restaurant interior"
                width={400}
                height={300}
                className="rounded-2xl w-full hidden sm:block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center gap-4 mb-8 px-4 py-8">
          <div className="space-y-2">
            <h2 className=" text-[#232222] text-3xl sm:text-5xl font-medium">
              35 locations France
            </h2>
            <p className="text-[#232222] text-lg font-semibold font-lexend">
              Showing 1-6
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="bg-[#B93852] hover:bg-[#B93852] text-white hover:text-white rounded-full px-6 py-5 text-sm sm:text-lg font-bold"
            >
              <List className="h-4 w-4 mr-2" />
              List view
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="bg-[#FEEDF0] text-[#2D2C2C] border-none hover:bg-[#FEEDF0] rounded-full px-6 text-sm sm:text-lg font-bold py-5"
            >
              <Image
                src={"/svg/location_red.svg"}
                alt="Map Icon"
                width={20}
                height={20}
              />
              Map view
            </Button>
          </div>
        </div>
        <div className="sm:px-4 sm:py-8">
          <Image
            src={isMobile ? "/png/map_mobile.png" : "/png/map.png"}
            alt="Map"
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchRestuentMap;
