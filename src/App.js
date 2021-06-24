import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPages from "./pages/LandingPages";
import About from "./pages/About";
import Help from "./pages/Help";
import News from "./pages/News";
function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPages}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/help" component={Help}></Route>
      <Route path="/news" component={News}></Route>
    </Router>
  );
}


export default App;