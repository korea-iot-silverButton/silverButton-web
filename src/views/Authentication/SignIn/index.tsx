import React, { useState, useEffect } from "react";
import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store";  // 수정된 store 가져오기

import axios from "axios";
import "./Signin.css";


interface Credentials {
  userId: string;
  password: string;
  nickname: string;
}

interface SignInResponseDto {
  token: string;
  user: { id: number; userId: string; nickname: string };
  exprTime: number;
}

export default function SignIn() {
  const [credentials, setCredentials] = useState<Credentials>({
    userId: "",
    password: "",
    nickname: "",
    phoneNumber: "",
  });
  const [error, setError] = useState<string>("");
  const [, setCookies] = useCookies(["token"]);
  const { login } = useAuthStore();  // 수정된 store에서 login 함수 사용
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isElder, setIsElder] = useState(false); // 노인 여부를 판단하는 상태

  // 컴포넌트가 처음 렌더링될 때 token을 쿠키에서 확인
  useEffect(() => {
    const token = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("token="));
    if (token) {
      alert("이미 로그인된 상태입니다.");
      navigate("/");  // 이미 로그인되어 있으면 바로 /calendar로 이동
    }
  }, [navigate]);

  const SignInSuccessResponse = (data: SignInResponseDto) => {
    if (data) {
      const { token, exprTime, user } = data;
      setToken(token, exprTime);
      login(user, token);  // 사용자 정보와 토큰을 store에 저장
      navigate("/calendar");
    } else {
      setError("로그인 실패: 인증 정보를 확인해주세요.");
    }
  };

  const setToken = (token: string, exprTime: number) => {
    const expires = new Date(Date.now() + exprTime);
    setCookies("token", token, { path: "/", expires });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target;
    setCredentials({
      ...credentials,
      [element.name]: element.value,
    });
  };

  // 로그인 버튼 클릭 시
  const handleSignIn = () => {
    const { userId, password, phoneNumber } = credentials;
    if (!userId || (!isElder && !password) || (isElder && !phoneNumber)) {
      setError("모든 필드를 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/auth/login",
        credentials
      );
      if (response.data) {
        SignInSuccessResponse(response.data.data);
      }
    } catch (error) {
      setError("로그인 중 문제가 발생했습니다.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div className="signin-container">
      <Card className="signin-card">
        <CardContent >
          <Typography variant="h5" className="signin-title">
            로그인
          </Typography>
          <div className="signin-tabs">
            <Button
              variant={isElder ? "outlined" : "contained"}
              onClick={() => setIsElder(false)}
              className="signin-tab"
            >
              일반
            </Button>
            <Button
              variant={isElder ? "contained" : "outlined"}
              onClick={() => setIsElder(true)}
              className="signin-tab"
            >
              노인
            </Button>
          </div>

          {/* 아이디 입력 필드 */}
          <TextField
            label="이름"
            name="userId"
            variant="outlined"
            value={credentials.userId}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          {/* 일반 로그인일 때 비밀번호 필드 */}
          {!isElder && (
            <TextField
              label="비밀번호"
              name="password"
              type="password"
              variant="outlined"
              value={credentials.password}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          )}

          {/* 노인 로그인일 때 전화번호 필드 */}
          {isElder && (
            <TextField
              label="전화번호"
              name="phoneNumber"
              variant="outlined"
              value={credentials.phoneNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          )}

          {/* 에러 메시지 */}
          {error && (
            <Typography color="error" className="error-message">
              {error}
            </Typography>
          )}
        </CardContent>

        <CardActions>
          <Button onClick={handleSignIn} fullWidth variant="contained" color="primary">
            로그인
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
