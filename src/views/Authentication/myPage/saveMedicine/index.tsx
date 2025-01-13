/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HealthDetail } from "../../../../components/HealthMagazine/HealthMagazineDetail";

export interface SaveMedicine {
  id: number;
  userId: string;
  itemSeq: number;
  itemName: string;
  useMethodQesitm: string;
  atpnQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
}

export default function SaveMedicineList() {
  const [saveMedicine, setSaveMedicine] = useState<SaveMedicine[]>([]);

  const fetchSaveMedicine = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4040/api/v1/medicine-schedule/"
      );
      const data = response.data.data;
      setSaveMedicine(data);
    } catch (e) {
      console.log("failed to fetch magazines data", e);
    }
  };

  useEffect(() => {
    fetchSaveMedicine();
  }, []);

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        {saveMedicine.map((saveMedicine) => (
          <>
          <div key={saveMedicine.id}></div>
            <div css={s.searchResult}>복용중인 약품 목록</div>
            <div css={s.listCt}>
              <div css={s.medicinePr}>약품 사진</div>
              <div css={s.medicineAll}>
                <div css={s.medicineRow}>
                  <div css={s.medicineName}>{saveMedicine.itemName}</div>
                </div>
                <div css={s.medicneDeatail}>
                  {saveMedicine.atpnQesitm}{saveMedicine.depositMethodQesitm}{saveMedicine.intrcQesitm}{saveMedicine.seQesitm}{saveMedicine.useMethodQesitm}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
