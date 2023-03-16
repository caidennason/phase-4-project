import logo from '../logo.svg';
import '../App.css';
import React, {useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home"
import Pets from "./Pets"
import Rescues from "./Rescues"
import Adopters from "./Adopters"

function App() {

  // get pets -- make sure this is reliant on whether or not someone is signed in with useContext
  // useEffect(() => {
  //   fetch('/pets')
  //   .then(res => res.json())
  //   .then(allPets => console.log('pets:', allPets))
  // }, [])
  //

  // get rescues
  useEffect(() => {
    fetch('/rescues')
    .then(res => res.json())
    .then(allRescues => console.log('rescues:', allRescues))
  }, [])
  //

  // get adopters 
  useEffect(() => {
    fetch('/adopters')
    .then(res => res.json())
    .then(allAdopters => console.log('adopters:', allAdopters))
  }, [])
  //

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
