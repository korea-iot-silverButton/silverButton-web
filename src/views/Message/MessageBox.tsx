import { useEffect, useState } from "react";
import { MESSAGE_PATH } from "../../constants";
import axios, { AxiosError } from "axios";
import { MAIN_URL } from "../../apis";
import * as s from "./style";
import MessageList from "./MessageList";
import MessageDetails from "./MessageDetails";

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
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<{ content: Message[]; totalPages: number }>(
        `${MAIN_URL}/${MESSAGE_PATH}`,
        {
          params: { type: currentTab, page: currentPage },
        }
      );
      const data = response.data;
      setMessages(data.content || []);
      setTotalPages(data.totalPages || 1);
      setError(null);
    } catch (err) {
      setError("쪽지를 불러오는 중 문제가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchMessages();
  }, [currentTab, currentPage]);

  return (
    <div css={s.container}>
      <div css={s.messageBox}>
        <h2 css={s.header}>쪽지함</h2>
        {selectedMessage ? (
          <MessageDetails
            message={selectedMessage}
            onBack={() => setSelectedMessage(null)}
          />
        ) : (
          <>
            <div css={s.tabs}>
              {["received", "sent", "all"].map((tab) => (
                <button
                  key={tab}
                  css={s.tabButton}
                  data-active={currentTab === tab}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab === "received" ? "수신함" : tab === "sent" ? "발신함" : "전체쪽지"}
                </button>
              ))}
            </div>
            {error && <p css={s.errorMessage}>{error}</p>}
            {isLoading ? (
              <p css={s.loadingMessage}>로딩 중...</p>
            ) : (
              <>
                <MessageList
                  messages={messages}
                  onSelectMessage={(message) => setSelectedMessage(message)}
                />
                <div css={s.pagination}>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                  >
                    이전
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      style={{ fontWeight: currentPage === index ? 'bold' : 'normal' }}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage >= totalPages - 1}
                  >
                    다음
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}