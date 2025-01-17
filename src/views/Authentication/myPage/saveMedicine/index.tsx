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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = saveMedicineItem.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(saveMedicineItem.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        {saveMedicineItem.length > 0 ? (
          <SaveMedicineUserId saveMedicineItem={currentItems} />
        ) : (
          <div>현재 복용중인 약품이 없습니다</div>
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
