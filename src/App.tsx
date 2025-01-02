import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from './views/Calendar/Calendar'
import Authentication from './views/Authentication'
import Index from './views/drug/medicineSearch'
import SignUp from './views/Authentication/SignUp'
import SignIn from './views/Authentication/SignIn'


export default function App() {
  return (
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/auth/signin' element={<SignIn /> } />
          
          <Route path='/medicinesearch' element={<Index />} />

    </Routes>
  )
}
