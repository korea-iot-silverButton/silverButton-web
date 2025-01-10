/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "../../styles/drugSearchStyle";
import { useLocation, useNavigate } from "react-router-dom";

export default function DrugSearchResultList() {
  const location = useLocation();
  const { data } = location.state || {};
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/medicine/detail-page");
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <div css={s.searchResult}>검색 결과☀︎</div>
        <div css={s.listCt}>
          <div css={s.medicinePr} onClick={handleNavigate}>
            약품 사진
          </div>
          <div css={s.medicineAll}>
            <div css={s.medicineRow}>
            <div css={s.medicineName} onClick={handleNavigate}>
              약품 이름
            </div>
              <button css={s.saveButton} onClick={()=>alert("약품이 저장되었습니다")}>약품 저장</button>
            </div>
            <div css={s.medicneDeatail} onClick={handleNavigate}>
              약품 제조사 / 약품 효능 / 약품 복용시 주의 사항
              {/* <div css={s.medicineInfo}> */}
                {/* {data ? (
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                  <p>No data available</p>
                )} */}
              {/* </div> */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
