/** @jsxImportSource @emotion/react */
import React from 'react'
import * as s from "../../styles/drugSearchStyle";
import { useLocation, useNavigate } from 'react-router-dom'; 
import DrugSearchDetailPage from './DrugSearchDetailPage';

export default function DrugSearchResultList() {
  const location = useLocation(); 
  const { data } = location.state || {}; 
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/medicine/detail-page"); 
  };

  return (
    <>
    <div>
      <h1>약품 검색 결과 리스트 페이지</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> 
      ) : (
        <p>No data available</p>
      )}
    </div>
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <h2 style={{marginLeft:'20px'}}>검색 결과☀︎</h2>
        <div css={s.listCt}>
          <div css={s.medicinePr} onClick={handleNavigate}>약품 사진</div>
          <div css={s.medicineAll}>
          <div css={s.medicineName} onClick={handleNavigate}>약품 이름</div>
          <div css={s.medicneDeatail} onClick={handleNavigate}>약품 상세 정보(약품 제조사 명 / 약품 효능 / 약품 복용시 주의 사항 / 약품 부작용 / 약품 보관방법)</div>
          </div>
        </div>

        <div css={s.listCt} style={{marginTop:'1.5%'}}>
          <div css={s.medicinePr} onClick={handleNavigate}>약품 사진</div>
          <div css={s.medicineAll}>
          <div css={s.medicineName} onClick={handleNavigate}>약품 이름</div>
          <div css={s.medicneDeatail} onClick={handleNavigate}>약품 상세 정보 (약품 제조사 명 / 약품 효능 / 약품 복용시 주의 사항 / 약품 부작용 / 약품 보관방법)</div>
          </div>
        </div>

        <div css={s.listCt} style={{marginTop:'1.5%'}}>
          <div css={s.medicinePr} onClick={handleNavigate}>약품 사진</div>
          <div css={s.medicineAll}>
          <div css={s.medicineName} onClick={handleNavigate}>약품 이름</div>
          <div css={s.medicneDeatail} onClick={handleNavigate}>약품 상세 정보 (약품 제조사 명 / 약품 효능 / 약품 복용시 주의 사항 / 약품 부작용 / 약품 보관방법)</div>
          </div>
        </div>
        <div css={s.listCt} style={{marginTop:'1.5%'}}>
          <div css={s.medicinePr} onClick={handleNavigate}>약품 사진</div>
          <div css={s.medicineAll}>
          <div css={s.medicineName} onClick={handleNavigate}>약품 이름</div>
          <div css={s.medicneDeatail} onClick={handleNavigate}>약품 상세 정보 (약품 제조사 명 / 약품 효능 / 약품 복용시 주의 사항 / 약품 부작용 / 약품 보관방법)</div>
          </div>
        </div>
        <div css={s.listCt} style={{marginTop:'1.5%',marginBottom:'8%'}}>
          <div css={s.medicinePr} onClick={handleNavigate}>약품 사진</div>
          <div css={s.medicineAll}>
          <div css={s.medicineName} onClick={handleNavigate}>약품 이름</div>
          <div css={s.medicneDeatail} onClick={handleNavigate}>약품 상세 정보 (약품 제조사 명 / 약품 효능 / 약품 복용시 주의 사항 / 약품 부작용 / 약품 보관방법)</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
