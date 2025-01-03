import axios from "axios";
import React, { useEffect, useState } from "react";

interface LikeButton {
  postId: number;
  likes: number;
  liked: boolean;
  likeId?: number | null;
  onLikeToggle: (postId: number, liked: boolean, likeId: number | null) => void;
}

const LikeButton: React.FC<LikeButton> = ({
  postId,
  likes,
  liked,
  likeId,
  onLikeToggle,
}) => {
  const [currentLikes, setCurrentLikes] = useState(likes); // 현재 좋아요 수
  const [isLiked, setIsLiked] = useState(liked); // 현재 좋아요 상태
  const [currentLikeId, setCurrentLikeId] = useState<number | null>(
    likeId ?? null // likeId가 undefined이면 null로 초기화
  );
  console.log("currentLikeId : " , currentLikeId);
  console.log("likeId : " , likeId);
  
  
  const handleLikeClick = async () => {
    try {
      const userId = 1; // 테스트용
      const likeData = { boardId: postId};
      
      const method = isLiked ? "DELETE" : "POST";
      const url = isLiked
        ? `http://localhost:4040/api/v1/board/boardlike/toggle` // 토글 경로
        : "http://localhost:4040/api/v1/board/boardlike/toggle";


        const response = await axios.post(url, likeData);

      const responseData = response.data.data;

      if (responseData) {
        setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1);
        setCurrentLikeId(isLiked ? null : responseData.likeId);
        setIsLiked(!isLiked);
        onLikeToggle(postId, !isLiked, responseData.likeId);
      }
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
  };


  return (
    <button
      onClick={handleLikeClick}
      style={{
        cursor: "pointer",
        color: isLiked ? "red" : "blue",
        border: "none",
        background: "none",
        fontSize: "16px",
      }}
    >
      {currentLikes}
    </button>
  );
};

export default LikeButton;
