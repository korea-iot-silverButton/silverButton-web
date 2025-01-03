import React, { useState } from "react";
import "./Signup.css";

const SignUp: React.FC = () => {
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

  const [error, setError] = useState(""); // 비밀번호 에러 메시지 상태

  // handleChange 함수 (모든 입력을 처리)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // 기본적인 input 값 처리
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  // handleSubmit (회원가입 제출)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.confirmPassword);

  // 입력된 비밀번호 정규식 검증
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()-_=+[\]{}|;:'",.<>?/]).{8,16}$/;
  if (!passwordRegex.test(formData.password)) {
    alert("비밀번호는 8~16자, 대소문자, 숫자, 특수문자를 포함해야 합니다.");
    return;
  }

  // 전화번호 형식 검증
  if (!/^\d{3}-?\d{3,4}-?\d{4}$/.test(formData.phone)) {
    alert("올바른 전화번호 형식이 아닙니다. 예: 01012345678 또는 010-1234-5678");
    return;
  }

   // 라이센스 번호 검증 및 요양사 구분
    if (formData.licenseNumber) {
    // 라이센스 번호가 입력된 경우, 정규식 검증
    const licenseRegex = /^\d{1,10}$/; // 1~10자리 숫자만 허용
    if (!licenseRegex.test(formData.licenseNumber)) {
      alert("라이센스 번호는 최대 10자리 숫자만 입력 가능합니다.");
      return;
    } else {
      alert("요양사로 가입이 완료되었습니다!");
      console.log("제출된 데이터 (요양사):", formData);
    }
  } else {
    // 라이센스 번호가 입력되지 않은 경우, 일반 회원가입
    alert("일반회원으로 가입이 완료되었습니다!");
    console.log("제출된 데이터 (일반회원):", formData);
  }

  // 비밀번호 확인 검증
  if (formData.password !== formData.confirmPassword) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    return;
  }

  alert("회원가입이 완료되었습니다!");
  console.log("제출된 데이터:", formData);
};

  // 이용약관 동의 모달
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="signup-container">
        <h1>회원가입</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="tmi">
            <label htmlFor="username">이름</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="이름을 입력하세요"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="tmi">
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="아이디를 입력하세요"
              value={formData.userId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="tmi">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="tmi">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <div className="tmi">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력하세요"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="tmi">
            <label className="gender-label">성별</label>
            <div className="gender-options">
              <div className="gender-item">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <span>남자</span>
              </div>
              <div className="gender-item">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <span>여자</span>
              </div>
            </div>
          </div>

          <div className="tmi">
            <label htmlFor="phone">핸드폰 번호</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="010-1234-5678"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="tmi">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="닉네임을 입력해주세요"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="tmi">
            <label htmlFor="birthdate">생년월일</label>
            <input
              type="date"
              id="birthdate"
              name="dateOfBirth"
              placeholder="생년월일을 입력해주세요"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="wrapper">
            <p>요양사 이신가요?</p>
            <p>요양사 이시면 라이센스 번호를 입력해주세요</p>
          </div>

          <div className="tmi">
            <label htmlFor="licenseNumber">요양사 인증 번호</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              placeholder="라이센스 번호를 입력해주세요"
              value={formData.licenseNumber}
              onChange={handleChange}
              maxLength={10} // 최대 길이 제한
            />
          </div>

          <div className="terms">
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
                <p>본 약관은 실버니즈의 이용 조건과 절차, 권리와 의무를 규정합니다.</p>
                <ul>
                  <li>
                    <strong>회원가입:</strong> 회원은 약관에 동의하고 필요한 정보를 입력하여 가입할 수 있습니다.
                  </li>
                  <li>
                    <strong>개인정보 보호:</strong> 서비스는 회원의 개인정보를 보호하며 관련 법령에 따라 관리합니다.
                  </li>
                  <li>
                    <strong>금지사항:</strong> 타인의 개인정보를 도용하거나 부정 사용하지 않습니다.
                  </li>
                  <li>
                    <strong>약관 변경:</strong> 약관은 필요 시 개정될 수 있으며, 변경 사항은 사전 공지됩니다.
                  </li>
                </ul>
                <button onClick={() => setShowModal(false)}>닫기</button>
              </div>
            </div>
          )}

          <div className="button-container">
            <button className="previous-btn" onClick={() => window.history.back()}>
              이전 화면
            </button>
            <button className="signup-btn">회원가입 완료</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
