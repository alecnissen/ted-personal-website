import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import hamburgerMenuImg from './Assets/hamburger-menu-svgrepo-com (3).svg'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Header() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='header-wrapper'>
    
    <div className='header-button-links-container'>
        <NavLink to="/">
        <button>Home</button>
        </NavLink>
        <NavLink to="/BiographyPage">
        <button>Biography</button>
        </NavLink>
        <button>Publications & Lectures</button>
        <button>Gallery</button>
        <button>Contact</button>
    </div>


    <img src={hamburgerMenuImg} className="d-lg-none" onClick={handleShow}></img>

    <h1 className='prof-k-header-styles'>Professor Ted Karamanski</h1>

      <Offcanvas show={show} onHide={handleClose} className='header-offcanvas-styles'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <div className='offcanvas-header-navlinks-styles'> 

        <button>Home</button>
        <button>Biography</button>
        <button>Publications & Lectures</button>
        <button>Gallery</button>
        <button>Contact</button>

        

        </div>


        </Offcanvas.Body>
      </Offcanvas>


    </div>
  )
}
