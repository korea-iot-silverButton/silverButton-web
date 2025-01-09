import { css } from "@emotion/react";

export const mainLayout = css`
  flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
  overflow-y: auto; /* 내용이 많으면 스크롤 가능하도록 설정 */
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 150px;
  height: 100%;
`;
