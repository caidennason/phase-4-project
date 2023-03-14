import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home"
import Pets from "./Pets"
import Rescues from "./Rescues"
import Adopters from "./Adopters"

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="rescues">Rescues</Link></li>
        <li><Link to='adopters'>Adopters</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/rescues" element={<Rescues />} />
      <Route path="/adopters" element={<Adopters />} />
    </Routes>
    </>
  );
}

export default App;
