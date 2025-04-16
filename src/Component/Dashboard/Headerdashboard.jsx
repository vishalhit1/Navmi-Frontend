import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Headerdashboard = () => {
  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} id="userdashboard" className="bg-body-tertiary">
          <Container fluid>
            <Link to="/"><Navbar.Brand><img src={logo} alt="" /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{justifyContent:'end'}}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i className="fa fa-user pe-2" />Vishal Kunwar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Headerdashboard
