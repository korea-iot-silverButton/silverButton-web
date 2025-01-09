/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

interface MainLayoutProps {
  children: React.ReactNode; // children 타입 정의
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <div css={s.mainLayout}>{children}</div>;
}
