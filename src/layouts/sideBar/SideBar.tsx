/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";

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
    <div>
      <button css={s.hamburgerStyles} onClick={toggleSide}>
        <HiBars3 />
      </button>

      <div css={s.sidebarStyles(isOpen)}>
        <div css={s.sidebarTitle} onClick={() => handleNavigate("/")}>
          <div css={s.sideTitle}>SILVER</div>
          <div css={s.sideTitle}>NEEDS</div>
        </div>
        <div css={s.sidebarButtons}>
          <button css={s.sidebarButton} onClick={() => handleNavigate("/auth")}>
            로그인
          </button>
          <button
            css={s.sidebarButton}
            onClick={() => handleNavigate("/my-page")}
          >
            마이 페이지
          </button>
          <button
            css={s.sidebarButton}
            onClick={() => handleNavigate("/medicine/search")}
          >
            약품 검색
          </button>
          <button
            css={s.sidebarButton}
            onClick={() => handleNavigate("/board")}
          >
            게시판
          </button>
          <button
            css={s.sidebarButton}
            onClick={() => handleNavigate("/matching")}
          >
            매칭
          </button>
          <button
            css={s.sidebarButton}
            onClick={() => handleNavigate("/message")}
          >
            메세지
          </button>
          <button
            css={s.sidebarButton}
            onClick={() => handleNavigate("/my-page/calendar")}
          >
            캘린더
          </button>
        </div>
        <div css={s.sidebarCloseButtonContainer}>
          <button css={s.sidebarCloseButton} onClick={toggleSide}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
