import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from  "react-router-dom"



import Landing from './Pages/Landing';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import {Nav, Footer} from './Components/index'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Landing/> } />
      <Route path='/Signup' element={ <Signup/> } />
      <Route path='/Login' element={ <Login/> } />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);


