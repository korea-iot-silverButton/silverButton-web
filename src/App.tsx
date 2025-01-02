import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from './views/Calendar/Calendar'
import Authentication from './views/Authentication'
import Message from './views/Message/MessageBox'
import Matching from './views/Matching/CaregiverMatching'


export default function App() {
  return (
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/message' element={<Message />} />
          <Route path='/matching' element={<Matching />} />
    </Routes>
  )
}
