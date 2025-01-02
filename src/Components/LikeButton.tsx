import React, { useEffect, useState } from "react";



interface LikeButtonProps {
  postId: number;
  likes: number;
  liked: boolean;
  likeId?: number;
  onLikeToggle: (postId: number, liked: boolean, likeId: number|null) => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId, likes, liked,  onLikeToggle }) => {
  const [localLiked, setLocalLiked] = useState(liked);
  const [likeId, setLikeId] = useState<number | null>(null); // likeId 상태 추가

  const handleLikeClick = async () => {
    setLocalLiked(!localLiked);
    onLikeToggle(postId, !localLiked, likeId);
  };

  useEffect(() => {
    // 좋아요 상태가 바뀔 때마다 likeId 업데이트
    if (localLiked && likeId === null) {
      // 예시: 좋아요를 추가할 때 서버에서 likeId를 받아오는 방식
      setLikeId(123); // 실제로는 서버에서 받아오는 로직
    } else if (!localLiked && likeId !== null) {
      // 좋아요를 취소할 때
      setLikeId(null); // 좋아요 취소 시에는 likeId 초기화
    }
  }, [localLiked]);


  return (
    <button
      onClick={handleLikeClick}
      style={{
        cursor: "pointer",
        color: liked ? "red" : "blue",
        border: "none",
        background: "none",
        fontSize: "16px",
      }}
    >
     {likes}
    </button>
  );
};

export default LikeButton;
