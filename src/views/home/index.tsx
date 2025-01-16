/** @jsxImportSource @emotion/react */
import HealthMegazineTop5 from "../../components/HealthMagazine/HealthMegazineTop5";
import * as s from "./style";
import { useNavigate, useParams } from "react-router-dom";
import kakaoIcon2 from "./kakaoIcon2.png";
import naverIcom from "./naverIcom.png";
import mainIcon from "./mainIcon.png";
import useAuthStore from "../../stores/auth.store";
import { useEffect, useState } from "react";
import axios from "axios";
import SaveMedicineHome from "../../components/saveMedicine/saveMedicineHome";
import { useCookies } from "react-cookie";



const getTokenFromCookies = (): string | null => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    if (cookie.startsWith("token=")) {
      return cookie.substring("token=".length);
    }
  }
  return null;
};

export default function SaveMedicineHomeList() {
  const { userId } = useParams<{ userId: string }>();


  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");




  
  const loginNavigate = () => {
    navigate("/auth");
  };
  
  const { isAuthenticated} = useAuthStore();
  const token = getTokenFromCookies();

  const fetchSchedule = async () => {
    if (!token) return; // 토큰이 없으면 일정 불러오지 않음

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4040/api/v1/schedule/today", {
        headers: {
          Authorization: `Bearer ${token}`, // 인증 헤더 추가
        },
      });

      if (response.data.result) {
        setScheduleData(response.data.data);
        console.log(response.data.data);
      } else {
        setError("일정을 불러오는 데 문제가 발생했습니다.");
      }
    } catch (err) {
      setError("일정을 불러오는 데 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // 인증 상태가 변경될 때마다 일정 불러오기
  useEffect(() => {
    if (isAuthenticated) {
      fetchSchedule();
    }
  }, [isAuthenticated]);

  console.log(isAuthenticated+"인증");
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

        {/* 로그인 상태에 따라 다른 UI 표시 */}
        <div css={s.snsLogin}>
          <div css={s.loginBox}>
            {isAuthenticated ? (
              <>
                <div css={s.loginTitle}>오늘의 일정</div>
                <div>
                  {loading ? (
                    <div>일정을 불러오는 중...</div>
                  ) : error ? (
                    <div>{error}</div>
                  ) : scheduleData.length > 0 ? (
                    scheduleData.map((schedule) => (
                      <div key={schedule.id}>
                        <div css={s.listStyle}>📅{schedule.task}</div>
                      </div>
                    ))
                  ) : (
                    <div>오늘의 일정이 없습니다.</div>
                  )}
                </div>
                
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
