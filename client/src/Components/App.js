import logo from '../logo.svg';
import '../App.css';
import React, {useContext} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home"
import Pets from "./Pets"
import Rescues from "./Rescues"
import Adopters from "./Adopters"
import Login from "./Login"
import { RescuesContext } from '../Context/RescueContext';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/esm/Button';

function App() {

  const {logOut} = useContext(RescuesContext)

  const handleLogout = (e) => {
    e.preventDefault()
    console.log('Logged out')
    logOut()
  }

  return (
    <>
    <Button onClick={handleLogout}>Logout</Button>
    <Navbar>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="rescues">Rescues</Link></li>
        <li><Link to='adopters'>Adopters</Link></li>
        <li><Link to='login'>Login</Link></li>
      </ul>
    </Navbar>
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
