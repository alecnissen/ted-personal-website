import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import hamburgerMenuImg from './Assets/hamburger-menu-svgrepo-com.svg'

export default function Header() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='header-wrapper'>
    
    <div className='header-button-links-container'>
        <button>Home</button>
        <button>Biography</button>
        <button>Publications & Lectures</button>
        <button>Gallery</button>
        <button>Contact</button>
    </div>



    {/* <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
    </Button> */}

    {/* <button className="d-lg-none" onClick={handleShow}> 
      <img src={hamburgerMenuImg}></img>
    </button> */}

    <img src={hamburgerMenuImg} className="d-lg-none" onClick={handleShow}></img>

    <h1 className='prof-k-header-styles'>Prof Ted Karamanski</h1>

      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.

        <button>Home</button>
        <button>Biography</button>
        <button>Publications & Lectures</button>
        <button>Gallery</button>
        <button>Contact</button>
        </Offcanvas.Body>
      </Offcanvas>


    </div>
  )
}
