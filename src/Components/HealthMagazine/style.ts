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
  color: #1e90ff;
  margin-right: 5px;
  text-decoration: none;
`;

export const under = css`
  &:hover {
    text-decoration: underline;
  }
`;

export const mainBox = css`
  width: 30%;
  height: 290px;
  background-color: #f9f9f9;
  border-radius: 8px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const imageBox = css`
  width: 100%;
  height: 250px;
  /* background-color: #e0e0e0; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const textBox = css`
  width: 100%;
  padding: 10px 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-top: 1px solid #ddd;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  margin-top: 15px;
`;

export const Listcontainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  padding: 0 20px;
  overflow-y: hidden;
`;

export const paginationContainer = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: white;
    color: blue;
    border: none;
    border-radius: 5px;
    font-size: 18px;

    &:hover {
      background-color: #4682b4;
    }
  }
`;

export const itemsContainer = css`
  width: 100%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const detailContainer = css`
  width: 100%;
  height: 820px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const detailTitle = css`
  width: 100%;
  height: auto;
`;

export const date = css`
  width: 100%;
  height: auto;
`;

export const source = css`
  width: 100%;
  height: auto;
`;

export const image = css`
  width: 100%;
  height: auto;
`;

export const content = css`
  font-size: 20px;
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

export const paginationContainers = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const paginationButton = css`
  background-color: #1e9;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin: 0 5px;

  &:hover {
    background-color: #4682b4;
  }
`;

export const paginationButtonActive = css`
  background-color: #4682b4;
`;

export const emptyBox = css`
  width: 150px;
  height: 200px;
  background-color: transparent;
`;

export const arrowButton = css`
  background-color: #1e90ff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;

export const selectBox = css`
  display: flex;
  justify-content: flex-end;
  width: 150px;
  font-size: 18px;
  padding: 10px;
  color: #333;
  background-color: red;
  border: 1px solid #ccc;
  border-radius: 5px;

  outline: none;
  appearance: none;
  cursor: pointer;
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0,0 20,0 10,10" fill="%23333" /></svg>')
    no-repeat right 10px center;
  background-size: 12px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const header = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;

export const magazineMain = css`
  width: 80%;
  height: 820px;
  border: 1px solid black;
`;