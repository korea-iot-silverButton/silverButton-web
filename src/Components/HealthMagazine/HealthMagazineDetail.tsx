/** @jsxImportSource @emotion/react */
import * as s from "./style";

export interface HealthMagazineDetailType {
  id: number;
  title: string;
  publishedDate: string;
  source: string;
  viewCount: number;
  thumbnailImageUrl: string;
  content: string;
}

interface HealthMagazineDetailProps{
  healthDetailItem: HealthMagazineDetailType
}

export default function HealthMagazineDetail({ healthDetailItem }: HealthMagazineDetailProps) {

  console.log(healthDetailItem);
  return (
    <div css={s.detailContainer} key={healthDetailItem.id}>
        
          <h1 css={s.detailTitle}>{healthDetailItem.title}</h1>
          <div css={s.date}>작성일자: {healthDetailItem.publishedDate}</div>
          <div css={s.source}>
            출처: {healthDetailItem.source} / 조회수: {healthDetailItem.viewCount}
          </div>
          <div css={s.image}>
            <img src={healthDetailItem.thumbnailImageUrl} alt={healthDetailItem.title} />
          </div>
          <div css={s.content}>{healthDetailItem.content}</div>
      
    </div>
  );
}
