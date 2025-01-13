import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
    licenseNumber: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const checkUserId = async (userId: string) => {
    try {
      const response = await axios.post("/api/check-username", { userId });
      if (response.data.exists) {
        alert("이 아이디는 이미 사용 중입니다.");
      }
    } catch (error) {
      console.error("아이디 중복 확인 실패", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()-_=+[\]{}|;:'",.<>?/]).{8,16}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("비밀번호는 8~16자, 대소문자, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }

    if (!/^\d{3}-?\d{3,4}-?\d{4}$/.test(formData.phone)) {
      alert("전화번호 형식이 올바르지 않습니다.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호와 확인이 일치하지 않습니다.");
      return;
    }

    alert("회원가입이 완료되었습니다!");
    console.log("제출된 데이터:", formData);
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className="input-group">
          <label htmlFor="userId">아이디</label>
          <div className="user-id-wrapper">
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
              placeholder="아이디를 입력하세요"
            />
            <button
              type="button"
              onClick={() => checkUserId(formData.userId)}
              className="check-btn"
            >
              중복 확인
            </button>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="비밀번호를 확인하세요"
          />
        </div>

        <div className="input-group">
          <label>성별</label>
          <div className="gender-options">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            남자
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            여자
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="phone">핸드폰 번호</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="010-1234-5678"
          />
        </div>

        <div className="input-group">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
            placeholder="닉네임을 입력해주세요"
          />
        </div>

        <div className="input-group">
          <label htmlFor="birthdate">생년월일</label>
          <input
            type="date"
            id="birthdate"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="licenseNumber">요양사 인증 번호 (선택)</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            placeholder="라이센스 번호를 입력해주세요"
          />
        </div>

        <div className="input-group terms">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">
            <span onClick={() => setShowModal(true)}>이용약관</span>에 동의합니다.
          </label>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>이용약관</h2>
              <ul>
                <li>회원가입은 약관에 동의하고 필요한 정보를 입력하여 가입할 수 있습니다.</li>
                <li>개인정보 보호를 위해 회원의 개인정보는 안전하게 관리됩니다.</li>
                <li>타인의 개인정보를 도용하거나 부정 사용하지 않습니다.</li>
              </ul>
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>
        )}

        <div className="button-container">
          <button type="button" className="previous-btn" onClick={() => window.history.back()}>
            이전 화면
          </button>
          <button type="submit" className="signup-btn">
            회원가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
