import React, { useState } from "react";

interface MessageComposeProps {
  onCancel: () => void;
}

const MessageCompose: React.FC<MessageComposeProps> = ({ onCancel }) => {
  const [recipient, setRecipient] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSend = () => {
    // API 로직 추가가
    alert(`쪽지가 전송되었습니다.\n수신인: ${recipient}\n제목: ${title}`);
    onCancel();
  };

  return (
    <div>
      <h3>쪽지 작성</h3>
      <input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="수신인" />
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
      <button onClick={handleSend}>보내기</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

export default MessageCompose;
