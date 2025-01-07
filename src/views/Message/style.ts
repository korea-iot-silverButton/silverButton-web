/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const layout = css`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const header = css`
  font-size: 26px;
  color: #333; /* 제목 색상 */
  margin-bottom: 30px;
  text-align: center;
`;



export const messageTab = css`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #111;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`

export const activeTab = css`
  background-color: #007BFF;
  color: #FFF;
  font-weight: bold;
`;

export const messageList = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;



const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const disabledButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#eee',
  color: '#aaa',
  cursor: 'not-allowed',
};

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f8; /* 동일한 배경 색상 */
`;

export const tabs = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const tabButton = css`
  flex: 1;
  margin: 0 5px;
  padding: 14px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #007bff !important; /* 기본 버튼 배경 */
  color: white; /* 기본 텍스트 색상 */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* 호버 상태 */
  }

  &[data-active="true"] {
    background-color: #0056b3 !important; /* 활성화된 버튼 배경 */
    color: white !important; /* 활성화된 버튼 텍스트 */
  }
`;

export const messageItem = css`
  padding: 14px;
  background-color: #f8f9fa; /* 메시지 아이템 배경 */
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;

  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #555; /* 세부 텍스트 색상 */
  }
`;


export const pagination = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  button {
    padding: 14px;
    width: 48%;
    background-color: #007bff; /* 버튼 배경 */
    border: none;
    border-radius: 5px;
    color: white; /* 버튼 텍스트 */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:disabled {
      background-color: #ddd; /* 비활성화 버튼 배경 */
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3; /* 버튼 호버 배경 */
    }
  }
`;

/* 에러 메시지 스타일 */
export const errorMessage = css`
  color: red; /* 에러 메시지 색상 */
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
`;

/* 로딩 메시지 스타일 */
export const loadingMessage = css`
  color: #333; /* 로딩 메시지 색상 */
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

/* 메시지 카드 스타일 */
export const messageBox = css`
  background-color: #fff; /* 카드 배경 */
  width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 동일한 그림자 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
