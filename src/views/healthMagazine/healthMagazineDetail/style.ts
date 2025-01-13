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
  padding-left: 20px;
  padding-right: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;