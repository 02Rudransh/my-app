import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import My_Blog from './components/My_Blog';
import Resume from './components/Resume';
import Footer from './components/route/Footer';
import Navbar from './components/route/Navbar';
import TheAbout from './components/route/TheAbout';
import TheContact from './components/route/TheContact';
import TheHome from './components/route/TheHome';
import Services from './components/Services';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<TheHome/>}/>
        <Route path='/about' element={<TheAbout/>}/>
        <Route path='/contact-us' element={<TheContact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    {/* <Home/>
    <About/>
    <Resume/>
    <Services/>
    <My_Blog/> */}
   </div>
  );
}

export default App;
