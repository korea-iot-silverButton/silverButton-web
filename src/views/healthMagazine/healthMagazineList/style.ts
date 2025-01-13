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
  background: rgb(233,231,251);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;

export const magazineHeader = css`
  font-size: 40px;
  width: 100%;
  height: auto;
  text-align: center;
  font-weight: bold;
`;





export const Box = css`
  width: 100%;
  height: 720px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: yellowgreen;
`;

export const mainBox = css`
  width: 100%;
  height: 700px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const contentBox = css`
  width: 30%;
  height: 90%;
  background-color: blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
`;

export const contentImg = css`
  width: 100%;
  height: 75%;
  background-color: purple;
`;

export const contentTitle = css`
  width: 100%;
  height: 20%;
  background-color: green;
  margin-top: 2%;
`;

export const content = css`
  width: 100%;
  height: 30%;
  background-color: yellow;
  margin-top: 2%;
`;

export const magazinesContainer = css`
  width: 90%;
  height: 370px;
`;

export const paginationContainer = css`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-top: 70px;
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

export const emptyBox = css`
  width: 150px;
  height: 200px;
  background-color: transparent;
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

export const selectBox = css`
  display: flex;
  justify-content: flex-end;
  width: 150px;
  font-size: 18px;
  padding: 10px;
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