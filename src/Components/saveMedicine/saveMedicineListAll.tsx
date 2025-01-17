import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

export interface SaveMedicineListType {
  id: number;
  itemSeq: number;
  itemName: string;
  useMethodQesitm: string;
  atpnQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
  medicineImage: string;
}

interface SaveMedicineListProps {
  saveMedicineListItem: SaveMedicineListType[];
}

export default function SaveMedicineList({
  saveMedicineListItem,
}: SaveMedicineListProps) {
  return (
    <div>
      {saveMedicineListItem.length > 0 ? (
        saveMedicineListItem.map((medicine) => (
          <div key={medicine.id}>
            <div css={s.listCt}>
              <div css={s.imageBox}>
                <img
                  src={medicine.medicineImage}
                  alt={medicine.itemName}
                />
              </div>
              <div css={s.medicineAll}>
                <div css={s.medicineRow}>
                  <div css={s.medicineName}>{medicine.itemName}</div>
                </div>
                <div css={s.medicneDeatail}>
                  <div css={s.detailText}>
                    <span css={s.text}>약품 사용 방법: </span>
                    {medicine.useMethodQesitm}
                  </div>
                  <div css={s.detailText}>
                    <span css={s.text}>약품 복용 시 주의사항: </span>
                    {medicine.atpnQesitm}
                  </div>
                  <div css={s.detailText}>
                    <span css={s.text}>약품 부작용: </span>
                    {medicine.seQesitm}
                  </div>
                  <div css={s.detailText}>
                    <span css={s.text}>약품 보관방법: </span>
                    {medicine.depositMethodQesitm}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>복용 중인 약품이 없습니다.</div>
      )}
    </div>
  );
}
