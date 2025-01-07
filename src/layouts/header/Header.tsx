/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useAuthStore from "../../stores/auth.store";
import SideBar from "../sideBar/SideBar";

function HeaderToolWrap() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.token) {
      logout();
    }
  }, [cookies.token, logout]);

  const handleLogOutClick = () => {
    setCookies("token", "", { expires: new Date() });
    logout();
    alert("로그아웃 되었습니다.");
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div css={s.headerToolWrap}>
      <div css={s.headerLogo}>
        <img src="/logo.png" alt="icon" css={s.headerLogoImg} />
      </div>

      <div css={s.headerToolKit}>
        {isAuthenticated ? (
          <>
            <div>{user && <>{user.nickname}님 안녕하세요</>}</div>
            <button onClick={handleLogOutClick} css={s.headerButton}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to={"/auth"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>
                로그인
              </button>
            </Link>
            <Link to={"/auth/signup"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>
                회원가입
              </button>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>
                홈 화면
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

function HeaderNaviWrap() {
  return (
    <div css={s.headerNaviWrap}>
      <SideBar />
    </div>
  );
}

export default function Header() {
  return (
    <div css={s.headerContianer}>
      <HeaderToolWrap />
      <HeaderNaviWrap />
    </div>
  );
}
