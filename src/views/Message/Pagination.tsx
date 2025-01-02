import React, { useState } from 'react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrev = () => currentPage > 0 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1);


  return (
    <div>
      <button onClick={handlePrev} disabled={currentPage === 0}>
        이전
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          style={{ fontWeight: currentPage === index ? 'bold' : 'normal' }}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
        다음
      </button>
    </div>
  );
};

export default Pagination;




