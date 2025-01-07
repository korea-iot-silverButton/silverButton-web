/** @jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react'

interface Message {
  id: number;
  title: string;
  sender: string;
  date: string;
  content: string;
  isRead: boolean;
}

interface MessageListProps {
  messages: Message[];
  onSelectMessage: (message: Message) => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, onSelectMessage }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id} onClick={() => onSelectMessage(message)}>
          <h3>{message.title} {message.isRead ? '' : '⚪'}</h3>
          <p>보낸 사람: {message.sender}</p>
          <small>{new Date(message.date).toLocaleDateString()}</small>
        </li>
      ))}
    </ul>
  );
};


export default MessageList;