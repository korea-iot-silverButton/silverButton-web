import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import style from "./board.module.css";

interface Board {
  id: number;
  title: string;
  content: string;
  username: string; // 작성자 이름 포함
  writerId: number; // 작성자 ID 추가
  createdAt: string;
  likes: number;
  views: number;
  imageUrl?: string;
  likeId?: number; // likeId 추가
  liked: boolean; // 좋아요 상태 추가
}

interface Comment {
  id: number;
  content: string;
  username: string; // 댓글 작성자 이름
}

export default function BoardDetail() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID 추출
  const [board, setBoard] = useState<Board | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [currentUserId, setCurrentUserId] = useState<number | null>(null); // 현재 사용자 ID 추가

  useEffect(() => {
    const userId = parseInt(localStorage.getItem("userId") || "0");
    setCurrentUserId(userId);

    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/${id}?userId=${currentUserId}`
        );
        setBoard(response.data.data);
        console.log("Writer ID:", response.data.data.writerId);
      } catch (error) {
        console.error("Failed to fetch Board:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBoard();
  }, [id, currentUserId]);

  useEffect(() => {
    console.log("currentUserId:", currentUserId); // currentUserId 확인
  }, [currentUserId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/comment/all?BoardId=${id}`
        );
        setComments(response.data.data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    if (id) fetchComments();
  }, [id]);

  // 상태 변경 후 콘솔 로그
  useEffect(() => {
    console.log("currentUserId:", currentUserId);
    console.log("boardId:", board?.id);
  }, [currentUserId, board]);

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const commentData = {
      content: newComment,
      boardId: id, // 게시글 ID
      writerId: currentUserId,
    };

    try {
      const response = await axios.post(
        `http://localhost:4040/api/v1/board/comment`,
        commentData
      );
      setComments([...comments, response.data.data]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  const handleDeleteComment = async (commentId: number) => {
    try {
      await axios.delete(
        `http://localhost:4040/api/v1/board/comment/${commentId}?userId=${currentUserId}`
      );
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  // 좋아요 처리 함수
  const handleLike = async () => {
    const likeData = {
      boardId: id,
      userId: currentUserId,
      liked: !board?.liked,
    }; // liked 상태도 전달

    try {
      let response;

      // 좋아요 추가 또는 취소
      response = await axios.post(
        `http://localhost:4040/api/v1/board/boardlike/toggle`,
        likeData
      );

      // 서버 응답에 따라 상태 업데이트
      setBoard((prevBoard) => ({
        ...prevBoard!,
        liked: !prevBoard?.liked, // liked 상태 토글
        likes: prevBoard?.liked ? prevBoard!.likes - 1 : prevBoard!.likes + 1, // 좋아요 수 증가 또는 감소
      }));

      console.log("응답 데이터:", response.data); // 응답 데이터 확인
    } catch (error) {
      console.error("좋아요 처리 실패:", error);
    }
  };

  // 게시글 수정 버튼 클릭
  const handleEdit = () => {
    if (currentUserId === null) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (currentUserId !== board?.writerId) {
      // 작성자 ID와 비교
      alert("수정하려면 작성자여야 합니다.");
      return;
    }

    navigate(`/board/${id}/edit`);
  };

  // 게시글 삭제 버튼 클릭 시
  const handleDelete = async () => {
    if (currentUserId !== board?.writerId) {
      // 작성자 ID와 비교
      alert("삭제 권한이 없습니다.");
      return;
    }

    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        await axios.delete(
          `http://localhost:4040/api/v1/board/delete/${id}?userId=${currentUserId}`
        );
        alert("게시글이 삭제되었습니다.");
        navigate("/board");
      } catch (error) {
        console.error("Failed to delete Board:", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };
  // 나가기 버튼 클릭 시
  const handleExit = () => {
    navigate("/board"); // 게시판 메인 페이지로 이동
  };

  if (isLoading) return <p>게시글을 불러오는 중...</p>;
  if (!board) return <p>게시글이 없습니다.</p>;

  return (
    <div className={style.boardDetail}>
      {/* 게시글 정보 */}
      <div className={style.infoBox}>
        <h3>{board.title}</h3>
        <p>작성자: {board.username}</p>
        <p>작성일: {new Date(board.createdAt).toLocaleString()}</p>
      </div>

      {/* 내용 + 이미지 */}
      <div className={style.contentBox}>
        <div dangerouslySetInnerHTML={{ __html: board.content }} />
        {board.imageUrl && (
          <img
            src={
              board.imageUrl.startsWith("http")
                ? board.imageUrl
                : `http://localhost:4040/${board.imageUrl}`
            }
            alt="게시글 이미지"
            className={style.image}
          />
        )}
      </div>

      {/* 좋아요, 조회수 */}
      <div className={style.statsBox}>
        <p>
          좋아요: {board.likes}{" "}
          <span
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: board.liked ? "red" : "black",
            }}
            onClick={handleLike}
          >
            {board.liked ? "♥" : "♡"}
          </span>
        </p>
        <p>조회수: {board.views}</p>
      </div>

      {/* 수정/삭제 버튼 */}
      <div className={style.actionBox}>
        {currentUserId === board?.writerId && (
          <>
            <button onClick={handleEdit}>수정하기</button>
            <button onClick={handleDelete}>삭제하기</button>
          </>
        )}
      </div>

      {/* 댓글 기능 */}
      <div style={{ marginTop: "30px" }}>
        <h3>댓글</h3>
        <div>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} style={{ marginBottom: "15px" }}>
                <p>{comment.content}</p>
                <p>작성자: {comment.username || "익명"}</p>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  댓글 삭제
                </button>
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요."
            style={{ width: "100%", height: "80px", marginBottom: "10px" }}
          />
          <button onClick={handleAddComment}>댓글 작성</button>
        </div>
        <div>
          <button onClick={handleExit}>나가기</button> {/* 나가기 버튼 추가 */}
        </div>
      </div>
    </div>
  );
}
