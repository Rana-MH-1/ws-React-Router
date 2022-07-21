import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
//import {Link} from 'react-router-dom'

const Navbarr = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            {/* <Link to={'/'}>HOME2</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr