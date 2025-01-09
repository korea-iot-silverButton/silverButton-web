/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

interface FooterLayoutProps {
  children: React.ReactNode; // children 타입 정의
}

export default function HeaderLayout({ children }: FooterLayoutProps) {
  return <div css={s.footerLayout}>{children}</div>;
}
