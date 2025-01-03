/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from "react";

export default function index() {
  return (
    <>
    
      <div css={s.main1}>
        <div css={s.boxContainer}>
        <div css={s.rowBox}>
          <div css={s.box}>약품 검색</div>
          <div css={s.box}>마이페이지</div>
        </div>
        <div css={s.rowBox}>
          <div css={s.box}>게시판</div>
          <div css={s.box}>매칭 / 쪽지</div>
        </div>
        </div>
      </div>
  </>
  )
}
