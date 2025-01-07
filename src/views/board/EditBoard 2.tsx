import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function EditPost() {
  const { id } = useParams<{ id: string }>(); // URL에서 id 값을 가져옵니다.
  const [post, setPost] = useState({ title: "", content: "" , imgeUrl: ""});
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/${id}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );
        setPost(response.data.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id, cookies.token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4040/api/v1/board/${id}`,
        {
          title: post.title,
          content: post.content,
          imgeUrl: post.imgeUrl, 
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      alert("게시글이 수정되었습니다.");
      navigate(`/board/${id}`); // 수정된 게시글의 상세 페이지로 이동
    } catch (error) {
      console.error("Failed to update post:", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  const handleExit = () => {
    navigate(`/board/${id}`); // 상세페이지로 이동
  };

  return (
    <div className="edit-post-container">
      <h2>게시글 수정</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          placeholder="내용"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="이미지 URL (선택)"
          value={post.imgeUrl || ""}
          onChange={(e) => setPost({ ...post, imgeUrl: e.target.value })}
        />
          <div className="button-group">
          <button type="submit" className="submit-button">
            수정하기
          </button>
          <button type="button" className="exit-button" onClick={handleExit}>
            나가기
          </button>
        </div>
      </form>
    </div>
  );
}