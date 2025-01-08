/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div css={s.main}>
      <div css={s.video}>
        <video css={s.videoBackground} autoPlay loop muted>
          <source src="/video/backVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div css={s.boxContainer}>
        <div css={s.rowBox}>
          
        </div>
      </div>
    </div>
  );
}
