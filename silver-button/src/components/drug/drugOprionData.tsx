/** @jsxImportSource @emotion/react */
import * as s from "../../styles/style";
import { FaRegCircle } from "react-icons/fa";
import { TbCircleHalfVertical } from "react-icons/tb";
import { GrAddCircle } from "react-icons/gr";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";
import { TbOvalVertical } from "react-icons/tb";
import { FaRegSquare } from "react-icons/fa";
import { BiCircleHalf } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { CgShapeRhombus } from "react-icons/cg";
import { LuRectangleHorizontal } from "react-icons/lu";
import { LuPentagon } from "react-icons/lu";
import { MdOutlineHexagon } from "react-icons/md";
import { FiOctagon } from "react-icons/fi";

export interface LineShape {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: {};
}

export const lineShape: LineShape[] = [
  { id: 1, name: "없음", icon: <FaRegCircle />, style: s.circle },
  { id: 2, name: "(-)형", icon: <TbCircleHalfVertical />, style: s.minus },
  { id: 3, name: "(+)형", icon: <GrAddCircle />, style: s.ten },
  { id: 4, name: "기타", icon: <HiOutlineArrowUpCircle />, style: s.kita },
];



export interface ColorShape {
  id: number;
  name: string;
  style: any;
}
export const colorShape: ColorShape[] = [
  { id: 1, name: "하양", style: s.white },
  { id: 2, name: "노랑", style: s.yellow },
  { id: 3, name: "주황", style: s.orange },
  { id: 4, name: "분홍", style: s.pink },
  { id: 5, name: "빨강", style: s.red },
  { id: 6, name: "갈색", style: s.brown },
  { id: 7, name: "연두", style: s.yellowGreen },
  { id: 8, name: "초록", style: s.green },
  { id: 9, name: "청록", style: s.turquoise },
  { id: 10, name: "파랑", style: s.blue },
  { id: 11, name: "남색", style: s.navy },
  { id: 12, name: "자주", style: s.violet },
  { id: 13, name: "보라", style: s.purple },
  { id: 14, name: "회색", style: s.gray },
  { id: 15, name: "검정", style: s.black },
  { id: 16, name: "투명", style: s.two },
];

export interface DrugShape {
  id: number;
  name: string;
  icon: React.ReactNode; 
  style: React.CSSProperties | any; 
}


export const drugShape: DrugShape[] = [
  { id: 1, name: "원형", icon: <FaRegCircle />, style: s.circle },
  { id: 2, name: "타원형", icon: <TbOvalVertical />, style: s.taone },
  { id: 3, name: "사각형", icon: <FaRegSquare />, style: s.box },
  { id: 4, name: "반원형", icon: <BiCircleHalf />, style: s.halfSquare },
  { id: 5, name: "삼각형", icon: <FiTriangle />, style: s.triangle },
  { id: 6, name: "마름모형", icon: <CgShapeRhombus />, style: s.mamo },
  { id: 7, name: "장방형", icon: <LuRectangleHorizontal />, style: s.jangbang },
  { id: 8, name: "오각형", icon: <LuPentagon />, style: s.okak },
  { id: 9, name: "육각형", icon: <MdOutlineHexagon />, style: s.six },
  { id: 10, name: "팔각형", icon: <FiOctagon />, style: s.eight },
];



