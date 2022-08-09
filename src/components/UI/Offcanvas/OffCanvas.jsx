import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import classes from './Offcanvas.module.css'

const OffcanvasShow = () => {
  
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);    
    } 

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className={classes.myBtnOffc}>
                Launch
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
        </div>
  ) 
  
}

export default OffcanvasShow