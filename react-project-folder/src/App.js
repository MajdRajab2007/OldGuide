import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Pages/Signup.js';
import Signup from './Pages/Signup.js';
import Signin from './Pages/Signin.js';
import Signinfalse from './Pages/Signinfalse.js';
import Home from './Pages/Home.js';
import AboutUs from './Pages/AboutUs.js';
import ContactUs from './Pages/ContactUs.js';
import OurServ from './Pages/OurServ.js';


function App() {


    return (

          <>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/our-services' element={<OurServ />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signinfalse' element={<Signinfalse />} />
            </Routes>

          </>

  );
}

export default App;
