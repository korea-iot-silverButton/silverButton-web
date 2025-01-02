import React, { useEffect } from "react";
import useAuthStore from "../../stores/auth.store";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import useThemeStore from "../../stores/theme.store";

export default function Header() {
  // * state * //
  const { isAuthenticated, user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const [cookies, setCookies] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      logout();
    }
  }, [cookies.token, logout]);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  // Event handler for logout
  const handleLogOutClick = () => {
    setCookies("token", "", { expires: new Date() });
    logout();
    alert("로그아웃 되었습니다.");
  };

  return (
    <Box>
      {/* Light 버튼과 로그인/회원가입 - 상단 배경색 */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingLeft: 50, paddingRight: 50, backgroundColor: "#76c3c5", p: 0.5 }}>
        <Box display="flex" alignItems="center">
          {/* Light 버튼 */}
          <Button variant="contained" onClick={toggleTheme} sx={{ marginRight: 2 }}>
            {theme === "light" ? "Dark" : "Light"}
          </Button>
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
              <Link to={"/auth"} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="subtitle1" m={2}>
                  로그인
                </Typography>
              </Link>
              <Link to={"/auth/signup"} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="subtitle1" m={2}>
                  회원가입
                </Typography>
              </Link>
            </>
          )}
        </Box>
      </Box>

      {/* 실버니즈 텍스트 - 배경색 추가 */}
      <Box display="flex" justifyContent="center" alignItems="center" mt={2} sx={{ backgroundColor: "#f4f4f4", py: 2 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          실버니즈
        </Typography>
      </Box>
    </Box>
  );
}
