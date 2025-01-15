/** @jsxImportSource @emotion/react */
import * as s from "./style";

export interface SaveMedicineHomeType {
  id: number;
  userId: string;
  itemName: string;
}

interface SaveMedicineHomeProps {
  saveMedicineHomeItem: SaveMedicineHomeType[];
}

export default function SaveMedicineHome({
  saveMedicineHomeItem,
}: SaveMedicineHomeProps) {
  return (
    <div>
      {saveMedicineHomeItem.length > 0 && (
        <div>
          <div css={s.userId}>
            {saveMedicineHomeItem[0].userId}님이 복용 중인 약품 리스트
          </div>
          {saveMedicineHomeItem.map((medicine) => (
            <div key={medicine.id}>
              <div>{medicine.itemName}</div>
            </div>
          ))}
        </div>
      )}
      {saveMedicineHomeItem.length === 0 && (
        <div>복용 중인 약품이 없습니다.</div>
      )}
    </div>
  );
}
