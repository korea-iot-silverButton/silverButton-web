/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import backVideo from "../../../public/video/backVideo.mp4";
import { RiHealthBookFill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";
import { LuClipboardPenLine } from "react-icons/lu";
import { RiHealthBookLine } from "react-icons/ri";

export default function Index() {
  const navigate = useNavigate();

  const handleClickMedicine = () => {
    navigate("/medicine/search");
  };

  const handleClickBoard = () => {
    navigate("/board");
  };

  const handleClickMypage = () => {
    navigate("/my-page/calendar");
  };

  const handleClickMatching = () => {
    navigate("/matching");
  };

  return (
    <div css={s.main}>
      <div css={s.boxContainer}>
        <div css={s.rowBox}>
          <div onClick={handleClickMedicine} css={s.box}>
            <AiOutlineMedicineBox style={{ width: "100px", height: "100px" }} />
            약품 검색
          </div>
          <div onClick={handleClickMypage} css={s.box}>
            <FaCalendarCheck
              style={{ width: "100px", height: "100px" }}
            />
            캘린더
          </div>
        </div>
        <div css={s.rowBox1}>
          <div onClick={handleClickBoard} css={s.box}>
            <LuClipboardPenLine style={{ width: "100px", height: "100px" }} />
            게시판
          </div>
          <div onClick={handleClickMatching} css={s.box}>
            <RiHealthBookLine style={{ width: "100px", height: "100px" }} />
            헬스매거진
          </div>
        </div>
      </div>
    </div>
  );
}
