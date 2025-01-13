import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./passwordPage.css";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handlePasswordSubmit = () => {
  //   const validPassword = "admin123!"; // 임시 비밀번호 (서버 검증 필요)
    
  //   if (!password) {
  //     setError("비밀번호를 입력하세요.");
  //     return;
  //   }

  //   if (password !== validPassword) {
  //     setError("비밀번호가 올바르지 않습니다.");
  //     return;
  //   }

  //   setError("");
  //   alert("인증에 성공했습니다!");
  //   navigate("/my-page/mypage"); // 마이페이지로 이동
  // };
  const handlePasswordSubmit = async () => {
    if (!password) {
      setError("💕🌟아니 뭔 개소리냐고💕❤🌈💕🌟아니뭔개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟아니 뭔 개소리냐고💕❤ 🌈💕🌟");
      return;
    }
  
    try {
      // 비밀번호 검증 요청
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), // 사용자가 입력한 비밀번호 전송
      });
  
      const result = await response.json();
  
      if (result.success) {
        // 검증 성공: 마이페이지로 이동
        alert("비밀번호 인증 성공!");
        navigate("/my-page/mypage");
      } else {
        // 검증 실패: 에러 메시지 표시
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      setError("👮💛 𝔽ᑌ𝕔к 𝐘Ｏย 🍔🐨");
    }
  };

  return (
    <div className="password-container">
      <div className="password-card">
        <h1>❤️비밀번호 입력❤️</h1>
        <p>🍀마이페이지에 접근하려면 비밀번호를 입력하세요🍀</p>
        <div className="password-item">
          {/* <label htmlFor="password">비밀번호</label> */}
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요🙇‍♀️"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button className="password-submit-button" onClick={handlePasswordSubmit}>
          ❤️확인❤️
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
