import { css } from "@emotion/react";
import homeImg from "./homeImgage.jpg"

export const main = css`
position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const box = css`
  width: 70%; 
  height: 50%; 
  background: #f9f9f9; 
  border: 1px solid #ddd;
  border-radius: 15px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
  transition: all 0.3s ease;


  &:hover {
    background: #e9e7fb; 
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15); 
  }


  &:active {
    transform: translateY(1px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }


  & > span {
    margin-top: 12px; 
    font-size: 18px; 
    font-weight: bold;
    color: #555;
  }
`;

export const rowBox = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const boxContainer = css`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const videoBackground = css`
  position: fixed; /* 화면 전체를 덮도록 고정 */
  top: 0;
  left: 0;
  width: 100%; /* 뷰포트 너비 */
  height: 100%; /* 뷰포트 높이 */
  object-fit: cover; /* 화면 비율 유지하며 잘림 없이 표시 */
  z-index: -1; /* 콘텐츠(children) 뒤로 배치 */
`;
