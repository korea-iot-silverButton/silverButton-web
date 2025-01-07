import { css } from "@emotion/react";

export const button = css`
  border: none;
  width: 100px;
  border-radius: 40px;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  background: linear-gradient(135deg, #6d5dfc, #3c82fc);
`;

export const headerContianer = css`
  box-sizing: border-box;
  background-color: rgba(233, 231, 251, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 50px;
  /* border-radius: 0 0 15px 15px; */
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`;

export const img = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

export const logoButton = css`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const TEXT = css`
  background: linear-gradient(135deg, #6d5dfc, #c054fc);
  color: white;
  border: none;
  border-radius: 30px; /* 둥근 모서리 */
  padding: 4px 12px; /* 위아래 패딩 줄임 */
  font-size: 18px; /* 폰트 크기 */
  font-weight: bold;
  height: 36px; /* 버튼 고정 높이 설정 */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #c054fc, #6d5dfc);
    box-shadow: 0 4px 8px rgba(109, 93, 252, 0.4); /* 호버 시 그림자 */
    transform: translateY(-2px); /* 살짝 위로 이동 */
  }

  &:active {
    transform: translateY(1px); /* 클릭 시 눌림 효과 */
    box-shadow: 0 2px 5px rgba(109, 93, 252, 0.2);
  }
`;

export const headerButton = css`
  display: flex;
  align-items: center;
`;

export const headerAll = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const headerDt = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
`;
