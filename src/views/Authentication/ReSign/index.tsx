import React, { useState } from 'react';
import './ReSign.css';

const ReSign = () => {
  const [isConfirming, setIsConfirming] = useState(false); // 탈퇴 확인 상태
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // 비밀번호 입력 모달 상태
  const [password, setPassword] = useState(''); // 입력된 비밀번호 상태

  const handleDelete = () => {
    setIsPasswordModalOpen(true); // 비밀번호 입력 모달 열기
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // 비밀번호 입력값 업데이트
  };

  const handleConfirmPassword = () => {
    if (password === 'correct-password') {
      alert('회원탈퇴가 완료되었습니다.');
      setIsConfirming(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
    setIsPasswordModalOpen(false);
    setPassword(''); // 비밀번호 초기화
  };

  const handleCancelPassword = () => {
    setIsPasswordModalOpen(false); // 비밀번호 입력 모달 닫기
  };

  const handleCancelDelete = () => {
    setIsConfirming(false); // 탈퇴 확인 취소
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-box">
        <h2>회원 탈퇴</h2>
        <p>회원 탈퇴를 원하시면 아래 버튼을 클릭해주세요.</p>
        {!isConfirming ? (
          <>
            <button className="delete-button" onClick={handleDelete}>
              탈퇴하기
            </button>
          </>
        ) : (
          <div className="confirmation-box">
            <p>정말 탈퇴하시겠습니까?</p>
            <button className="confirm-button" onClick={handleConfirmPassword}>
              탈퇴
            </button>
            <button className="cancel-button" onClick={handleCancelDelete}>
              취소
            </button>
          </div>
        )}
      </div>

      {/* 비밀번호 입력 모달 */}
      {isPasswordModalOpen && (
        <div className="password-modal">
          <div className="password-modal-content">
            <h3>비밀번호를 입력하세요</h3>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="confirm-password-button" onClick={handleConfirmPassword}>
              확인
            </button>
            <button className="cancel-password-button" onClick={handleCancelPassword}>
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReSign;
