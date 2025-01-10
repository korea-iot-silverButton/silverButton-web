import { css } from "@emotion/react";

export const magazineContainer = css`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: black;
`;

export const magazineBox = css`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: gray;
`;

export const magazineHeader = css`
  font-size: 30px;
  width: 100%;
  height: 120px;
  background-color: white;
  text-align: center;
  font-size: 50px;
`;

export const selectBox = css`
  display: flex;
  justify-content: flex-end;
  width: 150px;
  font-size: 18px;
  padding: 10px;
  color: #333;
  background-color: #f9f9f9;
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

export const option = css`
  font-size: 15px;
  padding: 5px;
  background-color: white;
  color: #333;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const Box = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const mainBox = css`
  width: 100%;
  height: 100%;
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
`;

export const paginationContainer = css``;
