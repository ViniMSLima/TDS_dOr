import './App.css';
import React from 'react';
import HomePage from './pages/home';
import DeletePage from './pages/delete';
import NavBar from './components/navBar';
import AdmSignUp from './pages/admSignUp';
import SideBar from './components/sideBar';
import GameScreen from './pages/gamescreen';
import LoginSignUp from './pages/loginSignUp';
import GameRegister from './pages/gameRegister';
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
            <Route path='/admregister' element={<AdmSignUp />} />
            <Route path='/login' element={<LoginSignUp />} />
            <Route path='/delete' element={<DeletePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/game' element={<GameScreen />} />
            <Route path='/gameregister' element={<GameRegister />} />
          </Routes>
        </AlertProvider>
      </TranslateProvider>
    </>
  );
}

export default App;
