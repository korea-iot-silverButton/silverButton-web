import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

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
  medicineImage:string
}

interface SaveMedicineProps {
  saveMedicineItem: SaveMedicineType[];
}

export default function SaveMedicineUserId({
  saveMedicineItem,
}: SaveMedicineProps) {
  return (
    <div>
      {saveMedicineItem.length > 0 && (
        <div>
          <div css={s.userId}>
            {saveMedicineItem[0].userId}님이 복용 중인 약품 리스트
          </div>
          {saveMedicineItem.map((medicine) => (
            <div key={medicine.id}>
              <div css={s.listCt}>
                <div css={s.imageBox}><img src={medicine.medicineImage} alt={medicine.itemName} /></div>
                <div css={s.medicineAll}>
                  <div css={s.medicineRow}>
                    <div css={s.medicineName}>{medicine.itemName}</div>
                  </div>
                  <div css={s.medicneDeatail}>
                    <div css={s.detailText}><span css={s.text}>약품 사용 방법:</span>{medicine.useMethodQesitm}</div>
                    <div css={s.detailText}><span css={s.text}>약품 복용 시 주의사항:</span>{medicine.atpnQesitm}</div>
                    <div css={s.detailText}><span css={s.text}>약품 부작용:</span>{medicine.seQesitm}</div>

                    <div css={s.detailText}><span css={s.text}>약품 보관방법:</span>{medicine.depositMethodQesitm}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {saveMedicineItem.length === 0 && <div>복용 중인 약품이 없습니다.</div>}
    </div>
  );
}
