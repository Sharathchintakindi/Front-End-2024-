import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Pagination = ({ skip, setSkip, total, limit = 5 }) => {
  const currentPage = skip + 1;
  const totalPages = Math.ceil(total / limit);

  const handlePrev = () => {
    if (skip > 0) {
      setSkip(skip - 1);
    }
  };

  const handleNext = () => {
    if (skip < totalPages - 1) {
      setSkip(skip + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`w-[35px] h-[35px] text-sm font-medium border-2 rounded-full flex items-center justify-center ${
            i === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "text-gray-500 border-blue-500"
          }`}
          onClick={() => setSkip(i - 1)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center justify-center gap-x-5">
        <FaArrowCircleLeft
          onClick={handlePrev}
          size={35}
          className={`cursor-pointer ${
            currentPage === 1 ? "text-gray-300" : "text-blue-500"
          }`}
        />

        {renderPageNumbers()}

        <FaArrowCircleRight
          onClick={handleNext}
          size={35}
          className={`cursor-pointer ${
            currentPage === totalPages ? "text-gray-300" : "text-blue-500"
          }`}
        />
      </div>
    </div>
  );
};

export default Pagination;
