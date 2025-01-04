import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const quillRef = useRef<HTMLDivElement>(null);
  const [cookies] = useCookies(["token"]);
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
     // 이미지 업로드 처리
     const toolbar = quill.getModule("toolbar") as any; // `any`로 타입 지정
     const imageButton = toolbar.container.querySelector("[title='Image']");
 
       if (imageButton) {
         imageButton.addEventListener("click", () => {
           // 이미지 업로드 기능 처리
           const input = document.createElement("input");
           input.setAttribute("type", "file");
           input.setAttribute("accept", "image/*");
 
           input.addEventListener("change", async (e) => {
             const file = (e.target as HTMLInputElement).files?.[0];
             if (file) {
               const formData = new FormData();
               formData.append("image", file);
 
               // 이미지 서버로 업로드
               try {
                 const response = await axios.post(
                   "http://localhost:4040/api/v1/upload", // 이미지 업로드 API URL
                   formData,
                   {
                     headers: {
                       "Content-Type": "multipart/form-data",
                       Authorization: `Bearer ${cookies.token}`,
                     },
                   }
                 );
                 const imageUrl = response.data.imageUrl; // 서버에서 반환된 이미지 URL
 
                 // 에디터에 이미지 삽입
                 const range = quill.getSelection();
                 if (range && range.index !== null) {
                   quill.insertEmbed(range.index, "image", imageUrl);
                 }
               } catch (error) {
                 console.error("이미지 업로드 실패", error);
               }
             }
           });
 
           input.click();
         });
       }
 
       (quillRef.current as any).quillInstance = quill;
     }
   }, [cookies.token]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  
  if (!cookies.token) {
      alert("로그인 후 작성할 수 있습니다.");
      return;
    }
    
    const tempAuthor = "임시작성자"; // 임시 작성자 설정
    const quillInstance = (quillRef.current as any)?.quillInstance as Quill;
    const content = quillInstance?.root.innerHTML; // HTML 형식으로 내용 가져오기
    

    try {
      await axios.post(
        "http://localhost:4040/api/v1/board/create",
        { title, content, author: tempAuthor },
        { headers: { Authorization: `Bearer ${cookies.token}` } }
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
        <button type="submit">게시글 작성</button>
        <button type="button" onClick={handleExit}>나가기</button> {/* 나가기 버튼 추가 */}
      </form>
    </div>
  );
}
