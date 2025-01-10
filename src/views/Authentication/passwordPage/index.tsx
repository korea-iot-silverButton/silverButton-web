import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import useAuthStore from "../../../stores/auth.store"; 

const PasswordPage = () => {
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const { user } = useAuthStore(); 

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 비밀번호 확인 함수
  const handleSubmit = () => {
    
  };

  return (
    <div className="password-page-container">
      <h2>비밀번호 입력</h2>
      <div className="password-input-container">
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleSubmit}>확인</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordPage;
