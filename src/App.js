import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from './About';
import Help from './Help';
import News from './News';
import LandingPages from './LandingPages';

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "./UNTRON.png";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//lib icon
import { HouseFill } from 'react-bootstrap-icons';
import { InfoSquareFill } from 'react-bootstrap-icons';
import { QuestionSquareFill } from 'react-bootstrap-icons';
import { PersonFill } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={LandingPages} />
              <Route path='/help' component={Help} />
              <Route path='/about' component={About} />
              <Route path='/news' component={News} />
          </Switch>
        </div>
      </Router>
  );
}


export default App;