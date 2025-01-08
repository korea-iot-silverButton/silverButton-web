import React, { useEffect, useState } from "react";
import useAuthStore from "../../../stores/auth.store";
import './myPage.css';

const MyPage = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();

  // 수정 가능한 사용자 정보 상태
  const [editUser, setEditUser] = useState({
    nickname: user?.nickname || "",
    phone: user?.phone || "",
    profileImg: user?.profileImg || "",
  });

  // 사용자 정보가 변경되면 상태 업데이트
  useEffect(() => {
    if (user) {
      setEditUser({
        nickname: user.nickname || "",
        phone: user.phone || "",
        profileImg: user.profileImg || "",
      });
    }
  }, [user]);

  // 입력 필드 변경 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  // 전화번호 유효성 검사
  const validatePhoneNumber = (phone: string): boolean => {
    const regex = /^[0-9-]{10,15}$/;
    return regex.test(phone);
  };

  // 정보 저장
  const handleSave = () => {
    if (!user) {
      alert("사용자가 존재하지 않습니다.");
      return;
    }

    if (!validatePhoneNumber(editUser.phone)) {
      alert("전화번호는 숫자와 하이픈만 포함할 수 있습니다.");
      return;
    }

    const updatedUser = {
      ...user,
      nickname: editUser.nickname,
      phone: editUser.phone,
      profileImg: editUser.profileImg,
    };

    login(updatedUser, ""); // 두 번째 인자는 토큰 값 (예제에서는 빈 문자열)
    alert("사용자 정보가 성공적으로 업데이트되었습니다.");
  };

  // 로그아웃 처리
  const handleLogout = () => {
    logout();
    alert("로그아웃되었습니다.");
  };

  // 인증되지 않은 사용자 처리
  if (!isAuthenticated) {
    return <div className="mypage-container">로그인이 필요합니다.</div>;
  }

  // 렌더링
  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <h1>My Page</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
      <div className="mypage-form">
        <label>
          닉네임:
          <input
            type="text"
            name="nickname"
            value={editUser.nickname}
            onChange={handleChange}
          />
        </label>
        <label>
          전화번호:
          <input
            type="text"
            name="phone"
            value={editUser.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          프로필 이미지 URL:
          <input
            type="text"
            name="profileImg"
            value={editUser.profileImg}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave} className="mypage-save-button">
          저장하기
        </button>
      </div>
      <div className="mypage-display">
        <h2>현재 사용자 정보</h2>
        <p>닉네임: {user?.nickname}</p>
        <p>전화번호: {user?.phone}</p>
        <p>
          프로필 이미지:{" "}
          {user?.profileImg ? (
            <img
              src={user.profileImg}
              alt="Profile"
              className="mypage-profile-img"
            />
          ) : (
            <span>이미지가 없습니다.</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MyPage;
