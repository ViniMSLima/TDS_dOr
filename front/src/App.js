import './App.css';
import React from 'react';
import HomePage from './pages/home';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Download from './testPages/download';
import GameScreen from './testPages/gamescreen';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/home' element={<Download />} />
        <Route path='/game' element={<GameScreen />} />
      </Routes>
    </>
  );
}

export default App;