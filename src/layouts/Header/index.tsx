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
    <div>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box flex={1} display="flex" justifyContent="center">
          <Button variant="contained" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </Button>
        </Box>
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Link to={""} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h3">실버니즈</Typography>
          </Link>
        </Box>
        <Box flex={1} display="flex" justifyContent="flex-end">
          {isAuthenticated ? (
            <Typography variant="subtitle1" m={2} onClick={handleLogOutClick}>
              {user && <>{user.nickname}님 안녕하세요</>}
              <br />
              logOut
            </Typography>
          ) : (
            <Link to={"/auth"} style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="subtitle1" m={2}>
                로그인
              </Typography>
            </Link>
          )}
        </Box>
      </Box>
    </div>
  );
}
