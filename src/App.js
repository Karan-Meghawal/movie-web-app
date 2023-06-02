import React from 'react';
import { Routes,Route } from 'react-router-dom';
import More from './pages/More'

import './App.css';
import Home from './pages/Home'
function App() {
  return (
   <>
   
   <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/movie'  element={<More />} />
      </Routes>
      
   </>
  );
}

export default App;
