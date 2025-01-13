/** @jsxImportSource @emotion/react */
import HealthMegazineTop5 from "../../components/HealthMagazine/HealthMegazineTop5";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import kakaoIcon2 from "./kakaoIcon2.png";
import naverIcom from "./naverIcom.png";
import mainIcon from "./mainIcon.png";

export default function Index() {
  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/auth");
  };

  return (
    <div css={s.main}>
      <div css={s.video}>
        <video css={s.videoBackground} autoPlay loop muted>
          <source src="/video/backVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div css={s.homeContentContainer}>
        <div css={s.healthMegazineTop5}>
          <div css={s.top5Box}>
            <div css={s.top5Title}>헬스매거진 TOP5</div>
            <div css={s.magazineBox}><HealthMegazineTop5 /></div>
          </div>
        </div>
        {/* sns 간편 로그인 */}
        <div css={s.snsLogin}>
          <div css={s.loginBox}>
            <div css={s.loginTitle}>간편 SNS 로그인 서비스</div>
            <div css={s.titleContetn}>
              네이버 / 카카오톡으로 간편하게 로그인 하세요.
            </div>
            <div css={s.loginAll}>
              <div css={s.naverLogin}>
                <img src={naverIcom} alt="" css={s.naverIcon} />
                네이버로 로그인
              </div>
              <div css={s.kakaoLogin}>
                <img src={kakaoIcon2} alt="" css={s.kakaoIcon} />
                카카오로 로그인
              </div>
              <div css={s.generalLogin} onClick={loginNavigate}>
                <img src={mainIcon} alt="" css={s.kakaoIcon} />
                일반회원 로그인
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
