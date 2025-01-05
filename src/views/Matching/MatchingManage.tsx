/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { MAIN_URL } from "../../apis";

interface MatchingRequest {
  id: number;
  caregiverName: string;
  status: "pending" | "accepted" | "rejected";
  requestDate: string;
}

const MatchingManage: React.FC = () => {
  const [requests, setRequests] = useState<MatchingRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatchingRequests = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${MAIN_URL}/matching/requests`);
        if (!response.ok) throw new Error("Failed to fetch matching requests");
        const data: MatchingRequest[] = await response.json();
        setRequests(data);
        setError(null);
      } catch (err) {
        setError("매칭 요청 데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMatchingRequests();
  }, []);

  const handleAction = async (id: number, action: "accept" | "reject") => {
    try {
      const response = await fetch(`${MAIN_URL}/matching/requests/${id}/${action}`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Failed to update matching request");

      // Update the status locally after a successful API call
      setRequests((prev) =>
        prev.map((request) =>
          request.id === id ? { ...request, status: action === "accept" ? "accepted" : "rejected" } : request
        )
      );
    } catch (err) {
      alert("매칭 요청 업데이트 중 오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p css={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>매칭 관리</h1>
      <div css={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {requests.length === 0 ? (
          <p>현재 매칭 요청이 없습니다.</p>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              css={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p>케어기버: {request.caregiverName}</p>
                <p>요청 날짜: {new Date(request.requestDate).toLocaleDateString()}</p>
                <p>상태: {request.status === "pending" ? "대기 중" : request.status === "accepted" ? "수락됨" : "거절됨"}</p>
              </div>
              {request.status === "pending" && (
                <div css={{ display: "flex", gap: "5px" }}>
                  <button
                    css={{ backgroundColor: "green", color: "white", padding: "5px", borderRadius: "3px" }}
                    onClick={() => handleAction(request.id, "accept")}
                  >
                    수락
                  </button>
                  <button
                    css={{ backgroundColor: "red", color: "white", padding: "5px", borderRadius: "3px" }}
                    onClick={() => handleAction(request.id, "reject")}
                  >
                    거절
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MatchingManage;
