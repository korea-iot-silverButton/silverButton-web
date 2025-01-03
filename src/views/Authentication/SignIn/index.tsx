import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../../../stores/auth.store";
import { Button, TextField, Typography, Card, CardContent, CardActions } from "@mui/material";
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
  const [credentials, setCredentials] = useState({
    userId: "",
    password: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const [isElder, setIsElder] = useState(false); // 노인 여부를 판단하는 상태

  // 입력 값 변경 핸들러
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
    setError(""); // 성공 시 에러 메시지 없애기
    alert("로그인 성공!");
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
