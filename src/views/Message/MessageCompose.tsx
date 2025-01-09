import axios from "axios";
import React, { useState } from "react";

interface MessageComposeProps {
  onCancel: () => void;
}
const MessageCompose: React.FC<MessageComposeProps> = ({ onCancel }) => {
  const [recipient, setRecipient] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSend = async () => {
    try {
      const response = await axios.post("/api/v1/messages", {
        recipient,
        title,
        content,
      });
      alert("쪽지가 성공적으로 전송되었습니다.");
      onCancel();
    } catch (error) {
      alert("쪽지 전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h2>쪽지 작성</h2>
      <input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="수신인" />
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
      <button onClick={handleSend}>보내기</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

export default MessageCompose;
