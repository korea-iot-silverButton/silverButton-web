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
}

// 저장소 생성 함수
const useAuthStore = create<AuthStateType>((set) => ({
  // 상태 필드 초기화
  isAuthenticated: false,
  user: null,
  token: null,

  // 상태 업데이트 함수
  login: (user, token) => set({ isAuthenticated: true, user, token }),
  logout: () => set({ isAuthenticated: false, user: null, token: null }), // 로그아웃 시 상태 초기화
}));

export default useAuthStore;
