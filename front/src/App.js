import './App.css';
import React from 'react';
import HomePage from './pages/home';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import GameScreen from './pages/gamescreen';
import GameRegister from './pages/gameRegister';
import LoginSignUp from './pages/loginSignUp';
import Register from './testPages/reg';
import { AlertProvider } from './context/alert';
import { Route, Routes } from 'react-router-dom';
import { TranslateProvider } from './context/translate';

function App() {
  return (
    <>
    <TranslateProvider>
        <AlertProvider>
          <SideBar />
          <NavBar />
          <Routes>
            <Route path='/login' element={<LoginSignUp />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/game' element={<GameScreen />} />
            <Route path='/gameregister' element={<Register />} />
          </Routes>
        </AlertProvider>
      </TranslateProvider>
    </>
  );
}

export default App;
