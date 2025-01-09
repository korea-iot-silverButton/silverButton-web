import { css } from "@emotion/react";

export const hamburgerStyles = css`
  cursor: pointer;
  font-size: 50px;
  background: none;
  border: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const sidebarStyles = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  left: ${isOpen ? "0" : "-300px"};
  width: 200px;
  height: 100%;
  background-color: rgba(162, 143, 199, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 10;
`;

export const sidebarTitle = css`
  margin: 32px 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const sideTitle = css`
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const sidebarButtons = css`
  display: flex;
  flex-direction: column;
`;

export const sidebarButton = css`
  border: none;
  margin: 5px;
  padding: 8px 20px;
  border-radius: 15px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  color: rgba(162, 143, 199);
  cursor: pointer;
`;

export const sidebarCloseButtonContainer = css`
  position: fixed;
  bottom: 32px;
`;

export const sidebarCloseButton = css`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;
