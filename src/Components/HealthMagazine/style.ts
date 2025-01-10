import { css } from "@emotion/react";

export const contentBox = css`
  width: 95%;
  border-radius: 5px;
  background-color: red;
  text-align: center;
  font-size: 30px;
`;

export const listStyle = css`
  list-style-type: none;
  font-size: 30px;
  border-radius: 5px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding-bottom: 5px;
  cursor: pointer;
`;

export const title = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 23px;
  color: #333;
  margin-left: 1%;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const titleText = css`
  color: #1E90FF;
  margin-right: 5px;
  text-decoration: none;
`;

export const under = css`
    &:hover {
    text-decoration: underline;
  }
`;


