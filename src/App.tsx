import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./views/home";
import "./App.css";

import MedicineSearch from "./views/drug/medicineSearch";
import MedicineSearchList from "./views/drug/medicineListPage";
import MedicineDetailPage from "./views/drug/medicineDetailPage";

import Authentication from "./views/authentication";
import SignUp from "./views/authentication/signUp";
import FindId from "./views/authentication/findId";
import FindPassword from "./views/authentication/findPassword";
import VerifyId from "./views/authentication/verifyId";
import VerifyPassword from "./views/authentication/verifyPassword";

import Board from "./views/board";
import CreateBoard from "./views/board/CreateBoard";
import BoardDetail from "./views/board/BoardDetail";
import EditBoard from "./views/board/EditBoard";

import MyPage from "./views/authentication/myPage";
import Resign from "./views/authentication/resign";
import Calendar from "./views/calendar/Calendar";
import SaveMedicine from "./views/authentication/myPage/saveMedicine"

import Matching from "./views/matching/CaregiverMatching"
import MatchingManage from "./views/matching/MatchingManage";
import CaregiverDetail from "./views/matching/CaregiverDetail"
import RootLayout from "./layouts/rootLayout/RootLayout";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

import HeaderLayout from "./layouts/headerLayout/HeaderLayout";
import FooterLayout from "./layouts/footerLayout/FooterLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import MessageBox from "./views/message/MessageBox";

import HealthMagazineList from "./views/healthMagazine/healthMagazineList"
import HealthMagazineDetail from "./views/healthMagazine/healthMagazineDetail"
import PasswordPage from "./views/authentication/passwordPage";



export default function App() {

  return (
    <RootLayout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>

      <MainLayout>
        <Routes>
          {/* AUTH 인증없는 페이지 - 토큰 필요없는 페이지 */}

          <Route path="/" element={<Home />} />

          <Route path="/health-magazine" element={<HealthMagazineList/>}/>
          <Route path="/health-magazine/:id" element={<HealthMagazineDetail/>}/>

          

          {/* 약품 검색기능 */}
          <Route
            path="/medicine/*"
            element={
              <Routes>
                <Route path="/search" element={<MedicineSearch />} />
                <Route path="/list-page" element={<MedicineSearchList />} />
                <Route path="/detail-page" element={<MedicineDetailPage />} />
              </Routes>
            }
          />

          {/* 회원가입 / 로그인 기능 */}
          <Route path="/auth" element={<Authentication />} />
          <Route path="/passwordpage" element={<PasswordPage />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/findPassword" element={<FindPassword />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/verifyId" element={<VerifyId />} />
          <Route path="/verifyPassword" element={<VerifyPassword />} />

          {/* 게시판 - 로그인 필요 X */}

          <Route
            path="/board/*"
            element={
              <Routes>
                <Route path="/" element={<Board />} />
                <Route path="/:id" element={<BoardDetail />} />
                <Route path="/create" element={<CreateBoard />} />
                <Route path="/edit/:id" element={<EditBoard />} />
              </Routes>
            }
          />

          {/* AUTH 인증 필요 페이지 */}

          {/* 마이페이지 */}
          <Route
            path="/my-page/*"
            element={
              <Routes>
                
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/resign" element={<Resign />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/save-medicine" element={<SaveMedicine />} />
                
              </Routes>
            }
          />

          {/* 메시지 */}
          
        <Route path="/message" element={<MessageBox />} />
        {/* <Route path="/message/:id" element={<MessageDetails />} />
        <Route path="/message/compose" element={<MessageCompose />} />
        <Route path="/message/sent" element={<MessageSent />} />
        <Route path="/message/receive" element={<MessageReceive />} />  */}
        

          <Route
            path="/matching/*"
            element={
              <Routes>
                <Route path="/" element={<Matching />} />
                <Route path="/:id" element={<CaregiverDetail />} />
                <Route path="/manage" element={<MatchingManage />} />
              </Routes>
            }
          />
        </Routes>



      </MainLayout>
      
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </RootLayout>
  );
}
