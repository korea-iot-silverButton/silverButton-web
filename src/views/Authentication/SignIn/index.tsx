import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store";
import Header from "../../../layouts/Header";

// 사용자 입력 정보
interface Credentials {
  userId: string;
  password: string;
  nickname: string;
}

// 서버에서 반환하는 로그인 응답 데이터
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
  });

  const [error, setError] = useState<string>("");
  const [, setCookies] = useCookies(["token"]);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  // 로그인 성공 시 토큰과 사용자 정보를 상태에 저장
  const SignInSuccessResponse = (data: SignInResponseDto) => {
    if (data) {
      const { token, exprTime, user } = data;
      setToken(token, exprTime);
      login({
        id: user.id,
        name: user.userId,
        nickname: user.nickname,
      });
      navigate("/calendar");
    } else {
      setError("로그인 실패: 인증 정보를 확인해주세요.");
    }
  };

  // 인증 토큰을 쿠키에 저장하는 함수
  const setToken = (token: string, exprTime: number) => {
    const expires = new Date(Date.now() + exprTime);
    setCookies("token", token, {
      path: "/",
      expires,
    });
  };

  // 로그인 입력 필드의 값 변경 시 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target;
    setCredentials({
      ...credentials,
      [element.name]: element.value,
    });
  };

  // 로그인 버튼 클릭 시
  const handleSignIn = async () => {
    const { userId, password } = credentials;
    if (!userId || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        credentials
      );
      if (response.data) {
        SignInSuccessResponse(response.data.data);
      }
    } catch (error) {
      setError("로그인 중 문제가 발생했습니다.");
    }
  };

  return (
    <Card variant="outlined" sx={{ width: 360, m: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5" mb={2}>
          로그인
        </Typography>
        <TextField
          label="아이디"
          type="userId"
          name="userId"
          variant="outlined"
          value={credentials.userId}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="비밀번호"
          type="password"
          name="password"
          variant="outlined"
          value={credentials.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        {error && (
          <Typography color="error" mt={2}>
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
  );
}
