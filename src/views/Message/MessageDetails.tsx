import React from "react";

interface Message {
  id: number;
  title: string;
  sender: string;
  date: string;
  content: string;
}

interface MessageDetailsProps {
  message: Message;
  onBack: () => void;
}

const MessageDetails: React.FC<MessageDetailsProps> = ({ message, onBack }) => {
  return (
    <div>
      <h3>{message.title}</h3>
      <p>보낸 사람: {message.sender}</p>
      <small>{new Date(message.date).toLocaleDateString()}</small>
      <p>{message.content}</p>
      <button onClick={onBack}>뒤로가기</button>
    </div>
  );
};

export default MessageDetails;
