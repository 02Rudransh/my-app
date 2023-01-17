import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import My_Blog from './components/My_Blog';
import Resume from './components/Resume';
import Services from './components/Services';


function App() {
  return (
   <div>
    <Home/>
    <About/>
    <Resume/>
    <Services/>
    <My_Blog/>
   </div>
  );
}

export default App;
