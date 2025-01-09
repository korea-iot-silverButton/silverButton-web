/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useAuthStore from "../../stores/auth.store";
import SideBar from "../sideBar/SideBar";

import { AiOutlineMedicineBox } from "react-icons/ai";
import { LuClipboardPenLine } from "react-icons/lu";
import { RiHealthBookLine } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";

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

  // 이미지 경로를 결정하는 함수
  const getRoleImage = (role: string) => {
    switch (role) {
      case "노인":
        return "/images/noin.png";
      case "요양사":
        return "/images/yoyangsa.png";
      case "보호자":
        return "/images/chungnyun.png";
      default:
        return "/images/error.png";
    }
  };

  return (
    <div css={s.headerToolWrap}>
      <div css={s.headerLogo}>
        <img src="/logo.png" alt="icon" css={s.headerLogoImg} />
      </div>

      <div css={s.headerToolKit}>
        {isAuthenticated ? (
          <>
            <div>
              {user && (
                <>
                  <img
                    src={getRoleImage(user.role)} // role에 맞는 이미지 출력
                    alt={user.role}
                    css={s.roleImage} // CSS로 이미지 크기 조정
                  />
                  <span>{user.nickname}님 안녕하세요</span>
                </>
              )}
            </div>
            <button onClick={handleLogOutClick} css={s.headerButton}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to={"/auth"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>로그인</button>
            </Link>
            <Link to={"/auth/signup"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>회원가입</button>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>홈 화면</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

function HeaderNaviWrap() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div css={s.headerNaviWrap}>
      <div css={s.headerHamburger}>
        <SideBar />
      </div>

      <div css={s.headerNaviButtons}>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/medicine/search")}
        >
          <AiOutlineMedicineBox css={s.naviIcon}/>
          <div css={s.naviTitle}>약품 검색</div>
        </div>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/my-page/calendar")}
        >
          <RiCalendarTodoLine css={s.naviIcon}/>
          <div css={s.naviTitle}>할 일 목록</div>
        </div>
        <div css={s.haderNaviButton} onClick={() => navigateTo("/board")}>
          <LuClipboardPenLine css={s.naviIcon}/>
          <div css={s.naviTitle}>게시판</div>
        </div>
        <div css={s.haderNaviButton} onClick={() => navigateTo("/health-magazine")}>
          <RiHealthBookLine css={s.naviIcon}/>
          <div css={s.naviTitle}>헬스매거진</div>
        </div>
      </div>
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
