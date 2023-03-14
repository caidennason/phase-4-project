import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home"
import Pets from "./Pets"
import Rescues from "./Rescues"

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="rescues">Rescues</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/rescues" element={<Rescues />} />
    </Routes>
    </>
  );
}

export default App;
