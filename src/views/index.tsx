import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Container from '../layouts/Container';
import Authentication from './Authentication';
function Index() {
    
  return (
    <>
      {/* 빈 Fragment: 최상위 단일 노드를 위한 틀*/}
      <Routes>
        <Route element={<Container />}>
        

        </Route>
      </Routes>
    </>
    // <> </> 두번 쓰면 안된다.
  );
}

export default Index;
