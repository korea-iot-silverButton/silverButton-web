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
}

export default function PostDetail() {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID 추출
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [isFetched, setIsFetched] = useState(false); // 호출 여부 확인

  useEffect(() => {
    const fetchPost = async () => {
      if (!id || isFetched) return; // 이미 호출된 경우 실행 방지
      try {

        if (!id) {
          console.error("ID is missing in URL.");
          return;
        }
        const postId = Number(id);
        console.log(`Fetching post with ID: ${postId}`);
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/${postId}`
        );
        
        setPost(response.data.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchPost(); // ID가 있을 때만 요청
    }
  }, [id, isFetched]);

  
  if (isLoading) return <p>게시글을 불러오는 중...</p>;
  if (!post) return <p>게시글이 없습니다.</p>;

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

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>작성자: {post.username}</p>
      <p>작성일: {new Date(post.createdAt).toLocaleString()}</p>
      <p>조회수: {post.views}</p>
      <p>좋아요: {post.likes}</p>

      {post.imgeUrl && (
        <img
          src={post.imgeUrl}
          alt="게시글 이미지"
          style={{ width: "200px", height: "200px" }}
        />
      )}

      {/* 댓글 목록 및 댓글 작성 */}
      <div>
        <h3>댓글</h3>
        {/* 댓글 목록 및 댓글 작성 폼 (추가 구현 필요) */}
      </div>

      {/* {isOwner && ( */}
      <div>
        <button onClick={handleEdit}>게시글 수정</button>
        <button onClick={handleDelete}>게시글 삭제</button>
        <button onClick={handleExit}>나가기</button> {/* 나가기 버튼 추가 */}
      </div>
      {/* )} */}
      {/* {cookies.token && ( */}
      <div>{/* 댓글 작성 폼 구현 */}</div>
      {/* )} */}
    </div>
  );
}
