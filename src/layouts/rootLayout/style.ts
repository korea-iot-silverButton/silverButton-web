import { css } from "@emotion/react";

export const fullDiv = css`
  position: relative; /* 동영상 위에 콘텐츠 배치 */
  width: 100vw; /* 뷰포트 너비 */
  height: 100vh; /* 뷰포트 높이 */
  overflow: hidden; /* 동영상이 넘치지 않도록 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;

