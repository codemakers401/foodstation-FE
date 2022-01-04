import React, { useContext, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LoginContext } from './context/context'
import cookie from 'react-cookies';
import black from '../logo/black.jpg'
import './header.scss'
import { MdMenu } from "react-icons/md";
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Header() {

  const LoggedIn_LoggedOut = useContext(LoginContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Offcanvas show={show} onHide={handleClose} className='canvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='title'>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="#features">Profile</a></li>
            {LoggedIn_LoggedOut.LoggedIn &&

              <li><a href="/" onClick={LoggedIn_LoggedOut.logoutFunction}>Log Out</a></li>
            }

            {!LoggedIn_LoggedOut.LoggedIn &&
              <li><a href="/signin">Log In</a></li>

            }
            <li><a href="/signup">Sign up</a></li>
            <li><a href="/about">About Us</a></li>

          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar className='nav'>
        <Container>
          <MdMenu onClick={handleShow} size={70} color={'white'} />

          <a href='#home' className="black">
            <img
              src={black}
              width="200"
              height="200"
            />
          </a>


        </Container>
      </Navbar>
    </div>
  )
}
