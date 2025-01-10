import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import style from "./board.module.css";
import useAuthStore from "../../stores/auth.store";

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
  currentUserId: number;
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

  const { user } = useAuthStore();

  useEffect(() => {
    console.log("user", user);
    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/view/${id}`
        );
        console.log("board", response.data); 
        const boardData = response.data.data;
        setBoard(boardData);
      } catch (error) {
        console.error("Failed to fetch Board:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBoard();
  }, [id]);

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


  const handleAddComment = async () => {
    if (!newComment.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const commentData = {
      content: newComment,
      boardId: id, // 게시글 ID
      writerId: user?.id,
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
        `http://localhost:4040/api/v1/board/comment/${commentId}?userId=${user?.id}`
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
      userId: user?.id,
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
  useEffect(() => {
    console.log("userID", user?.id); // userID 출력
    console.log("writerID", board?.writerId); // writerID 출력
  }, [user, board]); // user나 board 상태가 변경될 때마다 출력

  // 게시글 수정 버튼 클릭
  const handleEdit = () => {
    if (!user == !board?.writerId) {
      alert("로그인이 필요합니다.");
      navigate("/auth");
      return;
    }

    if (user?.id !== board?.writerId) {
      alert("수정하려면 작성자여야 합니다.");
      return;
    }

    navigate(`/board/edit/${id}`);
  };

  // 게시글 삭제 버튼 클릭 시
  const handleDelete = async () => {
    if (!user || user.id !== board?.writerId) {
      
      alert("삭제 권한이 없습니다.");
      return;
    }

    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        await axios.delete(
          `http://localhost:4040/api/v1/board/delete/${id}?userId=${user?.id}`
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
    <div className={style.mainBox}>
      {/* 1번 박스와 2번 박스를 가로로 배치 */}
      <div className={style.topBox}>
        {/* 1번 박스: 게시글 데이터 */}
        <div className={style.postBox}>
          <div className={style.headerBox}>
            <h3 className={style.title}>{board.title}</h3>
            <p className={style.username}>{board.username}</p>
          </div>
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
                className={style.postImage}
              />
            )}
          </div>
          <div className={style.statsBox}>
            <div className={style.likes}>
              <p>
                <span
                  style={{
                    color: board.liked ? "red" : "black",
                  }}
                  onClick={handleLike}
                >
                  {board.liked ? "♥ " : "♡ "}
                </span>
                {board.likes}{" "}
              </p>
              <p>👁️ {board.views}</p>
            </div>
            <div className={style.footerBox}>
              <p className={style.createdAt}>{board.createdAt}</p>
            </div>
          </div>
        </div>

        <div className={style.commentsBox}>
          <h3>댓글</h3>
          <div className={style.commentListContainer}>
            <div className={style.commentList}>
              {comments.length > 0 ? (
                <div className={style.scrollableComments}>
                  {comments.map((comment) => (
                    <div key={comment.id} className={style.commentBox}>
                      <p>{comment.username || "익명"}</p>
                      <p>{comment.content}</p>
                      <button onClick={() => handleDeleteComment(comment.id)}>
                        댓글 삭제
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>댓글이 없습니다.</p>
              )}
            </div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              className={style.commentInput}
            />
          </div>
        </div>
      </div>

      {/* 3번 박스와 4번 박스를 가로로 배치 */}
      <div className={style.bottomBox}>
        {/* 3번 박스: 수정하기, 삭제하기, 나가기 버튼 */}
        <div className={style.actionButtonsBox}>
          <button onClick={handleEdit} className={style.actionButton}>
            수정하기
          </button>
          <button onClick={handleDelete} className={style.actionButton}>
            삭제하기
          </button>
          <button onClick={handleExit} className={style.exitButton}>
            나가기
          </button>
        </div>

        {/* 4번 박스: 댓글 작성하기 버튼 */}
        <div className={style.commentActionsBox}>
          <button onClick={handleAddComment} className={style.submitButton}>
            댓글 작성하기
          </button>
        </div>
      </div>
    </div>
  );
}
