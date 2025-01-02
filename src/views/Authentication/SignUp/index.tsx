import React, { useState } from "react";
import "./Signup.css";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    userNickname: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
    agree: false
  });


  // 생년 월일 
  const [birthDate, setBirthDate] = useState("");

  const handleChangeBirth = ((e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value); // yyyy-mm-dd 형식
  });

  // phone(전화번호)
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자와 하이픈만 허용하도록 필터링 (예: 010-1234-5678)
    const filteredValue = value.replace(/[^0-9-]/g, "");
    setPhoneNumber(filteredValue);
  };

  // 요양사 인증번호 
  const [licenseNumber, setLicenseNumber] = useState("");

  const handleLicenseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  const value = e.target.value.replace(/[^0-9]/g, "");
  setLicenseNumber(value);
};

  // 이름이랑 아이디랑 비번 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,  value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("회원가입이 완료되었습니다!");
    console.log(formData);
  };


  // 이용약관 동의 모달창 
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
            placeholder="이름을 입력하세요"
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
                checked={formData.gender === 'male'}
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
                checked={formData.gender === 'female'}
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
            placeholder="010-1234-5678"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          
        </div>

        <div className="tmi">
          <label htmlFor="confirmPassword">닉네임</label>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="닉네임을 입력해주세요"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
        </div>

        <div className="tmi">
          <label htmlFor="confirmPassword">생년월일</label>
          <input
            type="date"
            // min={"1920-01-01"} max={2029-12-31}
            id="birthdate"
            placeholder="생년월일을 입력해주세요"
            value={birthDate}
            onChange={handleChangeBirth}
            required
          />
        </div>
        <div className="wrapper">
          <p>요양사 이신가요 ?</p>
          <p>요양사 이시면 라이센스 번호를 입력해주세요</p>
        </div>
        <div />
        <div className="tmi">
        <label htmlFor="licenseNumber">요양사 인증 번호</label>
          <input
            type="text"
            id="licenseNumber"
            placeholder="라이센스 번호를 입력해주세요"
            value={licenseNumber}
            onChange={handleLicenseNumberChange}
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
            <span onClick={() => setShowModal(true)}>이용약관</span>에
            동의합니다.
          </label>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>이용약관</h2>
              <p>
                본 약관은 실버니즈의 이용 조건과 절차, 권리와 의무를 규정합니다.
              </p>
              <ul>
                <li>
                  <strong>회원가입:</strong> 회원은 약관에 동의하고 필요한
                  정보를 입력하여 가입할 수 있습니다.
                </li>
                <li>
                  <strong>개인정보 보호:</strong> 서비스는 회원의 개인정보를
                  보호하며 관련 법령에 따라 관리합니다.
                </li>
                <li>
                  <strong>금지사항:</strong> 타인의 개인정보를 도용하거나 부정
                  사용하지 않습니다.
                </li>
                <li>
                  <strong>약관 변경:</strong> 약관은 필요 시 개정될 수 있으며,
                  변경 사항은 사전 공지됩니다.
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
          <button className="signup-btn">
            회원가입 완료
          </button>
        </div>

      </form>
    </div>
    </>
  );
};

export default SignUp;
