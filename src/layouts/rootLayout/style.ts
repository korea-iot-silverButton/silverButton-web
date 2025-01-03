import { css } from "@emotion/react";

export const fullDiv = css`
  box-sizing: border-box;
  
  width: 100vw;
  /* min-width: 900px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 0;
  
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;