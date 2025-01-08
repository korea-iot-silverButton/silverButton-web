import { css } from "@emotion/react";

export const button = css`
  border: none;
  width: 100px;
  border-radius: 40px;
  padding: 8px 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  background: linear-gradient(135deg, #6d5dfc, #3c82fc);
`;

export const headerContianer = css`
  box-sizing: border-box;
  background-color: rgba(233, 231, 251, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 50px;
  /* border-radius: 0 0 15px 15px; */
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`;

export const img = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

export const logoButton = css`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;



export const headerButton = css`
  display: flex;
  align-items: center;
`;

export const headerAll = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const headerDt = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
`;
