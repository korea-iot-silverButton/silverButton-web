import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import style from "./board.module.css";

interface Post {
  id: number;
  title: string;
  content: string;
  username: string; // 작성자 이름 포함
  createdAt: string;
  likes: number;
  views: number;
  imgeUrl?: string;
  likeId?: number; // likeId 추가
  liked: boolean; // 좋아요 상태 추가
}

interface Comment {
  id: number;
  content: string;
  username: string; // 댓글 작성자 이름
}

export default function PostDetail() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID 추출
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/${id}`
        );
        setPost(response.data.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/comment/all?postId=${id}`
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
      writerId: 1, // 작성자 ID (테스트용 ID)
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
        `http://localhost:4040/api/v1/board/comment/${commentId}`
      );
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  // 좋아요 처리 함수
  const handleLike = async () => {
    const userId = 1; // 로그인한 사용자 ID (테스트용 ID)
    const likeData = {
      userId,
      postId: id,
    };

    try {
      if (post?.liked) {
        // 좋아요 취소
        await axios.delete(
          `http://localhost:4040/api/v1/board/like?postId=${id}&userId=${userId}`
        );
        setPost((prevPost) => ({
          ...prevPost!,
          liked: false,
          likes: prevPost!.likes - 1,
        }));
      } else {
        // 좋아요 추가
        await axios.post(
          `http://localhost:4040/api/v1/board/like`,
          likeData
        );
        setPost((prevPost) => ({
          ...prevPost!,
          liked: true,
          likes: prevPost!.likes + 1,
        }));
      }
    } catch (error) {
      console.error("Failed to handle like:", error);
    }
  };
  

  // 게시글 수정 버튼 클릭 시
  const handleEdit = () => {
    // if (!cookies.token) {
    //   alert("수정하려면 로그인해야 합니다.");
    //   return;
    // }
    navigate(`/board/${id}/edit`); // 게시글 수정 페이지로 이동
  };



  // // 게시글 삭제 버튼 클릭 시
  const handleDelete = async () => {
    if (!id) {
      console.error("ID is missing, cannot delete post.");
      return;
    }
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        console.log(`Deleting post with ID: ${id}`);
        const response = await axios.delete(
          `http://localhost:4040/api/v1/board/delete/${id}`
        );
        console.log("Delete response:", response);
        alert("게시글이 삭제되었습니다.");
        navigate("/board"); // 게시글 메인 페이지로 이동
      } catch (error) {
        console.error("Failed to delete post:", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };

  // 나가기 버튼 클릭 시
  const handleExit = () => {
    navigate("/board"); // 게시판 메인 페이지로 이동
  };





  if (isLoading) return <p>게시글을 불러오는 중...</p>;
  if (!post) return <p>게시글이 없습니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>작성자: {post.username}</p>
      <p>작성일: {new Date(post.createdAt).toLocaleString()}</p>
      <p>조회수: {post.views}</p>
      <p>
  좋아요: {post.likes}{" "}
  <span
    style={{ cursor: "pointer", fontSize: "24px", color: post.liked ? "red" : "black" }}
    onClick={async () => {
      try {
        const likeData = { boardId: id }; // 게시글 ID 전달
        if (post.liked) {
          // 좋아요 취소
          await axios.delete(
            `http://localhost:4040/api/v1/board/boardlike/toggle`,
            { data: likeData }
          );
          setPost((prevPost) => ({
            ...prevPost!,
            liked: false,
            likes: prevPost!.likes - 1,
          }));
        } else {
          // 좋아요 추가
          const response = await axios.post(
            `http://localhost:4040/api/v1/board/boardlike/toggle`,
            likeData
          );
          const responseData = response.data.data;
          setPost((prevPost) => ({
            ...prevPost!,
            liked: true,
            likes: prevPost!.likes + 1,
          }));
        }
      } catch (error) {
        console.error("좋아요 처리 실패:", error);
      }
    }}
  >
    {post.liked ? "♥" : "♡"}
  </span>
</p>


      {post.imgeUrl && (
        <img
          src={post.imgeUrl}
          alt="게시글 이미지"
          style={{ width: "200px", height: "200px" }}
        />
      )}

      <div>
        <button onClick={handleEdit}>게시글 수정</button>
        <button onClick={handleDelete}>게시글 삭제</button>
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
