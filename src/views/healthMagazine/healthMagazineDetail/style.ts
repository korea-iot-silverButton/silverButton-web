import { css } from "@emotion/react";

export const contSt = css`
  width: 80%;
  height: 100%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  overflow: hidden;
  padding:0 150px 20px 150px ;
`;

export const conttSt = css`
  width: 80%;
  height: 100%;
  background: transparent;
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