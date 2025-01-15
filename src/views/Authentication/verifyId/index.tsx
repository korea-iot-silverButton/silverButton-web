import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store"; // useAuthStore import
// import "./findId.css"; // 스타일 import
import "./verifyId.css";

const VerifyId = () => {
  const [userId, setUserId] = useState<string | null>(null); // 찾은 아이디
  const [error, setError] = useState<string>(""); // 오류 메시지
  const navigate = useNavigate();
  const location = useLocation();

  // 인증 코드 확인 및 아이디 가져오기
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    if (!token) {
      setError("유효하지 않은 링크입니다.");
      return;
    }

    // 서버에서 token을 검증하고 아이디 가져오기
    const fetchId = async () => {
      try {
        // 서버에서 인증 후 아이디를 가져오는 API 호출
        const response = await fetch(`/api/verify-token?token=${token}`);
        const data = await response.json();

        if (data.success) {
          setUserId(data.userId); // 아이디 설정
        } else {
          setError("인증 실패! 다시 시도해주세요.");
        }
      } catch (err) {
        setError("서버 오류로 인증을 처리할 수 없습니다.");
      }
    };

    fetchId();
  }, [location.search]);

  return (
    <div className="verify-container">
      <div className="verify-header">
        <h1>아이디 찾기</h1>
      </div>
      <div className="verify-main">
        {error && <p className="error-message">{error}</p>}
        {userId ? (
          <div className="result-container">
            <h2>찾은 아이디:</h2>
            <p>{userId}</p>
            <button
            className="verifyBtn"
            onClick={() => navigate("/")}>홈으로</button>
          </div>
        ) : (
          <p>인증 중...</p>
        )}
      </div>
    </div>
  );
};

export default VerifyId;
