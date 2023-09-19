import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { allDrivers } from './redux/actions';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Galeria from './components/Galeria/Galeria';
import Detail from './components/Detail/Detail';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [access, setAccess] = useState(true);



  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  useEffect(() => {
    dispatch(allDrivers());
  }, []);


  const login = async (dataUser) => {

    try {
      const response = await axios.post('http://localhost:3001/login', { ...dataUser });
      const { data } = response;

      if (data) {
        setAccess(true);
        navigate('/home');
      } else {
        alert('El usuario o contraseña es incorrecto');
      }
    } catch (error) {
      alert('El usuario o contraseña es incorrecto');
    }
  };

  localStorage.setItem('prevId', JSON.stringify(''))


  return (
    <div className='App'>

      
        {location.pathname !== '/' && <NavBar />}
      

      <Routes>

        <Route path='/' element={<LandingPage login={login} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/drivers' element={<Galeria />} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/createRacer' element={'Form'} />




      </Routes>

    </div>
  )
}

export default App
