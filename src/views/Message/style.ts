/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const layout = css`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

/*제목*/
export const header = css`
  font-size: 26px;
  color: #333;
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
  height: 80vh;
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
  padding: 12px 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  /*활성화된 버튼*/
  &[data-active="true"] {
    background-color: #0056b3;
    color: white;
  }
`;

export const messageItem = css`
  padding: 14px;
  background-color: #f8f9fa;
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
    color: #555;
  }
`;


export const pagination = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  button {
    padding: 8px 20px;
    width: 48%;
    background-color: #007bff;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:disabled {
      background-color: #ddd; /* 비활성화 */
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

/* 에러 메시지 스타일 */
export const errorMessage = css`
  color: red;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
`;

/* 로딩 메시지 스타일 */
export const loadingMessage = css`
  color: #333;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

/* 메시지 카드 스타일 */
export const messageBox = css`
  background-color: #fff;
  width: 800px;
  max-width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
`;

export const createButton = css`
  position: absolute;
  bottom: 8px;
  right: 8px; 
  height: 4vh;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100px;

  &:hover {
    background-color: #0056b3;
  }
`;
