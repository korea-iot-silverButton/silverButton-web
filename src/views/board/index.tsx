import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import style from "./board.module.css";
import BasicImage from "../../views/board/BasicImage.png";
import { Quill } from "react-quill";

interface Post {
  id: number;
  title: string;
  content: string;
  username: string; // 작성자 이름 포함
  createdAt: string;
  likes: number;
  views: number;
  imageUrl?: string;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [cookies] = useCookies(["token"]);
  const [searchType, setSearchType] = useState<string>("title"); // 제목 또는 작성자 검색
  const [searchQuery, setSearchQuery] = useState<string>(""); // 검색어
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

  const fetchPosts = async (page: number) => {
    if (page < 1 || (totalPages > 0 && page > totalPages)) {
      console.warn("Invalid page number:", page);
      return;
    }
    console.log("POST", posts);

    console.log("검색어");

    try {
      const params: any = {
        page: page - 1,
        size: 10,
        sort: "createdAt,DESC",
      };
      let url = "http://localhost:4040/api/v1/board/all"; // 기본 전체 게시글 조회 URL

      // 검색어가 있을 때만 조건을 추가
      if (searchQuery.trim()) {
        console.log("검색어", searchQuery);
        if (searchType === "title") {
          params["keyword"] = searchQuery.trim(); // 제목으로 검색
          url = "http://localhost:4040/api/v1/board/search/title"; // 제목 검색 API
        } else if (searchType === "author") {
          params["name"] = searchQuery.trim(); // 작성자로 검색
          url = "http://localhost:4040/api/v1/board/search/name"; // 작성자 검색 API
        }
      }

      // 요청 전 파라미터, URL, 헤더 확인
      console.log("Request URL:", url);
      console.log("Request Params:", params);

      const headers = cookies.token
        ? { Authorization: `Bearer ${cookies.token}` }
        : {}; // Authorization 헤더 포함

      const response = await axios.get(url, {
        params,
        headers, // 헤더에 토큰 추가
      });

      const data = response.data.data;

      console.log("dataImgae", data.images);
      console.log("API Response:", response.data.data); // 응답 데이터 확인

      if (data && data.content) {
        const postsWithLikedStatus = data.content.map((post: Post) => ({
          ...post,
          liked: false, // 초기 상태는 좋아요 안 눌림
        }));

        setPosts(postsWithLikedStatus);
        setTotalPages(data.totalPages); // 백엔드에서 totalPages 제공 필요

        console.log("전체 데이터:", data); // data 값 전체 출력
        console.log("게시글 목록:", data.content); // data.content 값 출력
        console.log("게시글 :", data.content.content); // data.content 값 출력
        console.log("전체 페이지 수:", data.totalPages); // data.totalPages 값 출력
      } else {
        setPosts([]); // 검색 결과가 없으면 빈 배열로 설정
        setTotalPages(1); // 페이지는 1로 설정
        console.log("게시글이 없습니다."); // 결과 없을 때 출력
      }
    } catch (e: any) {
      console.error("Failed to fetch posts data", e);
      // HTTP 상태 코드 404 처리
      if (e.response && e.response.status === 404) {
        console.warn("No posts found for the given query");
        setPosts([]);
        setTotalPages(1);
      }
    }
  };

  // 첫 로딩 시 전체 게시글 조회
  useEffect(() => {
    fetchPosts(1); // 초기 상태로 전체 게시글 조회
  }, []);

  // 게시글 클릭 시 상세 페이지로 이동
  const handlePostClick = (id: number) => {
    navigate(`/board/${id}`); // 게시글 ID를 경로에 포함
  };

  // 검색 처리
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }
    setCurrentPage(1); // 검색 시 페이지를 1로 초기화
    fetchPosts(1); // 검색 조건 적용
  };

  // 게시글 데이터 출력
  useEffect(() => {
    console.log("Posts after fetch:", posts); // 상태 값이 변경된 후 출력
  }, [posts]);

  // 페이지 클릭 핸들러
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    fetchPosts(page); // 페이지 변경 시 게시글 다시 불러오기
  };

  const handlePreGroupClick = () => {
    setCurrentPage((prev) => Math.max(prev - 10, 1));
  };

  const handleNextGroupClick = () => {
    setCurrentPage((prev) => Math.min(prev + 10, totalPages));
  };

  const handleCreatePostClick = () => {
    // 로그인 여부 확인
    if (!cookies.token) {
      alert("로그인 후 게시글을 작성할 수 있습니다.");
      navigate("/auth"); // 로그인 페이지로 이동
    } else {
      navigate("/board/create"); // 게시글 작성 페이지로 이동
    }
  };

  const removeImagesFromHtml = (htmlContent: string): string => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");

    // 이미지 태그만 제거
    const images = doc.querySelectorAll("img");
    images.forEach((img) => img.remove());

    // 수정된 HTML 반환
    return doc.body.innerHTML;
  };

  const getSummary = (content: string) => {
    // HTML 태그 제거 후 텍스트만 추출
    const textContent = removeImagesFromHtml(content);

    // 첫 번째 문장만 추출 (문장 끝은 . 또는 ? 또는 !로 간주)
    const firstSentence = textContent.split(/[.!?]/)[0];

    // 15자까지만 잘라서 반환
    return firstSentence.length > 15
      ? `${firstSentence.slice(0, 15)}`
      : firstSentence;
  };

  const extractImages = (htmlContent: string) => {
    if (!htmlContent) return [];

    try {
      const doc = new DOMParser().parseFromString(htmlContent, "text/html");
      const images = doc.querySelectorAll("img");
      return Array.from(images)
        .map((img) => img.src)
        .filter(Boolean);
    } catch (error) {
      console.error("Failed to parse HTML content:", error);
      return [];
    }
  };

  // 전체 게시글 조회 (검색 조건 초기화)
  const handleBoardClick = () => {
    setSearchQuery(""); // 검색어 초기화
    setSearchType("title"); // 검색 조건을 제목으로 초기화
    setCurrentPage(1); // 페이지 1로 초기화
    fetchPosts(1); // 전체 게시글 조회
  };

  return (
    <div className={style["container"]}>
      <div className={style["content-box"]}>
        <div className={style["header-container"]}>
          <div className={style["search-container"]}>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className={style["search-select"]}
            >
              <option value="title">제목</option>
              <option value="author">작성자</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색어를 입력하세요"
              className={style["search-input"]}
            />
            <button onClick={handleSearch} className={style["search-button"]}>
              검색
            </button>
            <div className={style["button-container"]}>
              <p
                onClick={handleCreatePostClick}
                className={style["board-link"]}
              >
                ✏️
              </p>
              <p onClick={handleBoardClick} className={style["board-link"]}>
                📝
              </p>
            </div>
          </div>
        </div>

        <div>
          {posts.length === 0 ? (
            <p>게시글이 없습니다.</p>
          ) : (
            <div className={style["board-container"]}>
              {posts.map((post) => {
                const contentSummary = getSummary(post.content);
                const imageUrls = extractImages(post.content);
                console.log("img : ",imageUrls);

                return (
                  <div
                    key={post.id}
                    className={style["board-item"]}
                    onClick={() => handlePostClick(post.id)}
                  >
                    <div className={style["board-item-content"]}>
                      <div className={style["board-header"]}>
                        <h3 className={style["board-title"]}>{post.title}</h3>
                      </div>
                      <div
                        className={style["board-content"]}
                        dangerouslySetInnerHTML={{ __html: contentSummary }}
                      />
                      <div className={style["board-footer"]}>
                        <span className={style["username"]}>
                          {post.username || "작성자 없음"}
                        </span>
                        <span className={style["created-at"]}>
                          {new Date(post.createdAt).toLocaleString()}
                        </span>
                        <span className={style["likes"]}>👍 {post.likes}</span>
                        <span className={style["views"]}>👁️ {post.views}</span>
                      </div>
                    </div>
                    <div className={style["board-item-image"]}>
                      <img
                        src={imageUrls.length > 0 ? imageUrls[0] : BasicImage}
                        alt="게시글 이미지"
                        style={{
                          width: "100%",
                          height: "150px",        
                          borderRadius: "4px",    
                          marginRight: "50px"     
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          handlePreGroupClick={handlePreGroupClick}
          handleNextGroupClick={handleNextGroupClick}
        />
      </div>
    </div>
  );
}
