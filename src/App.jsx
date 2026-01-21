import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./components/pages/Home";
import { Proyectos } from './components/pages/Proyectos';

function App() {

  return (
    <>
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Proyectos" element={<Proyectos />}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
