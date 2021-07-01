import React from "react";
import logo from "../UNTRON.png";
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
      <Navbar.Brand href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <HouseFill className="Icon-header"/>
		      	<span className="Text-header">Beranda</span>
          </Nav.Link>

          <Nav.Link href="/news.js">
            <InfoSquareFill className="Icon-header"/>
			      <span className="Text-header">Berita</span>
          </Nav.Link>

          <Nav.Link href="/help.js">
            <QuestionSquareFill className="Icon-header"/>
			      <span className="Text-header">Bantuan</span>
          </Nav.Link>

          <Nav.Link href="/about.js">
            <PersonFill className="Icon-header"/>
			      <span className="Text-header">Tentang Saya</span>
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
