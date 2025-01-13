/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface HealthDetail {
  id: number;
  title: string;
  publishedDate: string;
  source: string;
  viewCount: number;
  thumbnailImageUrl: string;
  content: string;
}

export default function HealthMagazineDetail() {

  const { id } = useParams<{ id: string }>();
  console.log(id);
  
  const [healthDetail, setHealthDetail] = useState<HealthDetail | null>(null);
  const [loading, setLoading] = useState(true); 

  const fetchHealthDetail = async () => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/health-magazine/${id}`);
        console.log(response); 
        setHealthDetail(response.data.data); 
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
    <div css={s.detailContainer}>
      {healthDetail ? (
        <>
          <h1 css={s.detailTitle}>{healthDetail.title}</h1>
          <div css={s.date}>작성일자: {healthDetail.publishedDate}</div>
          <div css={s.source}>
            출처: {healthDetail.source} / 조회수: {healthDetail.viewCount}
          </div>
          <div css={s.image}>
            <img src={healthDetail.thumbnailImageUrl} alt={healthDetail.title} />
          </div>
          <div css={s.content}>{healthDetail.content}</div>
        </>
      ) : (
        <p>매거진을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}
