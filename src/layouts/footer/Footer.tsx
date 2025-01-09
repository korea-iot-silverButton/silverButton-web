/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import React from "react";

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div css={s.footerContianer}>
      <div css={s.companyInfo}>
        <div css={s.companyInfoData}>
          <p css={s.companyInfoText}>(주) 실버버튼 | 대표자명 : 정재원</p>
          <p css={s.companyInfoText}>사업자등록번호 : 000-00-00000</p>
          <div css={s.companyInfoAddress}>
            주소 : 12345 부산광역시 부산진구 부산 부산진구 중앙대로 668(부전동 229) 대표전화 : 1588-5890
          </div>
        </div>
        <div>COPYRIGHT © 2025 SILVER BUTTON PROJECT. ALL RIGHTS RESERVED</div>
      </div>
      <div css={s.policy}>
        <div css={s.policyItems}>
          <div css={s.policyItem}>이용약관</div>
          <div css={s.policyItem}>개인정보처리방침</div>
          <div css={s.policyItem}>환자권리장전</div>
          <div css={s.policyItem}>고객헌장</div>
        </div>
        <div css={s.slogan}>
          소중한 당신의 건강 파트너,{" "}
          <div css={s.logo} onClick={handleLogoClick}>
            Silver Needs
          </div>
        </div>
      </div>
    </div>
  );
}
