import { css } from "@emotion/react";

export const headerContianer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px 50px;
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
  background: linear-gradient(to right bottom, #9381ff, #6ee7b7);
`;

export const logOutButton = css`
  border: none;
  width: 100px;
  border-radius: 40px;
  padding: 8px 20px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  margin-left: 30px;
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
  background: linear-gradient(to right bottom, #9381ff, #6ee7b7);
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
  width: 200px;
  height: 100%;
  cursor: pointer;
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
export const headerNaviWrap = css`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
`;

export const headerHamburger = css`
  position: fixed;
  margin-left: 15px;
  color: rgba(147, 129, 255, 0.8);
`;

export const headerNaviButtons = css`
  width: 100%;
  margin: 0 100px;
  display: flex;
  justify-content: center;
`;

export const haderNaviButton = css`
  padding: 8px 20px;
  background: transparent;
  border: 1px solid rgba(147, 129, 255, 0.5);
  border-radius: 15px;
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(147, 129, 255, 0.1);
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const naviIcon = css`
  font-size: 25px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 3px;
`;

export const naviTitle = css`
  font-size: 1em;
  font-weight: 500;
`;

export const roleImage = css`
  width: 2em;   
  height: 2em;   
  margin-right: 8px;
  vertical-align: middle; 
`;

export const profile = css`
  width: 200px;
`;