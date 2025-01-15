import "./findPassword.css";
import React, { useState } from "react";
import "../../../stores/auth.store";

const FindPassword = () => {
  const [step, setStep] = useState(1); // 현재 단계 (1: 이메일 입력, 2: 인증 코드 확인, 3: 새 비밀번호 설정)
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("이메일을 입력해주세요.");
      return;
    }

    try {
      await fetch("/api/auth/send-verification-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setStep(2); // 인증 코드 입력 단계로 이동
    } catch (err) {
      setError("인증 코드를 전송할 수 없습니다. 이메일을 확인해주세요.");
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!verificationCode) {
      setError("인증 코드를 입력해주세요.");
      return;
    }

    try {
      // 인증 코드 확인 (API 요청)
      const response = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      if (!response.ok) {
        throw new Error("인증 코드가 올바르지 않습니다.");
      }

      setStep(3); // 새 비밀번호 설정 단계로 이동
    } catch (err) {
      setError("인증 코드 확인에 실패했습니다.");
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword) {
      setError("새 비밀번호를 입력해주세요.");
      return;
    }

    try {
      // 새 비밀번호 설정 (API 요청)
      await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      alert("비밀번호가 성공적으로 변경되었습니다.");
      setStep(1); // 처음 단계로 이동
    } catch (err) {
      setError("비밀번호 변경에 실패했습니다.");
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-box">
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <h2>비밀번호 찾기</h2>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button className="confirm" type="submit">인증 코드 받기</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCodeSubmit}>
            <h2>인증 코드 확인</h2>
            <label htmlFor="verificationCode">인증 코드</label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="인증 코드를 입력하세요"
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button className="confirm" type="submit">인증 코드 확인</button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <h2>새 비밀번호 설정</h2>
            <label htmlFor="newPassword">새 비밀번호</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="새 비밀번호를 입력하세요"
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button className="confirm" type="submit">비밀번호 변경</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FindPassword;

