import './App.css';
import { useState } from 'react'
import LandingPage from './Landing/LandingPage';
import MainPage from './UserApp/MainPage';
import { Provider } from './Hooks/Context';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const  [ username, setUserName ] = useState("")
  return (
    <Provider value={[username, setUserName]}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />}/>
     <Route path='/app' element={<MainPage />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
