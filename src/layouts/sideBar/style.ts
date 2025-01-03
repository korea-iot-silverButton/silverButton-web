import { css } from "@emotion/react";

export const hamburgerStyles = css`
  font-size: 50px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

export const sidebarStyles = (isOpen: boolean) => css`
  position: fixed;
  top: 0;
  left: ${isOpen ? "0" : "-300px"};
  width: 250px;
  height: 97%;
  background-color:rgba(162,143,199,0.8);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

export const closeButtonStyles = css`
  margin-top: auto;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const sideName = css`

  cursor: pointer;
`;