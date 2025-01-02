import { css } from '@emotion/react';

export const layout = css`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const header = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

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
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #EEE;
  cursor: pointer;
`
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

