import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import useAuthStore from "../../../stores/auth.store"; // useAuthStore import
import "./myPage.css"; // 스타일 import
import axios from "axios";

const MyPage = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore(); // 로그인 상태
  const navigate = useNavigate(); 
  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };

  const token = getTokenFromCookies();

  const [editUser, setEditUser] = useState({
    nickname: user?.nickname || "",
    phone: user?.phone || "",
    profileImg: user?.profileImg || "/images/profile.png", // 기본 이미지 경로 설정
    password: "", 
  });

  const [error, setError] = useState(""); // 비밀번호 변경 시 오류 메시지

  // 페이지 로드 시 프로필 이미지 조회 (useEffect 사용)
  useEffect(() => {
    const fetchProfileImg = async () => {
      try {
        const response = await axios.get("http://localhost:4040/api/v1/manage/profile-img", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}` 
          }
        });
    
        console.log(response); // 응답 내용 확인
    
        if (response.data && response.data.data) {
          setEditUser((prev) => ({
            ...prev,
            profileImg: response.data.data,
          }));
        } else {
          setEditUser((prev) => ({
            ...prev,
            profileImg: "/images/profile.png",
          }));
        }
      } catch (err) {
        console.error("프로필 이미지 조회 중 오류 발생:", err);
        setError("프로필 이미지를 조회하는 데 오류가 발생했습니다.");
      }
    };

    fetchProfileImg(); // API 호출
  }, []);

  // 프로필 이미지 수정 핸들러
  const handleProfileImgEdit = () => {
    alert("프로필 이미지를 수정합니다.");
    document.getElementById("profileImgUpload")?.click(); // 파일 업로드 창 열기
  };

  // 프로필 이미지 파일 변경 핸들러
  const handleProfileImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 파일 선택

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("이미지 파일만 업로드 가능합니다.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file); 

      try {
        const response = await axios.patch("http://localhost:4040/api/v1/manage/upload-profile-img", formData, {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰 인증
          },
        });

        // 서버에서 새로운 프로필 이미지 URL을 받아와서 상태 업데이트
        if (response.data && response.data.data) {
          setEditUser((prev) => ({
            ...prev,
            profileImg: response.data.data, // 서버에서 받은 새로운 이미지 URL
          }));
        } else {
          setError("프로필 이미지 업로드에 실패했습니다.");
        }
      } catch (err) {
        console.log(formData);
        console.error("프로필 이미지 수정 중 오류 발생:", err);
        setError("프로필 이미지 수정에 오류가 발생했습니다.");
      }
    }
  };

  const handleSaveMedicineClick = () => {
    if (user) {
      navigate(`/my-page/save-medicine/${user.userId}`); // saveMedicine 페이지로 이동 
    }
    
  };

  const handleMessageClick = () => {
    navigate("/message"); // message 페이지로 이동
  };

  const handleResignClick = () => {
    navigate("/my-page/resign"); // 회원탈퇴 페이지로 이동 
  }

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditUser({ ...editUser, password: e.target.value });
    const newPassword = e.target.value;
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,16}$/;
  
    if (password.test(newPassword) || newPassword === "") {
      setEditUser((prev) => ({ ...prev, password: newPassword }));
    }
  };

  // 변경사항 저장하기 버튼 클릭 시 메인 페이지로 이동
  const handleSaveChanges = () => {
    alert("변경사항이 저장되었습니다.");
    navigate("/"); 
  };

  return (
    <div className="mypage-container">
      <div className="mypage-header">
        <h1>My Page</h1>
      </div>
      <div className="mypage-main">
        <div className="mypage-left">
          <div className="profileImg">
            <img
              src={editUser.profileImg} // 수정된 프로필 이미지 반영
              alt="Profile"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "50%",
              }}
            />
            <input
              type="file"
              accept="image/*"
              id="profileImgUpload"
              style={{ display: "none" }} // 파일 선택창은 숨기기
              onChange={handleProfileImgChange} // 파일 선택 시 호출
            />
            <button
              className="edit-button"
              onClick={handleProfileImgEdit} // 수정 버튼 클릭 시 파일 업로드 창 열기
            >
              수정하기
            </button>
          </div>
        </div>
        <div className="mypage-right">
          <div className="item">
            <label htmlFor="nickname">변경하실 닉네임</label>
            <input
              type="text"
              id="nickname"
              placeholder="변경할 닉네임을 입력하세요"
              className="input-field"
              value={editUser.nickname}
              onChange={(e) => setEditUser({ ...editUser, nickname: e.target.value })}
            />
          </div>
          <div className="item">
            <label htmlFor="phone">변경하실 전화번호</label>
            <input
              type="text"
              id="phone"
              placeholder="변경할 전화번호를 입력하세요"
              className="input-field"
              value={editUser.phone}
              onChange={(e) => {
                // 전화번호 11자리 일때만 상태 변경 저장 가능 
                if (e.target.value.length <= 11) {
                  setEditUser({ ...editUser, phone: e.target.value });
                }
              }}
            />
          </div>
          <div className="item">
            <label htmlFor="password">변경하실 비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="변경할 비밀번호를 입력하세요"
              className="input-field"
              value={editUser.password}
              onChange={handlePasswordChange} // 비밀번호 입력 변경
            />
            <small>비밀번호는 8-16자, 대소문자 및 특수문자를 포함해야 합니다.</small>
            
            {error && <p className="error-message">{error}</p>} {/* 오류 메시지 표시 */}
          </div>
          <div className="tmi-buttons">
            <button
              className="tmi-button"
              onClick={handleMessageClick} 
            >
              내 쪽지함 가기
            </button>
            <button
              className="tmi-button"
              onClick={handleSaveMedicineClick} 
            >
              저장된 약품 정보보기
            </button>
          </div>
        </div>
      </div>
      <div className="mypage-footer">
        <button className="save-button" onClick={handleSaveChanges}>
          변경사항 저장하기
        </button>
        <button className="save-button"
        onClick={handleResignClick}
        >회원탈퇴하기</button>
      </div>
    </div>
  );
};

export default MyPage;
