import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  ExternalLink,
  List,
  Map,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import restaurantData from "../static/restaurants.json";
import Pagination from "./pagination";
import { useIsMobile } from "@/hooks/useMobile";

const ITEMS_PER_PAGE = 6;

export default function RestaurantFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("list" | "map");
  const isMobile = useIsMobile(640);

  const restaurants = restaurantData.restaurants;

  // Filter restaurants based on search term
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return restaurants;
    }

    return restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.postcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, restaurants]);

  // Paginate results
  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return searchResults.slice(startIndex, endIndex);
  }, [searchResults, currentPage]);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="h-full font-lexend py-5">
      {/* Header Section */}
      <div className="bg-[#FDC7D2] px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-6 sm:space-y-2">
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

      {/* Results Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex px-4 py-8 flex-col md:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className=" text-[#232222] text-3xl sm:text-5xl font-medium">
              {searchResults.length} locations France
            </h2>
            <p className="text-[#232222] text-lg font-semibold font-lexend">
              Showing{" "}
              {Math.min(
                (currentPage - 1) * ITEMS_PER_PAGE + 1,
                searchResults.length
              )}
              -{Math.min(currentPage * ITEMS_PER_PAGE, searchResults.length)}
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
                src="/svg/location_red.svg"
                alt="Map Icon"
                width={20}
                height={20}
              />
              Map view
            </Button>
          </div>
        </div>

        {/* Restaurant Grid */}
        {paginatedResults.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6 mb-8 bg-[#DBF1EB] sm:bg-transparent sm:px-4 sm:py-8">
            {paginatedResults.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white sm:rounded-2xl sm:shadow-sm sm:border border-gray-100 overflow-hidden sm:hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="w-full h-full flex-shrink-0">
                    <Image
                      src={
                        isMobile
                          ? "/png/resturent_location_mobile.png"
                          : restaurant.image
                      }
                      alt={restaurant.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between bg-[#DBF1EB]">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-[#1D242D]">
                        {restaurant.name}
                      </h3>
                      <div className="space-y-1 text-[#2D2C2C] text-lg font-normal">
                        <p>{restaurant.address}</p>
                        <p>
                          {restaurant.city}, {restaurant.postcode}
                        </p>
                      </div>
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 h-auto text-[#232222] text-lg font-bold hover:text-[#232222]"
                      >
                        Get directions
                        <div className="bg-[#0061EF] rounded-full p-1">
                          <ArrowRight
                            className="w-8 h-8  text-white"
                            color="white"
                          />
                        </div>
                      </Button>
                    </div>
                    <div>
                      <Button className="mt-4 bg-[#0049B3] hover:bg-[#0049B3] text-white rounded-full px-6 py-5">
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No restaurants found matching your search.
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          getPageNumbers={getPageNumbers}
        />
      </div>
    </div>
  );
}
