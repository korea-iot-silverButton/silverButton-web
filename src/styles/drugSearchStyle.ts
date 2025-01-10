/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import exp from "constants";

export const contSt = css`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  overflow: hidden;
  padding:0 150px 20px 150px ;
`;



export const conttSt = css`
  width: 100%;
  height: 100%;
  background: rgb(233,231,251);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;

export const ListtContainer = css`
  width: 90%;
  height: 90%;
  border-radius: 10px;
  background-color: #ece6cc;
`;

export const headerSt = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 40px;
  color: purple;
`;

export const nameSt = css`
  display: flex;
  justify-content: space-evenly; 
  align-items: center; 
  width: 100%; 
  font-size: 25px;
  padding-top: 15px;
`;

export const inputSt = css`
  width: 600px;
  height:45px;
  border-radius: 5px;
  font-size: 20px;
  input:focus {
  border: 1px solid Gold; 
  outline: 1px solid Gold; 
  }
`;



export const shapeSt = css`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 0;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

export const s1buttonSt = css`
  width:130px;
  height:50px;
  color: white;
  position: relative;
  margin-right: 50px;
  margin-bottom: 5px;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    color: black;
    background-color: white;
    cursor: pointer;
  &:hover {
    transition: transform 0.3s ease, color 0.3s ease;
    background-color: purple;
    color: white;
  }
`;
export const s2buttonSt = css`
  width:130px;
  height:50px;
  color: white;
  position: relative;
  margin-right: 50px;
  margin-bottom: 5px;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    color: black;
    cursor: pointer;
    background-color: white;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const buttonCT = css`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center; 
  gap: 10px; 
  transition: transform 0.3s ease, color 0.3s ease;
  margin-left: 3%;
  margin-top: 5%;
`;

export const shapeLt = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly; 
  align-items: center; 
  list-style: none;
  width: 95%;
  height: 70%;
  flex-wrap: wrap;
  margin-left: 2%;
`;

// 원형
export const circle = css`
width: 60px;
height: 60px;
cursor: pointer;
&:hover{
  color: blue;
}
`;

// 약품 색상으로 검색
export const csearchSt = css`
  width: 90%;
  height: 20%;
  border: 2px solid black;
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  background-color: wheat;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

// 하양 원
export const white= css`
  width: 60px;
  height: 60px;
  color: white;
  cursor: pointer;
  &:hover{
    color: #EDEDED;
  }
`;

// 노랑 원
export const yellow = css`
  width: 60px;
  height: 60px;
  color: yellow;
  cursor: pointer;
  &:hover{
    color:#FFE400;
  }
`;

// 주황 원
export const orange = css`
  width: 60px;
  height: 60px;
  color: orange;
  cursor: pointer;
  &:hover{
    color: #FFBB00;
  }
`;

// 분홍 원
export const pink = css`
  width: 60px;
  height: 60px;
  color: pink;
  cursor: pointer;
  &:hover{
    color: #FF00DD;
  }
`;

// 갈색 원
export const brown = css`
  width: 60px;
  height: 60px;
  color: brown;
  cursor: pointer;
  &:hover{
    color: #751400;
  }
`;

// 연두 원
export const yellowGreen = css`
  width: 60px;
  height: 60px;
  color: yellowgreen;
  cursor: pointer;
  &:hover{
    color: #1DDB16;
  }
`;

// 초록 원
export const green = css`
  width: 60px;
  height: 60px;
  color: green;
  cursor: pointer;
  &:hover{
    color: #41AF39;
  }
`;

// 청록 원
export const turquoise = css`
  width: 60px;
  height: 60px;
  color: teal;
  cursor: pointer;
  &:hover{
    color: #489FAE;
  }
`;

// 파랑 원
export const blue = css`
  width: 60px;
  height: 60px;
  color: blue;
  cursor: pointer;
  &:hover{
    color: #0100FF;
  }
`;

// 남색 원
export const navy = css`
  width: 60px;
  height: 60px;
  color: navy;
  cursor: pointer;
  &:hover{
    color: #030066;
  }
`;

// 자주 원
export const violet = css`
  width: 60px;
  height: 60px;
  color: violet;
  cursor: pointer;
  &:hover{
    color: #990085;
  }
`;

// 보라 원
export const purple = css`
  width: 60px;
  height: 60px;
  color: purple;
  cursor: pointer;
  &:hover{
    color: #9C368E;
  }
`;

// 회색
export const gray = css`
  width: 60px;
  height: 60px;
  color: gray;
  cursor: pointer;
  &:hover{
    color: #4C4C4C;
  }
`;

// 검정 원
export const black = css`
  width: 60px;
  height: 60px;
  color: black;
  cursor: pointer;
  &:hover{
    color: #121212;
  }
`;

// 빨강 원
export const red = css`
  width: 60px;
  height: 60px;
  color: red;
  cursor: pointer;
  &:hover{
    color: #FF0000;
  }
`;

// 투명 원
export const two = css`
  width: 60px;
  height: 60px;
  color: cadetblue;
  cursor: pointer;
`;

// 약품 색상으로 검색 리스트
export const colorLt = css`
list-style-type: none;
  display: flex;
  justify-content: space-evenly; 
  align-items: center; 
  width: 100%; 
  margin-top: 1%;
`;

// 분할선 시작
export const line = css`
  width: 90%;
  height: 20%;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  background-color: wheat;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

export const lineLi = css`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  width: 100%; 
  margin-top: 1%;
`;


// 색상 전체
export const coAll = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: enter;
`;

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const fiButton1 = css`
  width: 170px;
  height: 60px;
  background-color: transparent;
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  border-radius: 15px;
  border: solid 1px #ccc;
  margin-top: 60px;
  margin-left: 350px;
  &:hover {
    background-color: #f0f0f0;
    border-color: #999;
  }  
`;

export const fiButton2 = css`
  width: 170px;
  height: 60px;
  background-color: transparent;
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  border-radius: 15px;
  border: solid 1px #ccc;
  margin-left: 130px ;
  &:hover {
    background-color: #f0f0f0;
    border-color: #999;
  }  
`;

// 전체 텍스트 아이콘
export const AllIcon = css`
width: 60px;
height: 70px;
cursor: pointer;
&:hover{
  color: blue;
}
`;

export const Text = css`
  display: flex;
  justify-content: space-evenly; 
  align-items: center; 
  width: 100%; 
  padding: 0;
  margin: 0;
`;

export const selectSt = css`
  border: 1px solid blue; 
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 5px;
  width: auto;
  height: auto;
  `;

export const shapeTx = css`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8); 
  border-radius: 4px; 
  margin-top: 3%;
  margin-left: 1%;
  width: 15%;
  height: auto;
  border-radius: 5px;
`;

export const arrowButtonSt = css`
  text-align: center;
  margin-right:5px;
  margin-left: 3px;
  button {
    background: purple;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    transition:  0.2s ease;
  }
  button:hover {
    background: yellowgreen;
  }
`;


export const medicineName = css`
  width: 20%;

  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 2%;
  margin-top: 1%;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;
export const medicineName1 = css`
  width: 15%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 1%;
  margin-top: 1%;
  background-color: beige;
  font-size: 20px;
  
`;

export const medicneDeatail = css`
  width: 95%;
  height: 77%;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 2%;
  margin-top: 0.5%;
  cursor: pointer;
  font-size: 14px;
  color: #666;
`;

export const medicineAll = css`
  width: 100%;
  height: 100%;
`;

export const listCt = css`
  width: 90%;
  height: 30%;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
`;

export const medicinePr = css`
  width: 20%;
  height: 90%;
  border: 2px solid black;

  border-radius: 8px;
  margin-left:2%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
    color: #aaa;
  cursor: pointer;
`;

export const detailName = css`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  
`;

export const detailCont = css`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  gap: 15px;
`;

export const detailBox = css`
width: 30%;
height: 80%;
  border: 2px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 10%;
  background-color: #ffffff;
  border-radius: 8px;
 
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
  

`;

export const detailBoxCont = css`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  margin-top: 5%;
`;

export const detailPr = css`
  width: 20%;
  height: 80%;
  border: 2px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 10%;
  background-color: #ffffff;
  border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
  
`;

export const detailInfo = css`
  width: 100%;
  height: 40%;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1%;
  
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #ffffff;
  border-radius: 8px;
  &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  
`;

export const infoBox = css`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 1%;
`;

export const medicineInfo = css`
box-sizing: border-box;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const medicineRow = css`
  display: flex;
  align-items: center;
`;



export const saveButton = css`
  font-size: 10px;
  cursor: pointer;
  background-color: #1E90FF;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 1%;
  margin-top: 0.5%;
`;

export const searchResult = css`
  margin-left: 5%;
  font-size: 30px;
`;

export const contentTitle = css`
  margin-left: 0.5%;
  font-size: 25px;
`;

export const contentText = css`
  margin-left: 0.5%;
  font-size: 15px;
`;