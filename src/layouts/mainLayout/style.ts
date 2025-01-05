import { css } from "@emotion/react";


export const mainLayout = css`
flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
  overflow-y: auto; /* 내용이 많으면 스크롤 가능하도록 설정 */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 0;
`;