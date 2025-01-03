import { css } from "@emotion/react";
import homeImg from "./homeImgage.jpg"

export const main1 = css`
  width:  100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a28fc7 ;
  overflow-x: hidden;
  
`;

export const box = css`
  width: 50%;
  height: 50%;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

`;

export const rowBox = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const boxContainer = css`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-image: url("https://cdn.pixabay.com/photo/2022/09/13/13/31/seniors-7451917_960_720.jpg"); */
  /* background-size: cover; */
  /* background-position: center; */
`;