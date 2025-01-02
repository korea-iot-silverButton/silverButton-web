import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from './views/Calendar/Calendar'
import Authentication from './views/Authentication'
import MedicineSearch from './views/drug/medicineSearch'
import MedicineSearchList from './views/drug/medicineListPage'
import MedicineDetailPage from './views/drug/medicineDetailPage'


export default function App() {
  return (
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
          











          <Route path='/medicineSearch' element={<MedicineSearch />} />
          <Route path='/medicineListPage' element={<MedicineSearchList />} />
          <Route path='/medicineDetailPage' element={<MedicineDetailPage />} />



    </Routes>
  )
}
