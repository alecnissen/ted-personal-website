import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-content-wrapper'>
    
    <h1>Theodore Karamanski</h1>

    <h2>Professor Emeritus, Loyola University Chicago</h2>


    <div className='footer-nav-links-container'> 

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

    <h1>© 2025</h1>

    </div>
  )
}
