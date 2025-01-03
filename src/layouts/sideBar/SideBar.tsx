/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Box, Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
  <>
    {/* 햄버거 버튼 */}
    <button css={s.hamburgerStyles} onClick={toggleSide}>
        ☰
      </button>

      <div css={s.sidebarStyles(isOpen)}>
        <h1 onClick={() => handleNavigate("/")} css={s.sideName}>
          SILVER NEEDS
        </h1>
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/auth")}>
          로그인
        </Button>
        <hr />
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/my-page")}>
          마이 페이지
        </Button>
        <hr />
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/medicine/search")}>
          약품 검색
        </Button>
        <hr />
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/board")}>
          게시판
        </Button>
        <hr />
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/matching")}>
          매칭
        </Button>
        <hr />
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/message")}>
          메세지
        </Button>
        <hr />
        <Button variant="text" style={{ fontSize: "20px" }} onClick={() => handleNavigate("/my-page/calendar")}>
          캘린더
        </Button>
        <button css={s.closeButtonStyles} onClick={toggleSide}>
          닫기
        </button>
      </div>
  </>
  )
}
