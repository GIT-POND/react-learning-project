import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from  "react-router-dom"



import Landing from './Pages/Landing';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import { AuthProvider } from './Context/AuthProvider';
import RequireAuth from './Context/RequireAuth';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import Friends from './Pages/Friends';

// import {Nav, Footer} from './Components/index'



ReactDOM.render(
  <AuthProvider> {/*Enables all children tags to consume context*/}
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path='/' element={ <Landing/> } />
        <Route path='/Signup' element={ <Signup/> } />
        <Route path='/Login' element={ <Login/> } />

        {/* Protected Routes */}
        < Route element={<RequireAuth/>}> 
          <Route path='/Home' element={ <Home/> } />
          <Route path='/Profile' element={ <Profile/> } />
          <Route path='/Settings' element={ <Settings/> } />
          <Route path='/Friends' element={ <Friends/> } />
        </Route>

      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);


