import { css } from "@emotion/react";

export const headerContianer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

export const headerNaviWrap = css`
  width: 100%;
  height: 75px;
`;

export const headerButton = css`
  border: none;
  width: 100px;
  border-radius: 40px;
  padding: 8px 20px;
  font-size: 16px;
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
  background: linear-gradient(to right bottom, #9381FF, #6EE7B7);
`;

//* headerToolWrap
export const headerToolWrap = css`
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
`;

export const headerLogo = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const headerLogoImg = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100%;
`;

export const headerToolKit = css`
  width: 310px;
  height: 100%;
  position: absolute;
  right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//* headerNaviWrap