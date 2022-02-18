import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bulma/css/bulma.min.css'

import { Registro } from '../components/Registro/Registro';
import { Login } from '../components/Login/Login';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { UserProfile } from '../components/UserProfile/UserProfile';
import { PublicProfile } from '../components/PublicProfile/PublicProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/profile/:id/:name/*" element={<PublicProfile/>}>
          </Route>
          <Route path='/userprofile/:id/:name' element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;