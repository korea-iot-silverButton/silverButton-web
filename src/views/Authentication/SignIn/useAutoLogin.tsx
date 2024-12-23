import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import useAuthStore from "../../../stores/auth.store";

// 쿠키에서 `token`을 가져오는 함수
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

// 자동 로그인 훅
const useAutoLogin = () => {
  const [, setCookies] = useCookies(["token"]);
  const { login } = useAuthStore();

  useEffect(() => {
    const token = getCookie("token"); // 쿠키에서 token 가져오기
    if (token) {
      // 서버로 인증 토큰을 보낸 후 사용자 정보를 얻어서 상태에 저장
      axios
        .get("http://localhost:8080/api/v1/auth/validate", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const { user } = response.data;
          login({
            id: user.id,
            name: user.userId,
            nickname: user.nickname
          });
        })
        .catch((error) => {
          if (error.response?.status === 403) {
            // 403 에러 처리: 토큰이 만료되었거나 유효하지 않으면 로그아웃 처리
            console.error("Token validation failed: Unauthorized", error);
            setCookies("token", "", { path: "/", expires: new Date(0) });
          } else {
            // 그 외 에러는 콘솔에 출력
            console.error("Token validation failed", error);
          }
        });
    }
  }, [login, setCookies]); // 컴포넌트 마운트 시 실행
};

export default useAutoLogin;
