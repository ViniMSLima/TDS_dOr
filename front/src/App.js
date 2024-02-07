import './App.css';
import React from 'react';
import HomePage from './pages/home';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import GameScreen from './testPages/gamescreen';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game' element={<GameScreen />} />
      </Routes>
    </>
  );
}

export default App;