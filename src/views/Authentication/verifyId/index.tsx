import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./verifyId.css";

const VerifyId = () => {
  const [userId, setUserId] = useState<string | null>(null); // 찾은 아이디
  const [error, setError] = useState<string>(""); // 오류 메시지
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    if (!token) {
      setError("유효하지 않은 링크입니다.");
      setLoading(false);
      return;
    }

    const fetchId = async () => {
      try {
        // POST 요청으로 토큰을 서버에 보냄
        const response = await fetch("/api/v1/mail/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // JSON 형태로 요청 보내기
          },
          body: JSON.stringify({ token }), // token을 JSON 바디에 포함
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setUserId(data.userId); // 아이디 설정
        } else {
          setError("인증 실패! 다시 시도해주세요.");
        }
      } catch (err) {
        setError("서버 오류로 인증을 처리할 수 없습니다.");
      } finally {
        setLoading(false); // 로딩 완료
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
        {loading && <p>인증 중...</p>} {/* 로딩 상태 */}
        {error && <p className="error-message">{error}</p>} {/* 에러 메시지 */}

        {userId && !loading && ( // userId가 있을 때만 결과 출력
          <div className="result-container">
            <h2>찾은 아이디:</h2>
            <p>{userId}</p>
            <button
              className="verifyBtn"
              onClick={() => navigate("/")}>홈으로</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyId;
