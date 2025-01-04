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
  const { isAuthenticated, user, logout } = useAuthStore();
  const [cookies, setCookies] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth");
  };

  const handleLogOutClick = () => {
    setCookies("token", "", { expires: new Date() });
    logout();
    alert("로그아웃 되었습니다.");
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
        <button onClick={handleNavigate} css={s.TEXT}>HOME</button>
        </div>

        <img src={require("./메인로고2-removebg-preview.png")} alt="icon" css={s.img}/>


      </div>
      <div css={s.logoButton}>
        <div onClick={handleLoginClick} css={s.button}>
          로그인
        </div>
        <div onClick={handleLoginClick} css={s.button}>
          회원가입
        </div>
      </div>
    </div>
  );
}
