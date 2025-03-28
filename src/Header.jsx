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
        <NavLink title='Homepage' to="/" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Home</button>
        </NavLink>
        <NavLink title='Biography' to="/BiographyPage" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Biography</button>
        </NavLink>
        <NavLink title='Publications' to="/Publications" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Publications & Lectures</button>
        </NavLink>
        <NavLink title='Gallery' to="/GalleryPage" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Gallery</button>
        </NavLink>
        <NavLink title='Contact' to="/Contact" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Contact</button>
        </NavLink>

    </div>


    <img src={hamburgerMenuImg} className="d-lg-none" onClick={handleShow} alt='dropdown-menu-icon'></img>

    <h1 className='prof-k-header-styles'>Theodore Karamanski</h1>

      <Offcanvas show={show} onHide={handleClose} className='header-offcanvas-styles'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <div className='offcanvas-header-navlinks-styles'> 


        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Home</button>
        </NavLink>
        <NavLink to="/BiographyPage" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Biography</button>
        </NavLink>
        <NavLink to="/Publications" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Publications & Lectures</button>
        </NavLink>
        <NavLink to="/GalleryPage" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Gallery</button>
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
        <button>Contact</button>
        </NavLink>

        

        </div>


        </Offcanvas.Body>
      </Offcanvas>


    </div>
  )
}
