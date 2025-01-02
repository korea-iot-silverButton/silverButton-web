import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from './views/Calendar/Calendar'
import Authentication from './views/Authentication'
import Index from './views/drug/medicineSearch'


export default function App() {
  return (
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
          
          <Route path='/medicinesearch' element={<Index />} />

    </Routes>
  )
}
