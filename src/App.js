import Example from './printcompnent';
import {Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Example/> */}
    <Navbar collapseOnSelect expand="xl"  variant="light"   style={{padding:"20px"}}>
                {/* <Navbar.Brand style={{fontSize:"30px"}} href="#home"><img src={logo} alt="logo" style={{width:"196px", height:"64px"}}/></Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto" style={{fontSize:"20px"}} >  
                        <Nav.Link href="#PB" className="navLink">Personal Banking</Nav.Link> 
                          <Nav.Link href="#BB" className="navLink">Business Banking</Nav.Link>
                        <Nav.Link href="#CB" className="navLink">Corporate Banking</Nav.Link>
                      <Nav.Link href="#CA" className="navLink">Cards & ADC</Nav.Link>
                      {/* <Nav.Link href="#BA" className="navLink">Banks & ATM</Nav.Link> */}
                    <Nav.Link href="#AA" className="navLink">About Us</Nav.Link>
                 
                  </Nav>
                {/* Nav Bar Right */}
                <Nav style={{fontSize:"20px"}} variant="pills" activeKey="3">
                  <Nav.Item>
                    <button class="btn btn-outline-primary btn-lg">Log on</button>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
    </div>
  );
}

export default App;
