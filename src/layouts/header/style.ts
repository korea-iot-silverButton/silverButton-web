import { css } from "@emotion/react";

export const button = css`
&:hover {
    transition: transform 0.3s ease, color 0.3s ease;
    text-decoration: underline;
    color: green;
}
`;

export const headerContianer = css`
  box-sizing: border-box;
  background-color: #e9e7fb;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  height: 100%;
  padding: 0 100px; 
`;

export const img  = css`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
margin-bottom: 8%;
`;

export const logoButton = css`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
