/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

export const contSt = css`
`;

export const headerSt = css`
  width: 1500px;
  height: 100px;
  border: 1px solid red;
`;


export const titleSt = css`
  width: 1500px;
  height: 100px;
  background-color: #6432E9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 40px;
  &:hover {
  background-color: #0056b3;
  }
`;

export const nameSt = css`
  margin-left: 120px;
  font-size: 20px;
`;

export const bodySt = css`
  width: 1200px;
  height: 800px;
  border: 2px solid red;
  margin-left: 180px;
  margin-top: 60px;
  border-radius: 5px;
  background-color: #F4F6F5;
`;

export const inputSt = css`
  width: 600px;
  height:45px;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 10px;
  font-size: 20px;
`;

export const shapeSt = css`
  width: 1200px;
  height: 150px;  
  border-radius: 5px;
  margin-top: 70px;
  display: flex;
  flex-direction: column; 
  border:1px solid black ;
`;

export const s1buttonSt = css`
  width:100px;
  height:45px;
  border-radius: 10px;
  background-color: green;
  margin-left: 50px;
  font-size: 20px;
  color: white;
  &:hover {
    background-color: #0056b3;
  }
`;

// 약품 모양으로 검색
export const mshapeSt = css`
  width: 1200px;
  height: 150px;  
  border-radius: 5px;
  margin-top: 70px;
  display: flex;
  flex-direction: column; 
  border:1px solid black ;
  box-sizing: border-box;
`;

// 약품 모양으로 검색 리스트
export const shapeLt = css`
  list-style-type: none;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
`;

// 원형
export const circle = css`
width: 50px;
height: 50px;
cursor: pointer;
`;

// 반원형
export const halfSquare = css`
  width: 50px;
  height: 50px;
  transform: rotate(270deg);
  cursor: pointer;
`;

// 타원형
export const taone = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 삼각형
export const triangle = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 사각형
export const box = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 마름모
export const mamo = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 장방형
export const jangbang = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

// 오각형
export const okak = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 육각형
export const six = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 팔각형
export const eight = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

// 텍스트 리스트
export const textli = css`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

// 빨강 원 텍스트
export const redText = css`
  margin-left: 2px;
  
`;

export const whC = css`
  display: flex;
  flex-direction: column;
`;

// 약품 색상으로 검색
export const csearchSt = css`
  width: 1200px;
  height: 150px;  
  border-radius: 5px;
  margin-top: 30px;
  display: flex;
  flex-direction: column; 
  border:1px solid black ;
  box-sizing: border-box;
`;

// 하양 원
export const white= css`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #EBEBEB;
  }
`;

// 하양 원 텍스트
export const whiteT = css`
  display: flex;
  flex-direction: column;
`;

// 노랑 원
export const yellow = css`
  width: 30px;
  height: 30px;
  background-color: yellow;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #FAED7D;
  }
`;

// 주황 원
export const orange = css`
  width: 30px;
  height: 30px;
  background-color: orange;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #FFE08C;
  }
  
`;

// 분홍 원
export const pink = css`
  width: 30px;
  height: 30px;
  background-color: pink;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #FFD9FA;
  }
`;

// 갈색 원
export const brown = css`
  width: 30px;
  height: 30px;
  background-color: brown;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #CCA63D;
  }
`;

// 연두 원
export const yellowGreen = css`
  width: 30px;
  height: 30px;
  background-color: yellowgreen;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #CEF279;
  } 
`;

// 초록 원
export const green = css`
  width: 30px;
  height: 30px;
  background-color: green;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #6B9900;
  }  
`;

// 청록 원
export const turquoise = css`
  width: 30px;
  height: 30px;
  background-color: turquoise;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #008299;
  }  
`;

// 파랑 원
export const blue = css`
  width: 30px;
  height: 30px;
  background-color: blue;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #6799FF;
  }  
`;

// 남색 원
export const navy = css`
  width: 30px;
  height: 30px;
  background-color: navy;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #4641D9;
  }  
`;

// 자주 원
export const violet = css`
width: 30px;
height: 30px;
background-color: violet;
border-radius: 50%; 
cursor: pointer;
&:hover {
    background-color: #8041D9;
  }  
`;

// 보라 원
export const purple = css`
  width: 30px;
  height: 30px;
  background-color: purple;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color:#D1B2FF;
  }  
`;

// 회색
export const gray = css`
  width: 30px;
  height: 30px;
  background-color: gray;
  border-radius: 50%; 
  cursor: pointer;
  &:hover {
    background-color: #9F9F9F;
  }  
`;

// 검정 원
export const black = css`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }  
`;

// 빨강 원
export const red = css`
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #CC3D3D;
  }  
`;

// 투명 원
export const two = css`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid black ;
  cursor: pointer;
    
`;

// 약품 색상으로 검색 리스트
export const colorLt = css`
  list-style-type: none;
  display: flex;
  flex-direction: row;  
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

// 약품 분할선으로 검색
export const bsearchSt = css`
  width: 1000px;
  height: 70px;
  border: 1px solid black;
  margin-top: 60px;
`;

// 분할선 시작
export const line = css`
  margin-top: 30px;
`;

export const lineLi = css`
  list-style-type: none;
  display: flex;
  flex-direction: row;  
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const minus = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const ten = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const kita = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
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