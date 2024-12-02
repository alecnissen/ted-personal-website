import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  return (
    <div className='header-wrapper'>
    
    <div className='header-button-links-container'>
        <button>Home</button>
        <button>Biography</button>
        <button>Publications & Lectures</button>
        <button>Gallery</button>
        <button>Contact</button>
    </div>


    {/* <Button variant="primary" className="d-lg-none" >
        Launch
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas> */}


    </div>
  )
}
