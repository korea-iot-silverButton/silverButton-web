import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./findId.css";

const FindId = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("이름과 이메일을 모두 입력해주세요.");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/mail/send", // 서버 API
        formData
      );

      if (response.status === 200) {
        setSuccess("아이디 찾기 요청이 성공적으로 이루어졌습니다.");
        setError("");
      } else {
        setError("사용자 정보를 찾을 수 없습니다. 다시 확인해주세요.");
        setSuccess("");
      }
    } catch (err) {
      setError("아이디 찾기 요청 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setSuccess("");
    }
  };

  return (
    <div className="find-id-container">
      <div className="find-id-card">
        <div className="find-id-card-content">
          <h2>아이디 찾기</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="이름을 입력해주세요"
              required
            />

            <label htmlFor="email">이메일:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일을 입력해주세요"
              required
            />

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <button type="submit" className="submit-button">
              아이디 찾기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindId;
