import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Pages/Signup.js';
import Signup from './Pages/Signup.js';
import Signin from './Pages/Signin.js';
import Signinfalse from './Pages/Signinfalse.js';

function App() {


  return (

        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signinfalse' element={<Signinfalse />} />
        </Routes>
  );
}

export default App;
