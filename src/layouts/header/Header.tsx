/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useAuthStore from "../../stores/auth.store";
import SideBar from "../sideBar/SideBar";
import mainImg from "./mainImg.png";

export default function Header() {
  // * state * //
  const { isAuthenticated, user, logout } = useAuthStore();
  const [cookies, setCookies] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      logout();
    }
  }, [cookies.token, logout]);


  // Event handler for logout
  const handleLogOutClick = () => {
    setCookies("token", "", { expires: new Date() });
    logout();
    alert("로그아웃 되었습니다.");
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth");
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div css={s.headerContianer}>
      <div css={s.logoButton}>
        <SideBar />
        {/* 중앙 로고 */}
        <div css={s.headerButton}>
          <button onClick={handleNavigate} css={s.TEXT}>
            HOME
          </button>
        </div>

        <img
          src={require("./메인로고2-removebg-preview.png")}
          alt="icon"
          css={s.img}
        />
      </div>
      <Box>
      {/* Light 버튼과 로그인/회원가입 - 상단 배경색 */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingLeft: 50, paddingRight: 50,  p: 0.5 }}>
        <Box display="flex" alignItems="center">
          {/* Light 버튼 */}
          
        </Box>

        <Box display="flex" alignItems="center">
          {/* 로그인/회원가입 상태 */}
          {isAuthenticated ? (
            <>
              <Typography variant="subtitle1" m={2}>
                {user && <>{user.nickname}님 안녕하세요</>}
              </Typography>
              <Button variant="text" onClick={handleLogOutClick}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Link to={"/auth"} style={{ textDecoration: "none",  }}>
                <Typography variant="subtitle1" m={2} css={s.button}>
                  로그인
                </Typography>
              </Link>
              <Link to={"/auth/signup"} style={{ textDecoration: "none", }}>
                <Typography variant="subtitle1" m={2} css={s.button}>
                  회원가입
                </Typography>
              </Link>
            </>
          )}
        </Box>
      </Box>
      </Box>

      {/* <div css={s.logoButton}>
        <div onClick={handleLoginClick} css={s.button}>
          로그인
        </div>
        <div onClick={handleLoginClick} css={s.button}>
          회원가입
        </div>
      </div> */}
    </div>
  );
}
