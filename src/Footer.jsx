import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-content-wrapper'>
    
    <h1>Professor Ted Karamanski</h1>

    <h4>Public History Director, Loyola University Chicago</h4>


    <div className='footer-nav-links-container'> 

    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link')}>
    <button>Home</button>
    </NavLink>

    <p>Biography</p>
    <p>Publications & Lectures</p>
    <p>Gallery</p>
    <p>Contact</p>
    </div>

    <h1>© 2025</h1>

    </div>
  )
}
