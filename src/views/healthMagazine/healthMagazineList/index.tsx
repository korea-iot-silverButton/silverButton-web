/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as s from "./style";
import axios from "axios";
import HealthMagazineItemList from "../../../components/HealthMagazine/HealthMagazineItemList";

export interface HealthMagazineItemType {
  id: number;
  thumbnailImageUrl: string;
  title: string;
}

export default function Index() {
  const [healthMagazineItemList, setHealthMagazineItemList] = useState<
    HealthMagazineItemType[]
  >([]);

  console.log(healthMagazineItemList);
  const [sortOption, setSortOption] = useState("latest");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchHealthMagazineItemList = async (sort: string) => {
    try {
      const endpoint =
        sort === "latest"
          ? "http://localhost:4040/api/v1/health-magazine/latest"
          : "http://localhost:4040/api/v1/health-magazine/desc";

      const response = await axios.get(endpoint);
      const data = response.data.data;
      setHealthMagazineItemList(data);
    } catch (e) {
      console.log("Failed to fetch magazines data", e);
    }
  };

  useEffect(() => {
    fetchHealthMagazineItemList(sortOption);
  }, [sortOption]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = healthMagazineItemList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(healthMagazineItemList.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <div css={s.headerBox}>
        <div css={s.magazineHeader}>
          <span css={s.magazineTitle}>실버니즈 헬스 매거진</span>
        </div>
        <div css={s.selectBox}>
          <select
            onChange={handleSortChange}
            value={sortOption}
            css={s.selectData}
          >
            <option value="latest">최신순</option>
            <option value="popular">조회순</option>
          </select>
        </div>
        </div>

        <div css={s.HealthMagazineItemBox}>
          <HealthMagazineItemList currentItems={currentItems} />
        {/* 페이지네이션 */}
        <div css={s.paginationContainer}>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            css={s.arrowButton}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              css={[
                s.paginationButton,
                currentPage === index + 1 && s.paginationButtonActive,
              ]}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            css={s.arrowButton}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
          </div>
        
      </div>
    </div>
  );
}
