import { useEffect, useState } from "react";
import { MESSAGE_PATH } from "../../constants";
import axios, { AxiosError } from "axios";
import { MAIN_URL } from "../../apis";

import MessageTab from './MessageTab';
import MessageList from './MessageList';
import Pagination from './Pagination';

interface Message {
  id: number;
  title: string;
  sender: string;
  date: string;
  content: string;
  isRead: boolean;
}

export default function MessageBox() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTab, setCurrentTab] = useState("received");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${MAIN_URL}/${MESSAGE_PATH}`, {
        params: { type: currentTab, page: currentPage },
      });
      const data = response.data;
      setMessages(data.content || []);
      setTotalPages(data.totalPages || 1);
      setError(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || "쪽지를 불러오는 중 문제가 발생했습니다.";
        setError(errorMessage);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
      console.error('쪽지 데이터를 불러오는 데 실패', err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, [currentTab, currentPage]);

  const renderTabs = () => (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <button
        style={{
          padding: "10px",
          backgroundColor: currentTab === "all" ? "#ccc" : "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTab("all")}
      >
        전체쪽지
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: currentTab === "received" ? "#ccc" : "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTab("received")}
      >
        수신쪽지
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: currentTab === "sent" ? "#ccc" : "#fff",
          cursor: "pointer",
        }}
        onClick={() => setCurrentTab("sent")}
      >
        발신쪽지
      </button>
    </div>
  );

  const renderMessageList = () => (
    <div>
      {messages.map((message) => (
        <div key={message.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <h4>{message.title}</h4>
          <p>보낸사람: {message.sender}</p>
          <p>날짜: {message.date}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2>쪽지함</h2>
      {renderTabs()}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <p>로딩 중...</p>
        </div>
      ) : (
        <>
          {messages.length === 0 && !error && <p>쪽지가 없습니다.</p>}
          {renderMessageList()}
        </>
      )}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          이전
        </button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage >= totalPages - 1}
        >
          다음
        </button>
      </div>
    </div>
  );
}

// export default function Message() {
//   const [cookies] = useCookies(['token']);

//   const [messages, setMessages] = useState<

//   const fetchMessages = async (page: number) => {
//     const token = cookies.token;

//     try{
//       const response = await axios.get(`http://localhost:8080api/v1/menus`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       });

//       const data = response.data.data;

//     } catch(e) {
//       console.error("Failed to fetch posts data", e);
//     }
//   }

//   return(
//     <div>
//         쪽지

        
//     </div>
//   )
// }