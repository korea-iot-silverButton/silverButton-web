import { css } from "@emotion/react";

export const main = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  `;

export const video = css`
position: relative;
  width: 100%;
  height: 100%;
`;

  export const videoBackground = css`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: 1; 
  `;
  

export const boxContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7) */
`;

export const rowBox = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  padding: 50px 50px;
`;
