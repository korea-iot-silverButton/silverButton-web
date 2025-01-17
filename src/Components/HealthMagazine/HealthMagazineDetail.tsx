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

interface HealthMagazineDetailProps {
  healthDetailItem: HealthMagazineDetailType;
}

const MyComponent = ({ healthDetailItem }: HealthMagazineDetailProps) => {
  const formattedContent = healthDetailItem.content
    .split(".")
    .map((sentence, index, array) => {
      return (
        sentence.trim() +
        (index < array.length - 1 ? ". " : "") +
        (index < array.length - 1 ? "<br /><br />" : "")
      );
    })
    .join("");

  return (
    <div
      css={s.content}
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  );
};

export default function HealthMagazineDetail({
  healthDetailItem,
}: HealthMagazineDetailProps) {
  return (
    <div css={s.detailContainer} key={healthDetailItem.id}>
      <h1 css={s.detailTitle}>{healthDetailItem.title}</h1>
      <div css={s.date}>작성일자: {healthDetailItem.publishedDate}</div>
      <div css={s.source}>
        출처: {healthDetailItem.source} / 조회수: {healthDetailItem.viewCount}
      </div>
      <div css={s.image}>
        <img
          src={healthDetailItem.thumbnailImageUrl}
          alt={healthDetailItem.title}
        />
      </div>
      <MyComponent healthDetailItem={healthDetailItem} />
    </div>
  );
}
