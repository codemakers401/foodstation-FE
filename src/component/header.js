import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import{ LoginContext }from './context/context'
import cookie from 'react-cookies';

export default function Header() {

  const LoggedIn_LoggedOut = useContext(LoginContext)
  return (
    <div>
      <Navbar bg="dark" variant="blue">
        <Container>
          <Navbar.Brand href="#home">Food Station</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            {LoggedIn_LoggedOut.LoggedIn &&

              <Nav.Link href="/" onClick={LoggedIn_LoggedOut.logoutFunction}>LogOut</Nav.Link>
            }
            
            {!LoggedIn_LoggedOut.LoggedIn &&
              <Nav.Link href="/signin">Sign In</Nav.Link>

            }
                        {!LoggedIn_LoggedOut.LoggedIn &&

                          <Nav.Link href="/signup">Sign Up</Nav.Link>
                        }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
