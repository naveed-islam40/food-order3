import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  totalPages,
  currentPage,
  handlePageChange,
  getPageNumbers,
}) => {
  return (
    <div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="bg-[#FDC7D2] hover:bg-[#FDC7D2] rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-8 w-8" color="#B93852" size={50} />
          </Button>

          {getPageNumbers().map((page, index) => (
            <div key={index}>
              {page === "..." ? (
                <span className="px-3 py-2 text-gray-500">...</span>
              ) : (
                <Button
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page
                      ? "bg-[#B93852] hover:bg-[#B93852] text-white rounded-full w-10 h-10"
                      : "bg-white hover:bg-gray-50 rounded-full w-10 h-10"
                  }
                >
                  {page}
                </Button>
              )}
            </div>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="bg-[#FDC7D2] hover:bg-[#FDC7D2] rounded-full w-12 h-12"
          >
            <ChevronRight className="h-4 w-4" color="#B93852" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
