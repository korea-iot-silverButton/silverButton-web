import { css } from "@emotion/react";

export const contSt = css`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  overflow: hidden;
  padding:0 150px 20px 150px ;
`;



export const conttSt = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;

export const searchResult = css`
  margin-left: 5%;
  font-size: 30px;
`;

export const listCt = css`
  width: 90%;
  height: 30%;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
`;

export const medicinePr = css`
  width: 20%;
  height: 90%;
  border: 2px solid black;

  border-radius: 8px;
  margin-left:2%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
    color: #aaa;
  cursor: pointer;
`;

export const medicineAll = css`
  width: 100%;
  height: 100%;
`;

export const medicineRow = css`
  display: flex;
  align-items: center;
`;

export const medicineName = css`
  width: 20%;

  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 2%;
  margin-top: 1%;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

export const medicneDeatail = css`
  width: 95%;
  height: 77%;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 2%;
  margin-top: 0.5%;
  cursor: pointer;
  font-size: 14px;
  color: #666;
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
background-color: rgba(162, 143, 199, 0.8); /* 활성화된 버튼의 배경 */
    color: #ffffff; /* 텍스트 색상 */
    border-color: rgba(162, 143, 199, 1);

    &:hover {
      background-color: rgba(162, 143, 199, 1); /* 호버 시 더 짙은 색 */
    }
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

export const searchInput = css`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid rgba(162, 143, 199, 0.5);
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;