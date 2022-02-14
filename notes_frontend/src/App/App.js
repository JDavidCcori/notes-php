import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bulma/css/bulma.min.css'

import { Registro } from '../components/Registro/Registro';
import { Login } from '../components/Login/Login';
import { Dashboard } from '../components/Dashboard/Dashboard';

function App() {


  const [conected, setConected] =useState(null)

  const getAuth = (value) => {
    setConected(value)
  }

  useEffect(() => {

  }, [conected])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/login' element={<Login getAuth={getAuth}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;