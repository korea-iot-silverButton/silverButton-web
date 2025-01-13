import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePreGroupClick: () => void;
  handleNextGroupClick: () => void;
}

const paginationBoxStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const buttonStyle = css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
 
  &:hover {
    background-color: #e2e8f0;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
//   &:focus {
//     outline: 2px solid #1a73e8;
//   }
 `;

const pageListStyle = css`
  display: flex;
  gap: 16px;
`;

const pageStyle = (isActice: boolean) => css`
  color: ${isActice ? '#1a73e8' : '#6b7280'};
  font-size: 14px;
  font-weight: ${isActice ? '700' : '400'};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${!isActice && '#374151'};
  }
`;
const ButtonWrap = ({ pageNumbers, currentPage, handlePageClick }: {pageNumbers: Array<number>, currentPage: number, handlePageClick: any}) => {

  return (
    <div css={pageListStyle}>
      {pageNumbers.map((page) => (
        <div
          key={page}
          css={pageStyle(page === currentPage)} // 현재 페이지 강조
          onClick={() => handlePageClick(page)} // 클릭 시 0-based 변환
        >
          {page} {/* 1-based 페이지 번호 */}
        </div>
      ))}
    </div>
  );
};

export default function Pagination({
  totalPages,
  currentPage,
  handlePageClick,
  handlePreGroupClick,
  handleNextGroupClick,
}: PaginationProps) {
   // 현재 페이지 그룹 계산 (예: 1~10, 11~20 등)
   const groupSize = 10; // 한 그룹에 표시할 페이지 수
   const currentGroup = Math.floor((currentPage - 1) / groupSize);
   const startPage = currentGroup * groupSize + 1;
   const endPage = Math.min(startPage + groupSize - 1, totalPages);
  
 // 현재 그룹의 페이지 번호 생성
 const pageNumbers = [];
 for (let i = startPage; i <= endPage; i++) {
   pageNumbers.push(i);
 }



  console.log("렌더링 중인 페이지 번호:", pageNumbers);
  return (
    <div css={paginationBoxStyle}>
      {/* 이전 페이지 그룹 버튼 */}
      <button
        css={buttonStyle}
        onClick={handlePreGroupClick}
        disabled={currentPage <= 1}
      >
        <AiOutlineLeft size={24} />
      </button>

         {/* 페이지 숫자 */}
         <ButtonWrap
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />

      {/* 다음 페이지 그룹 버튼 */}
      <button
      css={buttonStyle}
      onClick={handleNextGroupClick}
        disabled={currentPage >= totalPages}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
}