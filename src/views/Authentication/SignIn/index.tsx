import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store"; // 수정된 store 가져오기
import "./Signin.css";

interface Credentials {
  userId: string;
  password: string;
  nickname: string;
}

interface ElderCredentials {
  userId: string;
  name: string;
  phone: string;
}

interface SignInResponseDto {
  token: string;
  user: {
    id: number;
    userId: string;
    nickname: string;
    role: string;
    phone: string;
    profileImg: string;
  };
  exprTime: number;
}

export default function SignIn() {
  const [credentials, setCredentials] = useState<Credentials>({
    userId: "",
    password: "",
    nickname: "",
  });
  const [elder_credentials, setElderCredentials] = useState<ElderCredentials>({
    userId: "",
    name: "",
    phone: "",
  });

  const [error, setError] = useState<string>("");
  const [, setCookies] = useCookies(["token"]);
  const { login } = useAuthStore(); // 수정된 store에서 login 함수 사용
  const navigate = useNavigate();
  const [isElder, setIsElder] = useState(false);

  // 컴포넌트가 처음 렌더링될 때 token을 쿠키에서 확인
  useEffect(() => {
    const token = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("token="));
    if (token) {
      alert("이미 로그인된 상태입니다.");
      navigate("/");
    }
  }, [navigate]);

  const SignInSuccessResponse = (data: SignInResponseDto) => {
    if (data) {
      const { token, exprTime, user } = data;
      setToken(token, exprTime);
      login(user, token); // 사용자 정보와 토큰을 store에 저장
      navigate("/");
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

  const handleElderInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target;
    setElderCredentials({
      ...elder_credentials,
      [element.name]: element.value,
    });
  };

  // 로그인 버튼 클릭 시
  const handleSignIn = async () => {
    const { userId, password, nickname } = credentials;
    const { name, phone } = elder_credentials;

    // 로그인 정보 체크
    if (isElder) {
      if (!name || !phone) {
        setError("이름과 전화번호를 모두 입력해주세요.");
        return;
      }
    } else {
      if (!userId || !password) {
        setError("아이디, 비밀번호을 모두 입력해주세요.");
        return;
      }
    }

    try {
      let response;
      if (isElder) {
        // 간편 로그인 시
        response = await axios.post(
          "http://localhost:4040/api/v1/auth/dependent-login",
          elder_credentials
        );
      } else {
        // 일반 로그인 시
        response = await axios.post(
          "http://localhost:4040/api/v1/auth/login",
          credentials
        );
      }

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
        <CardContent>
          {/* <Typography variant="h5" className="signin-title">
            로그인
          </Typography> */}
          <div className="signin-tabs">
            <div
              onClick={() => setIsElder(false)}
              className="signin-tab"
            >
              일반 & 요양사 로그인
            </div>

            <div
              onClick={() => setIsElder(true)}
              className="signin-tab"
            >
              노인 로그인
            </div>
          </div>

          {/* 일반 로그인일 때 아이디 입력 필드 */}
          {!isElder && (
            <TextField
              label="아이디"
              name="userId"
              variant="outlined"
              value={credentials.userId}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          )}

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

          {/* 간편 로그인일 때 이름 입력 필드 */}
          {isElder && (
            <TextField
              label="이름"
              name="name"
              variant="outlined"
              value={elder_credentials.name}
              onChange={handleElderInputChange}
              fullWidth
              margin="normal"
            />
          )}

          {/* 간편 로그인일 때 전화번호 입력 필드 */}
          {isElder && (
            <TextField
              label="전화번호"
              name="phone"
              variant="outlined"
              value={elder_credentials.phone}
              onChange={handleElderInputChange}
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
          <Button
            onClick={handleSignIn}
            fullWidth
            variant="contained"
            color="primary"
            className="a"
          >
            로그인
          </Button>
        </CardActions>
        
        <CardActions className="kakao">
          <Button 
            onClick={handleSignIn}
            fullWidth
            variant="contained"
          >
            카카오 로그인
          </Button>
        </CardActions>
        <CardActions className="naver">
          <Button 
            onClick={handleSignIn}
            fullWidth
            variant="contained"
          >
            네이버 로그인
          </Button>
        </CardActions>
        
      </Card>
      
    </div>
  );
}
