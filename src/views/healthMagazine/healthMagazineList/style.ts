import { css } from "@emotion/react";

export const contSt = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 150px;
`;

export const conttSt = css`
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
`;

export const headerBox = css`
  width: 100%;
  height: 80px;
`;

export const magazineHeader = css`
  font-size: 40px;
  width: 100%;
  height: auto;
  text-align: center;
  font-weight: bold;
`;

export const magazineTitle = css`
  padding-bottom: 5px;
  border-bottom: 3px solid #333;
`;

export const HealthMagazineItemBox = css`
  width: 100%;
  height: 100%;
`;

export const paginationContainer = css`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 16px;
    border-radius: 8px;
`;

export const paginationButton = css`
  background-color: rgba(162, 143, 199, 0.2);
    border: 1px solid rgba(162, 143, 199, 0.5);
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    color: rgba(162, 143, 199, 0.8);
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;

    &:hover {
      background-color: rgba(162, 143, 199, 0.3);
      border-color: rgba(162, 143, 199, 0.8);
      color: #ffffff;
    }
`;

export const paginationButtonActive = css`
  background-color: rgba(162, 143, 199, 0.8); 
    color: #ffffff; 
    border-color: rgba(162, 143, 199, 1);

    &:hover {
      background-color: rgba(162, 143, 199, 1);
    };
`;

export const emptyBox = css`
  width: 150px;
  height: 200px;
  background-color: transparent;
`;

export const arrowButton = css`
background-color: rgba(162, 143, 199, 0.2); /* 버튼 배경 */
    border: 1px solid rgba(162, 143, 199, 0.5); /* 테두리 */
    color: rgba(162, 143, 199, 0.8); /* 텍스트 색상 */
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;

    &:hover:not(:disabled) {
      background-color: rgba(162, 143, 199, 0.3); /* 호버 시 밝은 색상 */
      border-color: rgba(162, 143, 199, 0.8);
      color: #ffffff;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: rgba(162, 143, 199, 0.1);
      color: rgba(162, 143, 199, 0.5);
      border-color: rgba(162, 143, 199, 0.2);
    }
`;

export const selectBox = css`
  margin-top: 5px;
`;

export const selectData = css`
  display: flex;
  justify-content: flex-start;
  width: 150px;
  font-size: 18px;
  padding: 10px;
  margin: 0 25px;
  color: #333;
  background-color: red;
  border: 1px solid #ccc;
  border-radius: 5px;

  outline: none;
  appearance: none;
  cursor: pointer;
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0,0 20,0 10,10" fill="%23333" /></svg>')
    no-repeat right 10px center;
  background-size: 12px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
