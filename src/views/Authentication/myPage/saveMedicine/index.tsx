/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import SaveMedicineUserId from "../../../../components/saveMedicine/saveMedicine";
import "../../../../stores/auth.store";

export interface SaveMedicineType {
  id: number;
  userId: string;
  itemSeq: number;
  itemName: string;
  useMethodQesitm: string;
  atpnQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
  medicineImage: string;
}

export default function SaveMedicineList() {
  const { userId } = useParams<{ userId: string }>();
  const [saveMedicineItem, setSaveMedicineItem] = useState<SaveMedicineType[]>(
    []
  );
  const [cookies] = useCookies(["token"]);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const fetchSaveMedicines = async () => {
    const token = cookies.token;
    if (userId && token) {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/medicine-schedule/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSaveMedicineItem(response.data.data);
      } catch (e) {
        console.error("Failed to fetch medicines data", e);
      }
    }
  };

  useEffect(() => {
    if (userId) {
      fetchSaveMedicines();
    }
  }, [userId, cookies.token]);

  const filteredItems = saveMedicineItem.filter((item) =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <input
          type="text"
          placeholder="약품 이름 검색🔎"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          css={s.searchInput}
        />

        {filteredItems.length > 0 ? (
          <SaveMedicineUserId saveMedicineItem={currentItems} />
        ) : (
          <div>검색 결과가 없습니다</div>
        )}

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
  );
}
