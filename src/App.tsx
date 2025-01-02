import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from './views/Calendar/Calendar'
import Authentication from './views/Authentication'
import Board from './views/board'
import CreatePost from './views/board/CreatePost'
import PostDetail from './views/board/PostDetail'
import EditPost from './views/board/EditPost'
import Index from './views/drug/medicineSearch'
import SignUp from './views/Authentication/SignUp'
import SignIn from './views/Authentication/SignIn'
import MedicineSearch from './views/drug/medicineSearch'
import MedicineDetailPage from './views/drug/medicineDetailPage'
import MedicineSearchList from './views/drug/medicineListPage'
import Matching from './views/Matching/CaregiverMatching'
import MessageBox from './views/Message/MessageBox'



export default function App() {
  return (
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/auth/signin' element={<SignIn /> } />
          <Route path='/medicinesearch' element={<Index />} />

          <Route path="/calendar" element={<Calendar />} />
          <Route path="/auth" element={<Authentication />} />

          <Route path="/medicineSearch" element={<MedicineSearch />} />
          <Route path="/medicineListPage" element={<MedicineSearchList />} />
          <Route path="/medicineDetailPage" element={<MedicineDetailPage />} />

          <Route path="/board" element={<Board />} />
          <Route path="/board/create" element={<CreatePost />} />
          <Route path="/board/:id" element={<PostDetail />} />
          <Route path="/board/:id/edit" element={<EditPost />} />

          <Route path="/matching" element={<Matching />} />
          <Route path="/message" element={<MessageBox />} />

    </Routes>
  )
}
