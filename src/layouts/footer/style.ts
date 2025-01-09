import { css } from "@emotion/react";

export const footerContianer = css`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 200px;
`;

export const companyInfo = css`
  font-size: 12px;
  margin: 5px;
  width: 50%;
`;

export const companyInfoData = css`
  color: white;
  margin-bottom: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid black;
`;

export const companyInfoText = css`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

export const companyInfoAddress = css`
  font-size: 12px;
  margin-top: 3px;
`;

export const policy = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 13px;
  margin: 5px;
  width: 50%;
`;

export const policyItems = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const policyItem = css`
  margin-right: 5px;
  padding-right: 5px;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  cursor: pointer;
`;

export const slogan = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #eee;
`;

export const logo = css`
  @font-face {
    font-family: "SBAggroB";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  margin: 3px 0px 0px 5px;
  cursor: pointer;
  font-family: "SBAggroB";
  font-size: 22px;
  background: linear-gradient(to right bottom, rgb(147, 129, 255), #6ee7b7);
  color: transparent;
  -webkit-background-clip: text;
`;
