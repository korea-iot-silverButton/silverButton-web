import React, { useState } from 'react';
import useAuthStore from '../../stores/auth.store';  // useAuthStore import
import './MyPage.css';

const MyPage = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();  // useAuthStore 사용

  const [editUser, setEditUser] = useState({
    nickname: user?.nickname || '',
    phone: user?.phone || '',
    profileImg: user?.profileImg || '',  
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  // 전화번호 유효성 검사 함수
  const validatePhoneNumber = (phone: string): boolean => {
    const regex = /^[0-9-]{10,15}$/; // 10자리에서 15자리 숫자와 하이픈만 허용
    return regex.test(phone);
  };

  // 저장 버튼 클릭 핸들러
  const handleSave = () => {
    if (!user) {
      alert('사용자가 존재하지 않습니다.');
      return;
    }

    // 전화번호 유효성 검사
    if (!validatePhoneNumber(editUser.phone)) {
      alert('전화번호는 숫자와 하이픈만 포함할 수 있습니다.');
      return;
    }

    // 변경된 값만 업데이트
    const updateUser = {
      ...user,  // 기존 user 객체
      nickname: editUser.nickname,
      phone: editUser.phone,
      profileImage: editUser.profileImg,  // profileImg로 수정
      id: user?.id ?? 0,  // id가 없으면 0을 기본값으로 설정
    };
    
    // 로그인 상태 업데이트
    login(updateUser);  // 상태에 업데이트된 값 반영
    alert('사용자 정보가 성공적으로 업데이트되었습니다.');
  };

  // 로그아웃 핸들러
  const handleLogout = () => {
    logout();
    alert('로그아웃되었습니다.');
  };

  // if (!isAuthenticated) {
  //   return <div className="mypage-container">로그인이 필요합니다.</div>;
  // }

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
            name="profileImg"  // profileImg로 수정
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
        <p>프로필 이미지: <img src={user?.profileImg} alt="Profile" className="mypageProfileImg" /></p>
      </div>
    </div>
  );
};

export default MyPage;
