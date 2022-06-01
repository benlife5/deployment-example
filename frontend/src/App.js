import React from 'react'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccessTokenProvider from './Contexts/accessTokenContext'

function App() {

  const jsx = 
    <AccessTokenProvider>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/home' element={<HomePage/>}/> 
      </Routes>
    </BrowserRouter>
    </AccessTokenProvider>


  return (
    <>
    {jsx}
    </>
  );
}

export default App;
