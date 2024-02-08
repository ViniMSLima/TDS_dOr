import './App.css';
import React from 'react';
import LoginSignUp from './pages/loginSignUp';
import HomePage from './pages/home';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import GameScreen from './testPages/gamescreen';
import GameRegister from './pages/gameRegister';
import { Route, Routes } from 'react-router-dom';
import { AlertProvider } from './context/alert';

function App() {
  return (
    <>
      <AlertProvider>
        <SideBar />
        <NavBar />
        <Routes>
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/game' element={<GameScreen />} />
          <Route path='/gameRegister' element={<GameRegister />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;