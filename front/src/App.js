import './App.css';
import React from 'react';
import Login from './pages/login';
import HomePage from './pages/home';
import Register from './pages/register';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import GameScreen from './testPages/gamescreen';
import GameRegister from './pages/gameRegister';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/game' element={<GameScreen />} />
        <Route path='/gameRegister' element={<GameRegister />} />
      </Routes>
    </>
  );
}

export default App;