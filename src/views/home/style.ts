import { css } from "@emotion/react";
import homeImg from "./homeImgage.jpg"

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

export const box = css`
  height: 70%; 
  width: 20%;
  background:#e9e7fb ; 
  border: 1px solid #ddd;
  border-radius: 15px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(249,249,249); 
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15); 
  }


  &:active {
    transform: translateY(1px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }


  & > span {
    margin-top: 12px; 
    font-size: 18px; 
    font-weight: bold;
    color: #555;
  }
`;



