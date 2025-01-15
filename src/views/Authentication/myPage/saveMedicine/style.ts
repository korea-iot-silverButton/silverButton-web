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
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const paginationButton = css`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin: 0 5px;

  &:hover {
    background-color: #4682b4;
  }
`;

export const paginationButtonActive = css`
  background-color: skyblue;
`;

export const arrowButton = css`
  background-color: #1e90ff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;