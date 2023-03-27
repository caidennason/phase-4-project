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
import MyRescue from './MyRescue';
import Figure from 'react-bootstrap/Figure'

function App() {

  const navigate = useNavigate()
  const {logOut, currentRescue} = useContext(RescuesContext)

  const handleLogout = (e) => {
    e.preventDefault()
    logOut()
  }

  console.log(currentRescue)

  let loggedInStatus
  if (currentRescue){
      loggedInStatus = 
        <Figure> 
          <Figure.Image src={currentRescue.image_url}/>
            <Figure.Caption>{`Signed in as: ${currentRescue.name}`}</Figure.Caption> 
        </Figure>
  } else {
      loggedInStatus = 'Welcome to Foster Adopter! Log in to access your Rescue, Pets and Adopters.'
  }

  let rescueProfile
  if (currentRescue){
    rescueProfile =
    <Nav.Link><Link to="/myrescue" style={{color: "peachpuff"}}>My Rescue</Link></Nav.Link>
  } else {
    rescueProfile = ''
  }

  const logOutButton = <Button size ="sm" variant= "dark" style={{color:'peachpuff'}}onClick={handleLogout}>Logout</Button>
  const loginLink = <Nav.Link><Link to='login' style={{color: "peachpuff"}}>Login</Link></Nav.Link>
  
  return (
    <>
    <p>{currentRescue ? logOutButton : ''}</p>
    <p onClick={(() => navigate('/myrescue'))}>{loggedInStatus}</p>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{color: "peachpuff"}} onClick={() => navigate('/')}>Foster Adopter!</Navbar.Brand>
        <Nav>
        <Nav.Link><Link to="/" style={{color: "peachpuff"}}>Home</Link></Nav.Link>
        {currentRescue ? <Nav.Link><Link to="/pets" style={{color: "peachpuff"}}>Pets</Link></Nav.Link> : ''}
        {currentRescue ? <Nav.Link><Link to="rescues" style={{color: "peachpuff"}}>Rescues</Link></Nav.Link> : ''}
        {currentRescue ? <Nav.Link><Link to='adopters' style={{color: "peachpuff"}}>Adopters</Link></Nav.Link> : ''}
        {currentRescue ? rescueProfile : loginLink}
        </Nav>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/rescues" element={<Rescues />} />
      <Route path="/adopters" element={<Adopters />} />
      <Route path="/login" element={<Login /> } />
      <Route path="myrescue" element={<MyRescue />}/>
    </Routes>
    </>
  );
}

export default App;
