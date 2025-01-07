import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { useCookies } from "react-cookie";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";


export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");
  // const [imageUrl, setImageUrl] = useState<string>("");
  const quillRef = useRef<HTMLDivElement>(null);
  // const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  
  useEffect(() => {  
  if (quillRef.current) {
    const quill = new Quill(quillRef.current, {
      theme: "snow",
      placeholder: "내용을 입력하세요...",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // 텍스트 스타일
          [{ list: "ordered" }, { list: "bullet" }], // 리스트
          ["link", "image"], // 링크 및 이미지
        ],
      },
    });
      // Quill 인스턴스를 참조에 저장
      (quillRef.current as any).quillInstance = quill;
  }
}, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  
  // if (!cookies.token) {
    //   alert("로그인 후 작성할 수 있습니다.");
    //   return;
    // }
    
    const tempAuthor = "임시작성자"; // 임시 작성자 설정
    const quillInstance = (quillRef.current as any)?.quillInstance as Quill;
    const content = quillInstance?.getText().trim(); // Quill에서 텍스트만 추출
    

    // if (!content || content === "<p><br></p>") {
    //   alert("내용을 입력해주세요.");
    //   return;
    // }

    try {
      await axios.post(
        "http://localhost:4040/api/v1/board/create",
        { title, content, author: tempAuthor },
        // { headers: { Authorization: `Bearer ${cookies.token}` } }
      );
      alert("게시글이 작성되었습니다.");
      navigate("/board");
    } catch (error) {
      console.error("게시글 작성 실패", error);
    }
  };
    // 나가기 버튼 클릭 시
    const handleExit = () => {
      navigate("/board"); // 게시판 메인 페이지로 이동
    };

  return (
    <div>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            required
          />
        </div>
        <div>
        <div ref={quillRef} style={{ height: "300px", margin: "16px 0" }}></div>
        </div>
        {/* <div>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="이미지 URL (선택)"
          />
        </div> */}
        <button type="submit">게시글 작성</button>
        <button type="button" onClick={handleExit}>나가기</button> {/* 나가기 버튼 추가 */}
      </form>
    </div>
  );
}
