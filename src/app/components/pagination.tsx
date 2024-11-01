import React from 'react';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handleNext, handlePrevious }) => {
  return (
    <div className="flex justify-between mt-1 items-center">
      {currentPage > 0 ? (
        <button onClick={handlePrevious} className="text-black flex font-bold items-center gap-1 px-2 rounded">
          <HiArrowNarrowLeft />
          Previous
        </button>
      ) : (
        <span className="text-black px-4 rounded opacity-50 hidden font-bold items-center gap-1 cursor-not-allowed">
          <HiArrowNarrowLeft />
          Previous
        </span>
      )}
      
      <div className="flex-grow" />
      
      {currentPage < totalPages - 1 ? (
        <button onClick={handleNext} className="text-black px-4 flex items-center font-bold gap-1 rounded">
          Next
          <HiArrowNarrowRight className='font-bold' />
        </button>
      ) : (
        <span className="text-black px-4 rounded opacity-50 flex font-bold items-center gap-1 cursor-not-allowed">
          Next
          <HiArrowNarrowRight />
        </span>
      )}
    </div>
  );
};

export default Pagination;
