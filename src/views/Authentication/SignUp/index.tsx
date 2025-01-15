import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    birthDate: "",
    phone: "",
    gender: "",
    licenseNumber: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isUserIdChecked, setIsUserIdChecked] = useState(false);
  const [userIdMessage, setUserIdMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "userId") {
      setIsUserIdChecked(false);
      setUserIdMessage("");
    }

    if (name === "nickname") {
      setIsNicknameChecked(false);
      setNicknameMessage("");
    }
  };

  const checkUserId = async () => {
    if (!formData.userId) {
      alert("아이디를 입력하세요.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4040/api/v1/auth/check-duplicate-userId", { userId: formData.userId });
      if (response.data.exists) {
        setUserIdMessage("중복된 아이디입니다.");
        setIsUserIdChecked(false);
      } else {
        setUserIdMessage("사용 가능한 아이디입니다.");
        setIsUserIdChecked(true);
      }
    } catch (error) {
      console.error("아이디 중복 확인 실패", error);
      setUserIdMessage("아이디 확인 중 오류가 발생했습니다.");
      setIsUserIdChecked(false);
    }
  };

  const checkNickname = async () => {
    if (!formData.nickname) {
      alert("닉네임을 입력하세요.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4040/api/v1/auth/check-duplicate-nickname", { nickname: formData.nickname });
      if (response.data.exists) {
        setNicknameMessage("중복된 닉네임입니다.");
        setIsNicknameChecked(false);
      } else {
        setNicknameMessage("사용 가능한 닉네임입니다.");
        setIsNicknameChecked(true);
      }
    } catch (error) {
      console.error("닉네임 중복 확인 실패", error);
      setNicknameMessage("닉네임 확인 중 오류가 발생했습니다.");
      setIsNicknameChecked(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUserIdChecked) {
      alert("아이디 중복 확인을 진행해주세요.");
      return;
    }

    if (!isNicknameChecked) {
      alert("닉네임 중복 확인을 진행해주세요.");
      return;
    }

    // confirmPassword와 agree를 제외한 객체 생성
    const { confirmPassword, agree, ...submitData } = formData;

    // 비밀번호 정규식 검사
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()-_=+[\]{}|;:'",.<>?/]).{8,16}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("비밀번호는 8~16자, 대소문자, 숫자, 특수문자를 포함해야 합니다.");
      return;
    }

    // 전화번호 정규식 검사
    if (!/^\d{3}-?\d{3,4}-?\d{4}$/.test(formData.phone)) {
      alert("전화번호 형식이 올바르지 않습니다.");
      return;
    }

    // 비밀번호 일치 여부 검사
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호와 확인이 일치하지 않습니다.");
      return;
    }

    try {
      // submitData를 JSON 형태로 변환하여 전송
      const response = await axios.post("http://localhost:4040/api/v1/auth/signup", submitData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("회원가입이 완료되었습니다!");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("회원가입 실패:", error.response?.data || error.message);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      } else {
        console.error("알 수 없는 에러:", error);
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* 이름 */}
        <div className="input-group">
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="이름을 입력하세요"
          />
        </div>

        {/* 아이디 */}
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
            <button type="button" onClick={checkUserId} className="check-btn">
              중복 확인
            </button>
          </div>
          <p className={`message ${isUserIdChecked ? "success" : "error"}`}>
            {userIdMessage}
          </p>
        </div>

        {/* 이메일 */}
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

        {/* 비밀번호 */}
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

        {/* 비밀번호 확인 */}
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

        {/* 성별 */}
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

        {/* 핸드폰 번호 */}
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

        {/* 닉네임 */}
        <div className="input-group">
          <label htmlFor="nickname">닉네임</label>
          <div className="user-id-wrapper">
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
              placeholder="닉네임을 입력하세요"
            />
            <button type="button" onClick={checkNickname} className="check-btn">
              닉네임 중복 확인
            </button>
          </div>
          <p className={`message ${isNicknameChecked ? "success" : "error"}`}>
            {nicknameMessage}
          </p>
        </div>

        {/* 생년월일 */}
        <div className="input-group">
          <label htmlFor="birthDate">생년월일</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* 요양사 인증 번호 */}
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

        {/* 이용약관 */}
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

        {/* 모달 */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>이용약관</h2>
              <ul>
                <li>회원가입은 약관에 동의하고 필요한 정보를 입력하여 가입할 수 있습니다.</li>
                <li>본 약관은 회원가입시 발생할 수 있는 모든 법적 문제를 다룹니다.</li>
                <li>상기 내용에 동의하시면 회원가입을 진행하실 수 있습니다.</li>
              </ul>
              <button onClick={() => setShowModal(false)}>닫기</button>
            </div>
          </div>
        )}

        {/* 회원가입 완료 및 이전 화면 버튼 */}
        <div className="button-container">
          <button type="button" className="back-btn" onClick={() => navigate(-1)}>
            이전 화면
          </button>
          <button type="submit" className="signup-btn">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
