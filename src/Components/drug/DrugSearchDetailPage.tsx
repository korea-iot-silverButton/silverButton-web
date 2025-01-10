/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "../../styles/drugSearchStyle";

export default function DrugSearchDetailPage() {
  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <div css={s.detailCont}>
          <div css={s.detailName}>약품 이름</div>
        </div>
        <div css={s.detailBoxCont}>
          <div css={s.detailPr}>약품 사진</div>
          <div css={s.detailBox}>
            <ul style={{ listStyleType: "none" }}>
              <li>품목 일련번호:32313</li>
              <li>업체명:박카스</li>
              <li>약품 색깔:파랑</li>
              <li>분할선:없음</li>
              <li>약품 모양:원형</li>
            </ul>
          </div>
        </div>

        <div css={s.infoBox}>
          <div css={s.detailInfo}>
            <div css={s.contentTitle}>약품 효능</div> 
            <div css={s.contentText}>
            이 약은 식욕감퇴(식욕부진), 위부팽만감, 소화불량,
            과식, 체함, 구역, 구토에 사용합니다
            </div>
          </div>
          <div css={s.detailInfo}>
            <div css={s.contentTitle}>약품 사용방법</div>
            <div css={s.contentText}>
            만 15세 이상 및 성인은 1회 1병(75 mL), 만
            11세이상~만 15세미만은 1회 2/3병(50 mL), 만 8세 이상~만 11세 미만은
            1회 1/2병(37.5 mL), 만 5세 이상~만 8세 미만은 1회 1/3병(25 mL), 만
            3세 이상~만 5세 미만은 1회 1/4병(18.75 mL), 만 1세 이상~만 3세
            미만은 1회 1/5병(15 mL), 1일 3회 식후에 복용합니다. 복용간격은 4시간
            이상으로 합니다.\n",
            </div>
          </div>
          <div css={s.detailInfo}>
            <div css={s.contentTitle}>약품 복용 시 주의사항</div>
            <div css={s.contentText}>
            만 3개월 미만의 젖먹이는 이 약을
            복용하지 마십시오.\n\n이 약을 복용하기 전에 만 1세 미만의 젖먹이,
            임부 또는 임신하고 있을 가능성이 있는 여성, 카라멜에 과민증 환자
            또는 경험자, 나트륨 제한 식이를 하는 사람은 의사 또는 약사와
            상의하십시오.\n\n정해진 용법과 용량을 잘 지키십시오.\n\n어린이에게
            투여할 경우 보호자의 지도 감독하에 투여하십시오.\n\n1개월
            정도 복용하여도 증상의 개선이 없을 경우 복용을 즉각 중지하고 의사
            또는 약사와 상의하십시오.
            </div>
          </div>
          <div css={s.detailInfo}>
            <div css={s.contentTitle}>약품 부작용</div>
            <div css={s.contentText}>
            구역, 구토, 설사, 묽은 변 등이 나타나는 경우
            복용을 즉각 중지하고 의사 또는 약사와 상의하십시오
            </div>
          </div>
          <div css={s.detailInfo}>
            <div css={s.contentTitle}>약품 보관방법</div>
            <div css={s.contentText}>
            습기와 빛을 피해 실온에서 보관하십시오
            </div>
          </div>
          <div css={s.detailInfo}>
            <div css={s.contentTitle}>약품 상호작용</div>
            <div css={s.contentText}>
            레보도파와 함께 복용하지 마십시오
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
