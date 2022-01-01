import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import{ LoginContext }from './context/context'
export default function Header() {
  const LoggedIn_LoggedOut = useContext(LoginContext)
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Food Station</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            {LoggedIn_LoggedOut.LoggedIn &&
              <Nav.Link href="/">LogOut</Nav.Link>

            }
            {!LoggedIn_LoggedOut.LoggedIn &&
              <Nav.Link href="/">LogIn</Nav.Link>

            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
