import React from "react";
import logo from "./UNTRON.png";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//lib icon
import { HouseFill } from 'react-bootstrap-icons';
import { InfoSquareFill } from 'react-bootstrap-icons';
import { QuestionSquareFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

export default function Header(props) {
  return (
    <Navbar bg="primary" expand="lg">
            <Navbar.Brand>
              <Link to={'/'}></Link>
              <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <HouseFill className="Icon-header"/>
                  <Link to={'/'} className="Text-header"> Beranda </Link>
                </Nav.Link>

                <Nav.Link>
                  <InfoSquareFill className="Icon-header"/>
                  <span><Link to={'/news'} className="Text-header"> Berita </Link></span>
                </Nav.Link>

                <Nav.Link>
                  <QuestionSquareFill className="Icon-header"/>
                  <span><Link to={'/help'} className="Text-header"> Bantuan </Link></span>
                </Nav.Link>

                <Nav.Link>
                  <PersonFill className="Icon-header"/>
                  <span><Link to={'/about'} className="Text-header"> Tentang Saya </Link></span>
                </Nav.Link>

                <NavDropdown className="Text-header" 
                  title={<span className="Text-header">Galeri</span>} >
                  <NavDropdown.Item href="#">Shortcut 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Shortcut 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">Shortcut 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Shortcut terpisah</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Search className="Icon-header"></Search>
              </Form>
            </Navbar.Collapse>
          </Navbar>

  );
}
