import React from 'react'
import RootLayout from './Components/rootLayout/RootLayout'
import RootContainer from './Components/rootContainer/RootContainer'
import { Route, Routes } from 'react-router-dom'
import MyPage from './views/myPage/myPage'
import Calendar from './views/Calendar/Calendar'
import Header from './layouts/Header'
import Authentication from './views/Authentication'


export default function App() {
  return (
    
    // <RootLayout>
    //   <RootContainer>
    //     <Routes>

    //       {/* <Route path='/' element={<MyPage />} /> */}
    //       <Route path='/calendar' element={<Calendar />} />
          
    //     </Routes>
    //   </RootContainer>
    // </RootLayout>
    <Routes>
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/auth' element={<Authentication />} />
    </Routes>
  )
}
