import './App.css';
import React from 'react';
import HomePage from './pages/home';
import Delete from './pages/delete';
import DeletePage from './pages/delete';
import NavBar from './components/navBar';
import AdmSignUp from './pages/admSignUp';
import SideBar from './components/sideBar';
import Register from './pages/gameRegister';
import GameScreen from './pages/gamescreen';
import LoginSignUp from './pages/loginSignUp';
import { AlertProvider } from './context/alert';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/protectedRoutes';
import { TranslateProvider } from './context/translate';


function App() {
  return (
    <>
    <TranslateProvider>
        <AlertProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<LoginSignUp />} />
            <Route path='/home' element={<ProtectedRoute errorPage={<p>Acces denied</p>} targetPage={<SideBar />}/>}>
              <Route path='admregister' element={<AdmSignUp />} />
              <Route path='delete' element={<DeletePage />} />
              <Route path='' element={<HomePage />} />
              <Route path='game' element={<GameScreen />} />
              <Route path='gameregister' element={<Register />} />
              <Route path='delete' element={<Delete />} />
            </Route>
          </Routes>
        </AlertProvider>
      </TranslateProvider>
    </>
  );
}

export default App;
