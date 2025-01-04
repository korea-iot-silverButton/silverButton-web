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

export const videoBackground = css`
  position: fixed; /* 화면 전체를 덮도록 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 화면에 맞게 잘림 없이 동영상 표시 */
  z-index: -1; /* 콘텐츠(children) 뒤에 위치 */
`;