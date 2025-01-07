import React, { useState } from 'react';

import './ReSign.css'; 

const ReSign = () => {
  const [isConfirming, setIsConfirming] = useState(false); // 탈퇴 확인을 위한 상태 관리

  const handleDelete = () => {
    setIsConfirming(true); // 탈퇴 확인창 표시
  };

  const handleConfirmDelete = () => {
    alert('회원탈퇴가 완료되었습니다.');
    setIsConfirming(false);
  };

  const handleCancelDelete = () => {
    setIsConfirming(false); // 취소 버튼 클릭 시 확인창 닫기
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
            <button className="confirm-button" onClick={handleConfirmDelete}>
              탈퇴
            </button>
            <button className="cancel-button" onClick={handleCancelDelete}>
              취소
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReSign;

