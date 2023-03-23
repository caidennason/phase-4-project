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
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

function App() {

  const navigate = useNavigate()
  const {logOut, currentRescue} = useContext(RescuesContext)

  const handleLogout = (e) => {
    e.preventDefault()
    logOut()
  }

  let loggedInStatus
  if (currentRescue){
      // loggedInStatus = `Signed in as: ${currentRescue.name}!` 
      loggedInStatus = <p>
        {`Signed in as: ${currentRescue.name}`} <Image src={currentRescue.image_url} rounded="true" fluid="false"/>
      </p>
  } else {
      loggedInStatus = 'Make sure to sign in to access everything!'
  }

  const logOutButton = <Button onClick={handleLogout}>Logout</Button>
  
  return (
    <>

    <p>{currentRescue ? logOutButton : ''}</p>
  
    <p>{loggedInStatus}</p>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{color: "peachpuff"}} onClick={() => navigate('/')}>Foster Adopter!</Navbar.Brand>
        <Nav>
        <Nav.Link><Link to="/" style={{color: "white"}}>Home</Link></Nav.Link>
        <Nav.Link><Link to="/pets" style={{color: "white"}}>Pets</Link></Nav.Link>
        <Nav.Link><Link to="rescues" style={{color: "white"}}>Rescues</Link></Nav.Link>
        <Nav.Link><Link to='adopters' style={{color: "white"}}>Adopters</Link></Nav.Link>
        <Nav.Link><Link to='login' style={{color: "white"}}>Login</Link></Nav.Link>
        </Nav>
      
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/rescues" element={<Rescues />} />
      <Route path="/adopters" element={<Adopters />} />
      <Route path="/login" element={<Login /> } />
    </Routes>
    </>
  );
}

export default App;
