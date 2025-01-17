/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react'
import HealthMagazineDetail from "../../../components/HealthMagazine/HealthMagazineDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

export interface HealthMagazineDetailType {
  id: number;
  title: string;
  publishedDate: string;
  source: string;
  viewCount: number;
  thumbnailImageUrl: string;
  content: string;
}

export default function Index() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  
  const [healthDetailItem, setHealthDetailItem] = useState<HealthMagazineDetailType>();
  const [loading, setLoading] = useState(true); 

  const fetchHealthDetail = async () => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/health-magazine/${id}`);
        console.log(response); 
        setHealthDetailItem(response.data.data); 
        setLoading(false); 
      } catch (e) {
        console.error("매거진 데이터를 가져오는 데 실패했습니다", e);
        setLoading(false); 
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchHealthDetail();
    }
  }, [id]); 

  if (loading) {
    return <p>로딩 중...</p>; 
  }
  
  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        {healthDetailItem && (
          <HealthMagazineDetail healthDetailItem={healthDetailItem}/>
        )}
      </div> 
    </div>
  )
}
