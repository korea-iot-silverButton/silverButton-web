/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import backVideo from "../../../public/video/backVideo.mp4";

export default function Index() {
  const navigate = useNavigate();

  const handleClickMedicine = () => {
    navigate("/medicine/search");
  };

  const handleClickBoard = () => {
    navigate("/board");
  };

  const handleClickMypage = () => {
    navigate("/my-page");
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
            <BsFillPersonLinesFill
              style={{ width: "100px", height: "100px" }}
            />
            마이페이지
          </div>
        </div>
        <div css={s.rowBox}>
          <div onClick={handleClickBoard} css={s.box}>
            <FaClipboardList style={{ width: "100px", height: "100px" }} />
            게시판
          </div>
          <div onClick={handleClickMatching} css={s.box}>
            <MdLocalPostOffice style={{ width: "100px", height: "100px" }} />
            매칭 / 쪽지
          </div>
        </div>
      </div>
    </div>
  );
}
