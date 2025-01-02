/** @jsxImportSource @emotion/react */
import * as s from "../styles/drugSearchStyle";
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
import { IDrugColor, IDrugLine, IDrugShape } from "../types/DrugSearchListType";
import { FaCircle } from "react-icons/fa";
import { MdDensitySmall } from "react-icons/md";


export const drugLine: IDrugLine[] = [
  { id: 1, name: "전체", icon: <MdDensitySmall css={s.AllIcon}  />, style: s.AllIcon },
  { id: 2, name: "없음", icon: <FaRegCircle css={s.circle} />, style: s.circle },
  { id: 3, name: "(-)형", icon: <TbCircleHalfVertical css={s.circle} />, style: s.circle },
  { id: 4, name: "(+)형", icon: <GrAddCircle css={s.circle} />, style: s.circle },
  { id: 5, name: "기타", icon: <HiOutlineArrowUpCircle css={s.circle} />, style: s.circle },
];

export const drugColor: IDrugColor [] = [
  { id: 1, name: "전체",icon:<MdDensitySmall css={s.AllIcon}/>, style: s.AllIcon },
  { id: 2, name: "하양",icon:<FaCircle css={s.white}/>, style: s.white },
  { id: 3, name: "노랑",icon:<FaCircle css={s.yellow}/>,  style: s.yellow },
  { id: 4, name: "주황",icon:<FaCircle css={s.orange}/>,  style: s.orange },
  { id: 5, name: "분홍",icon:<FaCircle css={s.pink}/>,  style: s.pink },
  { id: 6, name: "빨강",icon:<FaCircle css={s.red}/>,  style: s.red },
  { id: 7, name: "갈색",icon:<FaCircle css={s.brown}/>,  style: s.brown },
  { id: 8, name: "연두",icon:<FaCircle css={s.yellowGreen}/>,  style: s.yellowGreen },
  { id: 9, name: "초록",icon:<FaCircle css={s.green}/>,  style: s.green },
  { id: 10,name: "청록",icon:<FaCircle css={s.turquoise}/>,  style: s.turquoise },
  { id: 11,name: "파랑",icon:<FaCircle css={s.blue}/>,  style: s.blue },
  { id: 12,name: "남색",icon:<FaCircle css={s.navy}/>,  style: s.navy },
  { id: 13,name: "자주",icon:<FaCircle css={s.violet}/>,  style: s.violet },
  { id: 14,name: "보라",icon:<FaCircle css={s.purple}/>,  style: s.purple },
  { id: 15,name: "회색",icon:<FaCircle css={s.gray}/>,  style: s.gray },
  { id: 16,name: "검정",icon:<FaCircle css={s.black}/>,  style: s.black },
  { id: 17,name: "투명",icon:<FaCircle css={s.two}/>,  style: s.two },
];

export const drugShape: IDrugShape[] = [
  { id: 1, name: "전체", icon: <MdDensitySmall css={s.AllIcon}  />, style: s.AllIcon },
  { id: 2, name: "원형", icon: <FaRegCircle css={s.circle} />, style: s.circle },
  { id: 3, name: "타원형", icon: <TbOvalVertical css={s.circle} />, style: s.circle },
  { id: 4, name: "사각형", icon: <FaRegSquare css={s.circle} />, style: s.circle },
  { id: 5, name: "반원형", icon: <BiCircleHalf css={s.circle} />, style: s.circle },
  { id: 6, name: "삼각형", icon: <FiTriangle css={s.circle} />, style: s.circle },
  { id: 7, name: "마름모형", icon: <CgShapeRhombus css={s.circle} />, style: s.circle },
  { id: 8, name: "장방형", icon: <LuRectangleHorizontal css={s.circle} />, style: s.circle },
  { id: 9, name: "오각형", icon: <LuPentagon css={s.circle} />, style: s.circle },
  { id: 10, name: "육각형", icon: <MdOutlineHexagon css={s.circle} />, style: s.circle },
  { id: 11, name: "팔각형", icon: <FiOctagon css={s.circle} />, style: s.circle },
];

