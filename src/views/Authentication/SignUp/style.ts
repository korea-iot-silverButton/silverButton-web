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

export const boxContainer = css`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7) */
`;



export const signUpContainer = css`
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  padding: 50px 50px;
`;
