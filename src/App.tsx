import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from './views/Calendar/Calendar'
import Authentication from './views/Authentication'
import MessageBox from './views/Message/MessageBox'
import Matching from './views/Matching/CaregiverMatching'
import MessageCompose from './views/Message/MessageCompose'
import MessageDetails from './views/Message/MessageDetails'
import MessageList from './views/Message/MessageList'
import MessageTab from './views/Message/MessageTab'
import Pagination from './views/Message/Pagination'

export default function App() {
  return (
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/message' element={<MessageBox />} />
          <Route path='/matching' element={<Matching />} />

          <Route path='/medicinesearch' element={<Index />} />

    </Routes>
  )
}
