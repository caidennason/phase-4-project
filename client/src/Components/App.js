import logo from '../logo.svg';
import '../App.css';
import React, {useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home"
import Pets from "./Pets"
import Rescues from "./Rescues"
import Adopters from "./Adopters"
import Login from "./Login"
import { RescuesContext } from '../Context/RescueContext';

function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="rescues">Rescues</Link></li>
        <li><Link to='adopters'>Adopters</Link></li>
        <li><Link to='login'>Login</Link></li>
      </ul>
    </nav>
{/* <RescuesContext.Provider> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/rescues" element={<Rescues />} />
      <Route path="/adopters" element={<Adopters />} />
      <Route path="/login" element={<Login /> } />
    </Routes>
{/* </RescuesContext.Provider> */}
    </>
  );
}

export default App;
