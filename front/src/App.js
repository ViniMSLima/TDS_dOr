import './App.css';
import Download from './testPages/download';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameScreen from './testPages/gamescreen';
import HomePage from './pages/home';
import SideBar from './components/sideBar';


function App() {
  return (
    <>
      < SideBar/>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game' element={<GameScreen />} />
      </Routes>
    </>
  );
}

export default App;