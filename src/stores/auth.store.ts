import { create } from "zustand";

// 사용자 정보를 담을 interface 정의
interface User {
    id: number;
    userId: string;
    nickname: string;
    name?: string;
    role: string;
    phone: string;
    profileImg: string;
}

// 인증 상태의 interface 정의
interface AuthStateType {
  // 상태 필드 정의
  isAuthenticated: boolean; // 인증 여부
  user: User | null; // 사용자 정보
  token: string | null; // 인증 토큰

  // 상태 업데이트 함수
  login: (user: User, token: string) => void; // 로그인 시 사용자 정보와 토큰 설정
  logout: () => void; // 로그아웃 시 상태 초기화
  loadFromLocalStorage: () => void; // 로컬스토리지에서 로그인 상태 로드
}

// 저장소 생성 함수
const useAuthStore = create<AuthStateType>((set) => ({
  // 상태 필드 초기화
  isAuthenticated: false,
  user: null,
  token: null,

  // 로컬스토리지에서 상태 로드
  loadFromLocalStorage: () => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    if (token && user) {
      const parsedUser = JSON.parse(user);
      set({ isAuthenticated: true, user: parsedUser, token });
    }
  },

   // 상태 업데이트 함수
  login: (user, token) => {
    localStorage.setItem('authToken', token); // 토큰을 로컬스토리지에 저장
    localStorage.setItem('user', JSON.stringify(user)); // 사용자 정보를 로컬스토리지에 저장
    set({ isAuthenticated: true, user, token });
  },

  logout: () => {
    localStorage.removeItem('authToken'); // 로컬스토리지에서 토큰 삭제
    localStorage.removeItem('user'); // 사용자 정보 삭제
    set({ isAuthenticated: false, user: null, token: null });
  },
}));

export default useAuthStore;
