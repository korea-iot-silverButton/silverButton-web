
// 약품 검색 옵션 상태 관리 (useState)
export interface SelectedDrugOption {
  shape: string;
  color: string;
  line: string;
}

// 약품 모양 선택 인터페이스
export interface IDrugShape {
  id: number;
  name: string;
  icon: React.ReactNode; 
  style: React.CSSProperties | any; 
}

// 약품 색상 선택 인터페이스
export interface IDrugColor {
  id: number;
  name: string;
  icon:React.ReactNode;
  style: any;
}

// 약품 분할선 선택 인터페이스
export interface IDrugLine {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: {};
}

